/* ============================================================
   Manette S.A.S. — script
   ============================================================ */

/* -------------------------------------------------------------
   1) CONFIGURACIÓN  ← EDITÁ ESTO (es lo único con tus datos)
   ------------------------------------------------------------- */
const CONFIG = {
  email:    "fedemarin@gmail.com",              // ← tu email real (se usa solo como referencia)
  whatsapp: "59898309443",                      // ← tu WhatsApp, solo dígitos con código de país (UY = 598)
  upwork:   "https://www.upwork.com/freelancers/~01f033d89a3a314097",
  linkedin: "https://www.linkedin.com/in/federicomarin/",
  web3formsKey: "8272a3bf-e781-4d19-b851-7172047133f8"    // ← pegá acá tu access key (gratis en https://web3forms.com)
};

/* -------------------------------------------------------------
   2) TRADUCCIONES
   ------------------------------------------------------------- */
const I18N = {
  es: {
    "a11y.skip": "Saltar al contenido",
    "ball.label": "Jugar a los penales del Mundial",

    "nav.services": "Servicios",
    "nav.ai": "IA",
    "nav.models": "Modelos",
    "nav.process": "Proceso",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Fábrica de software · GeneXus + SAP",
    "hero.title": "Tu sistema GeneXus, en buenas manos.",
    "hero.sub": "Mantenemos, evolucionamos e integramos aplicaciones GeneXus de forma tercerizada. Alcance y precio acordados antes de tocar una línea de código. Vos te enfocás en tu negocio; nosotros, en que el software siga andando y creciendo.",
    "hero.ctaPrimary": "Pedí un diagnóstico gratis",
    "hero.ctaSecondary": "Ver servicios",
    "hero.reassure": "Primera conversación sin costo ni compromiso · Respondemos en ~1 día hábil",
    "hero.available": "Disponible para nuevos proyectos",

    "readout.statusKey": "Estado",
    "readout.gxKey": "GeneXus",
    "readout.gxVal": "Todas las versiones (7.0 → hoy)",
    "readout.platKey": "Plataformas",
    "readout.platVal": "Web · Mobile · Windows",
    "readout.specKey": "Especialidad",
    "readout.specVal": "SAP · IA · APIs",

    "trust.stat1": "Job Success en Upwork",
    "trust.stat2": "Valoración de clientes",
    "trust.stat3": "Años con GeneXus",
    "trust.stat4": "Integraciones en producción",
    "trust.verify": "Verificá el perfil en Upwork →",

    "why.eyebrow": "Por qué Manette",
    "why.title": "Especialistas, no improvisados",
    "why.i1.title": "Nicho GeneXus + SAP",
    "why.i1.body": "No somos una consultora genérica. Vivimos de GeneXus —todas las versiones desde la 7.0, para web, mobile y Windows— y de conectarlo con SAP. Entendemos tu generador, tu base y tu integración desde el día uno.",
    "why.i2.title": "Sin sorpresas de alcance",
    "why.i2.body": "Acordamos qué se hace, en cuánto tiempo y a qué precio antes de empezar. Si algo cambia, lo conversamos primero. Nunca te enterás del costo al final.",
    "why.i3.title": "Bilingüe y en tu huso",
    "why.i3.body": "Trabajamos en español e inglés, desde Uruguay. Mismo huso horario que LatAm y solapamiento con EE.UU.: respuestas en el día, no al otro día.",
    "why.i4.title": "El código es tuyo",
    "why.i4.body": "Entregamos objetos GeneXus probados, empaquetados como XPZ y listos para importar. Documentados, sin ataduras: el día de mañana lo mantiene quien vos quieras.",

    "serv.eyebrow": "Servicios",
    "serv.title": "En qué te ayudamos",
    "serv.c1.title": "Mantenimiento sin dolores de cabeza",
    "serv.c1.body": "Soporte continuo, corrección de errores y mejoras sobre tus aplicaciones GeneXus en producción. Lo que ya tenés andando sigue vivo, al día y respondiendo.",
    "serv.c2.title": "Desarrollo que se integra solo",
    "serv.c2.body": "Sumamos capacidad a tu equipo o tomamos funcionalidades completas. Entregables claros y código listo para integrarse a lo que ya corre, sin reescribir tu sistema.",
    "serv.c3.title": "SAP conectado de verdad",
    "serv.c3.body": "Tus asientos contables, maestros de proveedores y documentos viajan entre GeneXus y SAP vía BAPI/RFC y web services SOAP. Menos carga manual, menos errores de retipeo.",
    "serv.c4.title": "User Controls y módulos a medida",
    "serv.c4.body": "Componentes visuales custom y módulos reutilizables empaquetados como XPZ, para resolver lo que los controles estándar no cubren. Gráficas, widgets, integraciones.",

    "ai.eyebrow": "Inteligencia artificial",
    "ai.title": "IA adentro de tu sistema, no en otra pestaña",
    "ai.lead": "Sumamos asistentes conversacionales y automatización con IA directamente sobre tus aplicaciones GeneXus. Tus usuarios consultan, redactan y resuelven sin salir del sistema que ya usan todos los días.",
    "ai.p1.title": "Asistentes embebidos",
    "ai.p1.body": "Un chat propio dentro de tu app GeneXus, con el contexto de tu negocio y tus datos.",
    "ai.p2.title": "Integración con modelos",
    "ai.p2.body": "Conexión con OpenAI, DeepSeek u otros LLM vía API, con la clave protegida del lado del servidor.",
    "ai.p3.title": "Automatización con sentido",
    "ai.p3.body": "Clasificación, resúmenes y respuestas automáticas donde de verdad ahorran tiempo, sin humo.",
    "ai.cta": "Quiero IA en mi sistema",
    "ai.chat.badge": "en vivo",
    "ai.chat.user": "¿Cuánto facturamos al cliente Acme este mes?",
    "ai.chat.bot": "Acme lleva 14 facturas en junio por USD 38.250. ¿Te muestro el detalle o lo exporto?",
    "ai.chat.user2": "Exportalo a Excel.",

    "models.eyebrow": "Cómo nos contratás",
    "models.title": "Elegí el modelo que te sirve",
    "models.lead": "Tres formas de trabajar juntos. Empezamos por la que mejor se adapte a tu necesidad y lo dejamos por escrito antes de arrancar.",
    "models.m1.tag": "Para un objetivo claro",
    "models.m1.title": "Proyecto a precio cerrado",
    "models.m1.body": "Alcance definido, precio fijo y fecha de entrega. Ideal cuando ya sabés qué necesitás y querés cero incertidumbre de presupuesto.",
    "models.m2.tag": "El más elegido",
    "models.m2.title": "Bolsa de horas",
    "models.m2.body": "Comprás un paquete de horas y las usás para lo que vaya surgiendo: mejoras, fixes, nuevas pantallas. Flexible y sin atarte a un proyecto único.",
    "models.m3.tag": "Tranquilidad continua",
    "models.m3.title": "Mantenimiento mensual",
    "models.m3.body": "Cuota fija al mes con tiempo de respuesta garantizado. Tu sistema queda monitoreado y atendido, y vos sabés a quién llamar cuando algo se rompe.",

    "proc.eyebrow": "Cómo trabajamos",
    "proc.title": "Del diagnóstico a la entrega",
    "proc.lead": "Trabajamos de forma ordenada y previsible: cada pieza encastra con la anterior y queda lista para integrarse a lo que ya tenés.",
    "proc.s1.title": "Diagnóstico",
    "proc.s1.body": "Entendemos tu sistema, tu generador y tu contexto. Sin sorpresas: te decimos qué se puede y qué conviene. Esta primera revisión es gratis.",
    "proc.s2.title": "Propuesta",
    "proc.s2.body": "Alcance, tiempos y forma de trabajo acordados por escrito antes de escribir una línea de código.",
    "proc.s3.title": "Desarrollo iterativo",
    "proc.s3.body": "Avances frecuentes y revisables. Confirmamos decisiones de diseño con vos antes de avanzar.",
    "proc.s4.title": "Entrega e integración",
    "proc.s4.body": "Código probado, listo para importar y poner en producción. Y, si querés, mantenimiento continuo.",

    "stack.eyebrow": "Tecnologías",
    "stack.title": "Con qué trabajamos",

    "testi.eyebrow": "Lo que dicen",
    "testi.title": "Clientes que ya delegaron su GeneXus",
    "testi.t1.quote": "\u201CTomaron un sistema GeneXus que nadie quería tocar y lo dejaron al día. Hoy respondemos pedidos de cambio en horas, no en semanas.\u201D",
    "testi.t1.role": "Responsable de IT",
    "testi.t1.sector": "Sector industrial",
    "testi.t2.quote": "\u201CLa integración con SAP funcionó a la primera en producción. Documentaron todo y el equipo interno pudo seguir desde ahí.\u201D",
    "testi.t2.role": "Gerente de Sistemas",
    "testi.t2.sector": "Sector servicios",
    "testi.t3.quote": "\u201CPrecio cerrado, entrega en fecha y código limpio. Lo que se acordó al principio fue exactamente lo que pagamos al final.\u201D",
    "testi.t3.role": "Dirección de Proyecto",
    "testi.t3.sector": "Sector salud",

    "faq.eyebrow": "Preguntas frecuentes",
    "faq.title": "Las dudas de siempre, despejadas",
    "faq.q1.q": "¿Pueden hacerse cargo de un sistema que no desarrollaron ustedes?",
    "faq.q1.a": "Sí. Es lo más común. Empezamos con un diagnóstico para entender el sistema, su generador y su base, y de ahí proponemos cómo mantenerlo o mejorarlo. No necesitás documentación perfecta para arrancar.",
    "faq.q2.q": "¿Cómo cobran? ¿Por hora, por proyecto?",
    "faq.q2.a": "Las tres formas: proyecto a precio cerrado, bolsa de horas o mantenimiento mensual. Elegimos juntos la que mejor se adapte y queda por escrito antes de empezar.",
    "faq.q3.q": "¿De quién es el código que entregan?",
    "faq.q3.a": "Tuyo. Entregamos los objetos GeneXus probados y empaquetados como XPZ, listos para importar y mantener por quien vos quieras. Sin dependencias ocultas ni candados.",
    "faq.q4.q": "¿Trabajan con clientes fuera de Uruguay?",
    "faq.q4.a": "Sí. Trabajamos en español e inglés y tenemos clientes a través de Upwork. Nuestro huso horario solapa con LatAm y buena parte del día de EE.UU.",
    "faq.q5.q": "¿Cuánto tardan en responder una consulta?",
    "faq.q5.a": "El primer contacto lo respondemos en alrededor de un día hábil. Con mantenimiento mensual, el tiempo de respuesta queda garantizado por contrato.",

    "contact.eyebrow": "Contacto",
    "contact.title": "Contanos qué necesitás",
    "contact.lead": "Tenés un sistema GeneXus que mantener o una funcionalidad nueva por desarrollar. Escribinos: la primera conversación y el diagnóstico no tienen costo.",
    "contact.promise1": "Respuesta en ~1 día hábil",
    "contact.promise2": "Diagnóstico inicial sin costo",
    "contact.promise3": "Sin compromiso ni letra chica",
    "contact.name": "Nombre",
    "contact.company": "Empresa",
    "contact.email": "Email",
    "contact.type": "¿Qué necesitás?",
    "contact.type.opt0": "Elegí una opción",
    "contact.type.opt1": "Mantenimiento de un sistema existente",
    "contact.type.opt2": "Desarrollo de algo nuevo",
    "contact.type.opt3": "Integración con SAP / APIs",
    "contact.type.opt4": "User Control o módulo a medida",
    "contact.type.opt5": "Otra cosa / no estoy seguro",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.sending": "Enviando…",
    "contact.hint": "Te respondemos en ~1 día hábil.",
    "contact.hintError": "Completá nombre, email y mensaje antes de enviar.",
    "contact.success": "¡Listo! Recibimos tu mensaje y te respondemos a la brevedad.",
    "contact.fail": "No se pudo enviar. Probá de nuevo o escribinos por WhatsApp.",
    "contact.noKey": "Falta configurar la access key de Web3Forms en script.js.",

    "footer.loc": "Fábrica de software GeneXus · Uruguay",

    "mail.subject": "Consulta desde manette.uy",
    "mail.type": "Tipo de proyecto"
  },

  en: {
    "a11y.skip": "Skip to content",
    "ball.label": "Play the World Cup penalty shootout",

    "nav.services": "Services",
    "nav.ai": "AI",
    "nav.models": "Models",
    "nav.process": "Process",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",

    "hero.eyebrow": "Software factory · GeneXus + SAP",
    "hero.title": "Your GeneXus system, in good hands.",
    "hero.sub": "We maintain, evolve and integrate GeneXus applications on an outsourced basis. Scope and price agreed before we touch a single line of code. You focus on your business; we keep the software running and growing.",
    "hero.ctaPrimary": "Get a free assessment",
    "hero.ctaSecondary": "See services",
    "hero.reassure": "First call free, no strings attached · We reply within ~1 business day",
    "hero.available": "Available for new projects",

    "readout.statusKey": "Status",
    "readout.gxKey": "GeneXus",
    "readout.gxVal": "Every version (7.0 → today)",
    "readout.platKey": "Platforms",
    "readout.platVal": "Web · Mobile · Windows",
    "readout.specKey": "Specialty",
    "readout.specVal": "SAP · AI · APIs",

    "trust.stat1": "Job Success on Upwork",
    "trust.stat2": "Client rating",
    "trust.stat3": "Years with GeneXus",
    "trust.stat4": "Integrations in production",
    "trust.verify": "Check the Upwork profile →",

    "why.eyebrow": "Why Manette",
    "why.title": "Specialists, not generalists",
    "why.i1.title": "GeneXus + SAP niche",
    "why.i1.body": "We're not a generic consultancy. We live and breathe GeneXus —every version since 7.0, for web, mobile and Windows— and connecting it to SAP. We understand your generator, your database and your integration from day one.",
    "why.i2.title": "No scope surprises",
    "why.i2.body": "We agree what gets done, in how long and at what price before starting. If something changes, we talk it through first. You never learn the cost at the end.",
    "why.i3.title": "Bilingual and in your timezone",
    "why.i3.body": "We work in Spanish and English, from Uruguay. Same timezone as Latin America and overlap with the US: answers the same day, not the next.",
    "why.i4.title": "The code is yours",
    "why.i4.body": "We hand over tested GeneXus objects, packaged as XPZ and ready to import. Documented, with no lock-in: whoever you choose can maintain it tomorrow.",

    "serv.eyebrow": "Services",
    "serv.title": "How we help",
    "serv.c1.title": "Maintenance without the headaches",
    "serv.c1.body": "Ongoing support, bug fixing and improvements on your GeneXus applications in production. What you already run stays alive, up to date and responsive.",
    "serv.c2.title": "Development that just plugs in",
    "serv.c2.body": "We extend your team or take full ownership of features. Clear deliverables and code ready to integrate with what you already run, without rewriting your system.",
    "serv.c3.title": "SAP truly connected",
    "serv.c3.body": "Your accounting entries, vendor master data and documents move between GeneXus and SAP via BAPI/RFC and SOAP web services. Less manual entry, fewer rekeying errors.",
    "serv.c4.title": "Custom User Controls & modules",
    "serv.c4.body": "Custom visual components and reusable modules packaged as XPZ, to solve what standard controls can't. Charts, widgets, integrations.",

    "ai.eyebrow": "Artificial intelligence",
    "ai.title": "AI inside your system, not in another tab",
    "ai.lead": "We add conversational assistants and AI automation right on top of your GeneXus applications. Your users ask, draft and get things done without leaving the system they already use every day.",
    "ai.p1.title": "Embedded assistants",
    "ai.p1.body": "Your own chat inside your GeneXus app, with the context of your business and your data.",
    "ai.p2.title": "Model integration",
    "ai.p2.body": "Connection to OpenAI, DeepSeek or other LLMs via API, with the key kept safe on the server side.",
    "ai.p3.title": "Automation that makes sense",
    "ai.p3.body": "Classification, summaries and automatic replies where they actually save time, no hype.",
    "ai.cta": "I want AI in my system",
    "ai.chat.badge": "live",
    "ai.chat.user": "How much did we invoice client Acme this month?",
    "ai.chat.bot": "Acme has 14 invoices in June totalling USD 38,250. Want the breakdown or should I export it?",
    "ai.chat.user2": "Export it to Excel.",

    "models.eyebrow": "How you hire us",
    "models.title": "Pick the model that fits",
    "models.lead": "Three ways to work together. We start with whichever fits your need best and put it in writing before we begin.",
    "models.m1.tag": "For a clear goal",
    "models.m1.title": "Fixed-price project",
    "models.m1.body": "Defined scope, fixed price and delivery date. Ideal when you already know what you need and want zero budget uncertainty.",
    "models.m2.tag": "Most chosen",
    "models.m2.title": "Block of hours",
    "models.m2.body": "Buy a package of hours and spend them on whatever comes up: improvements, fixes, new screens. Flexible, without tying you to a single project.",
    "models.m3.tag": "Ongoing peace of mind",
    "models.m3.title": "Monthly maintenance",
    "models.m3.body": "Fixed monthly fee with a guaranteed response time. Your system stays monitored and looked after, and you know who to call when something breaks.",

    "proc.eyebrow": "How we work",
    "proc.title": "From diagnosis to delivery",
    "proc.lead": "We work in an orderly, predictable way: each piece fits the last and arrives ready to integrate with what you already run.",
    "proc.s1.title": "Diagnosis",
    "proc.s1.body": "We understand your system, your generator and your context. No surprises: we tell you what's possible and what's wise. This first review is free.",
    "proc.s2.title": "Proposal",
    "proc.s2.body": "Scope, timing and ways of working agreed in writing before writing a single line of code.",
    "proc.s3.title": "Iterative development",
    "proc.s3.body": "Frequent, reviewable progress. We confirm design decisions with you before moving on.",
    "proc.s4.title": "Delivery & integration",
    "proc.s4.body": "Tested code, ready to import and ship to production. And ongoing maintenance if you want it.",

    "stack.eyebrow": "Technologies",
    "stack.title": "What we work with",

    "testi.eyebrow": "What they say",
    "testi.title": "Clients who already handed over their GeneXus",
    "testi.t1.quote": "\u201CThey took on a GeneXus system nobody wanted to touch and brought it up to date. We now turn around change requests in hours, not weeks.\u201D",
    "testi.t1.role": "Head of IT",
    "testi.t1.sector": "Industrial sector",
    "testi.t2.quote": "\u201CThe SAP integration worked first time in production. They documented everything and our in-house team could carry on from there.\u201D",
    "testi.t2.role": "Systems Manager",
    "testi.t2.sector": "Services sector",
    "testi.t3.quote": "\u201CFixed price, on-time delivery and clean code. What we agreed at the start was exactly what we paid at the end.\u201D",
    "testi.t3.role": "Project Lead",
    "testi.t3.sector": "Healthcare sector",

    "faq.eyebrow": "FAQ",
    "faq.title": "The usual questions, answered",
    "faq.q1.q": "Can you take over a system you didn't build?",
    "faq.q1.a": "Yes. It's the most common case. We start with a diagnosis to understand the system, its generator and its database, and from there we propose how to maintain or improve it. You don't need perfect documentation to get going.",
    "faq.q2.q": "How do you charge? By the hour, by project?",
    "faq.q2.a": "All three ways: fixed-price project, block of hours or monthly maintenance. We pick the best fit together and put it in writing before starting.",
    "faq.q3.q": "Who owns the code you deliver?",
    "faq.q3.a": "You do. We hand over tested GeneXus objects packaged as XPZ, ready to import and maintain by whoever you choose. No hidden dependencies, no lock-in.",
    "faq.q4.q": "Do you work with clients outside Uruguay?",
    "faq.q4.a": "Yes. We work in Spanish and English and have clients through Upwork. Our timezone overlaps with Latin America and much of the US business day.",
    "faq.q5.q": "How fast do you reply to an enquiry?",
    "faq.q5.a": "We answer the first contact within about one business day. With monthly maintenance, the response time is guaranteed by contract.",

    "contact.eyebrow": "Contact",
    "contact.title": "Tell us what you need",
    "contact.lead": "Got a GeneXus system to maintain or a new feature to build? Write to us: the first call and the assessment are free.",
    "contact.promise1": "Reply within ~1 business day",
    "contact.promise2": "Free initial assessment",
    "contact.promise3": "No commitment, no fine print",
    "contact.name": "Name",
    "contact.company": "Company",
    "contact.email": "Email",
    "contact.type": "What do you need?",
    "contact.type.opt0": "Choose an option",
    "contact.type.opt1": "Maintenance of an existing system",
    "contact.type.opt2": "Building something new",
    "contact.type.opt3": "SAP / API integration",
    "contact.type.opt4": "User Control or custom module",
    "contact.type.opt5": "Something else / not sure",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sending": "Sending…",
    "contact.hint": "We'll reply within ~1 business day.",
    "contact.hintError": "Please fill in name, email and message before sending.",
    "contact.success": "Done! We got your message and will reply shortly.",
    "contact.fail": "Couldn't send. Please try again or reach us on WhatsApp.",
    "contact.noKey": "The Web3Forms access key is not set in script.js.",

    "footer.loc": "GeneXus software factory · Uruguay",

    "mail.subject": "Inquiry from manette.uy",
    "mail.type": "Project type"
  }
};

