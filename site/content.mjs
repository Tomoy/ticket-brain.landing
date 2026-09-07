// Bilingual copy for the site.
//
// faq and privacyDoc are lifted verbatim from the Spanish and English blocks
// of the old src/contexts/LanguageContext.tsx — those two were the only parts
// of the React app that were ever fully translated.
//
// privacyPage and ui are new: the redesigned homepage was written in English
// only, so its Spanish is a fresh translation, not recovered content.

export const faq = {
  en: [
    { q: `Can TicketBrain help me understand why my grocery bill is so high?`, a: `Yes. By scanning your receipts, the app highlights which items or categories are driving up your bill. You'll see whether it's inflation, specific products, or shopping habits.` },
    { q: `How do I know if I'm spending too much on groceries for my household?`, a: `Everyone's budget is different, but the app analyzes your spending patterns alongside your household size and shopping frequency. This gives you context to see if your costs are in line or need adjusting.` },
    { q: `Where does all my grocery money actually go?`, a: `Every scanned receipt is broken down into clear categories like snacks, produce, or pantry staples. That way you can instantly see which areas take the biggest share of your budget.` },
    { q: `What's the best grocery budget app for tracking expenses?`, a: `There are many general budgeting apps, but TicketBrain is specialised in grocery budgeting. It's also more convenient because instead of entering items manually, you simply scan your supermarket receipts and the app instantly analyses and categorises your expenses.` },
    { q: `Can a grocery spending tracker app show me how my costs change over time?`, a: `Yes. You'll get simple comparisons like \\"this week vs. last week\\" or \\"this month vs. last month,\\" so you can spot trends and track if your spending is going up or down.` },
    { q: `How do I track my monthly grocery budget and spending?`, a: `With TicketBrain, You set a monthly grocery budget during onboarding, and the app tracks your progress with a simple bar showing how much you've spent and how much is left.` },
    { q: `Does TicketBrain work with receipts from different grocery stores?`, a: `The app is designed to work with common grocery store receipts and automatically extracts items, prices, and totals. Nothing is saved until you review it, so if a line looks off you correct it there and then, before it ever reaches your budget.` },
    { q: `Is there a free app to analyse grocery receipts and spending?`, a: `TicketBrain is free to download and free to start using: you scan your supermarket receipts and get your spending broken into categories (produce, snacks, beverages and eight more) without typing anything in and without paying. After launch there will be a free tier with a monthly scan limit, and a subscription for unlimited scanning. The exact limits are not final yet, and everyone on the early access list will hear about them before they apply.` },
    { q: `Is this a grocery receipt scanner app or meal planning tool?`, a: `For now, the focus is on helping you understand where your grocery money goes and how to stay on budget. Other features like meal planning or store price comparisons aren't part of the current version.` },
    { q: `Can I use this grocery budget app on my phone?`, a: `Absolutely. TicketBrain is a native mobile app available for both Android and iOS, so you can track your spending right from your pocket.` },
    { q: `How do I scan grocery receipts with my phone?`, a: `It's simple: download the app, take a photo of your receipt with your phone, and the app automatically extracts the information, splits it into categories, and shows you the breakdown.` },
    { q: `How can I stop overspending on groceries and avoid impulse supermarket purchases?`, a: `By reviewing your categorised spending after each shop, you'll see exactly which \\"extra\\" purchases are adding up. Many users find that simply becoming aware of these patterns helps reduce unnecessary buys.` },
    { q: `How much should I spend on groceries per month?`, a: `It depends on your household size, eating habits, and location. Apps like TicketBrain that track your receipts can help you monitor your grocery budget, compare your spending against your own goals, and see if you're in line with typical households.` },
  ],
  es: [
    { q: `¿Puede TicketBrain ayudarme a entender por qué mi factura del supermercado es tan alta?`, a: `Sí. Al escanear tus recibos, la app resalta qué artículos o categorías están aumentando tu factura. Verás si es la inflación, productos específicos o hábitos de compra.` },
    { q: `¿Cómo sé si estoy gastando demasiado en supermercado para mi hogar?`, a: `El presupuesto de cada uno es diferente, pero la app analiza tus patrones de gasto junto con el tamaño de tu hogar y la frecuencia de compras. Esto te da contexto para ver si tus costos están en línea o necesitan ajustes.` },
    { q: `¿A dónde va realmente todo mi dinero del supermercado?`, a: `Cada recibo escaneado se desglosa en categorías claras como snacks, productos frescos o productos básicos. Así puedes ver instantáneamente qué áreas toman la mayor parte de tu presupuesto.` },
    { q: `¿Cuál es la mejor app de presupuesto del supermercado para rastrear gastos?`, a: `Hay muchas apps de presupuesto general, pero TicketBrain está especializada en presupuestos del supermercado. También es más conveniente porque en lugar de ingresar artículos manualmente, simplemente escaneas tus recibos del supermercado y la app analiza y categoriza instantáneamente tus gastos.` },
    { q: `¿Puede una app de seguimiento de gastos del supermercado mostrarme cómo cambian mis costos con el tiempo?`, a: `Sí. Obtendrás comparaciones simples como \\"esta semana vs. la semana pasada\\" o \\"este mes vs. el mes pasado\\", para que puedas detectar tendencias y rastrear si tu gasto está subiendo o bajando.` },
    { q: `¿Cómo rastrea mi presupuesto y gasto mensual del supermercado?`, a: `Con TicketBrain, estableces un presupuesto mensual de supermercado durante la configuración inicial, y la app rastrea tu progreso con una barra simple que muestra cuánto has gastado y cuánto te queda.` },
    { q: `¿TicketBrain funciona con recibos de diferentes supermercados?`, a: `La app está diseñada para funcionar con tickets habituales de supermercado y extrae automáticamente artículos, precios y totales. No se guarda nada hasta que lo revisas, así que si una línea está mal la corriges en el momento, antes de que llegue a tu presupuesto.` },
    { q: `¿Hay una app gratuita para analizar recibos del supermercado y gastos?`, a: `TicketBrain es gratis de descargar y gratis para empezar a usar: escaneas tus tickets del supermercado y ves el gasto desglosado en categorías (frutas y verduras, snacks, bebidas y ocho más) sin escribir nada y sin pagar. Tras el lanzamiento habrá un plan gratuito con un límite de escaneos al mes y una suscripción para escaneos ilimitados. Los límites exactos aún no están cerrados, y quien esté en la lista de acceso anticipado lo sabrá antes de que se apliquen.` },
    { q: `¿Es esta una app de escaneo de recibos del supermercado o una herramienta de planificación de comidas?`, a: `Por ahora, el enfoque está en ayudarte a entender a dónde va tu dinero del supermercado y cómo mantenerte dentro del presupuesto. Otras características como planificación de comidas o comparación de precios de tiendas no son parte de la versión actual.` },
    { q: `¿Puedo usar esta app de presupuesto del supermercado en mi teléfono?`, a: `Absolutamente. TicketBrain es una app móvil nativa disponible para Android e iOS, así que puedes rastrear tu gasto directamente desde tu bolsillo.` },
    { q: `¿Cómo escaneo recibos del supermercado con mi teléfono?`, a: `Es simple: descarga la app, toma una foto de tu recibo con tu teléfono, y la app extrae automáticamente la información, la divide en categorías y te muestra el desglose.` },
    { q: `¿Cómo puedo dejar de gastar de más en supermercado y evitar compras impulsivas?`, a: `Al revisar tu gasto categorizado después de cada compra, verás exactamente qué compras \\"extra\\" se están acumulando. Muchos usuarios encuentran que simplemente ser conscientes de estos patrones ayuda a reducir compras innecesarias.` },
    { q: `¿Cuánto debería gastar en supermercado al mes?`, a: `Depende del tamaño de tu hogar, hábitos alimentarios y ubicación. Apps como TicketBrain que rastrean tus recibos pueden ayudarte a monitorear tu presupuesto del supermercado, comparar tu gasto con tus propias metas y ver si estás en línea con hogares típicos.` },
  ],
};

