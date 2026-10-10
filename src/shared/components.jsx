import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, ChevronDown, Clock, Mail, Phone, Shield, Star, Zap } from "lucide-react";
import { C, IMG, waLink } from "./theme.js";
import { FORMSPREE_URL } from "./config.js";
import { getAttribution, track, trackWhatsApp } from "./tracking.js";

/* ─────────────────────────────────────────
   HOOKS
───────────────────────────────────────── */
export function useCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const upd = () => {
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const diff = end - now;
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    upd();
    const id = setInterval(upd, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function useScrolled(threshold = 40) {
  const [s, setS] = useState(false);
  useEffect(() => {
    const fn = () => setS(window.scrollY > threshold);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return s;
}

/* ─────────────────────────────────────────
   LINK DE WHATSAPP (já com rastreamento)
───────────────────────────────────────── */
export function WaButton({ msg, origem, className, children, style }) {
  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      onClick={() => trackWhatsApp(origem)}
    >
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────
   BOTÃO FIXO NO CELULAR
   Aparece depois do topo e some enquanto o formulário está na tela.
───────────────────────────────────────── */
export function StickyCTA({ label = "Agendar diagnóstico gratuito" }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let formVisible = false;
    const upd = () => setShow(window.scrollY > 600 && !formVisible);
    let io;
    const el = document.getElementById("diagnostico");
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(([entry]) => { formVisible = entry.isIntersecting; upd(); }, { threshold: 0.05 });
      io.observe(el);
    }
    window.addEventListener("scroll", upd, { passive: true });
    upd();
    return () => { window.removeEventListener("scroll", upd); if (io) io.disconnect(); };
  }, []);

  return (
    <div className={`sticky-cta${show ? " is-visible" : ""}`} aria-hidden={!show}>
      <a href="#diagnostico" className="btn btn-primary" tabIndex={show ? 0 : -1}>
        {label} <ArrowRight size={18} />
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────
   NAV
───────────────────────────────────────── */
export function Nav({ links, ctaLabel = "Diagnóstico grátis", homeHref = "/" }) {
  const scrolled = useScrolled(50);

  return (
    <>
      <style>{`
        .nav-link {
          color: ${scrolled ? C.textDark : "rgba(255,255,255,0.85)"};
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
          padding: 4px 0;
        }
        .nav-link:hover { color: ${C.green}; }
      `}</style>

      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: scrolled ? "rgba(247,245,240,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.borderLight}` : "none",
        transition: "all 0.35s ease",
        padding: "16px 0",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.07)" : "none",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <a href={homeHref} aria-label="Axi Business" style={{ display: "flex" }}>
            <img
              src={scrolled ? IMG.logoLight : IMG.logoDark}
              alt="Axi Business"
              width="168"
              height="22"
              className="nav-logo"
              style={{ height: 22, width: "auto", objectFit: "contain" }}
            />
          </a>

          <div className="hide-mobile" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="#diagnostico" className="btn btn-primary btn-sm">
              {ctaLabel}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

/* ─────────────────────────────────────────
   PROVA SOCIAL — dark section
───────────────────────────────────────── */
export const DEPOIMENTOS = [
  {
    quote:
      "A Axi Business tem sido essencial para nosso crescimento. Trouxe organização, clareza nos dados e mais segurança nas decisões. Hoje conseguimos agir com mais precisão e estamos muito satisfeitos com essa parceria.",
    name: "Riany Barcelar",
    cargo: "@hortensia_conceito",
    photo: "/img/depoimentos/riany.webp",
    result: "Mais clareza e segurança nas decisões",
  },
  {
    quote:
      "Após mais de dois anos de parceria, posso afirmar que a Axi é uma das empresas mais importantes da nossa operação. O suporte e a organização que trouxeram foram fundamentais para alcançarmos o nível em que estamos hoje.",
    name: "Maycon I.S.",
    cargo: "@ppocontingencia",
    photo: "/img/depoimentos/maycon.webp",
    result: "Mais de 2 anos de parceria",
  },
  {
    quote:
      "Quero agradecer ao Igor e ao Wilton por todo o apoio, orientação e dedicação ao longo dessa jornada. Com a ajuda de vocês, conseguimos crescer com mais clareza e visão de futuro. Sou muito grata por essa parceria.",
    name: "Lucia Fontenele",
    cargo: "@equiposmedicosfor",
    photo: "/img/depoimentos/lucia.webp",
    result: "Crescimento com visão de futuro",
  },
];

export function ProvaSection({
  depoimentos = DEPOIMENTOS,
  title = ["Não é promessa.", "É o que acontece na prática."],
  ctaLabel = "Quero organizar meu financeiro também",
}) {
  return (
    <section id="provas" style={{ background: C.charcoal, color: C.text }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="tag tag-dark">
            <Star size={11} /> Resultados reais
          </span>

          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.15 }}>
            {title[0]}<br />
            <span style={{ color: C.green }}>{title[1]}</span>
          </h2>
        </div>

        <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18, marginBottom: 48, alignItems: "stretch" }}>
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="card card-dark"
              style={{
                padding: 28,
                minHeight: 360,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", gap: 3, marginBottom: 22, justifyContent: "center" }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} fill={C.green} color={C.green} />
                  ))}
                </div>

                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, margin: 0, fontStyle: "italic", textAlign: "center" }}>
                  "{d.quote}"
                </p>
              </div>

              <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, marginTop: 28, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12 }}>
                {d.photo && (
                  <img
                    src={d.photo}
                    alt={d.name}
                    loading="lazy"
                    width="64"
                    height="64"
                    style={{ width: 64, height: 64, borderRadius: "50%", border: `2px solid ${C.green}`, objectFit: "cover" }}
                  />
                )}
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>{d.name}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", margin: 0 }}>{d.cargo}</p>
                </div>

                <div style={{ background: C.greenFaint, border: `1px solid ${C.border}`, borderRadius: 8, padding: "7px 12px", maxWidth: "100%" }}>
                  <p style={{ fontSize: 11, color: C.green, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
                    {d.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#diagnostico" className="btn btn-primary btn-lg">
            {ctaLabel} <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SÓCIOS — light section
───────────────────────────────────────── */
const SOCIOS = [
  {
    name: "Igor Guilherme",
    role: "Sócio Financeiro",
    bio: "Especialista em estruturação financeira empresarial, com ampla experiência em diagnóstico de caixa, modelagem de crescimento e implantação de processos financeiros em pequenas e médias empresas.",
    tags: ["Finanças Corporativas", "BPO", "Crescimento"],
    photo: IMG.igor,
  },
  {
    name: "Wilton Lima",
    role: "Sócio Estrategista",
    bio: "Focado em inteligência de negócios e execução financeira, Wilton lidera a operação de BPO e as análises estratégicas que transformam dados em decisões de alto impacto para os clientes Axi.",
    tags: ["Estratégia", "BPO Financeiro", "Gestão"],
    photo: IMG.wilton,
  },
];

export function SociosSection({
  title = ["Você não contrata só uma empresa.", "Contrata pessoas que já viveram seu problema."],
  text = "Os sócios da Axi já atuaram dentro de empresas com os mesmos problemas que você enfrenta. Não é teoria, é experiência aplicada.",
}) {
  return (
    <section id="socios" style={{ background: C.cream }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="tag tag-green"><Shield size={11} /> Quem está por trás</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, marginBottom: 16, lineHeight: 1.15 }}>
            {title[0]}<br />
            <span style={{ color: C.green }}>{title[1]}</span>
          </h2>
          <p style={{ color: C.muted, maxWidth: 500, margin: "0 auto" }}>
            {text}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="two-col">
          {SOCIOS.map((s, i) => (
            <div key={i} className="card card-light" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 24 }}>
              <img
                src={s.photo}
                alt={s.name}
                loading="lazy"
                width="700"
                height="700"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: 10,
                  display: "block",
                }}
              />
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: C.textDark, letterSpacing: "-0.03em", marginBottom: 4 }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: 12, color: C.green, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>
                  {s.role}
                </p>
                <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  {s.bio}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {s.tags.map((t, j) => (
                    <span key={j} style={{ fontSize: 11, padding: "4px 12px", background: C.greenLight, color: C.greenDark, borderRadius: 100, fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FAQ — cream-dark section
───────────────────────────────────────── */
export function FAQ({ items, title = ["Perguntas que todo empresário", "faz antes de contratar"] }) {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ background: C.creamDark }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="tag tag-green"><CheckCircle size={11} /> Dúvidas frequentes</span>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, lineHeight: 1.15 }}>
            {title[0]}<br />
            <span style={{ color: C.green }}>{title[1]}</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((f, i) => (
            <div key={i} className="card card-light" style={{ overflow: "hidden", borderRadius: 12, ...(open === i ? { border: `1.5px solid ${C.green}` } : {}) }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16, fontFamily: "inherit" }}
              >
                <span style={{ fontSize: 15, fontWeight: 600, color: C.textDark, lineHeight: 1.4 }}>{f.q}</span>
                <ChevronDown size={18} color={C.green} style={{ flexShrink: 0, transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.25s" }} />
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 20px", color: C.muted, fontSize: 15, lineHeight: 1.75, borderTop: `1px solid ${C.borderLight}`, paddingTop: 16 }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   DIAGNÓSTICO / FORM — dark green section
   fields: [{ name, label, type: text|tel|email|select|textarea, placeholder, required, options }]
   hidden: campos ocultos enviados junto (origem, segmento fixo etc.)
───────────────────────────────────────── */
const fieldStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1.5px solid rgba(255,255,255,0.1)",
  color: C.text,
  borderRadius: 10,
};

export function DiagnosticoSection({
  title,
  text,
  bullets,
  scarcity,
  formTitle = "Agende seu diagnóstico",
  formHint = "Preenchimento leva menos de 2 minutos.",
  fields,
  hidden = {},
  subject = "Novo lead - Diagnóstico Axi Business",
  origem = "pagina-geral",
  waIntro = "Olá! Vim pelo site da Axi Business e quero agendar meu diagnóstico gratuito.",
}) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("origem", origem);
    Object.entries(hidden).forEach(([k, v]) => formData.append(k, v));
    Object.entries(getAttribution()).forEach(([k, v]) => formData.append(k, v));

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar formulário.");
      }

      const linhas = fields
        .map((f) => {
          const v = (formData.get(f.name) || "").toString().trim();
          if (!v && !f.required) return null;
          return `${f.label.replace(/\s*\*$/, "")}: ${v}`;
        })
        .filter(Boolean)
        .join("\n");

      track("Lead", { content_name: origem });
      setSubmitted(true);
      form.reset();

      /* pequena pausa para o evento de conversão sair antes de abrir o WhatsApp */
      setTimeout(() => {
        window.location.href = waLink(`${waIntro}\n\n${linhas}`);
      }, 600);
    } catch (err) {
      setError("Não conseguimos enviar agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <section id="diagnostico" style={{ background: C.dark, color: C.text, textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <div style={{ fontSize: 56, marginBottom: 24 }}>✅</div>
          <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em", color: C.green, marginBottom: 16 }}>
            Dados enviados com sucesso!
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 17, lineHeight: 1.75 }}>
            Estamos abrindo o WhatsApp com sua mensagem preenchida para combinarmos o melhor horário.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostico" style={{ background: `linear-gradient(160deg, #0A1A10 0%, ${C.dark} 100%)`, color: C.text }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="two-col">
          <div>
            <span className="tag tag-dark"><Zap size={11} /> Diagnóstico gratuito</span>

            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}>
              {title[0]}<br />
              <span style={{ color: C.green }}>{title[1]}</span>
            </h2>

            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              {text}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
              {bullets.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <CheckCircle size={18} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: "rgba(255,255,255,0.75)" }}>{item}</span>
                </div>
              ))}
            </div>

            {scarcity && (
              <div style={{ background: C.redFaint, border: "1px solid rgba(229,62,62,0.2)", borderRadius: 12, padding: "16px 20px", display: "flex", gap: 12, alignItems: "center" }}>
                <Clock size={16} color="#FC8181" />
                <div>
                  <p style={{ fontSize: 11, color: "#FC8181", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Vagas limitadas
                  </p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
                    {scarcity}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="card card-dark" style={{ borderRadius: 16, padding: 36, border: `1px solid ${C.border}` }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6, color: C.text }}>
                {formTitle}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, marginBottom: 28 }}>
                {formHint}
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <input type="hidden" name="_subject" value={subject} />

                {fields.map((f) => {
                  const id = `f-${f.name}`;
                  return (
                    <div key={f.name}>
                      <label htmlFor={id} style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 6, display: "block" }}>
                        {f.label}
                      </label>
                      {f.type === "select" ? (
                        <select id={id} name={f.name} required={f.required} className="field" style={fieldStyle} defaultValue="">
                          <option value="" disabled>Selecione...</option>
                          {f.options.map((o) => <option key={o}>{o}</option>)}
                        </select>
                      ) : f.type === "textarea" ? (
                        <textarea id={id} name={f.name} placeholder={f.placeholder} rows={3} required={f.required} className="field" style={fieldStyle} />
                      ) : (
                        <input
                          id={id}
                          name={f.name}
                          type={f.type}
                          placeholder={f.placeholder}
                          required={f.required}
                          autoComplete={f.autoComplete}
                          inputMode={f.type === "tel" ? "tel" : undefined}
                          className="field"
                          style={fieldStyle}
                        />
                      )}
                    </div>
                  );
                })}

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", justifyContent: "center" }} disabled={sending}>
                  {sending ? "Enviando..." : "Quero meu diagnóstico gratuito"}
                </button>

                {error && (
                  <p style={{ fontSize: 12, color: "#FC8181", textAlign: "center" }}>
                    {error}
                  </p>
                )}

                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "center" }}>
                  Sem spam. Sem compromisso. Seus dados ficam protegidos conforme a nossa{" "}
                  <a href="/privacidade/" style={{ color: "rgba(255,255,255,0.4)" }}>Política de Privacidade</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FINAL CTA — dark section
