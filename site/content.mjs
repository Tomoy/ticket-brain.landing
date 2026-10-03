// Bilingual copy for the site.
//
// faq and privacyDoc are lifted verbatim from the Spanish and English blocks
// of the old src/contexts/LanguageContext.tsx. Those two were the only parts
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
    { q: `Is there a free app to analyse grocery receipts and spending?`, a: `TicketBrain is free to download and free to start using: you scan your supermarket receipts and get your spending broken into categories (produce, snacks, beverages and eight more) without typing anything in and without paying. There is a free tier with a monthly scan limit, and a subscription for unlimited scanning. The exact limits are still being tuned, and everyone on the mailing list will hear about any change before it applies.` },
    { q: `Is this a grocery receipt scanner app or meal planning tool?`, a: `For now, the focus is on helping you understand where your grocery money goes and how to stay on budget. Other features like meal planning or store price comparisons aren't part of the current version.` },
    { q: `Can I use this grocery budget app on my phone?`, a: `Absolutely. TicketBrain is a native iPhone app, available now on the App Store. The Android version is in final testing, and you can leave your email on the homepage to hear the day it is out.` },
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
    { q: `¿Hay una app gratuita para analizar recibos del supermercado y gastos?`, a: `TicketBrain es gratis de descargar y gratis para empezar a usar: escaneas tus tickets del supermercado y ves el gasto desglosado en categorías (frutas y verduras, snacks, bebidas y ocho más) sin escribir nada y sin pagar. Hay un plan gratuito con un límite de escaneos al mes y una suscripción para escaneos ilimitados. Los límites exactos aún se están ajustando, y quien esté en la lista de correo sabrá de cualquier cambio antes de que se aplique.` },
    { q: `¿Es esta una app de escaneo de recibos del supermercado o una herramienta de planificación de comidas?`, a: `Por ahora, el enfoque está en ayudarte a entender a dónde va tu dinero del supermercado y cómo mantenerte dentro del presupuesto. Otras características como planificación de comidas o comparación de precios de tiendas no son parte de la versión actual.` },
    { q: `¿Puedo usar esta app de presupuesto del supermercado en mi teléfono?`, a: `Absolutamente. TicketBrain es una app nativa para iPhone, ya disponible en el App Store. La versión para Android está en pruebas finales, y puedes dejar tu email en la página de inicio para saber el día que salga.` },
    { q: `¿Cómo escaneo recibos del supermercado con mi teléfono?`, a: `Es simple: descarga la app, toma una foto de tu recibo con tu teléfono, y la app extrae automáticamente la información, la divide en categorías y te muestra el desglose.` },
    { q: `¿Cómo puedo dejar de gastar de más en supermercado y evitar compras impulsivas?`, a: `Al revisar tu gasto categorizado después de cada compra, verás exactamente qué compras \\"extra\\" se están acumulando. Muchos usuarios encuentran que simplemente ser conscientes de estos patrones ayuda a reducir compras innecesarias.` },
    { q: `¿Cuánto debería gastar en supermercado al mes?`, a: `Depende del tamaño de tu hogar, hábitos alimentarios y ubicación. Apps como TicketBrain que rastrean tus recibos pueden ayudarte a monitorear tu presupuesto del supermercado, comparar tu gasto con tus propias metas y ver si estás en línea con hogares típicos.` },
  ],
};

/**
 * The legal privacy policy.
 *
 * Rewritten 2026-09-10. The previous version was inherited from the old React
 * landing page and described a product that no longer exists: it claimed we
 * collected email addresses for a waitlist (the app never asks for one) and
 * that receipt images were "deleted within 30 days" (they are never written to
 * disk at all). It also failed to name Anthropic or Firebase, which is the
 * disclosure the GDPR actually requires and the one Apple cross-checks against
 * the App Privacy answers in App Store Connect.
 *
 * Every claim below was checked against the code:
 *   - nothing but the photo leaves the device -> lib/data/local/app_database.dart
 *     (drift/SQLite) and lib/data/local/coupon_image_store.dart hold everything
 *     locally; there is no sync code.
 *   - the photo is not stored -> api/main.py reads the upload into memory,
 *     forwards it to the model and returns the result. Nothing touches disk.
 *   - the anonymous device id -> lib/data/repositories/device_repository.dart,
 *     a client-side uuid v4 sent as X-Device-Id purely for rate limiting.
 *   - the analytics list -> lib/services/analytics.dart, every event and user
 *     property enumerated. No amounts, store names or product names anywhere.
 *
 * Same warning as privacyPage below: ARCHITECTURE.md describes a target design
 * that DOES store the original image in a Railway bucket and sync receipts to
 * Postgres. The day that ships, sections 3 and 7 stop being true and have to be
 * rewritten BEFORE the change goes live, not after.
 *
 * Structure: each section is { h, body: [...] } where a body entry is either
 * { p } for a paragraph or { list } for a bulleted list, rendered in order.
 */