export const privacyDoc = {
  en: {
    title: `Privacy Policy`,
    lastUpdated: `Last updated: September 2025`,
    whoWeAre_title: `Who We Are`,
    whoWeAre_content: `TicketBrain is a grocery receipt analysis service that helps users gain insights into their spending and shopping habits.`,
    infoCollect_title: `Information We Collect`,
    infoCollect_receipt: `• Receipt images and data extracted from them`,
    infoCollect_email: `• Email addresses for our waitlist`,
    infoCollect_usage: `• Usage analytics and app performance data`,
    howStore_title: `How We Store and Protect Your Data`,
    howStore_content: `Your data is stored securely using industry-standard encryption. Receipt images are processed and then deleted within 30 days. We never sell your personal information to third parties.`,
    gdprRights_title: `Your Rights Under GDPR`,
    gdprRights_access: `• Right to access your personal data`,
    gdprRights_rectification: `• Right to rectification of inaccurate data`,
    gdprRights_erasure: `• Right to erasure (right to be forgotten)`,
    gdprRights_portability: `• Right to data portability`,
    gdprRights_objection: `• Right to object to processing`,
    contact_title: `Contact Us`,
    contact_content: `If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:`,
    contact_email: `Email: hello@ticketbrain.app`,
    contact_address: `Address: Madrid, Spain`,
    contact_authority: `If you believe we have not addressed your concerns adequately, you may contact the Spanish Data Protection Authority (AEPD) at www.aepd.es`,
  },
  es: {
    title: `Política de Privacidad`,
    lastUpdated: `Última actualización: Septiembre 2025`,
    whoWeAre_title: `Quiénes Somos`,
    whoWeAre_content: `TicketBrain es un servicio de análisis de tickets de compra que ayuda a los usuarios a comprender mejor sus gastos y hábitos de consumo.`,
    infoCollect_title: `Información que Recopilamos`,
    infoCollect_receipt: `• Imágenes de tickets y los datos extraídos de ellas`,
    infoCollect_email: `• Direcciones de correo electrónico para nuestra lista de espera`,
    infoCollect_usage: `• Datos de uso y rendimiento de la aplicación`,
    howStore_title: `Cómo Almacenamos y Protegemos tus Datos`,
    howStore_content: `Tus datos se almacenan de forma segura utilizando encriptación con estándares de la industria. Las imágenes de tickets se procesan y se eliminan en un plazo máximo de 30 días. Nunca vendemos tu información personal a terceros.`,
    gdprRights_title: `Tus Derechos según el RGPD`,
    gdprRights_access: `• Derecho a acceder a tus datos personales`,
    gdprRights_rectification: `• Derecho a rectificar datos inexactos`,
    gdprRights_erasure: `• Derecho a la supresión (derecho al olvido)`,
    gdprRights_portability: `• Derecho a la portabilidad de los datos`,
    gdprRights_objection: `• Derecho a oponerte al tratamiento`,
    contact_title: `Contáctanos`,
    contact_content: `Si tienes alguna pregunta sobre esta Política de Privacidad o deseas ejercer tus derechos, puedes ponerte en contacto con nosotros en:`,
    contact_email: `Correo electrónico: hello@ticketbrain.app`,
    contact_address: `Dirección: Madrid, España`,
    contact_authority: `Si consideras que no hemos resuelto adecuadamente tu solicitud, puedes contactar con la Agencia Española de Protección de Datos (AEPD) en www.aepd.es`,
  },
};

