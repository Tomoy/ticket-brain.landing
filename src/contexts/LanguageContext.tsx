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

// ✅ Detect initial language from <html lang="...">
const getInitialLanguage = (): Language => {
  if (typeof document !== "undefined") {
    const langAttr = document.documentElement.lang;
    if (langAttr === "es") return "es";
  }
  return "en"; // fallback
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const t = (key: string): string =>
    translations[language][key] || key;

/*export const LanguageProvider = ({ children }: LanguageProviderProps) => {
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
  if (!language) return null;*/

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
    'hero.title.line1': 'Finally Understand Your',
    'hero.title.line2': 'Grocery Spending',
    'hero.description': 'Stop wondering where your money goes. Scan your receipts to discover which purchases are breaking your budget and get actionable insights to take control.',
    'hero.emailPlaceholder': 'Enter your email',
    'hero.ctaButton': 'Get Early Access',
    'hero.ctaButtonLoading': 'Joining...',
    'hero.ctaSubtext': 'Be the first to turn your receipts into savings',

    // How It Works
    'howItWorks.title': 'How TicketBrain Works',
    'howItWorks.description': 'Transform your grocery receipts into clear insights in four simple steps:',
    'howItWorks.step1.title': 'Scan your receipt in seconds',
    'howItWorks.step1.description': 'Simply take a photo of any grocery receipt with your phone using our receipt scanning app.',
    'howItWorks.step2.title': 'See exactly where your money goes',
    'howItWorks.step2.description': 'AI automatically categorizes every purchase and identifies your spending patterns',
    'howItWorks.step3.title': 'Discover your budget drivers',
    'howItWorks.step3.description': 'Find out which categories are costing you the most and why your budget keeps growing',
    'howItWorks.step4.title': 'Get personalized actions to help you save money',
    'howItWorks.step4.description': 'Receive specific recommendations based on your actual shopping patterns, not generic advice',

    // Features
    'features.title': 'Why Choose TicketBrain?',
    'features.description': 'Get the insights you need to regain control of your grocery spending',
    'features.spending.title': 'Smart Pattern Recognition',
    'features.spending.description': 'Understand your real spending habits with AI-powered analysis of your actual purchases.',
    'features.spending.benefit1': 'Automatic categorization of all items',
    'features.spending.benefit2': 'Identify your biggest budget drivers',
    'features.spending.benefit3': 'Track spending changes over time',
    'features.spending.benefit4': 'Spot impulse purchase patterns',
    'features.analytics.title': 'Actionable Insights',
    'features.analytics.description': 'Get specific guidance based on your shopping patterns, not one-size-fits-all advice.',
    'features.analytics.benefit1': 'Budget pace tracking and alerts',
    'features.analytics.benefit2': 'Category spending comparisons',
    'features.analytics.benefit3': 'Historical context for price changes',
    'features.analytics.benefit4': 'Personalized savings opportunities',

    // CTA
    'cta.title': 'Ready to Take Control?',
    'cta.description': 'Stop guessing why your grocery budget keeps growing. Start understanding your spending patterns.',
    'cta.stat1.title': 'Real Insights',
    'cta.stat1.description': 'Based on your actual receipts',
    'cta.stat2.title': 'Early Access',
    'cta.stat2.description': 'Be among the first to try it',
    'cta.stat3.title': 'Take Control',
    'cta.stat3.description': 'Finally understand your spending',
    'cta.formTitle': 'Get Notified When We Launch',
    'cta.emailPlaceholder': 'Enter your email address',
    'cta.submitButton': 'Join the Waitlist',
    'cta.submitButtonLoading': 'Joining...',
    'cta.privacyNote': 'No spam, ever. Unsubscribe at any time. We respect your privacy.',

    // Footer
    'footer.description': 'Turn your grocery receipts into clear insights that actually help you save money.',
    'footer.privacyPolicy': 'Privacy Policy',

    // Blog
    'blog.title': 'TicketBrain Blog',
    'blog.description': 'Insights on smart grocery shopping, AI-powered receipt analysis, and practical money-saving tips.',
    'blog.readMore': 'Read more',
    'blog.noPosts': 'No blog posts available yet. Check back soon!',
    'blog.backToBlog': 'Back to Blog',
    'blog.moreArticles': 'More Articles',
    'blog.published': 'Published',

      // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: September 2025',
    'privacy.whoWeAre.title': 'Who We Are',
    'privacy.whoWeAre.content': 'TicketBrain is a grocery receipt analysis service that helps users gain insights into their spending and shopping habits.',
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
    "nav.howItWorks": "Cómo Funciona",
    "nav.features": "Características",
    "nav.join": "Únete",

    // Hero
    "hero.title.line1": "Por fin entiende tus",
    "hero.title.line2": "gastos en el súper",
    "hero.description": "Deja de preguntarte a dónde va tu dinero. Escanea tus tickets y descubre qué compras están rompiendo tu presupuesto. Obtén ideas prácticas para tomar el control.",
    "hero.emailPlaceholder": "Escribe tu email",
    "hero.ctaButton": "Accede Antes que Nadie",
    "hero.ctaButtonLoading": "Uniéndote...",
    "hero.ctaSubtext": "Sé de los primeros en convertir tus tickets en ahorros",

    // How It Works
    "howItWorks.title": "Cómo Funciona TicketBrain",
    "howItWorks.description": "Convierte tus tickets de compra en información clara en 4 pasos sencillos:",
    "howItWorks.step1.title": "Escanea tu ticket en segundos",
    "howItWorks.step1.description": "Solo necesitas hacer una foto de cualquier ticket del súper con tu móvil",
    "howItWorks.step2.title": "Mira exactamente dónde va tu dinero",
    "howItWorks.step2.description": "La IA categoriza automáticamente cada compra e identifica tus patrones de gasto",
    "howItWorks.step3.title": "Descubre qué dispara tu presupuesto",
    "howItWorks.step3.description": "Averigua qué categorías te cuestan más y por qué tu gasto sigue aumentando",
    "howItWorks.step4.title": "Recibe acciones personalizadas para ahorrar",
    "howItWorks.step4.description": "Obtén recomendaciones específicas según tu manera real de comprar, no consejos genéricos",

    // Features
    "features.title": "¿Por Qué Elegir TicketBrain?",
    "features.description": "La claridad que necesitas para volver a tener control sobre tu gasto en el súper",
    "features.spending.title": "Reconocimiento Inteligente de Patrones",
    "features.spending.description": "Entiende de verdad tus hábitos de compra gracias al análisis con IA de tus tickets reales.",
    "features.spending.benefit1": "Categorización automática de todos los productos",
    "features.spending.benefit2": "Identifica qué más impacta tu presupuesto",
    "features.spending.benefit3": "Haz seguimiento de la evolución de tu gasto",
    "features.spending.benefit4": "Detecta patrones de compras impulsivas",
    "features.analytics.title": "Ideas Accionables",
    "features.analytics.description": "Recibe orientación específica basada en tus compras, no consejos genéricos.",
    "features.analytics.benefit1": "Alertas y seguimiento de tu ritmo de gasto",
    "features.analytics.benefit2": "Comparaciones entre categorías",
    "features.analytics.benefit3": "Contexto histórico sobre cambios de precios",
    "features.analytics.benefit4": "Oportunidades de ahorro personalizadas",

    // CTA
    "cta.title": "¿Listo para Tomar el Control?",
    "cta.description": "Deja de adivinar por qué tu presupuesto sube cada mes. Empieza a entender tus patrones de gasto.",
    "cta.stat1.title": "Ideas Reales",
    "cta.stat1.description": "Basadas en tus tickets reales",
    "cta.stat2.title": "Acceso Anticipado",
    "cta.stat2.description": "Sé de los primeros en probarlo",
    "cta.stat3.title": "Toma el Control",
    "cta.stat3.description": "Entiende de verdad tus gastos",
    "cta.formTitle": "Avísame Cuando Lancen",
    "cta.emailPlaceholder": "Introduce tu email",
    "cta.submitButton": "Unirme a la Lista de Espera",
    "cta.submitButtonLoading": "Uniéndote...",
    "cta.privacyNote": "Sin spam, nunca. Podrás darte de baja en cualquier momento. Respetamos tu privacidad.",

    // Footer
    "footer.description": "Convierte tus tickets de compra en información clara que de verdad te ayude a ahorrar.",
    "footer.privacyPolicy": "Política de Privacidad",

    // Blog
    'blog.title': 'Blog de TicketBrain',
    'blog.description': 'Insights sobre compras inteligentes, análisis de tickets con IA y consejos prácticos para ahorrar dinero.',
    'blog.readMore': 'Leer más',
    'blog.noPosts': '¡Aún no hay artículos disponibles. Vuelve pronto!',
    'blog.backToBlog': 'Volver al Blog',
    'blog.moreArticles': 'Más Artículos',
    'blog.published': 'Publicado',

    // Política de Privacidad
    'privacy.title': 'Política de Privacidad',
    'privacy.lastUpdated': 'Última actualización: Septiembre 2025',

    'privacy.whoWeAre.title': 'Quiénes Somos',
    'privacy.whoWeAre.content': 'TicketBrain es un servicio de análisis de tickets de compra que ayuda a los usuarios a comprender mejor sus gastos y hábitos de consumo.',

    'privacy.infoCollect.title': 'Información que Recopilamos',
    'privacy.infoCollect.receipt': '• Imágenes de tickets y los datos extraídos de ellas',
    'privacy.infoCollect.email': '• Direcciones de correo electrónico para nuestra lista de espera',
    'privacy.infoCollect.usage': '• Datos de uso y rendimiento de la aplicación',

    'privacy.howStore.title': 'Cómo Almacenamos y Protegemos tus Datos',
    'privacy.howStore.content': 'Tus datos se almacenan de forma segura utilizando encriptación con estándares de la industria. Las imágenes de tickets se procesan y se eliminan en un plazo máximo de 30 días. Nunca vendemos tu información personal a terceros.',

    'privacy.gdprRights.title': 'Tus Derechos según el RGPD',
    'privacy.gdprRights.access': '• Derecho a acceder a tus datos personales',
    'privacy.gdprRights.rectification': '• Derecho a rectificar datos inexactos',
    'privacy.gdprRights.erasure': '• Derecho a la supresión (derecho al olvido)',
    'privacy.gdprRights.portability': '• Derecho a la portabilidad de los datos',
    'privacy.gdprRights.objection': '• Derecho a oponerte al tratamiento',

    'privacy.contact.title': 'Contáctanos',
    'privacy.contact.content': 'Si tienes alguna pregunta sobre esta Política de Privacidad o deseas ejercer tus derechos, puedes ponerte en contacto con nosotros en:',
    'privacy.contact.email': 'Correo electrónico: hello@ticketbrain.app',
    'privacy.contact.address': 'Dirección: Madrid, España',
    'privacy.contact.authority': 'Si consideras que no hemos resuelto adecuadamente tu solicitud, puedes contactar con la Agencia Española de Protección de Datos (AEPD) en www.aepd.es'
  }
};