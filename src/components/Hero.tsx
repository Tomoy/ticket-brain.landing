import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import { useEmailSignup } from "@/hooks/useEmailSignup";

const Hero = () => {
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
    const ok = await submitEmail(email);
    if (ok) setEmail("");
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Turn Your Receipts Into
              <span className="block bg-gradient-accent bg-clip-text text-transparent mt-2">
                Smart Insights
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              TicketBrain transforms simple grocery receipts into powerful insights about your spending, 
              nutrition, and environmental impact. Make smarter shopping decisions with every purchase.
            </p>

            {/* Email signup */}
            <form onSubmit={handleHeroEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your email"
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
                {status === "loading" ? "Joining..." : "Get Early Access"}
              </Button>
            </form>
            
            <p className="text-sm text-primary-foreground/70 mt-3">
              Be the first to test TicketBrain when it launches
            </p>
          </div>

          {/* Right column - Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="TicketBrain app interface showing receipt scanning and insights"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full shadow-soft animate-bounce" />
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-success rounded-full shadow-soft animate-pulse" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;