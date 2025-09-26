import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {t('faq.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('faq.subtitle')}
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl border border-border/50 p-8 shadow-elevated backdrop-blur-sm">
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="item-1" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q1')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q2')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q3')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q4')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a4')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q5')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a5')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q6')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a6')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q7')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a7')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q8')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a8')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q9')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a9')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q10')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a10')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q11')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a11')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q12')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a12')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13" className="bg-background/60 rounded-lg px-4 border border-border/30">
                  <AccordionTrigger className="text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {t('faq.q13')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {t('faq.a13')}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;