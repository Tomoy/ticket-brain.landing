import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function useEmailSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { toast } = useToast();

  async function submitEmail(email: string) {
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        toast({
          title: "Welcome to the TicketBrain family!",
          description: "You'll be among the first to experience smarter shopping.",
        });
        setStatus("success");
        return true;
      } else {
        toast({
          title: "Error",
          description: data?.data?.detail || "There was an error submitting the email.",
        });
        setStatus("error");
        return false;
      }
    } catch {
      toast({
        title: "Network Error",
        description: "Please try again later.",
      });
      setStatus("error");
      return false;
    }
  }

  return { status, submitEmail, setStatus };
}