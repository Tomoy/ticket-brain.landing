import { DollarSign, TrendingUp, Heart, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: DollarSign,
      title: t('features.spending.title'),
      description: t('features.spending.description'),
      gradient: "from-primary to-primary-hover",
      benefits: [
        t('features.spending.benefit1'),
        t('features.spending.benefit2'),
        t('features.spending.benefit3'),
        t('features.spending.benefit4')
      ]
    },
    {
      icon: TrendingUp,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      gradient: "from-accent to-accent-hover",
      benefits: [
        t('features.analytics.benefit1'),
        t('features.analytics.benefit2'),
        t('features.analytics.benefit3'),
        t('features.analytics.benefit4')
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('features.description')}
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