export const privacyDoc = {
  en: {
    title: `Privacy Policy`,
    lastUpdated: `Last updated: October 2026`,
    summary: `The short version: TicketBrain has no accounts and never asks for your name, your email or your bank. Your receipts, coupons and budget live in a database on your own phone. The only thing that leaves your device is the photo of a receipt, which is read once to pull out the lines and is never stored by us. This website is separate: it has an optional email list and, only if you allow it, Google Analytics. Both are explained under "This Website".`,
    sections: [
      {
        h: `Who We Are`,
        body: [
          { p: `TicketBrain is a grocery receipt scanning app built and run by one independent developer, not a company. Under the GDPR, that developer is the data controller for the limited processing described here. You will find the contact details at the end of this page.` },
        ],
      },
      {
        h: `What Stays On Your Phone`,
        body: [
          { p: `All of this is stored in a local database on your device and is never sent to us:` },
          { list: [
            `Your receipts: the store, the date, the total, and every line item with its price and category`,
            `Your coupons, including the photos you take of them`,
            `Your monthly budget, your household size and the goals you chose during setup`,
            `Your settings: language, notification permissions and reminder preferences`,
          ] },
          { p: `We hold no copy of any of it. We cannot read it, we cannot recover it for you, and we have nothing to hand to anyone else. If you delete the app, it is gone. That is also why the app has an export button: that export is the only backup that exists.` },
        ],
      },
      {
        h: `The Receipt Photo`,
        body: [
          { p: `This is the one thing that leaves your phone. When you scan a receipt or a coupon, the photo is sent over an encrypted connection to our server, held in memory while an AI model reads the lines off it, and the extracted text comes straight back to your phone.` },
          { p: `The image is never written to disk, never added to a database and never kept after the response is sent. There is no archive of your receipts on our side to lose, leak or be asked to hand over.` },
          { p: `A randomly generated identifier travels with the request so that we can cap how many scans come from a single installation and keep the service usable for everyone. It is created on your phone, it is not derived from your device or from you, and it is not linked to anything else. It is only ever held in the server's memory, never written to disk or to a database, and it disappears whenever the server restarts. The scan limits look back at most 30 days.` },
        ],
      },
      {
        h: `Usage Analytics`,
        body: [
          { p: `The app reports anonymous usage events so that we can tell which parts work and which are broken. This runs on Google Firebase Analytics.` },
          { p: `What we send is limited to named events and coarse aggregates, for example: a scan was started, a receipt was parsed and how many line items it had, a coupon was saved, a setting was changed, the app language, whether notifications are allowed, and a range for how many receipts you have saved (such as "6-20") rather than the number itself.` },
          { p: `What we never send: the amounts you spend, the names of the stores, the names of the products, the receipt photos, your budget figure, your email, your name, or any identifier we could use to find you. There is no account to attach any of it to.` },
          { p: `Firebase assigns its own app installation identifier and records the device model, the operating system version and an approximate country. That is Google's standard collection for any app that uses it, and it is governed by Google's own privacy terms.` },
          { p: `You can turn all of this off in the app, under Settings, and it stays off. Uninstalling the app also ends it.` },
        ],
      },
      {
        h: `What We Never Do`,
        body: [
          { list: [
            `We never connect to your bank. There is no account linking and no open banking provider in the middle.`,
            `We never sell your data, and we never share your shopping habits with brands, retailers or data brokers. There is no cashback deal funding this app.`,
            `We run no advertising and embed no advertising or tracking SDKs.`,
            `We build no profile of you for marketing, and we make no automated decisions that produce legal effects for you.`,
          ] },
        ],
      },
      {
        h: `Who Processes Data For Us`,
        body: [
          { p: `Three providers are involved, each for one narrow job:` },
          { list: [
            `Railway Corp. hosts the server that receives the photo and passes it on. It runs in Railway's Amsterdam region, inside the European Union.`,
            `Anthropic PBC reads the receipt photo through the Claude API and returns the extracted lines. The image is sent for that purpose and nothing else.`,
            `Google Ireland Limited provides Firebase Analytics for the anonymous usage events described above.`,
          ] },
          { p: `Our server is in the European Union. The receipt photo is sent to Anthropic in the United States to be read, and is not stored there. Firebase Analytics is operated by Google, which may process the anonymous events on infrastructure outside the European Union. Both of those transfers rely on the European Commission's Standard Contractual Clauses, included in the providers' terms.` },
        ],
      },
      {
        h: `How Long Data Is Kept`,
        body: [
          { p: `The receipt photo: not kept at all. It exists in server memory for the seconds the scan takes and is discarded when the response is sent.` },
          { p: `The anonymous scan identifier: only in the server's memory, never written to disk. The scan limits use at most the last 30 days, and the identifier disappears whenever the server restarts.` },
          { p: `Analytics events: retained by Google Firebase for the period configured in our Firebase project, after which Google deletes them.` },
          { p: `Website analytics, if you allowed it: kept by Google Analytics for the retention period set in our property, at most 14 months. The cookies on your browser expire after two years, or as soon as you withdraw consent.` },
          { p: `The website email list: until you unsubscribe or ask us to delete your address.` },
          { p: `Everything else: for as long as you keep the app installed, on your phone, under your control.` },
        ],
      },
      {
        h: `Your Data, Your Control`,
        body: [
          { p: `Because your data lives on your device rather than in an account, most of what the GDPR gives you is something you can do yourself, immediately, without asking us:` },
          { list: [
            `Export everything: Settings has an export button that writes all your receipts and coupons to a file you can save or send wherever you like.`,
            `Correct anything: every receipt and coupon can be edited after scanning, and nothing is saved until you have reviewed it.`,
            `Delete anything: remove individual receipts and coupons from the app, or delete the app to erase all of it at once.`,
            `Turn off analytics: one switch in Settings stops the anonymous usage events.`,
          ] },
        ],
      },
      {
        id: `website`,
        h: `This Website`,
        body: [
          { p: `Everything above is about the app. This website, ticketbrain.app, is separate, and it collects two things. Both are optional.` },
          { p: `Analytics, only if you allow it. If you choose "OK" in the cookie notice, the site loads Google Analytics, which sets first-party cookies (_ga and _ga_ followed by an id, kept for up to two years) to count visits and to tell us which pages are read, which site or search engine sent you, and which buttons get used, such as the App Store link or the email form. Google also records an approximate location and your browser and device type. If you choose "No thanks", or simply ignore the notice, Google Analytics is never loaded and no cookie is set. Google's advertising features and Google signals are switched off, so none of this is used for ads. You can change your mind at any time with "Cookie settings" at the bottom of every page.` },
          { p: `The email list, only if you join it. If you leave your email to hear when the Android version is out, it is stored with Mailchimp, operated by The Rocket Science Group LLC (Intuit) in the United States, under the safeguards in its data processing terms, including the European Commission's Standard Contractual Clauses. We use it only to write to you about TicketBrain, and rarely. Every email has an unsubscribe link, and you can ask us to delete your address at any time.` },
          { p: `The legal basis for both is your consent, which you can withdraw whenever you like without affecting anything that happened before.` },
        ],
      },
      {
        h: `Your Rights Under GDPR`,
        body: [
          { p: `You have the right to access your personal data, to have inaccurate data corrected, to have your data erased, to receive it in a portable format, to object to processing and to restrict it.` },
          { p: `In practice we hold almost nothing to exercise these against, which is the point of the design. For anything that remains, write to us at the address below and we will answer within one month.` },
        ],
      },
      {
        h: `Children`,
        body: [
          { p: `TicketBrain is not aimed at children and we do not knowingly process data from anyone under 14.` },
        ],
      },
      {
        h: `Changes To This Policy`,
        body: [
          { p: `If what the app does with your data changes, this page changes first, with a new date at the top. We will not quietly start collecting something this policy does not mention.` },
        ],
      },
    ],
    contact_title: `Contact Us`,
    contact_content: `If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:`,
    contact_email: `Email: hello@ticketbrain.app`,
    contact_address: `Barcelona, Spain`,
    contact_authority: `If you believe we have not addressed your concerns adequately, you may contact the Spanish Data Protection Authority (AEPD) at www.aepd.es`,
  },
  es: {
    title: `Política de Privacidad`,
    lastUpdated: `Última actualización: Octubre 2026`,
    summary: `La versión corta: TicketBrain no tiene cuentas y nunca te pide tu nombre, tu correo ni tu banco. Tus tickets, cupones y presupuesto viven en una base de datos en tu propio móvil. Lo único que sale de tu dispositivo es la foto del ticket, que se lee una vez para extraer las líneas y que nosotros no guardamos en ningún momento. Esta web es aparte: tiene una lista de email opcional y, solo si lo permites, Google Analytics. Las dos cosas se explican en «Esta Web».`,
    sections: [
      {
        h: `Quiénes Somos`,
        body: [
          { p: `TicketBrain es una app de escaneo de tickets de supermercado creada y mantenida por un desarrollador independiente, no por una empresa. A efectos del RGPD, ese desarrollador es el responsable del tratamiento limitado que se describe aquí. Los datos de contacto están al final de esta página.` },
        ],
      },
      {
        h: `Lo Que Se Queda En Tu Móvil`,
        body: [
          { p: `Todo esto se guarda en una base de datos local en tu dispositivo y nunca se nos envía:` },
          { list: [
            `Tus tickets: el establecimiento, la fecha, el total y cada línea con su precio y su categoría`,
            `Tus cupones, incluidas las fotos que les haces`,
            `Tu presupuesto mensual, el tamaño de tu hogar y los objetivos que elegiste al configurar la app`,
            `Tus ajustes: idioma, permisos de notificación y preferencias de recordatorios`,
          ] },
          { p: `No tenemos ninguna copia de nada de esto. No podemos leerlo, no podemos recuperártelo y no tenemos nada que entregar a terceros. Si borras la app, desaparece. Por eso mismo la app tiene un botón de exportar: esa exportación es la única copia de seguridad que existe.` },
        ],
      },
      {
        h: `La Foto Del Ticket`,
        body: [
          { p: `Es lo único que sale de tu móvil. Cuando escaneas un ticket o un cupón, la foto se envía por una conexión cifrada a nuestro servidor, se mantiene en memoria mientras un modelo de IA lee las líneas, y el texto extraído vuelve directo a tu móvil.` },
          { p: `La imagen no se escribe nunca en disco, no entra en ninguna base de datos y no se conserva una vez enviada la respuesta. No hay un archivo de tus tickets en nuestro lado que se pueda perder, filtrar o reclamar.` },
          { p: `Junto a la petición viaja un identificador generado al azar, que nos sirve para limitar cuántos escaneos llegan desde una misma instalación y mantener el servicio utilizable para todos. Se crea en tu móvil, no se deriva de tu dispositivo ni de ti, y no está vinculado a nada más. Solo se guarda en la memoria del servidor, nunca en disco ni en una base de datos, y desaparece cada vez que el servidor se reinicia. Los límites de escaneo miran como mucho los últimos 30 días.` },
        ],
      },
      {
        h: `Analítica De Uso`,
        body: [
          { p: `La app envía eventos de uso anónimos para que podamos saber qué partes funcionan y cuáles están rotas. Esto se apoya en Google Firebase Analytics.` },
          { p: `Lo que enviamos se limita a eventos con nombre y agregados poco precisos, por ejemplo: se ha iniciado un escaneo, se ha procesado un ticket y cuántas líneas tenía, se ha guardado un cupón, se ha cambiado un ajuste, el idioma de la app, si las notificaciones están permitidas, y un rango de cuántos tickets tienes guardados (por ejemplo "6-20") en lugar de la cifra exacta.` },
          { p: `Lo que no enviamos nunca: los importes que gastas, los nombres de los establecimientos, los nombres de los productos, las fotos de los tickets, tu presupuesto, tu correo, tu nombre ni ningún identificador con el que pudiéramos localizarte. No hay ninguna cuenta a la que asociar nada de eso.` },
          { p: `Firebase asigna su propio identificador de instalación y registra el modelo del dispositivo, la versión del sistema operativo y un país aproximado. Es la recogida estándar de Google para cualquier app que lo utilice y se rige por las condiciones de privacidad de Google.` },
          { p: `Puedes desactivar todo esto en la propia app, en Ajustes, y se queda desactivado. Desinstalar la app también lo detiene.` },
        ],
      },
      {
        h: `Lo Que No Hacemos Nunca`,
        body: [
          { list: [
            `Nunca nos conectamos a tu banco. No hay que vincular ninguna cuenta ni hay un proveedor de open banking en medio.`,
            `Nunca vendemos tus datos ni compartimos tus hábitos de compra con marcas, cadenas o intermediarios de datos. No hay ningún acuerdo de cashback financiando esta app.`,
            `No mostramos publicidad ni incorporamos SDK de publicidad o de rastreo.`,
            `No construimos ningún perfil tuyo con fines comerciales ni tomamos decisiones automatizadas que produzcan efectos jurídicos sobre ti.`,
          ] },
        ],
      },
      {
        h: `Quién Trata Los Datos Por Nosotros`,
        body: [
          { p: `Intervienen tres proveedores, cada uno para una tarea concreta:` },
          { list: [
            `Railway Corp. aloja el servidor que recibe la foto y la reenvía. Está en la región de Ámsterdam de Railway, dentro de la Unión Europea.`,
            `Anthropic PBC lee la foto del ticket a través de la API de Claude y devuelve las líneas extraídas. La imagen se envía para eso y para nada más.`,
            `Google Ireland Limited proporciona Firebase Analytics para los eventos de uso anónimos descritos arriba.`,
          ] },
          { p: `Nuestro servidor está en la Unión Europea. La foto del ticket se envía a Anthropic en Estados Unidos para leerla, y no se almacena allí. Firebase Analytics lo opera Google, que puede tratar los eventos anónimos en infraestructura fuera de la Unión Europea. Esas dos transferencias se amparan en las Cláusulas Contractuales Tipo de la Comisión Europea, incluidas en las condiciones de los proveedores.` },
        ],
      },
      {
        h: `Cuánto Tiempo Se Conservan Los Datos`,
        body: [
          { p: `La foto del ticket: no se conserva en absoluto. Existe en la memoria del servidor los segundos que dura el escaneo y se descarta al enviar la respuesta.` },
          { p: `El identificador anónimo de escaneo: solo en la memoria del servidor, nunca en disco. Los límites de escaneo usan como mucho los últimos 30 días, y el identificador desaparece cada vez que el servidor se reinicia.` },
          { p: `Los eventos de analítica: los conserva Google Firebase durante el periodo configurado en nuestro proyecto de Firebase, tras el cual Google los elimina.` },
          { p: `La analítica de la web, si la permitiste: la conserva Google Analytics durante el periodo configurado en nuestra propiedad, como máximo 14 meses. Las cookies de tu navegador caducan a los dos años, o en cuanto retiras el consentimiento.` },
          { p: `La lista de email de la web: hasta que te des de baja o nos pidas que borremos tu dirección.` },
          { p: `Todo lo demás: mientras mantengas la app instalada, en tu móvil y bajo tu control.` },
        ],
      },
      {
        h: `Tus Datos, Tu Control`,
        body: [
          { p: `Como tus datos viven en tu dispositivo y no en una cuenta, casi todo lo que te da el RGPD es algo que puedes hacer tú, al momento y sin pedírnoslo:` },
          { list: [
            `Exportar todo: en Ajustes hay un botón de exportar que vuelca todos tus tickets y cupones a un archivo que puedes guardar o enviar donde quieras.`,
            `Corregir lo que sea: cada ticket y cada cupón se pueden editar después de escanearlos, y no se guarda nada hasta que lo has revisado.`,
            `Borrar lo que sea: elimina tickets y cupones concretos desde la app, o borra la app para eliminarlo todo de una vez.`,
            `Desactivar la analítica: un interruptor en Ajustes detiene los eventos de uso anónimos.`,
          ] },
        ],
      },
      {
        id: `website`,
        h: `Esta Web`,
        body: [
          { p: `Todo lo anterior se refiere a la app. Esta web, ticketbrain.app, es aparte, y recoge dos cosas. Las dos son opcionales.` },
          { p: `Analítica, solo si la permites. Si eliges «Vale» en el aviso de cookies, la web carga Google Analytics, que guarda cookies propias (_ga y _ga_ seguida de un identificador, durante un máximo de dos años) para contar visitas y saber qué páginas se leen, desde qué web o buscador llegaste y qué botones se usan, como el enlace al App Store o el formulario de email. Google registra además una ubicación aproximada y el tipo de navegador y dispositivo. Si eliges «No, gracias», o simplemente ignoras el aviso, Google Analytics no se carga nunca y no se guarda ninguna cookie. Las funciones de publicidad de Google y Google Signals están desactivadas, así que nada de esto se usa para anuncios. Puedes cambiar de opinión cuando quieras desde «Configurar cookies», al pie de cada página.` },
          { p: `La lista de email, solo si te apuntas. Si dejas tu email para saber cuándo sale la versión de Android, se guarda en Mailchimp, de The Rocket Science Group LLC (Intuit), en Estados Unidos, con las garantías de sus condiciones de tratamiento de datos, incluidas las Cláusulas Contractuales Tipo de la Comisión Europea. Solo lo usamos para escribirte sobre TicketBrain, y pocas veces. Cada email lleva un enlace para darte de baja, y puedes pedirnos que borremos tu dirección cuando quieras.` },
          { p: `La base legal de las dos cosas es tu consentimiento, que puedes retirar cuando quieras sin que afecte a nada de lo anterior.` },
        ],
      },
      {
        h: `Tus Derechos Según El RGPD`,
        body: [
          { p: `Tienes derecho a acceder a tus datos personales, a que se rectifiquen los datos inexactos, a que se supriman, a recibirlos en un formato portable, a oponerte al tratamiento y a limitarlo.` },
          { p: `En la práctica apenas tenemos nada sobre lo que puedas ejercerlos, que es justamente el objetivo del diseño. Para lo que quede, escríbenos a la dirección de abajo y te responderemos en el plazo de un mes.` },
        ],
      },
      {
        h: `Menores`,
        body: [
          { p: `TicketBrain no está dirigida a menores y no tratamos conscientemente datos de personas menores de 14 años.` },
        ],
      },
      {
        h: `Cambios En Esta Política`,
        body: [
          { p: `Si cambia lo que la app hace con tus datos, esta página cambia primero, con una fecha nueva arriba. No vamos a empezar a recoger en silencio algo que esta política no mencione.` },
        ],
      },
    ],
    contact_title: `Contacto`,
    contact_content: `Si tienes alguna pregunta sobre esta Política de Privacidad o deseas ejercer tus derechos, puedes ponerte en contacto con nosotros en:`,
    contact_email: `Correo electrónico: hola@ticketbrain.app`,
    contact_address: `Barcelona, España`,
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

/**
 * Store listings. A URL makes that badge a real download link everywhere it
 * appears (hero, final CTA, footer, JSON-LD); null keeps it as a "coming soon"
 * label. Flip `play` to the Play Store URL the day the Android build is live.
 */
export const STORES = {
  apple: "https://apps.apple.com/app/id6809745492",
  play: null,
};

/** Chrome: navigation, footer and page furniture. */
export const ui = {
  en: {
    locale: "en-GB", langName: "English", otherLangName: "Español",
    nav: ["How it works", "Features", "Coupons", "Blog", "FAQ", "Privacy"],
    getApp: "Get the app", openMenu: "Open menu",
    footerTag: "Turn your grocery receipts into clear insights that actually help you save money.",
    storeLive: "Download on the", storeSoon: "Coming soon to",
    appStoreLabel: "Download TicketBrain on the App Store",
    playStoreLabel: "Get TicketBrain on Google Play",
    product: "Product", more: "More",
    privacyPolicy: "Privacy policy", support: "Support",
    blogTitle: "Grocery spending, explained",
    blogLede: "Insights on smart grocery shopping, AI-powered receipt analysis, and practical money-saving tips.",
    readMore: "Read more →", backToBlog: "← Back to blog", keepReading: "Keep reading",
    faqTitle: "Frequently asked questions", faqLede: "Everything you need to know about TicketBrain.",
    legalKicker: "Legal",
    notFoundTitle: "This page does not exist",
    notFoundLede: "The link may be old or mistyped.", notFoundCta: "Go back to the homepage",
    offerTitle: "Prefer English?", offerCta: "View in English", offerClose: "Dismiss",
    consentText: "Can we use Google Analytics cookies to see what works on this site? That's all.",
    consentAccept: "OK", consentReject: "No thanks", consentMore: "More info",
    cookieSettings: "Cookie settings",
    signup: { invalid: "Please enter a valid email address.", sending: "Sending...", button: "Notify me",
              ok: "You're on the list. We'll write once, the day Android is out.",
              exists: "You're already on the list. We'll write the day Android is out.",
              error: "Something went wrong. Please try again.", network: "Network error. Please try again later." },
  },
  es: {
    locale: "es-ES", langName: "Español", otherLangName: "English",
    nav: ["Cómo funciona", "Funciones", "Cupones", "Blog", "Preguntas", "Privacidad"],
    getApp: "Descargar la app", openMenu: "Abrir menú",
    footerTag: "Convierte los tickets del súper en información clara que de verdad te ayuda a ahorrar.",
    storeLive: "Descárgala en el", storeSoon: "Muy pronto en",
    appStoreLabel: "Descargar TicketBrain en el App Store",
    playStoreLabel: "Descargar TicketBrain en Google Play",
    product: "Producto", more: "Más",
    privacyPolicy: "Política de privacidad", support: "Soporte",
    blogTitle: "El gasto del súper, explicado",
    blogLede: "Ideas sobre compras inteligentes, análisis de tickets con IA y consejos prácticos para ahorrar dinero.",
    readMore: "Leer más →", backToBlog: "← Volver al blog", keepReading: "Sigue leyendo",
    faqTitle: "Preguntas frecuentes", faqLede: "Todo lo que necesitas saber sobre TicketBrain.",
    legalKicker: "Legal",
    notFoundTitle: "Esta página no existe",
    notFoundLede: "El enlace puede ser antiguo o estar mal escrito.", notFoundCta: "Volver al inicio",
    offerTitle: "¿Prefieres español?", offerCta: "Ver en español", offerClose: "Cerrar",
    consentText: "¿Usamos cookies de Google Analytics para ver qué funciona en la web? Nada más.",
    consentAccept: "Vale", consentReject: "No, gracias", consentMore: "Más info",
    cookieSettings: "Configurar cookies",
    signup: { invalid: "Escribe un email válido.", sending: "Enviando...", button: "Avísame",
              ok: "Ya estás en la lista. Te escribimos una vez, el día que salga Android.",
              exists: "Ya estabas en la lista. Te escribimos el día que salga Android.",
              error: "Algo ha fallado. Vuelve a intentarlo.", network: "Error de conexión. Inténtalo más tarde." },
  },
};

/**
 * Support page. It exists mainly because App Store Connect and Play Console
 * require a public support URL, and Apple's reviewers do open it: it has to
 * load, show a real way to reach a human, and answer the obvious questions.
 * The email addresses are the same iCloud+ ones the app's "Contact me" uses.
 */
export const supportPage = {
  en: {
    kicker: "Support",
    title: "Need a hand with TicketBrain?",
    lede: "TicketBrain is built and supported by one person, so you write to me directly. I read every message and usually reply within two working days.",
    email: "hello@ticketbrain.app",
    emailSubject: "TicketBrain support",
    emailCta: "Email me",
    emailNote: "If it is a bug, a screenshot and your phone model help a lot. You never need to send a receipt photo; describe what went wrong instead.",
    faqTitle: "Quick answers",
    faq: [
      ["The scan failed or read the wrong lines",
       "Scanning needs an internet connection and works best with a flat, well-lit receipt with the total visible. If a line comes out wrong you can edit it before saving, and nothing is stored until you confirm. If the same receipt fails twice, send me the store name and the error text."],
      ["Where is my data stored?",
       "On your phone, in a local database. There is no account and nothing is uploaded except the photo of a receipt while it is being read. That also means that if you delete the app, the data goes with it."],
      ["How do I back up or move to a new phone?",
       "Settings → Export my data creates a file with all your receipts and coupons. Save it to iCloud Drive, Google Drive or anywhere you like, then on the new phone use Settings → Restore from a backup. Restoring only adds what is missing; it never overwrites what you already have."],
      ["Coupon reminders are not arriving",
       "Reminders are local notifications, so the app needs notification permission. Check Settings → Coupon reminders in the app; if it says \"Blocked in device Settings\", allow notifications for TicketBrain in your phone's settings."],
      ["Can I change the language?",
       "Yes, from Settings → App language. You can follow the phone's language or pick English or Spanish. Spain gets Spain's Spanish; the rest of the Spanish-speaking world gets the neutral variant."],
      ["How do I delete everything?",
       "Delete the app. Since there is no account and no server copy, that removes all your data. If you turned on anonymous usage statistics, you can switch them off first in Settings → Share anonymous usage data."],
      ["I want to ask for a feature",
       "Please do. Feature requests are the best part of the inbox, and most of what is in the app today came from someone asking for it."],
    ],
    moreTitle: "More",
    links: [
      ["Frequently asked questions", "faq"],
      ["How we handle privacy", "privacy"],
      ["Privacy policy", "policy"],
    ],
  },
  es: {
    kicker: "Soporte",
    title: "¿Necesitas ayuda con TicketBrain?",
    lede: "TicketBrain la desarrolla y la mantiene una sola persona, así que me escribes directamente a mí. Leo todos los mensajes y suelo responder en dos días laborables.",
    email: "hola@ticketbrain.app",
    emailSubject: "Soporte TicketBrain",
    emailCta: "Escríbeme",
    emailNote: "Si es un error, una captura de pantalla y el modelo de tu móvil ayudan mucho. Nunca hace falta que mandes la foto de un ticket; cuéntame qué falló.",
    faqTitle: "Respuestas rápidas",
    faq: [
      ["El escaneo falló o leyó mal las líneas",
       "Escanear necesita conexión a internet y funciona mejor con el ticket plano, bien iluminado y con el total visible. Si una línea sale mal puedes editarla antes de guardar, y no se guarda nada hasta que confirmas. Si el mismo ticket falla dos veces, mándame el nombre de la tienda y el texto del error."],
      ["¿Dónde se guardan mis datos?",
       "En tu móvil, en una base de datos local. No hay cuenta y no se sube nada salvo la foto del ticket mientras se lee. Eso también significa que si borras la app, los datos se van con ella."],
      ["¿Cómo hago una copia o cambio de móvil?",
       "Ajustes → Exportar mis datos crea un archivo con todos tus tickets y cupones. Guárdalo en iCloud Drive, Google Drive o donde quieras, y en el móvil nuevo usa Ajustes → Restaurar desde una copia. Restaurar solo añade lo que falta; nunca sobrescribe lo que ya tienes."],
      ["No me llegan los recordatorios de cupones",
       "Los recordatorios son notificaciones locales, así que la app necesita permiso para notificar. Revisa Ajustes → Recordatorios de cupones dentro de la app; si dice \"Bloqueados en los Ajustes del móvil\", permite las notificaciones de TicketBrain en los ajustes del móvil."],
      ["¿Puedo cambiar el idioma?",
       "Sí, desde Ajustes → Idioma de la app. Puedes seguir el idioma del móvil o elegir español o inglés. En España se usa el español de España; en el resto de países hispanohablantes, la variante neutra."],
      ["¿Cómo borro todo?",
       "Borra la app. Como no hay cuenta ni copia en ningún servidor, con eso desaparecen todos tus datos. Si activaste las estadísticas anónimas de uso, puedes desactivarlas antes en Ajustes → Compartir datos de uso anónimos."],
      ["Quiero pedir una función",
       "Adelante. Las peticiones de funciones son lo mejor de la bandeja de entrada, y buena parte de lo que hay hoy en la app salió de alguien que la pidió."],
    ],
    moreTitle: "Más",
    links: [
      ["Preguntas frecuentes", "faq"],
      ["Cómo tratamos la privacidad", "privacy"],
      ["Política de privacidad", "policy"],
    ],
  },
};
