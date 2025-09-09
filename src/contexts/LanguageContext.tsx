import { createContext, useContext, useState, ReactNode } from 'react';

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
  const getDefaultLanguage = (): Language => {
    if (typeof window !== 'undefined' && window.location.hostname === 'ticketbrain.es') {
      return 'es';
    }
    return 'en';
  };
  
  const [language, setLanguage] = useState<Language>(getDefaultLanguage());

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

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
    'hero.title.line1': 'Turn Your Receipts Into',
    'hero.title.line2': 'Smart Insights',
    'hero.description': 'TicketBrain transforms simple grocery receipts into powerful insights about your spending, nutrition, and environmental impact. Make smarter shopping decisions with every purchase.',
    'hero.emailPlaceholder': 'Enter your email',
    'hero.ctaButton': 'Get Early Access',
    'hero.ctaButtonLoading': 'Joining...',
    'hero.ctaSubtext': 'Be the first to test TicketBrain when it launches',

    // How It Works
    'howItWorks.title': 'How TicketBrain Works',
    'howItWorks.description': 'Transform your grocery shopping experience in four simple steps',
    'howItWorks.step1.title': 'Scan Receipt',
    'howItWorks.step1.description': 'Simply take a photo of your grocery receipt with your phone camera',
    'howItWorks.step2.title': 'AI Analysis',
    'howItWorks.step2.description': 'Our AI extracts and categorizes all items, prices, and nutritional data',
    'howItWorks.step3.title': 'Get Insights',
    'howItWorks.step3.description': 'Receive personalized insights about spending, nutrition, and sustainability',
    'howItWorks.step4.title': 'Make Decisions',
    'howItWorks.step4.description': 'Use data-driven recommendations to shop smarter next time',

    // Features
    'features.title': 'Why Choose TicketBrain?',
    'features.description': 'Unlock the power of your purchase data with cutting-edge AI technology',
    'features.spending.title': 'Smart Spending Analysis',
    'features.spending.description': 'Track your grocery expenses with intelligent categorization and budgeting insights.',
    'features.spending.benefit1': 'Automatic expense categorization',
    'features.spending.benefit2': 'Monthly budget tracking',
    'features.spending.benefit3': 'Price comparison alerts',
    'features.spending.benefit4': 'Savings recommendations',
    'features.nutrition.title': 'Nutrition Intelligence',
    'features.nutrition.description': 'Get comprehensive nutritional analysis of your purchases to make healthier choices.',
    'features.nutrition.benefit1': 'Complete nutritional breakdown',
    'features.nutrition.benefit2': 'Health goal tracking',
    'features.nutrition.benefit3': 'Ingredient analysis',
    'features.nutrition.benefit4': 'Dietary recommendations',
    'features.sustainability.title': 'Sustainability Insights',
    'features.sustainability.description': 'Understand the environmental impact of your shopping habits and make eco-friendly choices.',
    'features.sustainability.benefit1': 'Carbon footprint tracking',
    'features.sustainability.benefit2': 'Sustainable alternatives',
    'features.sustainability.benefit3': 'Local sourcing info',
    'features.sustainability.benefit4': 'Packaging impact analysis',
    'features.analytics.title': 'Advanced Analytics',
    'features.analytics.description': 'Dive deep into your shopping patterns with comprehensive analytics and trends.',
    'features.analytics.benefit1': 'Shopping pattern analysis',
    'features.analytics.benefit2': 'Trend identification',
    'features.analytics.benefit3': 'Custom reporting',
    'features.analytics.benefit4': 'Data export options',

    // CTA
    'cta.title': 'Ready to Transform Your Shopping?',
    'cta.description': 'Join thousands of conscious consumers who are already making smarter, healthier, and more sustainable shopping decisions with TicketBrain.',
    'cta.stat1.title': 'Be First',
    'cta.stat1.description': 'Get exclusive early access',
    'cta.stat2.title': 'Join Beta',
    'cta.stat2.description': 'Help shape the future',
    'cta.stat3.title': 'Save More',
    'cta.stat3.description': 'Start saving immediately',
    'cta.formTitle': 'Get Notified When We Launch',
    'cta.emailPlaceholder': 'Enter your email address',
    'cta.submitButton': 'Join the Waitlist',
    'cta.submitButtonLoading': 'Joining...',
    'cta.privacyNote': 'No spam, ever. Unsubscribe at any time. We respect your privacy.',

    // Footer
    'footer.description': 'Transforming grocery receipts into smart insights for conscious consumers.',
    'footer.privacyPolicy': 'Privacy Policy',

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: January 2025',
    'privacy.whoWeAre.title': 'Who We Are',
    'privacy.whoWeAre.content': 'TicketBrain is a grocery receipt analysis service that helps users gain insights into their shopping habits, nutrition, and environmental impact.',
    'privacy.infoCollect.title': 'Information We Collect',
    'privacy.infoCollect.receipt': '• Receipt images and data extracted from them',
    'privacy.infoCollect.email': '• Email addresses for our waitlist',
    'privacy.infoCollect.usage': '• Usage analytics and app performance data',
    'privacy.howStore.title': 'How We Store and Protect Your Data',
    'privacy.howStore.content': 'Your data is stored securely using industry-standard encryption. Receipt images are processed and then deleted within 30 days. We never sell your personal information to third parties.',
    'privacy.gdprRights.title': 'Your Rights Under GDPR',
    'privacy.gdprRights.access': '• Right to access your personal data',
    'privacy.gdprRights.rectification': '• Right to rectification of inaccurate data',
    'privacy.gdprRights.erasure': '• Right to erasure (right to be forgotten)',
    'privacy.gdprRights.portability': '• Right to data portability',
    'privacy.gdprRights.objection': '• Right to object to processing',
    'privacy.contact.title': 'Contact Us',
    'privacy.contact.content': 'If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:',
    'privacy.contact.email': 'Email: hello@ticketbrain.app',
    'privacy.contact.address': 'Address: Madrid, Spain',
    'privacy.contact.authority': 'If you believe we have not addressed your concerns adequately, you may contact the Spanish Data Protection Authority (AEPD) at www.aepd.es'
  },
  es: {
    // Header
    'nav.howItWorks': 'Cómo Funciona',
    'nav.features': 'Características',
    'nav.join': 'Únete',

    // Hero
    'hero.title.line1': 'Convierte Tus Tickets en',
    'hero.title.line2': 'Información Inteligente',
    'hero.description': 'TicketBrain convierte tus tickets de compra en valiosa información sobre tus gastos, nutrición e impacto ambiental. Toma decisiones más inteligentes con cada compra.',
    'hero.emailPlaceholder': 'Ingresa tu email',
    'hero.ctaButton': 'Consigue Acceso Anticipado',
    'hero.ctaButtonLoading': 'Accediendo...',
    'hero.ctaSubtext': 'Sé el primero en probar TicketBrain',

    // How It Works
    'howItWorks.title': 'Cómo Funciona TicketBrain',
    'howItWorks.description': 'Transforma tu experiencia de compras en cuatro simples pasos',
    'howItWorks.step1.title': 'Escanea Ticket',
    'howItWorks.step1.description': 'Simplemente toma una foto de tu ticket de compra con la cámara de tu teléfono',
    'howItWorks.step2.title': 'Análisis IA',
    'howItWorks.step2.description': 'Nuestra IA extrae y categoriza todos los productos, precios y datos nutricionales',
    'howItWorks.step3.title': 'Obtén Información',
    'howItWorks.step3.description': 'Recibe información personalizada sobre gastos, nutrición y sostenibilidad',
    'howItWorks.step4.title': 'Toma Decisiones',
    'howItWorks.step4.description': 'Usa recomendaciones basadas en datos para comprar más inteligentemente',

    // Features
    'features.title': '¿Por Qué Elegir TicketBrain?',
    'features.description': 'Desbloquea el poder de tus datos de compra con tecnología IA de vanguardia',
    'features.spending.title': 'Control Inteligente de Gastos',
    'features.spending.description': 'Con el poder de la IA, tus compras se clasifican al instante, dándote un panorama total de dónde va tu dinero.',
    'features.spending.benefit1': 'Categorización automática de gastos',
    'features.spending.benefit2': 'Seguimiento de presupuesto mensual',
    'features.spending.benefit3': 'Alertas de comparación de precios',
    'features.spending.benefit4': 'Recomendaciones de ahorro',
    'features.nutrition.title': 'Inteligencia Nutricional',
    'features.nutrition.description': 'Obtén análisis nutricional completo de tus compras para hacer elecciones más saludables.',
    'features.nutrition.benefit1': 'Desglose nutricional completo',
    'features.nutrition.benefit2': 'Seguimiento de objetivos de salud',
    'features.nutrition.benefit3': 'Análisis de ingredientes',
    'features.nutrition.benefit4': 'Recomendaciones dietéticas',
    'features.sustainability.title': 'Información sobre Sostenibilidad',
    'features.sustainability.description': 'Comprende el impacto ambiental de tus hábitos de compra y haz elecciones eco-amigables.',
    'features.sustainability.benefit1': 'Seguimiento de huella de carbono',
    'features.sustainability.benefit2': 'Alternativas sostenibles',
    'features.sustainability.benefit3': 'Información de origen local',
    'features.sustainability.benefit4': 'Análisis de impacto del empaque',
    'features.analytics.title': 'Análisis Avanzados de tus compras',
    'features.analytics.description': 'Sumérgete en tus patrones de compra con análisis completos y tendencias.',
    'features.analytics.benefit1': 'Análisis de patrones de compra',
    'features.analytics.benefit2': 'Identificación de tendencias',
    'features.analytics.benefit3': 'Reportes personalizados',
    'features.analytics.benefit4': 'Opciones de exportación de datos',

    // CTA
    'cta.title': '¿Listo para Transformar tus Compras?',
    'cta.description': 'Únete a miles de consumidores conscientes que ya están tomando decisiones de compra más inteligentes, saludables y sostenibles con TicketBrain.',
    'cta.stat1.title': 'Sé Primero',
    'cta.stat1.description': 'Obtén acceso exclusivo anticipado',
    'cta.stat2.title': 'Únete al Beta',
    'cta.stat2.description': 'Ayuda a moldear el futuro',
    'cta.stat3.title': 'Ahorra Más',
    'cta.stat3.description': 'Comienza a ahorrar inmediatamente',
    'cta.formTitle': 'Recibe Notificaciones del Lanzamiento',
    'cta.emailPlaceholder': 'Ingresa tu dirección de email',
    'cta.submitButton': 'Únete a la Lista de Espera',
    'cta.submitButtonLoading': 'Accediendo...',
    'cta.privacyNote': 'Sin spam, nunca. Cancela tu suscripción en cualquier momento. Respetamos tu privacidad.',

    // Footer
    'footer.description': 'Transformando tickets de compra en información inteligente para consumidores conscientes.',
    'footer.privacyPolicy': 'Política de Privacidad',

    // Privacy Policy
    'privacy.title': 'Política de Privacidad',
    'privacy.lastUpdated': 'Última actualización: Enero 2025',
    'privacy.whoWeAre.title': 'Quiénes Somos',
    'privacy.whoWeAre.content': 'TicketBrain es un servicio de análisis de tickets de compra que ayuda a los usuarios a obtener insights sobre sus hábitos de compra, nutrición e impacto ambiental.',
    'privacy.infoCollect.title': 'Información que Recopilamos',
    'privacy.infoCollect.receipt': '• Imágenes de tickets y datos extraídos de ellos',
    'privacy.infoCollect.email': '• Direcciones de email para nuestra lista de espera',
    'privacy.infoCollect.usage': '• Análisis de uso y datos de rendimiento de la app',
    'privacy.howStore.title': 'Cómo Almacenamos y Protegemos tus Datos',
    'privacy.howStore.content': 'Tus datos se almacenan de forma segura usando encriptación estándar de la industria. Las imágenes de tickets se procesan y luego se eliminan en 30 días. Nunca vendemos tu información personal a terceros.',
    'privacy.gdprRights.title': 'Tus Derechos Bajo GDPR',
    'privacy.gdprRights.access': '• Derecho a acceder a tus datos personales',
    'privacy.gdprRights.rectification': '• Derecho a rectificación de datos inexactos',
    'privacy.gdprRights.erasure': '• Derecho al olvido (derecho a ser olvidado)',
    'privacy.gdprRights.portability': '• Derecho a la portabilidad de datos',
    'privacy.gdprRights.objection': '• Derecho a oponerse al procesamiento',
    'privacy.contact.title': 'Contáctanos',
    'privacy.contact.content': 'Si tienes alguna pregunta sobre esta Política de Privacidad o deseas ejercer tus derechos, por favor contáctanos en:',
    'privacy.contact.email': 'Email: hello@ticketbrain.app',
    'privacy.contact.address': 'Dirección: Madrid, España',
    'privacy.contact.authority': 'Si crees que no hemos atendido tus preocupaciones adecuadamente, puedes contactar a la Autoridad Española de Protección de Datos (AEPD) en www.aepd.es'
  }
};