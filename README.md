# Manette S.A.S. — sitio web

Sitio estático (HTML + CSS + JS, sin base de datos) pensado para captar clientes.
Bilingüe ES/EN con conmutador (la "manette"), tema de consola de control.

## Archivos
- `index.html` — estructura y contenido
- `styles.css` — estilos del sitio (compartidos por ambas páginas)
- `script.js` — idioma, palanca ES/EN, menú mobile, formulario y enlaces
- `mundial.html` — página del mini-juego (copia del sitio con el juego adentro)
- `mundial.css` — estilos del juego de penales
- `game.js` — lógica del juego de penales

## El juego (pelota del cabezal)
La pelota a la derecha de "Manette S.A.S." lleva a `mundial.html`, con tres
mini-juegos del Mundial 2026 y un selector arriba para cambiar entre ellos:
- **Penales** — tanda al mejor de cinco, Uruguay vs un rival al azar. Pateás y
  atajás (la fase se distingue con cartel y color: ámbar para patear, celeste
  para atajar).
- **Memotest** — encontrá las parejas de selecciones en la grilla de banderas.
- **Dominadas** — mantené la pelota en el aire tocándola; guarda tu récord de
  la sesión.
- **Flappy** — pelota voladora: tocá (o clic / barra espaciadora) para aletear
  y pasá entre los arcos sin chocar; guarda tu récord de la sesión.

Todo es bilingüe (sigue el switch ES/EN), sin librerías externas. La marca del
cabezal del juego vuelve al sitio (`index.html`).

## Lo único que tenés que editar
Los datos reales (email, WhatsApp y la access key de Web3Forms) ya están cargados
en el bloque `CONFIG` de `script.js`. Si cambian, editalos ahí:

```js
const CONFIG = {
  email:    "hola@manette.uy",   // referencia
  whatsapp: "59899000000",       // ← WhatsApp, solo dígitos con código de país (UY = 598)
  upwork:   "https://www.upwork.com/freelancers/~01f033d89a3a314097",
  linkedin: "https://www.linkedin.com/in/federicomarin/",
  web3formsKey: "TU_ACCESS_KEY_DE_WEB3FORMS"   // ← ver abajo
};
```

### Formulario de contacto (Web3Forms)
El formulario envía el correo directo a tu casilla, sin servidor propio.

1. Entrá a https://web3forms.com, poné tu email y te dan una **access key** gratis.
2. Pegá esa key en `CONFIG.web3formsKey`.
3. Listo: cada mensaje del formulario te llega a ese email (incluye el campo
   "¿Qué necesitás?" para que llegue pre-calificado).

Mientras no pongas la key, el formulario avisa que falta configurarla.
Incluye un campo *honeypot* oculto para frenar spam de bots.

- **whatsapp**: formato internacional sin `+`, sin espacios ni guiones.
- Upwork y LinkedIn ya quedaron con tus enlaces; cambialos si hace falta.

## Antes de publicar: testimonios
La sección **Testimonios** trae textos de ejemplo, marcados con un comentario
en `index.html` (`REEMPLAZAR con testimonios reales`). Sustituílos por citas
reales de clientes. Si no tenés permiso para publicar nombres, dejá solo el
rol y el sector (como están ahora). Las traducciones de esos textos están en
`script.js`, en las claves `testi.*`.

## Qué cambió respecto a la versión anterior
**Estructura para vender mejor**
- Propuesta de valor más clara y CTA con gancho de bajo compromiso
  ("diagnóstico gratis", "respuesta en ~1 día hábil").
- Nueva sección **Por qué Manette** (diferenciadores y manejo de objeciones).
- Servicios reescritos en clave de resultado, no de feature.
- Nueva sección **Modelos de trabajo** (precio cerrado / bolsa de horas / mensual).
- Nueva sección **IA** con un mockup de asistente embebido (asistentes en tu app,
  integración con LLM y automatización).
- Cobertura de **todas las versiones de GeneXus (desde 7.0)** y plataformas
  **web, mobile y Windows**, reflejada en el hero, el stack y los textos.
- Nueva sección **Testimonios** (placeholders editables).
- Nueva sección **Preguntas frecuentes** (objeciones típicas despejadas).
- Tira de confianza con link verificable a Upwork.
- Formulario con campo "¿Qué necesitás?" para calificar la consulta.

**UI / UX**
- Menú **hamburguesa funcional en mobile** (antes la navegación desaparecía).
- Quité los números 01–04 de los servicios (no son una secuencia); quedan solo
  en el Proceso, donde el orden sí significa algo.
- La barra de stats pasó a un **readout tipo instrumento** sobre la palanca.
- Fondo del contacto cambiado a textura de consola (mejor legibilidad).
- `skip link`, foco visible, `prefers-reduced-motion` y `aria-*` revisados.

## Cómo probarlo
Abrí `index.html` en el navegador. Para las tipografías (Google Fonts) y para
el envío del formulario necesitás conexión a internet.

## Notas
- El formulario usa **Web3Forms**: el sitio sigue siendo estático (no hay
  servidor ni base de datos que mantener), pero el envío sale directo a tu
  correo.
- El idioma arranca según el navegador del visitante y se cambia con la palanca
  arriba a la derecha.
