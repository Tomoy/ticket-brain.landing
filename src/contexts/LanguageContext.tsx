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

const detectLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  return window.location.hostname.endsWith('ticketbrain.es') ? 'es' : 'en';
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Detected synchronously from the domain: the very first render already has
  // the right language, so there is no blank frame and crawlers that snapshot
  // early still get real content.
  const [language, setLanguage] = useState<Language>(detectLanguage);

  // Keep <html lang> in sync with whatever language is active
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => translations[language][key] || key;

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
    'hero.description': 'Stop wondering where your money goes. Scan your receipts using our mobile app to discover which purchases are breaking your budget and get actionable insights to take control.',
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
    'blog.related': 'Keep reading',
    'blog.readMore': 'Read more',
    'blog.noPosts': 'No blog posts available yet. Check back soon!',
    'blog.backToBlog': 'Back to Blog',
    'blog.moreArticles': 'More Articles',
    'blog.published': 'Published',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about TicketBrain',
    'faq.q1': 'Can TicketBrain help me understand why my grocery bill is so high?',
    'faq.a1': 'Yes. By scanning your receipts, the app highlights which items or categories are driving up your bill. You\'ll see whether it\'s inflation, specific products, or shopping habits.',
    'faq.q2': 'How do I know if I\'m spending too much on groceries for my household?',
    'faq.a2': 'Everyone\'s budget is different, but the app analyzes your spending patterns alongside your household size and shopping frequency. This gives you context to see if your costs are in line or need adjusting.',
    'faq.q3': 'Where does all my grocery money actually go?',
    'faq.a3': 'Every scanned receipt is broken down into clear categories like snacks, produce, or pantry staples. That way you can instantly see which areas take the biggest share of your budget.',
    'faq.q4': 'What\'s the best grocery budget app for tracking expenses?',
    'faq.a4': 'There are many general budgeting apps, but TicketBrain is specialised in grocery budgeting. It\'s also more convenient because instead of entering items manually, you simply scan your supermarket receipts and the app instantly analyses and categorises your expenses.',
    'faq.q5': 'Can a grocery spending tracker app show me how my costs change over time?',
    'faq.a5': 'Yes. You\'ll get simple comparisons like \"this week vs. last week\" or \"this month vs. last month,\" so you can spot trends and track if your spending is going up or down.',
    'faq.q6': 'How do I track my monthly grocery budget and spending?',
    'faq.a6': 'With TicketBrain, You set a monthly grocery budget during onboarding, and the app tracks your progress with a simple bar showing how much you\'ve spent and how much is left.',
    'faq.q7': 'Does TicketBrain work with receipts from different grocery stores?',
    'faq.a7': 'The app is designed to work with common grocery store receipts and automatically extracts items, prices, and totals. If anything looks off, you can quickly correct it and the app learns from your adjustments.',
    'faq.q8': 'Is there a free app to analyse grocery receipts and spending?',
    'faq.a8': 'Yes. With TicketBrain, you can scan your supermarket receipts for free and get instant insights. The app automatically breaks your spending into categories (like produce, snacks, or beverages), so you understand exactly where your money goes without typing anything in.',
    'faq.q9': 'Is this a grocery receipt scanner app or meal planning tool?',
    'faq.a9': 'For now, the focus is on helping you understand where your grocery money goes and how to stay on budget. Other features like meal planning or store price comparisons aren\'t part of the current version.',
    'faq.q10': 'Can I use this grocery budget app on my phone?',
    'faq.a10': 'Absolutely. TicketBrain is a native mobile app available for both Android and iOS, so you can track your spending right from your pocket.',
    'faq.q11': 'How do I scan grocery receipts with my phone?',
    'faq.a11': 'It\'s simple: download the app, take a photo of your receipt with your phone, and the app automatically extracts the information, splits it into categories, and shows you the breakdown.',
    'faq.q12': 'How can I stop overspending on groceries and avoid impulse supermarket purchases?',
    'faq.a12': 'By reviewing your categorised spending after each shop, you\'ll see exactly which \"extra\" purchases are adding up. Many users find that simply becoming aware of these patterns helps reduce unnecessary buys.',
    'faq.q13': 'How much should I spend on groceries per month?',
    'faq.a13': 'It depends on your household size, eating habits, and location. Apps like TicketBrain that track your receipts can help you monitor your grocery budget, compare your spending against your own goals, and see if you\'re in line with typical households.',

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
    "hero.description": "Deja de preguntarte a dónde va tu dinero. Escanea tus tickets usando nuestra app y descubre qué compras están rompiendo tu presupuesto. Obtén ideas prácticas para tomar el control.",
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
    'blog.related': 'Seguí leyendo',
    'blog.readMore': 'Leer más',
    'blog.noPosts': '¡Aún no hay artículos disponibles. Vuelve pronto!',
    'blog.backToBlog': 'Volver al Blog',
    'blog.moreArticles': 'Más Artículos',
    'blog.published': 'Publicado',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Todo lo que necesitas saber sobre TicketBrain',
    'faq.q1': '¿Puede TicketBrain ayudarme a entender por qué mi factura del supermercado es tan alta?',
    'faq.a1': 'Sí. Al escanear tus recibos, la app resalta qué artículos o categorías están aumentando tu factura. Verás si es la inflación, productos específicos o hábitos de compra.',
    'faq.q2': '¿Cómo sé si estoy gastando demasiado en supermercado para mi hogar?',
    'faq.a2': 'El presupuesto de cada uno es diferente, pero la app analiza tus patrones de gasto junto con el tamaño de tu hogar y la frecuencia de compras. Esto te da contexto para ver si tus costos están en línea o necesitan ajustes.',
    'faq.q3': '¿A dónde va realmente todo mi dinero del supermercado?',
    'faq.a3': 'Cada recibo escaneado se desglosa en categorías claras como snacks, productos frescos o productos básicos. Así puedes ver instantáneamente qué áreas toman la mayor parte de tu presupuesto.',
    'faq.q4': '¿Cuál es la mejor app de presupuesto del supermercado para rastrear gastos?',
    'faq.a4': 'Hay muchas apps de presupuesto general, pero TicketBrain está especializada en presupuestos del supermercado. También es más conveniente porque en lugar de ingresar artículos manualmente, simplemente escaneas tus recibos del supermercado y la app analiza y categoriza instantáneamente tus gastos.',
    'faq.q5': '¿Puede una app de seguimiento de gastos del supermercado mostrarme cómo cambian mis costos con el tiempo?',
    'faq.a5': 'Sí. Obtendrás comparaciones simples como \"esta semana vs. la semana pasada\" o \"este mes vs. el mes pasado\", para que puedas detectar tendencias y rastrear si tu gasto está subiendo o bajando.',
    'faq.q6': '¿Cómo rastrea mi presupuesto y gasto mensual del supermercado?',
    'faq.a6': 'Con TicketBrain, estableces un presupuesto mensual de supermercado durante la configuración inicial, y la app rastrea tu progreso con una barra simple que muestra cuánto has gastado y cuánto te queda.',
    'faq.q7': '¿TicketBrain funciona con recibos de diferentes supermercados?',
    'faq.a7': 'La app está diseñada para funcionar con recibos comunes de supermercados y extrae automáticamente artículos, precios y totales. Si algo se ve mal, puedes corregirlo rápidamente y la app aprende de tus ajustes.',
    'faq.q8': '¿Hay una app gratuita para analizar recibos del supermercado y gastos?',
    'faq.a8': 'Sí. Con TicketBrain, puedes escanear tus recibos del supermercado gratis y obtener información instantánea. La app desglosa automáticamente tu gasto en categorías (como productos frescos, snacks o bebidas), para que entiendas exactamente a dónde va tu dinero sin escribir nada.',
    'faq.q9': '¿Es esta una app de escaneo de recibos del supermercado o una herramienta de planificación de comidas?',
    'faq.a9': 'Por ahora, el enfoque está en ayudarte a entender a dónde va tu dinero del supermercado y cómo mantenerte dentro del presupuesto. Otras características como planificación de comidas o comparación de precios de tiendas no son parte de la versión actual.',
    'faq.q10': '¿Puedo usar esta app de presupuesto del supermercado en mi teléfono?',
    'faq.a10': 'Absolutamente. TicketBrain es una app móvil nativa disponible para Android e iOS, así que puedes rastrear tu gasto directamente desde tu bolsillo.',
    'faq.q11': '¿Cómo escaneo recibos del supermercado con mi teléfono?',
    'faq.a11': 'Es simple: descarga la app, toma una foto de tu recibo con tu teléfono, y la app extrae automáticamente la información, la divide en categorías y te muestra el desglose.',
    'faq.q12': '¿Cómo puedo dejar de gastar de más en supermercado y evitar compras impulsivas?',
    'faq.a12': 'Al revisar tu gasto categorizado después de cada compra, verás exactamente qué compras \"extra\" se están acumulando. Muchos usuarios encuentran que simplemente ser conscientes de estos patrones ayuda a reducir compras innecesarias.',
    'faq.q13': '¿Cuánto debería gastar en supermercado al mes?',
    'faq.a13': 'Depende del tamaño de tu hogar, hábitos alimentarios y ubicación. Apps como TicketBrain que rastrean tus recibos pueden ayudarte a monitorear tu presupuesto del supermercado, comparar tu gasto con tus propias metas y ver si estás en línea con hogares típicos.',

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