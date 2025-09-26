import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {t('faq.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('faq.subtitle')}
              </p>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    {t('faq.q1')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a1')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    {t('faq.q2')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a2')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    {t('faq.q3')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a3')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    {t('faq.q4')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a4')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    {t('faq.q5')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a5')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left">
                    {t('faq.q6')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a6')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left">
                    {t('faq.q7')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a7')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left">
                    {t('faq.q8')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a8')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-left">
                    {t('faq.q9')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a9')}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger className="text-left">
                    {t('faq.q10')}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t('faq.a10')}
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