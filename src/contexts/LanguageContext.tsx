import { createContext, useEffect, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Step 1: start with null so nothing renders until we detect the language
  const [language, setLanguage] = useState<Language | null>(null);

  // Step 2: detect domain on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      setLanguage(host.endsWith('ticketbrain.es') ? 'es' : 'en');
    }
  }, []);

  // Step 3: simple translation function
  const t = (key: string): string => {
    if (!language) return key; // fallback while loading
    return translations[language][key] || key;
  };

  // Step 4: avoid rendering children until language is ready
  if (!language) return null;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.howItWorks': 'How It Works',
    'nav.features': 'Features',
    'nav.join': 'Join',

    // Hero
    'hero.title.line1': 'Understand Your Spending',
    'hero.title.line2': 'Save Money with AI',
    'hero.description': 'TicketBrain helps you understand your supermarket spending, categorize it automatically, and save money with AI-powered insights.',
    'hero.emailPlaceholder': 'Enter your email',
    'hero.ctaButton': 'Start Saving Smarter',
    'hero.ctaButtonLoading': 'Joining...',
    'hero.ctaSubtext': 'Be the first to test TicketBrain when it launches',

    // How It Works
    'howItWorks.title': 'How TicketBrain Works',
    'howItWorks.description': 'Turn your grocery receipts into actionable insights in four simple steps:',
    'howItWorks.step1.title': 'Snap a photo in seconds',
    'howItWorks.step1.description': 'Take a photo of your grocery receipt with your phone camera',
    'howItWorks.step2.title': 'Categorize and understand your spending',
    'howItWorks.step2.description': 'Our AI extracts all items, prices, and spending patterns automatically',
    'howItWorks.step3.title': 'See where your money goes and how to save',
    'howItWorks.step3.description': 'Receive personalized recommendations and budgeting tips based on your shopping habits',
    'howItWorks.step4.title': 'Shop smarter and save money',
    'howItWorks.step4.description': 'Use AI-powered insights to adjust your shopping and start saving immediately',

    // Features
    'features.title': 'Why Choose TicketBrain?',
    'features.description': 'Unlock the power of your purchase data with AI-powered insights',
    'features.spending.title': 'Smart Spending Analysis',
    'features.spending.description': 'Track your grocery expenses with intelligent categorization and budgeting insights.',
    'features.spending.benefit1': 'Automatic expense categorization',
    'features.spending.benefit2': 'Monthly budget tracking',
    'features.spending.benefit3': 'Price comparison alerts',
    'features.spending.benefit4': 'Savings recommendations',
    'features.analytics.title': 'Advanced Analytics',
    'features.analytics.description': 'Dive deep into your shopping patterns with comprehensive analytics and trends.',
    'features.analytics.benefit1': 'Shopping pattern analysis',
    'features.analytics.benefit2': 'Trend identification',
    'features.analytics.benefit3': 'Custom reporting',
    'features.analytics.benefit4': 'Data export options',

    // CTA
    'cta.title': 'Ready to Save Smarter?',
    'cta.description': 'Start making smarter, more informed grocery decisions with TicketBrain',
    'cta.stat1.title': 'Be First',
    'cta.stat1.description': 'Get exclusive early access',
    'cta.stat2.title': 'Join Beta',
    'cta.stat2.description': 'Help shape the future of grocery insights',
    'cta.stat3.title': 'Save More',
    'cta.stat3.description': 'Start saving immediately',
    'cta.formTitle': 'Get Notified When We Launch',
    'cta.emailPlaceholder': 'Enter your email address',
    'cta.submitButton': 'Join the Waitlist',
    'cta.submitButtonLoading': 'Joining...',
    'cta.privacyNote': 'No spam, ever. Unsubscribe at any time. We respect your privacy.',

    // Footer
    'footer.description': 'Transforming grocery receipts into smart insights to save money.',
    'footer.privacyPolicy': 'Privacy Policy'
  },

  es: {
    // Header
    'nav.howItWorks': 'Cómo Funciona',
    'nav.features': 'Funciones',
    'nav.join': 'Únete',

    // Hero
    'hero.title.line1': 'Comprende tus Gastos',
    'hero.title.line2': 'Optimiza tus Compras con IA',
    'hero.description': 'TicketBrain te ayuda a comprender tus compras en el supermercado, categorizarlas automáticamente y ahorrar dinero con insights impulsados por IA.',
    'hero.emailPlaceholder': 'Introduce tu correo electrónico',
    'hero.ctaButton': 'Acceso Anticipado — Empieza a Ahorrar',
    'hero.ctaButtonLoading': 'Uniéndose...',
    'hero.ctaSubtext': 'Sé el primero en probar TicketBrain cuando se lance',

    // How It Works
    'howItWorks.title': 'Cómo Funciona TicketBrain',
    'howItWorks.description': 'Convierte tus tickets de supermercado en insights útiles en cuatro pasos sencillos:',
    'howItWorks.step1.title': 'Fotografía tu ticket en segundos',
    'howItWorks.step1.description': 'Toma una foto de tu ticket de supermercado con tu móvil',
    'howItWorks.step2.title': 'Categorización y análisis de gastos',
    'howItWorks.step2.description': 'Nuestra IA extrae automáticamente los productos, precios y patrones de gasto',
    'howItWorks.step3.title': 'Descubre dónde va tu dinero y cómo ahorrar',
    'howItWorks.step3.description': 'Recibe recomendaciones personalizadas y consejos de presupuesto según tus hábitos de compra',
    'howItWorks.step4.title': 'Compra más inteligentemente y ahorra',
    'howItWorks.step4.description': 'Usa los insights de la IA para ajustar tus compras y empezar a ahorrar de inmediato',

    // Features
    'features.title': 'Por Qué Elegir TicketBrain',
    'features.description': 'Aprovecha al máximo tus datos de compra con insights impulsados por IA',
    'features.spending.title': 'Análisis Inteligente de Gastos',
    'features.spending.description': 'Controla tus gastos de supermercado con categorización inteligente y recomendaciones de presupuesto.',
    'features.spending.benefit1': 'Categorización automática de gastos',
    'features.spending.benefit2': 'Seguimiento mensual del presupuesto',
    'features.spending.benefit3': 'Alertas de comparación de precios',
    'features.spending.benefit4': 'Recomendaciones de ahorro',
    'features.analytics.title': 'Análisis Avanzado',
    'features.analytics.description': 'Analiza tus patrones de compra con información detallada y tendencias.',
    'features.analytics.benefit1': 'Análisis de patrones de compra',
    'features.analytics.benefit2': 'Identificación de tendencias',
    'features.analytics.benefit3': 'Informes personalizados',
    'features.analytics.benefit4': 'Opciones de exportación de datos',

    // CTA
    'cta.title': '¿Listo para Ahorrar Mejor?',
    'cta.description': 'Da el primer paso para comprar de manera más inteligente con TicketBrain.',
    'cta.stat1.title': 'Sé el Primero',
    'cta.stat1.description': 'Obtén acceso exclusivo anticipado',
    'cta.stat2.title': 'Únete a la Beta',
    'cta.stat2.description': 'Ayuda a dar forma al futuro de los insights de compra',
    'cta.stat3.title': 'Ahorra Más',
    'cta.stat3.description': 'Empieza a ahorrar de inmediato',
    'cta.formTitle': 'Recibe Notificaciones Cuando Lancemos',
    'cta.emailPlaceholder': 'Introduce tu correo electrónico',
    'cta.submitButton': 'Únete a la Lista de Espera',
    'cta.submitButtonLoading': 'Uniéndose...',
    'cta.privacyNote': 'Sin spam, nunca. Puedes darte de baja en cualquier momento. Respetamos tu privacidad.',

    // Footer
    'footer.description': 'Transformando tus tickets de supermercado en insights inteligentes para ahorrar dinero.',
    'footer.privacyPolicy': 'Política de Privacidad'
  }
};