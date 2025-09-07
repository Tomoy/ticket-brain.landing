import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY as string;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID as string;
  const DATACENTER = API_KEY.split("-")[1]; // e.g. us21

  try {
    const mcRes = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "pending", // use "subscribed" to skip double opt-in
        }),
      }
    );

    const data = await mcRes.json();

    if (mcRes.status >= 200 && mcRes.status < 300) {
      return res.status(200).json({ ok: true, data });
    }

    return res.status(mcRes.status).json({ error: true, data });
  } catch (err) {
    console.error("Mailchimp error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
