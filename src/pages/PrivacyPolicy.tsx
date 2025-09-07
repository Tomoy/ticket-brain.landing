const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-5">
      <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-12 text-center">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-lg opacity-90">How TicketBrain handles your personal information</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Effective Date */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 text-center">
            <p><strong>Effective Date:</strong> January 1, 2025 | <strong>Last Updated:</strong> January 1, 2025</p>
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4 first:mt-0">1. Who We Are</h2>
          <p className="text-muted-foreground mb-4">
            TicketBrain ("we," "our," or "us") is developing an innovative ticketing application. We are based in Barcelona, Spain, and operate in accordance with the General Data Protection Regulation (GDPR) and Spanish data protection laws.
          </p>

          <div className="bg-muted/50 border border-border rounded-lg p-5 my-5">
            <p className="font-semibold text-foreground mb-2">Contact Information:</p>
            <p className="text-muted-foreground">
              Email: <a href="mailto:moyanotomasi@gmail.com" className="text-primary hover:underline">moyanotomasi@gmail.com</a><br/>
              Location: Barcelona, Spain
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            Currently, we only collect your <strong>email address</strong> when you voluntarily provide it through our landing page signup form.
          </p>
          <p className="text-muted-foreground mb-3">
            We also collect basic analytics data through Vercel Analytics, which may include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
            <li>Page views and website interactions</li>
            <li>General location information (country/city level)</li>
            <li>Device and browser information</li>
            <li>Referral sources</li>
          </ul>
          <p className="text-muted-foreground mb-4 italic">
            Note: This analytics data is anonymized and cannot be linked to your email address.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Why We Collect Your Information</h2>
          <p className="text-muted-foreground mb-3">We collect your email address for the sole purpose of:</p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
            <li>Sending you updates about TicketBrain app development</li>
            <li>Notifying you when the app becomes available</li>
            <li>Sharing relevant news about our product launch</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            <strong>Legal Basis:</strong> Your explicit consent (Article 6(1)(a) GDPR). By providing your email, you consent to receiving these communications.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. How We Store and Protect Your Data</h2>
          <p className="text-muted-foreground mb-4">
            Your email address is stored securely using Substack's infrastructure. Substack is a reputable email service provider that complies with GDPR requirements.
          </p>
          <p className="text-muted-foreground mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data Retention</h2>
          <p className="text-muted-foreground mb-3">We will retain your email address until:</p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
            <li>You unsubscribe from our mailing list</li>
            <li>You request deletion of your data</li>
            <li>We cease operations (with 30 days notice)</li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Sharing Your Information</h2>
          <p className="text-muted-foreground mb-3">We do not sell, rent, or share your email address with third parties, except:</p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
            <li><strong>Substack:</strong> Our email service provider, which processes emails on our behalf</li>
            <li><strong>Legal Requirements:</strong> If required by law or to protect our legal rights</li>
          </ul>

          {/* Section 7 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Your Rights Under GDPR</h2>
          <p className="text-muted-foreground mb-3">As an EU resident, you have the following rights:</p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct any inaccurate information</li>
            <li><strong>Erasure:</strong> Request deletion of your data</li>
            <li><strong>Portability:</strong> Receive your data in a portable format</li>
            <li><strong>Withdraw Consent:</strong> Unsubscribe at any time</li>
            <li><strong>Object:</strong> Object to processing of your data</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            To exercise any of these rights, contact us at <a href="mailto:moyanotomasi@gmail.com" className="text-primary hover:underline">moyanotomasi@gmail.com</a>
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Cookies and Tracking</h2>
          <p className="text-muted-foreground mb-4">
            Our website uses minimal tracking through Vercel Analytics for basic website performance metrics. No personal cookies are stored on your device that can identify you personally.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. International Data Transfers</h2>
          <p className="text-muted-foreground mb-4">
            Your data may be processed outside the European Union by our service providers (Substack, Vercel). These companies provide appropriate safeguards and comply with GDPR requirements for international data transfers.
          </p>

          {/* Section 10 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Children's Privacy</h2>
          <p className="text-muted-foreground mb-4">
            We do not knowingly collect personal information from children under 16 years of age. If we become aware that we have collected data from a child under 16, we will delete it immediately.
          </p>

          {/* Section 11 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Changes to This Policy</h2>
          <p className="text-muted-foreground mb-4">
            We may update this Privacy Policy occasionally. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.
          </p>

          {/* Section 12 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Data Protection Authority</h2>
          <p className="text-muted-foreground mb-4">
            If you have concerns about how we handle your data, you can contact the Spanish Data Protection Authority:
          </p>
          <p className="text-muted-foreground mb-4">
            <strong>Agencia Española de Protección de Datos (AEPD)</strong><br/>
            Website: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>
          </p>

          {/* Section 13 */}
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">13. Contact Us</h2>
          <p className="text-muted-foreground mb-4">For any privacy-related questions or to exercise your rights, please contact us:</p>
          <div className="bg-muted/50 border border-border rounded-lg p-5 my-5">
            <p className="text-muted-foreground">
              <strong>Email:</strong> <a href="mailto:moyanotomasi@gmail.com" className="text-primary hover:underline">moyanotomasi@gmail.com</a><br/>
              <strong>Subject Line:</strong> "Privacy Policy Inquiry - TicketBrain"
            </p>
            <p className="text-muted-foreground mt-3">
              We will respond to your inquiry within 30 days as required by GDPR.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-muted/30 border-t border-border px-8 py-6 text-center">
          <p className="text-muted-foreground mb-2">&copy; 2025 TicketBrain. All rights reserved.</p>
          <p className="text-muted-foreground">Based in Barcelona, Spain | Compliant with GDPR</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;