/* -------------------------------------------------------------
   3) ESTADO + APLICAR IDIOMA
   ------------------------------------------------------------- */
const body = document.body;
let lang = (navigator.language || "es").toLowerCase().startsWith("en") ? "en" : "es";

function applyLang(l) {
  lang = l;
  body.setAttribute("data-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N[l][key] !== undefined) el.textContent = I18N[l][key];
  });
  document.querySelectorAll("[data-i18n-label]").forEach(el => {
    const v = I18N[l][el.getAttribute("data-i18n-label")];
    if (v !== undefined) { el.setAttribute("aria-label", v); el.setAttribute("title", v); }
  });
  const lever = document.getElementById("langLever");
  lever.setAttribute("aria-checked", l === "en" ? "true" : "false");
}

/* -------------------------------------------------------------
   4) PALANCA DE IDIOMA (la "manette")
   ------------------------------------------------------------- */
document.getElementById("langLever").addEventListener("click", () => {
  applyLang(lang === "es" ? "en" : "es");
});

/* -------------------------------------------------------------
   5) MENÚ MOBILE
   ------------------------------------------------------------- */
function setupMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");
  if (!toggle || !nav) return;

  function close() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }
  function open() {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Cerrar menú");
  }

  toggle.addEventListener("click", () => {
    nav.classList.contains("is-open") ? close() : open();
  });
  // cerrar al elegir un destino
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  // cerrar con Escape
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* -------------------------------------------------------------
   6) ENLACES DE CONTACTO
   ------------------------------------------------------------- */
