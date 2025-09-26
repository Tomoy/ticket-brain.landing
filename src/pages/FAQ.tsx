import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const { t } = useLanguage();

    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can TicketBrain help me understand why my grocery bill is so high?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. By scanning your receipts, the app highlights which items or categories are driving up your bill. You'll see whether it's inflation, specific products, or shopping habits."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if I'm spending too much on groceries for my household?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Everyone's budget is different, but the app analyzes your spending patterns alongside your household size and shopping frequency. This gives you context to see if your costs are in line or need adjusting."
      }
    },
    {
      "@type": "Question",
      "name": "Where does all my grocery money actually go?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every scanned receipt is broken down into clear categories like snacks, produce, or pantry staples. That way you can instantly see which areas take the biggest share of your budget."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best grocery budget app for tracking expenses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are many general budgeting apps, but TicketBrain is specialised in grocery budgeting. It's also more convenient because instead of entering items manually, you simply scan your supermarket receipts and the app instantly analyses and categorises your expenses."
      }
    },
    {
      "@type": "Question",
      "name": "Can a grocery spending tracker app show me how my costs change over time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You'll get simple comparisons like 'this week vs. last week' or 'this month vs. last month,' so you can spot trends and track if your spending is going up or down."
      }
    },
    {
      "@type": "Question",
      "name": "How do I track my monthly grocery budget and spending?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With TicketBrain, you set a monthly grocery budget during onboarding, and the app tracks your progress with a simple bar showing how much you've spent and how much is left."
      }
    },
    {
      "@type": "Question",
      "name": "Does TicketBrain work with receipts from different grocery stores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The app is designed to work with common grocery store receipts and automatically extracts items, prices, and totals. If anything looks off, you can quickly correct it and the app learns from your adjustments."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free app to analyse grocery receipts and spending?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. With TicketBrain, you can scan your supermarket receipts for free and get instant insights. The app automatically breaks your spending into categories (like produce, snacks, or beverages), so you understand exactly where your money goes without typing anything in."
      }
    },
    {
      "@type": "Question",
      "name": "Is this a grocery receipt scanner app or meal planning tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For now, the focus is on helping you understand where your grocery money goes and how to stay on budget. Other features like meal planning or store price comparisons aren't part of the current version."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this grocery budget app on my phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. TicketBrain is a native mobile app available for both Android and iOS, so you can track your spending right from your pocket."
      }
    },
    {
      "@type": "Question",
      "name": "How do I scan grocery receipts with my phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's simple: download the app, take a photo of your receipt with your phone, and the app automatically extracts the information, splits it into categories, and shows you the breakdown."
      }
    },
    {
      "@type": "Question",
      "name": "How can I stop overspending on groceries and avoid impulse supermarket purchases?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By reviewing your categorised spending after each shop, you'll see exactly which 'extra' purchases are adding up. Many users find that simply becoming aware of these patterns helps reduce unnecessary buys."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I spend on groceries per month?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your household size, eating habits, and location. Apps like TicketBrain that track your receipts can help you monitor your grocery budget, compare your spending against your own goals, and see if you're in line with typical households."
      }
    }
  ]
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background">
      
      <Helmet>
        <title>{t("faq.title")}</title>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
     
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