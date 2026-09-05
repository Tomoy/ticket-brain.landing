import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEmailSignup } from "@/hooks/useEmailSignup";
import { useLanguage } from "@/contexts/LanguageContext";
import { analytics, logEvent } from "../../firebase-config";

const Hero = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const { status, submitEmail } = useEmailSignup();
  //const { toast } = useToast();

  /*const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when TicketBrain is ready for testing.",
      });
      setEmail("");
    }
  };*/
  async function handleHeroEmailSubmit(e: React.FormEvent) {
    e.preventDefault();

    //Firebase event logging
    logEvent(analytics, 'hero_cta_tap', {
      button_name: 'hero',
      page_location: window.location.pathname
    });

    const ok = await submitEmail(email);
    if (ok) setEmail("");
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              <span className="block">
                {t('hero.title.line1')}
              </span>
              <span className="block bg-gradient-accent bg-clip-text text-transparent mt-2 pb-1">
                {t('hero.title.line2')}
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* Email signup */}
            <form onSubmit={handleHeroEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder={t('hero.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/95 border-white/20 text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button 
                type="submit" 
                disabled={status === "loading"}
                variant="accent"
                className="bg-gradient-accent hover:shadow-glow transition-all duration-300"
              >
                {status === "loading" ? t('hero.ctaButtonLoading') : t('hero.ctaButton')}
              </Button>
            </form>
            
            <p className="text-sm text-primary-foreground/70 mt-3">
              {t('hero.ctaSubtext')}
            </p>
          </div>

          {/* Right column - Hero image */}
          <div className="relative max-w-xl mx-auto lg:max-w-lg">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src="/lovable-uploads/d95e06aa-7264-45fc-993b-2ff23055be85.png" 
                alt="Person with glasses scanning a receipt with phone while surrounded by groceries"
                width={1024}
                height={1024}
                fetchpriority="high"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;