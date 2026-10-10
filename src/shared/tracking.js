import { TRACKING } from "./config.js";

const ATTR_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"];
const STORAGE_KEY = "axi_attribution";

function loadMetaPixel(id) {
  /* Snippet oficial do Pixel da Meta */
  /* eslint-disable */
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq("init", id);
  window.fbq("track", "PageView");
}

function loadGA4(id) {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", id);
}

/* Guarda UTMs / fbclid / gclid da primeira página da visita,
   para enviar junto com o formulário e saber qual anúncio trouxe o lead. */
function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found = {};
    ATTR_KEYS.forEach((k) => { if (params.get(k)) found[k] = params.get(k); });
    if (Object.keys(found).length) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch (_) { /* navegação privada ou storage bloqueado */ }
}

export function getAttribution() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch (_) {
    return {};
  }
}

export function initTracking() {
  captureAttribution();
  if (TRACKING.metaPixelId) loadMetaPixel(TRACKING.metaPixelId);
  if (TRACKING.ga4Id) loadGA4(TRACKING.ga4Id);
}

const GA_NAMES = { Lead: "generate_lead", Contact: "contact" };

export function track(event, params = {}) {
  try {
    if (window.fbq) window.fbq("track", event, params);
    if (window.gtag) window.gtag("event", GA_NAMES[event] || event, params);
  } catch (_) { /* nunca quebra a página por causa de rastreamento */ }
}

/* Usar no onClick de qualquer link de WhatsApp */
export function trackWhatsApp(origem) {
  track("Contact", { content_name: origem });
}
