import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";
import { BarChart3, PieChart, Leaf, ShoppingCart } from "lucide-react";

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

  const benefits = [
    {
      icon: BarChart3,
      title: "Price Comparisons",
      description: "Find best deals across stores",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: PieChart,
      title: "Spending Analysis",
      description: "Track your grocery budget",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: ShoppingCart,
      title: "Nutritional Insights",
      description: "Understand your food choices",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: Leaf,
      title: "Carbon Footprint",
      description: "Make sustainable decisions",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <section className="relative">
      <HeroGeometric
        badge="TicketBrain"
        title1="Turn Your Receipts Into"
        title2="Smart Insights"
      />
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-20 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Transform grocery receipts into powerful insights about spending, nutrition, and environmental impact. Make smarter shopping decisions with every purchase.
            </motion.p>

            {/* Key benefits with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                  className={`
                    relative group p-4 rounded-2xl border border-white/10 
                    bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm
                    hover:border-white/20 hover:bg-white/[0.02] 
                    transition-all duration-300 hover:scale-105
                  `}
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className={`
                      p-2 rounded-xl bg-white/5 group-hover:bg-white/10 
                      transition-colors duration-300
                    `}>
                      <benefit.icon className={`w-5 h-5 ${benefit.iconColor}`} />
                    </div>
                    <h3 className="text-white font-medium text-sm">
                      {benefit.title}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Email signup */}
            <motion.form
              onSubmit={handleEmailSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:bg-white/15"
                required
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Early Access
              </Button>
            </motion.form>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="text-sm text-white/50 mt-4"
            >
              Be the first to test TicketBrain when it launches
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;