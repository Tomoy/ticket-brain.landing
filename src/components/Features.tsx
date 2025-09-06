import { DollarSign, TrendingUp, Heart, Leaf } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Smart Price Comparisons",
      description: "Find the best deals across different supermarkets. Know which store offers the cheapest basket and optimize your shopping route for maximum savings.",
      gradient: "from-primary to-primary-hover",
      benefits: ["Cross-store price analysis", "Best deal recommendations", "Route optimization"]
    },
    {
      icon: TrendingUp,
      title: "Spending Insights",
      description: "Get clear, digestible reports on your weekly and monthly spending. Track categories, identify trends, and budget more effectively.",
      gradient: "from-accent to-accent-hover",
      benefits: ["Category breakdown", "Spending trends", "Budget tracking"]
    },
    {
      icon: Heart,
      title: "Nutritional Intelligence",
      description: "Go beyond prices and understand the health impact of your groceries. Get Nutri-Score ratings and detailed nutritional information.",
      gradient: "from-success to-primary",
      benefits: ["Nutri-Score ratings", "Health impact analysis", "Nutritional breakdowns"]
    },
    {
      icon: Leaf,
      title: "Environmental Impact",
      description: "Learn about the carbon footprint of your shopping cart. Make more sustainable choices and contribute to a greener planet.",
      gradient: "from-primary to-success",
      benefits: ["Carbon footprint tracking", "Sustainable alternatives", "Environmental insights"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Powerful Features for Conscious Shopping
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TicketBrain transforms your grocery receipts into actionable insights across four key areas: 
            finances, health, environment, and shopping optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 h-full">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className="text-white" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Benefits list */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-success rounded-full mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;