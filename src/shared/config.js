/* ─────────────────────────────────────────
   CONFIGURAÇÃO DE RASTREAMENTO
   Preencha os IDs abaixo (ou defina as variáveis de ambiente
   VITE_META_PIXEL_ID / VITE_GA4_ID na hospedagem).
   Enquanto estiverem vazios, nada é carregado.
   - Pixel da Meta: Gerenciador de Eventos → Fontes de dados → ID (só números)
   - GA4 (opcional): Admin → Fluxos de dados → ID da métrica (G-XXXXXXX)
───────────────────────────────────────── */
export const TRACKING = {
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID || "",
  ga4Id: import.meta.env.VITE_GA4_ID || "",
};

/* Formulário (Formspree) e WhatsApp */
export const FORMSPREE_URL = "https://formspree.io/f/mlgalgly";
export const WA_NUMBER = "5585992215449";