/**
 * The standalone privacy page.
 *
 * Every claim here was checked against the code, not against marketing copy:
 *   - no bank connection  -> there is no banking or open-banking code anywhere
 *     in the Flutter app; the only input is a photo the user takes.
 *   - the photo is not stored -> api/main.py reads the upload into memory,
 *     sends it to the model and returns the result. api/README.md states it
 *     explicitly: "No persiste nada (ni imagen ni resultado)".
 *   - history on device -> lib/data/local/app_database.dart, SQLite via drift.
 *
 * WARNING: ARCHITECTURE.md describes a target design that DOES store the
 * original image in a Railway bucket and sync receipts to Postgres. The day
 * that ships, the second card below stops being true and this page has to be
 * rewritten before the change goes live.
 */
export const privacyPage = {
  en: {
    kicker: "Privacy",
    title: "We never ask for your bank credentials, because we don't need them.",
    lede: "TicketBrain only reads the photo you take. Your history lives in a local database on your own phone, and the app works offline.",
    cards: [
      ["No bank connection",
       "There is no account linking step, no open-banking provider in between, and no credentials to hand over."],
      ["The photo is not stored",
       "The image is sent to our API, read once to extract the lines, and the result comes straight back. Neither the photo nor the parsed receipt is kept on our servers."],
      ["Your history stays on your device",
       "Receipts, coupons and insights live in a local database on your phone, not in an account somewhere else."],
      ["Works offline",
       "Consulting past receipts, coupons and insights does not require a connection."],
    ],
    docLink: "Read the full privacy policy",
  },
  es: {
    kicker: "Privacidad",
    title: "Nunca te pedimos las credenciales de tu banco, porque no las necesitamos.",
    lede: "TicketBrain solo lee la foto que haces. Tu historial vive en una base de datos local en tu propio teléfono, y la app funciona sin conexión.",
    cards: [
      ["Sin conexión bancaria",
       "No hay que vincular ninguna cuenta, no hay un proveedor de open banking en medio y no hay credenciales que entregar."],
      ["La foto no se guarda",
       "La imagen se envía a nuestra API, se lee una vez para extraer las líneas y el resultado vuelve directo. Ni la foto ni el ticket procesado quedan en nuestros servidores."],
      ["Tu historial se queda en tu teléfono",
       "Tickets, cupones e insights viven en una base de datos local en tu dispositivo, no en una cuenta en otro lado."],
      ["Funciona sin conexión",
       "Consultar tickets, cupones e insights anteriores no requiere conexión."],
    ],
    docLink: "Leer la política de privacidad completa",
  },
};

