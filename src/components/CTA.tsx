import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Users, Zap } from "lucide-react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the TicketBrain family!",
        description: "You'll be among the first to experience smarter shopping.",
      });
      setEmail("");
    }
  };

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
            Ready to Transform Your Shopping?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Join thousands of conscious consumers who are already making smarter, 
            healthier, and more sustainable shopping decisions with TicketBrain.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Be First</h3>
              <p className="text-primary-foreground/80">Get exclusive early access</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Join Beta</h3>
              <p className="text-primary-foreground/80">Help shape the future</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Save More</h3>
              <p className="text-primary-foreground/80">Start saving immediately</p>
            </div>
          </div>

          {/* Email signup form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elevated max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-primary-foreground mb-6">
              Get Notified When We Launch
            </h3>
            
            <div className="flex justify-center">
              <iframe 
                src="https://tomasmoyano.substack.com/embed" 
                width="480" 
                height="320" 
                style={{border: '1px solid #EEE', background: 'white'}} 
                frameBorder="0" 
                scrolling="no"
                className="rounded-lg shadow-soft"
              />
            </div>
            
            <p className="text-sm text-primary-foreground/70 mt-4">
              No spam, ever. Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;