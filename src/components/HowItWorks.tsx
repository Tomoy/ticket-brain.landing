import { Scan, BarChart3, Target, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Scan,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      color: "text-accent"
    },
    {
      icon: Target,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      color: "text-success"
    },
    {
      icon: Leaf,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description'),
      color: "text-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorks.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`${step.color} mb-6`}>
                  <step.icon size={48} strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;