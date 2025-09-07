import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when TicketBrain is ready for testing.",
      });
      setEmail("");
    }
  };

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
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Smart Insights
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              TicketBrain transforms simple grocery receipts into powerful insights about your spending, 
              nutrition, and environmental impact. Make smarter shopping decisions with every purchase.
            </p>

            {/* Key benefits */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="group flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-gradient-to-r from-accent to-accent-hover rounded-full shadow-glow group-hover:scale-110 transition-transform duration-300" />
                <span className="text-primary-foreground font-medium text-sm">Price Comparisons</span>
              </div>
              <div className="group flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-gradient-to-r from-success to-primary rounded-full shadow-soft group-hover:scale-110 transition-transform duration-300" />
                <span className="text-primary-foreground font-medium text-sm">Spending Analysis</span>
              </div>
              <div className="group flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-soft group-hover:scale-110 transition-transform duration-300" />
                <span className="text-primary-foreground font-medium text-sm">Nutritional Insights</span>
              </div>
              <div className="group flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-soft group-hover:scale-110 transition-transform duration-300" />
                <span className="text-primary-foreground font-medium text-sm">Carbon Footprint</span>
              </div>
            </div>

            {/* Email signup */}
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
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
                variant="accent"
                className="bg-gradient-accent hover:shadow-glow transition-all duration-300"
              >
                Get Early Access
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