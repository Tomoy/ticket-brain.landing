import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Users, Zap } from "lucide-react";
import { useEmailSignup } from "@/hooks/useEmailSignup";
import { useLanguage } from "@/contexts/LanguageContext";


const CTA = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const { status, submitEmail, setStatus } = useEmailSignup();
//  const { toast } = useToast();

  /*const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the TicketBrain family!",
        description: "You'll be among the first to experience smarter shopping.",
      });
      setEmail("");
    }
  };*/

/*async function handleEmailSubmit(e: React.FormEvent) {
  e.preventDefault();
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
      setEmail("");
      setStatus("success");
    } else {
      toast({
        title: "Error",
        description: data?.data?.detail || "There was an error submitting the email.",
      });
      setStatus("error");
    }
  } catch (err) {
    toast({
      title: "Network Error",
      description: "Please try again later.",
    });
    setStatus("error");
  }
}*/
async function handleEmailSubmit(e: React.FormEvent) {
  e.preventDefault();
  const ok = await submitEmail(email);
  if (ok) setEmail("");
}

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">{t('cta.stat1.title')}</h3>
              <p className="text-primary-foreground/80">{t('cta.stat1.description')}</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">{t('cta.stat2.title')}</h3>
              <p className="text-primary-foreground/80">{t('cta.stat2.description')}</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">{t('cta.stat3.title')}</h3>
              <p className="text-primary-foreground/80">{t('cta.stat3.description')}</p>
            </div>
          </div>

          {/* Email signup form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elevated max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-primary-foreground mb-6">
              {t('cta.formTitle')}
            </h3>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder={t('cta.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border-white/20 text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button 
                type="submit" 
                variant="accent"
                disabled={status === "loading"}
                className="w-full bg-gradient-accent hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                {status === "loading" ? t('cta.submitButtonLoading') : t('cta.submitButton')}
              </Button>
            </form>
            
            <p className="text-sm text-primary-foreground/70 mt-4">
              {t('cta.privacyNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
