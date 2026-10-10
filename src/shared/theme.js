import { WA_NUMBER } from "./config.js";

/* ─────────────────────────────────────────
   IMAGENS (pasta public/img)
───────────────────────────────────────── */
export const IMG = {
  logoDark:  "/img/logo-negativa.webp",
  logoLight: "/img/logo.webp",
  juntos:    "/img/igor-e-wilton.webp",
  igor:      "/img/igor.webp",
  wilton:    "/img/wilton.webp",
};

export const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/* ─────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────── */
export const C = {
  green:      "#00C97B",
  greenDark:  "#009A5E",
  greenLight: "#E8FAF2",
  greenFaint: "rgba(0,201,123,0.08)",
  dark:       "#0D110F",
  darkCard:   "#141A16",
  cream:      "#F7F5F0",
  creamDark:  "#EDE9E1",
  charcoal:   "#1C221E",
  muted:      "#6B7A72",
  mutedLight: "#8A9890",
  text:       "#E8F0EB",
  textDark:   "#1A2018",
  border:     "rgba(0,201,123,0.18)",
  borderLight:"rgba(0,0,0,0.1)",
  red:        "#E53E3E",
  redFaint:   "rgba(229,62,62,0.08)",
};

/* ─────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────── */
export const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --green: ${C.green};
    --green-dark: ${C.greenDark};
    --cream: ${C.cream};
    --dark: ${C.dark};
    --radius: 12px;
    --radius-sm: 8px;
    --radius-lg: 20px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif;
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${C.cream};
    color: ${C.textDark};
  }

  .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

  /* ── BUTTONS ── */
  .btn {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: inherit; font-weight: 600; font-size: 15px;
    padding: 14px 28px; border: none; cursor: pointer;
    text-decoration: none; transition: all 0.2s ease;
    border-radius: var(--radius-sm); letter-spacing: -0.01em;
    white-space: nowrap;
  }
  .btn-primary {
    background: ${C.green}; color: #fff;
    box-shadow: 0 2px 16px rgba(0,201,123,0.3);
  }
  .btn-primary:hover {
    background: ${C.greenDark}; transform: translateY(-1px);
    box-shadow: 0 4px 24px rgba(0,201,123,0.4);
  }
  .btn-dark {
    background: ${C.dark}; color: ${C.text};
    box-shadow: 0 2px 12px rgba(0,0,0,0.2);
  }
  .btn-dark:hover { background: ${C.charcoal}; transform: translateY(-1px); }
  .btn-outline {
    background: transparent; color: ${C.green};
    border: 1.5px solid ${C.green};
  }
  .btn-outline:hover { background: ${C.greenFaint}; }
  .btn-outline-dark {
    background: transparent; color: ${C.text};
    border: 1.5px solid rgba(255,255,255,0.2);
  }
  .btn-outline-dark:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.05); }
  .btn-lg { padding: 18px 36px; font-size: 16px; border-radius: var(--radius); }
  .btn-sm { padding: 10px 20px; font-size: 13px; }

  /* ── BADGES / TAGS ── */
  .tag {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.10em;
    text-transform: uppercase; padding: 6px 14px;
    border-radius: 100px; margin-bottom: 20px;
  }
  .tag-green  { background: ${C.greenLight}; color: ${C.greenDark}; border: 1px solid rgba(0,201,123,0.2); }
  .tag-dark   { background: rgba(255,255,255,0.08); color: ${C.green}; border: 1px solid rgba(0,201,123,0.2); }
  .tag-red    { background: ${C.redFaint}; color: ${C.red}; border: 1px solid rgba(229,62,62,0.2); }

  /* ── CARDS ── */
  .card {
    border-radius: var(--radius);
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .card-light {
    background: #fff; border: 1px solid ${C.borderLight};
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  }
  .card-light:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.10); transform: translateY(-2px); }
  .card-dark {
    background: ${C.darkCard}; border: 1px solid ${C.border};
  }
  .card-dark:hover { border-color: rgba(0,201,123,0.4); }

  /* ── SECTIONS ── */
  section { padding: 96px 0; }

  /* ── INPUTS ── */
  .field {
    width: 100%; background: #fff;
    border: 1.5px solid #E2E8E4; color: ${C.textDark};
    font-family: inherit; font-size: 15px;
    padding: 14px 16px; outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    border-radius: var(--radius-sm);
  }
  .field:focus { border-color: ${C.green}; box-shadow: 0 0 0 3px rgba(0,201,123,0.12); }
  .field::placeholder { color: #A0AEA6; }

  /* ── STAT NUMBER ── */
  .stat-num {
    font-size: clamp(34px, 5vw, 52px);
    font-weight: 900; line-height: 1;
    letter-spacing: -0.03em;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.6s ease both; }

  @keyframes pulseDot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.6; transform: scale(0.85); }
  }
  .pulse-dot { animation: pulseDot 1.6s ease infinite; }

  /* ── DIVIDER ── */
  .section-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent);
  }
  .section-divider-dark {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
  }

  /* ── FOOTER LINKS ── */
  .footer-link { color: rgba(255,255,255,0.4); font-size: 14px; text-decoration: none; transition: color 0.2s; }
  .footer-link:hover { color: ${C.green}; }

  @media (max-width: 900px) {
    section { padding: 64px 0; }
    .br-desktop { display: none; }
    .container { padding: 0 18px; }
    .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
    .three-col { grid-template-columns: 1fr !important; }
    .hide-mobile { display: none !important; }
    .btn-lg { padding: 16px 24px; font-size: 15px; width: 100%; justify-content: center; }

    .nav-logo { height: 22px !important; }

    .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
    .hero-copy h1 { font-size: clamp(30px, 10vw, 42px) !important; line-height: 1.1 !important; }
    .hero-copy p { font-size: 16px !important; line-height: 1.7 !important; }
    .hero-actions { flex-direction: column; align-items: stretch; margin-bottom: 40px !important; }
    .hero-stats { gap: 24px !important; }
    .hero-image { height: 360px !important; }
    .hero-badge {
      position: static !important;
      margin-top: 16px;
      margin-left: 0 !important;
      width: 100%;
      justify-content: center;
    }

    .method-layout { gap: 32px !important; }
    .method-aside { position: static !important; top: auto !important; }
    .method-step { padding: 22px 18px 22px 16px !important; }
    .method-step-row { gap: 12px !important; }
    .method-step h3 { font-size: 17px !important; line-height: 1.35 !important; }
    .method-step p { word-break: break-word; }
  }
`;
