import {
  TrendingUp, AlertTriangle, ArrowRight, BarChart3, Shield, Target, Zap, Phone, Landmark, Store,
  Wallet, Check, X
} from "lucide-react";
import { C, IMG, styles } from "./shared/theme.js";
import {
  useCountdown, WaButton, Nav, ProvaSection, SociosSection, FAQ,
  DiagnosticoSection, FinalCTA, Footer, StickyCTA
} from "./shared/components.jsx";

/* Página geral — axibusiness.com.br/ */
const ORIGEM = "pagina-geral";
const WA_MSG = "Olá! Vim pelo site da Axi Business e gostaria de saber mais sobre os serviços.";
const WA_DIAG = "Olá! Vim pelo site da Axi Business e quero agendar meu diagnóstico financeiro gratuito.";

const navLinks = [
  { label: "Por que organizar", href: "#problemas" },
  { label: "Método",            href: "#metodo"    },
  { label: "Serviços",          href: "#servicos"  },
  { label: "Sobre nós",         href: "#socios"    },
];

/* ─────────────────────────────────────────
   HERO — dark section
───────────────────────────────────────── */
function Hero() {
  const cd = useCountdown();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: `linear-gradient(160deg, ${C.dark} 0%, #0D1F15 60%, #0A1A10 100%)`,
        paddingTop: 100,
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
        color: C.text,
      }}
    >
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,123,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,123,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container">
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: C.redFaint,
          border: "1px solid rgba(229,62,62,0.25)",
          borderRadius: 100,
          padding: "8px 18px",
          marginBottom: 36,
          flexWrap: "wrap",
        }}>
          <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: C.red, display: "inline-block" }} />
          <span style={{ fontSize: 12, color: "#FC8181", fontWeight: 600, letterSpacing: "0.06em" }}>
            Vagas limitadas: encerram em {cd.d}d {cd.h}h {cd.m}m {cd.s}s
          </span>
        </div>

        <div className="two-col hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 440px", gap: 64, alignItems: "center" }}>
          <div className="hero-copy">
            <h1 style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 900, lineHeight: 1.07, letterSpacing: "-0.035em", marginBottom: 24 }}>
              Seu negócio fatura bem.<br />
              <span style={{ color: C.green }}>Mas o dinheiro some.</span>
            </h1>

            <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, marginBottom: 40, maxWidth: 520 }}>
              A Axi Business transforma empresários que trabalham muito e lucram pouco em donos que têm previsibilidade, caixa e controle real sobre o próprio negócio.
            </p>

            <div className="hero-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
              <a href="#diagnostico" className="btn btn-primary btn-lg">
                Diagnóstico gratuito <ArrowRight size={18} />
              </a>

              <WaButton msg={WA_MSG} origem={`${ORIGEM}-hero`} className="btn btn-outline-dark btn-lg">
                <Phone size={17} /> Falar agora
              </WaButton>
            </div>

            <div className="hero-stats" style={{ display: "flex", gap: 40, flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
              {[
                { n: "+120", l: "empresas atendidas" },
                { n: "R$50M+", l: "em caixa gerenciado" },
                { n: "94%", l: "taxa de retenção" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="stat-num" style={{ color: C.green }}>{s.n}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src={IMG.juntos}
              alt="Igor e Wilton, sócios da Axi Business"
              className="hero-image"
              width="1100"
              height="708"
              fetchpriority="high"
              style={{
                width: "100%",
                height: 480,
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: 16,
                boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
                display: "block",
              }}
            />

            <div
              className="hero-badge"
              style={{
                position: "absolute",
                bottom: 24,
                left: -24,
                background: "#fff",
                borderRadius: 12,
                padding: "14px 18px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                display: "flex",
                gap: 12,
                alignItems: "center",
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp size={18} color={C.green} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18, color: C.textDark, lineHeight: 1, letterSpacing: "-0.03em" }}>+21%</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>de margem em 60 dias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MARCAS — empresas onde os sócios atuaram como executivos
   Para incluir uma marca: salve o logo em public/img/marcas/ (SVG ou PNG
   transparente) e adicione uma linha abaixo. "h" é a altura em pixels,
   para equilibrar logos largos e quadrados. Sem logo, aparece o nome.
───────────────────────────────────────── */
const MARCAS = [
  { nome: "XP Investimentos",   logo: "/img/marcas/xp.svg",                h: 42 },
  { nome: "BTG Pactual",        logo: "/img/marcas/btg-pactual.svg",       h: 36 },
  { nome: "Bradesco",           logo: "/img/marcas/bradesco.svg",          h: 30 },
  { nome: "Banco do Nordeste",  logo: "/img/marcas/banco-do-nordeste.svg", h: 38 },
  { nome: "Apple",              logo: "/img/marcas/apple.svg",             h: 44 },
  { nome: "RioMar Shopping",    logo: "/img/marcas/riomar.svg",            h: 44 },
  { nome: "Pague Menos",        logo: "/img/marcas/pague-menos.svg",       h: 34 },
];

function MarcasSection() {
  const item = (m, i, hidden) => (
    <div key={`${hidden ? "b" : "a"}-${i}`} className="marquee-item">
      {m.logo
        ? <img src={m.logo} alt={hidden ? "" : m.nome} loading="lazy" style={{ height: m.h || 36 }} />
        : <span className="marquee-name">{m.nome}</span>}
    </div>
  );
  return (
    <section style={{ background: "#fff", color: C.textDark, padding: "44px 0 48px", borderBottom: `1px solid ${C.borderLight}` }}>
      <div className="container" style={{ textAlign: "center", marginBottom: 22 }}>
        <p style={{ fontSize: 11, color: C.greenDark, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
          Ampla experiência em grandes marcas
        </p>
        <p style={{ fontSize: 15, color: C.muted }}>
          Antes da Axi, os sócios atuaram como executivos em empresas como:
        </p>
      </div>
      <div className="marquee" aria-label="Empresas onde os sócios atuaram">
        <div className="marquee-track">
          <div style={{ display: "flex" }}>{MARCAS.map((m, i) => item(m, i, false))}</div>
          <div style={{ display: "flex" }} aria-hidden="true">{MARCAS.map((m, i) => item(m, i, true))}</div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ESTILOS DOS BLOCOS VISUAIS DA PÁGINA GERAL
───────────────────────────────────────── */
const AXI = { menta: "#0DF394", medio: "#0C7E50", escuro: "#032811" };

const geralStyles = `
  .ad-head, .ad-row { display: grid; grid-template-columns: 1fr 44px 1fr; align-items: stretch; gap: 0; }
  .ad-row + .ad-row { margin-top: 10px; }
  .ad-cell { display: flex; align-items: center; gap: 12px; padding: 16px 18px; border-radius: 12px; font-size: 15px; font-weight: 600; line-height: 1.4; }
  .ad-before { background: #fff; border: 1px solid rgba(229,62,62,0.18); color: ${C.textDark}; }
  .ad-after  { background: #fff; border: 1.5px solid rgba(0,201,123,0.35); color: ${C.textDark}; box-shadow: 0 4px 18px rgba(0,201,123,0.08); }
  .ad-arrow { display: flex; align-items: center; justify-content: center; color: #A3ADA7; }
  .ad-ico { width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }

  .painel { background: #fff; color: ${C.textDark}; border-radius: 18px; padding: 20px 20px 16px; box-shadow: 0 24px 80px rgba(0,0,0,0.45); }
  .painel-kpis { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-bottom: 14px; }
  .painel-kpi { background: #F4F7F5; border-radius: 10px; padding: 10px 12px; }
  .painel-kpi .v { font-size: 19px; font-weight: 800; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; line-height: 1.2; }
  .painel-kpi .l { font-size: 10.5px; color: ${C.muted}; line-height: 1.3; }
  .painel-kpi .d { font-size: 10.5px; font-weight: 600; margin-top: 2px; }
  .painel-box { border: 1px solid #E7ECE9; border-radius: 10px; padding: 12px 12px 8px; }
  .painel-title { font-size: 11.5px; font-weight: 700; color: ${C.textDark}; margin-bottom: 6px; }

  .svc-card { position: relative; overflow: hidden; padding: 34px 32px 30px; }
  .svc-seal {
    position: absolute; top: 0; right: 0; width: 84px; height: 84px;
    background: linear-gradient(135deg, ${AXI.menta} 0%, ${AXI.medio} 60%, ${AXI.escuro} 100%);
    border-bottom-left-radius: 84px;
    display: flex; align-items: flex-start; justify-content: flex-end; padding: 16px 16px 0 0;
  }

  @media (max-width: 900px) {
    .ad-head { display: none; }
    .ad-row { grid-template-columns: 1fr; }
    .ad-arrow { height: 26px; transform: rotate(90deg); }
    .ad-row + .ad-row { margin-top: 14px; }
    .ad-cell { padding: 12px 14px; font-size: 14px; }
    .ad-arrow { height: 20px; }
    .painel { padding: 16px 14px 12px; }
    .painel-kpi { padding: 8px 9px; }
    .painel-kpi .v { font-size: 15px; }
    .svc-card { padding: 30px 24px 26px; }
    .svc-seal { width: 70px; height: 70px; border-bottom-left-radius: 70px; padding: 13px 13px 0 0; }
  }
`;

/* ─────────────────────────────────────────
   ANTES E DEPOIS — light section
───────────────────────────────────────── */
function AntesDepoisSection() {
  const linhas = [
    ["Fatura bem, mas não sobra nada no fim do mês", "Lucro claro e pró-labore definido"],
    ["Decisões tomadas na intuição", "Decisões com número na mão"],
    ["Apagando incêndio todo dia", "Contas, impostos e prazos sob controle"],
    ["Medo de abrir o extrato", "Um painel simples, sempre atualizado"],
    ["Sem ideia do caixa dos próximos 90 dias", "Previsão de caixa de 90 dias"],
    ["Cada sócio com uma versão dos números", "Sócios olhando o mesmo número"],
  ];

  return (
    <section id="problemas" style={{ background: C.cream }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="tag tag-red"><AlertTriangle size={11} /> O diagnóstico real</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, marginBottom: 16, lineHeight: 1.15 }}>
            Onde seu negócio está hoje<br className="br-desktop" />{" "}
            <span style={{ color: C.green }}>e onde ele pode estar.</span>
          </h2>
          <p style={{ color: C.muted, maxWidth: 520, margin: "0 auto", fontSize: 17 }}>
            Se você se reconheceu em dois ou mais pontos da esquerda, o problema não é esforço. É sistema financeiro.
          </p>
        </div>

        <div style={{ maxWidth: 920, margin: "0 auto 56px" }}>
          <div className="ad-head" style={{ marginBottom: 12 }}>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.red, paddingLeft: 4 }}>Hoje, sem estrutura</p>
            <span />
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.greenDark, paddingLeft: 4 }}>Com a Axi</p>
          </div>

          {linhas.map(([antes, depois], i) => (
            <div key={i} className="ad-row">
              <div className="ad-cell ad-before">
                <span className="ad-ico" style={{ background: C.redFaint }}><X size={14} color={C.red} strokeWidth={3} /></span>
                <span>{antes}</span>
              </div>
              <div className="ad-arrow"><ArrowRight size={18} /></div>
              <div className="ad-cell ad-after">
                <span className="ad-ico" style={{ background: C.green }}><Check size={14} color="#fff" strokeWidth={3} /></span>
                <span>{depois}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#diagnostico" className="btn btn-primary btn-lg">
            Quero sair da coluna da esquerda <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PAINEL — ilustração do que o cliente recebe (dados fictícios)
───────────────────────────────────────── */
const SALDO = [44, 47, 36, 46, 52, 49, 55, 61, 57, 64, 60, 66]; // R$ mil, 12 semanas
const RESERVA = 40;

function SaldoChart() {
  const W = 360, H = 132, padL = 30, padR = 8, padT = 10, padB = 18;
  const min = 20, max = 70;
  const x = (i) => padL + (i * (W - padL - padR)) / (SALDO.length - 1);
  const y = (v) => padT + ((max - v) * (H - padT - padB)) / (max - min);
  const line = SALDO.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${x(SALDO.length - 1).toFixed(1)},${y(min)} L${x(0).toFixed(1)},${y(min)} Z`;
  const alerta = 2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Exemplo: saldo de caixa projetado para as próximas 12 semanas, com um alerta na semana 3 abaixo da reserva mínima">
      <defs>
        <linearGradient id="saldoFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={AXI.medio} stopOpacity="0.22" />
          <stop offset="100%" stopColor={AXI.medio} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[30, 50, 70].map((v) => (
        <g key={v}>
          <line x1={padL} x2={W - padR} y1={y(v)} y2={y(v)} stroke="#EEF1EF" strokeWidth="1" />
          <text x={padL - 6} y={y(v) + 3} textAnchor="end" fontSize="9.5" fill="#8A9890">{v}k</text>
        </g>
      ))}
      <line x1={padL} x2={W - padR} y1={y(RESERVA)} y2={y(RESERVA)} stroke="#A3ADA7" strokeWidth="1" strokeDasharray="3 3" />
      <text x={W - padR} y={y(RESERVA) - 4} textAnchor="end" fontSize="9.5" fill="#6B7A72">Reserva mínima</text>
      <path d={area} fill="url(#saldoFill)" />
      <path d={line} fill="none" stroke={AXI.medio} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={x(alerta)} cy={y(SALDO[alerta])} r="4.5" fill={C.red} stroke="#fff" strokeWidth="2" />
      <text x={x(alerta) + 8} y={y(SALDO[alerta]) + 14} fontSize="9.5" fontWeight="700" fill={C.red}>Alerta: abaixo da reserva</text>
      <circle cx={x(SALDO.length - 1)} cy={y(SALDO[SALDO.length - 1])} r="3.5" fill={AXI.medio} stroke="#fff" strokeWidth="2" />
      {[0, 5, 11].map((i) => (
        <text key={i} x={x(i)} y={H - 4} textAnchor={i === 0 ? "start" : i === 11 ? "end" : "middle"} fontSize="9.5" fill="#8A9890">Sem {i + 1}</text>
      ))}
    </svg>
  );
}

function PainelMock() {
  const margens = [
    { l: "Linha principal", v: 46 },
    { l: "Linha intermediária", v: 31 },
    { l: "Linha promocional", v: 12 },
  ];
  return (
    <div className="painel">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ display: "flex", gap: 4 }}>
            {["#FF6159", "#FFBD2E", "#28C941"].map((c) => <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />)}
          </span>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "-0.01em" }}>Painel financeiro</span>
        </div>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: C.greenDark, background: C.greenLight, padding: "3px 10px", borderRadius: 100 }}>Atualizado esta semana</span>
      </div>

      <div className="painel-kpis">
        <div className="painel-kpi">
          <div className="l">Faturamento do mês</div>
          <div className="v">R$ 184 mil</div>
          <div className="d" style={{ color: C.greenDark }}>▲ 8% vs. mês anterior</div>
        </div>
        <div className="painel-kpi">
          <div className="l">Margem de contribuição</div>
          <div className="v">38,5%</div>
          <div className="d" style={{ color: C.muted }}>Meta: 35%</div>
        </div>
        <div className="painel-kpi">
          <div className="l">Caixa em 90 dias</div>
          <div className="v">R$ 66 mil</div>
          <div className="d" style={{ color: C.greenDark }}>Acima da reserva</div>
        </div>
      </div>

      <div className="painel-box" style={{ marginBottom: 10 }}>
        <p className="painel-title">Saldo de caixa projetado (R$ mil)</p>
        <SaldoChart />
      </div>

      <div className="painel-box" style={{ paddingBottom: 12 }}>
        <p className="painel-title">Margem por linha de produto</p>
        {margens.map((m) => (
          <div key={m.l} style={{ display: "grid", gridTemplateColumns: "120px 1fr 36px", alignItems: "center", gap: 8, marginTop: 7 }}>
            <span style={{ fontSize: 11, color: C.muted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.l}</span>
            <span style={{ height: 8, background: "#EEF1EF", borderRadius: 4, overflow: "hidden" }}>
              <span style={{ display: "block", height: "100%", width: `${(m.v / 50) * 100}%`, background: AXI.medio, borderRadius: 4 }} />
            </span>
            <span style={{ fontSize: 11, fontWeight: 700, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{m.v}%</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 10.5, color: "#8A9890", marginTop: 10, textAlign: "center" }}>
        Exemplo ilustrativo do painel entregue ao cliente
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   MÉTODO — dark section
───────────────────────────────────────── */
function MetodoSection() {
  const steps = [
    { num: "01", title: "Diagnóstico Financeiro Completo", desc: "Mapeamos a situação real do seu negócio, sem eufemismos: onde está o lucro e onde o dinheiro escapa." },
    { num: "02", title: "Arquitetura Financeira", desc: "Separação de caixas, pró-labore, reservas e previsão de 90 dias, num painel para decidir com dado." },
    { num: "03", title: "Execução e BPO", desc: "Contas, relatórios e indicadores executados pela Axi, com reunião mensal de análise e alertas." },
    { num: "04", title: "Inteligência de Crescimento", desc: "Cenários e viabilidade financeira antes de cada movimento de expansão." },
  ];

  return (
    <section id="metodo" style={{ background: C.dark, color: C.text }}>
      <div className="container">
        <div className="two-col method-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 64, alignItems: "start" }}>
          <div>
            <span className="tag tag-dark"><Zap size={11} /> Método Axi</span>
            <h2 style={{ fontSize: "clamp(28px, 3.3vw, 40px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}>
              Um sistema que transforma<br />
              <span style={{ color: C.green }}>caos em previsibilidade</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              A maioria dos consultores entrega um relatório e vai embora. A Axi implanta, executa e acompanha até o número aparecer na conta.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {steps.map((s) => (
                <div key={s.num} className="card card-dark method-step" style={{ padding: "18px 20px 18px 18px", borderLeft: `3px solid ${C.green}`, borderRadius: "0 12px 12px 0" }}>
                  <div className="method-step-row" style={{ display: "flex", gap: 14 }}>
                    <span style={{ fontWeight: 900, fontSize: 12, color: C.green, letterSpacing: "0.1em", flexShrink: 0, marginTop: 3 }}>{s.num}</span>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4, color: C.text }}>{s.title}</h3>
                      <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: C.greenFaint, border: `1px solid ${C.border}`, borderRadius: 12, padding: "18px 22px", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <Shield size={20} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontSize: 11, color: C.green, fontWeight: 700, marginBottom: 4, letterSpacing: "0.1em", textTransform: "uppercase" }}>Nossa garantia</p>
                <p style={{ fontSize: 14.5, color: C.text, lineHeight: 1.6 }}>
                  Se em 90 dias você ainda não tiver visibilidade completa do financeiro do seu negócio, seguimos trabalhando com você sem custo adicional até chegar lá.
                </p>
              </div>
            </div>
          </div>

          <div className="method-aside" style={{ position: "sticky", top: 110 }}>
            <PainelMock />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SERVIÇOS — cream/light section, cards com selo da marca
───────────────────────────────────────── */
function ServicosSection() {
  const ico = { size: 26, color: "#fff", strokeWidth: 1.6 };
  const services = [
    {
      icon: <Wallet {...ico} />,
      title: "BPO Financeiro",
      desc: "Terceirizamos toda a rotina financeira da sua empresa. Você foca no negócio, nós cuidamos dos números com precisão e sem surpresas.",
      ideal: "Empresas que querem escalar sem contratar CFO",
    },
    {
      icon: <BarChart3 {...ico} />,
      title: "Consultoria Financeira",
      desc: "Diagnóstico completo mais estruturação financeira para empresas que querem clareza e controle. Ideal para quem está pronto para parar de trabalhar no escuro.",
      ideal: "Empresas de qualquer porte que querem clareza e controle",
      highlight: true,
    },
    {
      icon: <Landmark {...ico} />,
      title: "Captação de Recursos",
      desc: "Estruturamos o acesso a crédito para investir ou reforçar o caixa, como as linhas do FNE (Banco do Nordeste): análise de elegibilidade, projeto, documentação e acompanhamento até a liberação.",
      ideal: "Empresas que querem investir, expandir ou reforçar o capital de giro",
    },
    {
      icon: <Target {...ico} />,
      title: "Inteligência de Crescimento",
      desc: "Modelagem de cenários, análise de expansão e viabilidade financeira para cada decisão estratégica que você precisa tomar.",
      ideal: "Empresários em fase de expansão ou fusão",
    },
  ];

  return (
    <section id="servicos" style={{ background: C.creamDark }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="tag tag-green"><Target size={11} /> Soluções</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, marginBottom: 16, lineHeight: 1.15 }}>
            Escolha o nível de<br />
            <span style={{ color: C.green }}>suporte que você precisa</span>
          </h2>
          <p style={{ color: C.muted, maxWidth: 560, margin: "0 auto" }}>
            Nosso diagnóstico inicial é sempre gratuito e define qual caminho faz mais sentido para o seu caso. O escopo e o investimento se adaptam ao momento de cada empresa.
          </p>
        </div>

        <div className="two-col services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 32 }}>
          {services.map((s, i) => (
            <div
              key={i}
              className="card card-light svc-card"
              style={s.highlight ? { border: `2px solid ${C.green}`, boxShadow: `0 8px 32px rgba(0,201,123,0.15)` } : undefined}
            >
              <div className="svc-seal" aria-hidden="true">{s.icon}</div>

              {s.highlight && (
                <div style={{
                  position: "absolute", top: 0, left: 24, background: C.green, color: "#fff",
                  fontSize: 10, fontWeight: 800, padding: "4px 12px", borderRadius: "0 0 8px 8px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  Mais popular
                </div>
              )}

              <h3 style={{ fontSize: 22, fontWeight: 800, color: C.textDark, letterSpacing: "-0.03em", marginBottom: 12, marginTop: s.highlight ? 18 : 0, paddingRight: 72 }}>
                {s.title}
              </h3>

              <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                {s.desc}
              </p>

              <div style={{ borderTop: `1px solid ${C.borderLight}`, paddingTop: 16 }}>
                <p style={{ fontSize: 11, color: C.greenDark, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                  Ideal para
                </p>
                <p style={{ fontSize: 13, color: C.textDark }}>
                  {s.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#diagnostico" className="btn btn-primary btn-lg">
            Quero entender qual solução é ideal <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FAIXA PARA LOJAS — leva lojistas para /moda/
───────────────────────────────────────── */
function LojasBand() {
  return (
    <section style={{ background: C.creamDark, padding: "0 0 72px" }}>
      <div className="container">
        <a href="/moda/" className="card card-light lojas-band" style={{ display: "flex", alignItems: "center", gap: 20, padding: "24px 28px", textDecoration: "none", color: C.textDark, flexWrap: "wrap" }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Store size={22} color={C.green} />
          </div>
          <div style={{ flex: "1 1 320px" }}>
            <p style={{ fontSize: 17, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 4 }}>Tem loja de moda ou varejo?</p>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6 }}>
              Temos um trabalho desenhado para a rotina de loja: taxa da maquininha, estoque por grade, preço por peça e metas da equipe.
            </p>
          </div>
          <span className="btn btn-outline" style={{ flexShrink: 0 }}>
            Ver a página para lojas <ArrowRight size={16} />
          </span>
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FAQ / FORMULÁRIO — conteúdo da página geral
───────────────────────────────────────── */
const FAQS = [
  { q: "Minha empresa é pequena. Faz sentido contratar uma consultoria financeira?", a: "Sim, especialmente por isso. Empresas pequenas perdem proporcionalmente mais dinheiro por falta de estrutura financeira do que as grandes. Um erro de precificação ou uma conta ignorada tem impacto direto na sobrevivência do negócio. Atendemos negócios de todos os tamanhos e modelos, e o escopo e o investimento se adaptam à realidade de cada empresa." },
  { q: "Já tenho contador. O que a Axi faz de diferente?", a: "O contador cuida do que passou (fiscal, tributos, obrigações legais). A Axi cuida do que está acontecendo e do que vai acontecer: fluxo de caixa, previsibilidade, margem e decisão estratégica. São funções complementares, não concorrentes." },
  { q: "Quanto tempo leva para ver resultado?", a: "Nossos clientes costumam ter as primeiras percepções em até 30 dias, quando entregamos o diagnóstico completo com os principais pontos de sangria financeira. Mudanças estruturais e aumento de margem costumam aparecer entre 60 e 90 dias de implementação." },
  { q: "Como funciona o diagnóstico gratuito?", a: "É uma conversa de 1 hora com um dos nossos sócios. Sem script de venda. Analisamos os números que você trouxer e você sai com pelo menos 3 insights acionáveis, mesmo que não contrate a gente." },
  { q: "E se eu não quiser gerenciar nada disso?", a: "Nosso BPO Financeiro foi feito exatamente para isso. Você delega a operação financeira inteira pra nós. Contas, relatórios, alertas, reuniões mensais. Tudo sob nossa responsabilidade. Você só toma a decisão final." },
];

const FORM_FIELDS = [
  { name: "nome", label: "Seu nome *", type: "text", placeholder: "Como podemos te chamar?", required: true, autoComplete: "name" },
  { name: "whatsapp", label: "WhatsApp *", type: "tel", placeholder: "(85) 99999-9999", required: true, autoComplete: "tel" },
  { name: "empresa", label: "Nome ou @ da empresa", type: "text", placeholder: "@suaempresa", required: false, autoComplete: "organization" },
  { name: "segmento", label: "Segmento da empresa *", type: "select", required: true, options: ["Varejo e moda", "Comércio e distribuição", "Serviços", "Saúde e clínicas", "Indústria", "Imobiliário e construção", "Negócio digital", "Outro"] },
  { name: "faturamento", label: "Faturamento mensal *", type: "select", required: true, options: ["Até R$30 mil", "R$30 mil a R$100 mil", "R$100 mil a R$300 mil", "R$300 mil a R$1 milhão", "Acima de R$1 milhão"] },
  { name: "dor_financeira", label: "O que mais pesa hoje no financeiro?", type: "textarea", placeholder: "Ex: caixa apertado, não sei quanto lucro, sócios desalinhados...", required: false },
];

function Diagnostico() {
  const cd = useCountdown();
  return (
    <DiagnosticoSection
      title={["1 hora que pode", "mudar o seu negócio."]}
      text="Uma conversa direta com um dos nossos sócios. Sem script de venda. Você traz os números, a gente traz os insights gratuitamente."
      bullets={[
        "Identificação dos principais pontos de perda financeira",
        "Análise da sua estrutura de caixa atual",
        "3 ações imediatas para colocar em prática já na próxima semana",
        "Proposta personalizada se fizer sentido para os dois lados",
      ]}
      scarcity={<>Apenas <strong style={{ color: C.text }}>3 vagas</strong> este mês. Encerramento em {cd.d}d {cd.h}h {cd.m}m.</>}
      formHint="Leva menos de 1 minuto."
      fields={FORM_FIELDS}
      origem={ORIGEM}
    />
  );
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */
export default function App() {
  return (
    <>
      <style>{styles}</style>
      <style>{geralStyles}</style>
      <Nav links={navLinks} />
      <Hero />
      <MarcasSection />
      <AntesDepoisSection />
      <MetodoSection />
      <ServicosSection />
      <LojasBand />
      <ProvaSection />
      <SociosSection />
      <Diagnostico />
      <FAQ items={FAQS} />
      <FinalCTA
        badge="Você ainda está aqui. Isso significa algo."
        title={["Todo mês que passa sem estrutura", "é dinheiro que não volta."]}
        text="A decisão de organizar o financeiro da sua empresa nunca vai ser urgente. Até o dia em que for tarde demais."
        ctaLabel="Começar agora, é gratuito"
        waMsg={WA_DIAG}
        origem={ORIGEM}
      />
      <Footer
        links={navLinks}
        waMsg={WA_MSG}
        origem={ORIGEM}
        tagline="Consultoria financeira empresarial para quem quer parar de trabalhar no escuro e começar a crescer com inteligência."
      />
      <StickyCTA />
    </>
  );
}