function setupChannels() {
  const wa = document.getElementById("waLink");
  if (wa) wa.href = "https://wa.me/" + CONFIG.whatsapp;
  const up = document.getElementById("upworkLink");
  if (up) up.href = CONFIG.upwork;
  const li = document.getElementById("linkedinLink");
  if (li) li.href = CONFIG.linkedin;
  const verify = document.getElementById("upworkVerify");
  if (verify) verify.href = CONFIG.upwork;
}

/* -------------------------------------------------------------
   7) FORMULARIO → Web3Forms (sin backend)
   ------------------------------------------------------------- */
function setupForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const hint = document.getElementById("formHint");
  const submit = document.getElementById("cf-submit");

  function setHint(key, cls) {
    hint.textContent = I18N[lang][key];
    hint.classList.remove("is-error", "is-ok");
    if (cls) hint.classList.add(cls);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const company = form.company.value.trim();
    const email = form.email.value.trim();
    const projectType = form.project_type ? form.project_type.value : "";
    const message = form.message.value.trim();

    if (!name || !email || !message) { setHint("contact.hintError", "is-error"); return; }
    if (!CONFIG.web3formsKey || CONFIG.web3formsKey.startsWith("TU_ACCESS_KEY")) {
      setHint("contact.noKey", "is-error"); return;
    }
    if (form.botcheck.checked) return; // honeypot: es un bot

    submit.disabled = true;
    const original = submit.textContent;
    submit.textContent = I18N[lang]["contact.sending"];
    setHint("contact.hint", null);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: CONFIG.web3formsKey,
          subject: I18N[lang]["mail.subject"],
          from_name: name,
          name: name,
          email: email,
          company: company || "—",
          project_type: projectType || "—",
          message: message,
          botcheck: false
        })
      });
      const data = await res.json();
      if (data.success) {
        form.reset();
        setHint("contact.success", "is-ok");
      } else {
        setHint("contact.fail", "is-error");
      }
    } catch (err) {
      setHint("contact.fail", "is-error");
    } finally {
      submit.disabled = false;
      submit.textContent = original;
    }
  });
}

/* -------------------------------------------------------------
   8) REVEAL al hacer scroll
   ------------------------------------------------------------- */
function setupReveal() {
  const items = document.querySelectorAll(".card, .step, .section-head, .hero-visual, .proc-visual, .why-item, .model, .testi, .faq-item");
  items.forEach(el => el.classList.add("reveal"));
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
  items.forEach(el => io.observe(el));

  // Red de seguridad: si algo no llegó a dispararse, mostralo igual.
  setTimeout(() => items.forEach(el => el.classList.add("is-in")), 1500);
}

/* -------------------------------------------------------------
   9) INIT
   ------------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();
applyLang(lang);
setupMenu();
setupChannels();
setupForm();
setupReveal();