───────────────────────────────────────── */
export function FinalCTA({ badge, title, text, ctaLabel, waMsg, origem }) {
  return (
    <section style={{ background: C.dark, color: C.text, textAlign: "center" }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.greenFaint, border: `1px solid ${C.border}`, borderRadius: 100, padding: "8px 18px", marginBottom: 28 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, display: "inline-block" }} />
          <span style={{ fontSize: 12, color: C.green, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{badge}</span>
        </div>
        <h2 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-0.035em", marginBottom: 20, lineHeight: 1.15 }}>
          {title[0]}<br />
          <span style={{ color: C.green }}>{title[1]}</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, marginBottom: 40, lineHeight: 1.75 }}>
          {text}
        </p>
        <div className="final-actions" style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#diagnostico" className="btn btn-primary btn-lg">
            {ctaLabel} <ArrowRight size={20} />
          </a>
          <WaButton msg={waMsg} origem={`${origem}-cta-final`} className="btn btn-outline-dark btn-lg">
            <Phone size={17} /> WhatsApp direto
          </WaButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
export function Footer({ links, waMsg, origem, tagline }) {
  return (
    <footer style={{ background: "#070B09", borderTop: `1px solid rgba(255,255,255,0.05)`, padding: "56px 0 32px", color: C.text }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="two-col">
          <div>
            <img src={IMG.logoDark} alt="Axi Business" loading="lazy" width="137" height="18" style={{ height: 18, width: "auto", marginBottom: 16, objectFit: "contain" }} />
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, lineHeight: 1.75, maxWidth: 320 }}>
              {tagline}
            </p>
          </div>

          <div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 16 }}>
              Página
            </p>
            {links.map((l, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <a href={l.href} className="footer-link">
                  {l.label}
                </a>
              </div>
            ))}
          </div>

          <div>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 16 }}>
              Contato
            </p>
            <div style={{ marginBottom: 12, display: "flex", gap: 8, alignItems: "center" }}>
              <Phone size={14} color={C.green} />
              <WaButton msg={waMsg} origem={`${origem}-rodape`} className="footer-link">
                (85) 99221-5449
              </WaButton>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Mail size={14} color={C.green} />
              <a href="mailto:contato@axibusiness.com.br" className="footer-link">
                contato@axibusiness.com.br
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>© {new Date().getFullYear()} Axi Business · CNPJ 49.848.449/0001-01. Todos os direitos reservados.</p>
          <a href="/privacidade/" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none" }}>
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