/** Chrome: navigation, footer and page furniture. */
export const ui = {
  en: {
    locale: "en-GB", langName: "English", otherLangName: "Español",
    nav: ["How it works", "Features", "Coupons", "Blog", "FAQ", "Privacy"],
    getApp: "Get the app", openMenu: "Open menu",
    footerTag: "Turn your grocery receipts into clear insights that actually help you save money.",
    comingSoon: "Coming soon", product: "Product", more: "More",
    privacyPolicy: "Privacy policy",
    blogTitle: "Grocery spending, explained",
    blogLede: "Insights on smart grocery shopping, AI-powered receipt analysis, and practical money-saving tips.",
    readMore: "Read more →", backToBlog: "← Back to blog", keepReading: "Keep reading",
    faqTitle: "Frequently asked questions", faqLede: "Everything you need to know about TicketBrain.",
    legalKicker: "Legal",
    notFoundTitle: "This page does not exist",
    notFoundLede: "The link may be old or mistyped.", notFoundCta: "Go back to the homepage",
  },
  es: {
    locale: "es-ES", langName: "Español", otherLangName: "English",
    nav: ["Cómo funciona", "Funciones", "Cupones", "Blog", "Preguntas", "Privacidad"],
    getApp: "Descargar la app", openMenu: "Abrir menú",
    footerTag: "Convierte los tickets del súper en información clara que de verdad te ayuda a ahorrar.",
    comingSoon: "Muy pronto", product: "Producto", more: "Más",
    privacyPolicy: "Política de privacidad",
    blogTitle: "El gasto del súper, explicado",
    blogLede: "Ideas sobre compras inteligentes, análisis de tickets con IA y consejos prácticos para ahorrar dinero.",
    readMore: "Leer más →", backToBlog: "← Volver al blog", keepReading: "Sigue leyendo",
    faqTitle: "Preguntas frecuentes", faqLede: "Todo lo que necesitas saber sobre TicketBrain.",
    legalKicker: "Legal",
    notFoundTitle: "Esta página no existe",
    notFoundLede: "El enlace puede ser antiguo o estar mal escrito.", notFoundCta: "Volver al inicio",
  },
};
