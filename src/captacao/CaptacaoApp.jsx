import {
  ArrowRight, Phone, Video, Landmark, Cog, Building2, Sun, Wallet, Truck, Cpu,
  X, Check, CheckCircle2, AlertCircle, Factory, Stethoscope, Search, Calculator,
  FileText, Handshake, Info
} from "lucide-react";
import { C, styles } from "../shared/theme.js";
import {
  WaButton, Nav, MarcasSection, ProvaSection, SociosSection, FAQ, DiagnosticoSection,
  FinalCTA, Footer, StickyCTA
} from "../shared/components.jsx";

/* Página de captação de recursos — axibusiness.com.br/captacao/ */
const ORIGEM = "pagina-captacao";
const WA_MSG = "Olá! Vim pela página de captação de recursos da Axi Business e quero saber mais sobre crédito para a minha empresa.";
const WA_DIAG = "Olá! Vim pela página de captação de recursos da Axi Business e quero fazer meu pré-diagnóstico de crédito gratuito.";

const navLinks = [
  { label: "Para que serve", href: "#finalidades"   },
  { label: "Linhas",         href: "#linhas"        },
  { label: "Como funciona",  href: "#como-funciona" },
  { label: "Resultados",     href: "#resultados"    },
];

const AXI = { menta: "#0DF394", medio: "#0C7E50", escuro: "#032811" };

const capStyles = `
  .pd-card {
    background: #fff; color: ${C.textDark};
    border-radius: 18px; padding: 26px 26px 22px;
    box-shadow: 0 24px 80px rgba(0,0,0,0.45);
  }
  .pd-row {
    display: flex; align-items: flex-start; gap: 10px;
    padding: 10px 0; border-bottom: 1px dashed rgba(0,0,0,0.12); font-size: 14px; line-height: 1.45;
    opacity: 0; animation: fadeUp 0.5s ease forwards;
  }
  .pd-meter { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin-top: 8px; }
  .pd-meter span { height: 8px; border-radius: 4px; background: #E7ECE9; }
  .pd-meter span.on { background: linear-gradient(90deg, ${C.green}, ${AXI.medio}); }
  .pd-chip { display: inline-block; font-size: 12px; font-weight: 600; padding: 5px 10px; border-radius: 100px; background: ${C.greenLight}; color: ${C.greenDark}; }

  .fin-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
  .fin-ico {
    width: 52px; height: 52px; border-radius: 14px; margin-bottom: 18px;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, ${AXI.menta} 0%, ${AXI.medio} 60%, ${AXI.escuro} 100%);
  }

  .lin-grid { display: grid; grid-template-columns: 1.15fr 1fr; gap: 18px; align-items: stretch; }
  .lin-others { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .lin-fne { position: relative; overflow: hidden; }
  .lin-seal {
    position: absolute; top: 0; right: 0; width: 96px; height: 96px;
    background: linear-gradient(135deg, ${AXI.menta} 0%, ${AXI.medio} 60%, ${AXI.escuro} 100%);
    border-bottom-left-radius: 96px;
    display: flex; align-items: flex-start; justify-content: flex-end; padding: 18px 18px 0 0;
  }

  .tv-head, .tv-row { display: grid; grid-template-columns: 1fr 44px 1fr; align-items: stretch; }
  .tv-row + .tv-row { margin-top: 10px; }
  .tv-cell { display: flex; align-items: center; gap: 12px; padding: 16px 18px; border-radius: 12px; font-size: 15px; font-weight: 600; line-height: 1.4; }
  .tv-before { background: #fff; border: 1px solid rgba(229,62,62,0.18); color: ${C.textDark}; }
  .tv-after  { background: #fff; border: 1.5px solid rgba(0,201,123,0.35); color: ${C.textDark}; box-shadow: 0 4px 18px rgba(0,201,123,0.08); }
  .tv-arrow { display: flex; align-items: center; justify-content: center; color: #A3ADA7; }
  .tv-ico { width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }

  .steps4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }

  .res-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 18px; align-items: stretch; }
  .res-big { font-size: clamp(34px, 9vw, 60px); font-weight: 900; letter-spacing: -0.045em; line-height: 1; white-space: nowrap; }

  @media (max-width: 900px) {
    .pd-card { padding: 20px 18px 18px; }
    .fin-grid, .lin-grid, .lin-others, .steps4, .res-grid { grid-template-columns: 1fr; }
    .tv-head { display: none; }
    .tv-row { grid-template-columns: 1fr; }
    .tv-arrow { height: 20px; transform: rotate(90deg); }
    .tv-row + .tv-row { margin-top: 14px; }
    .tv-cell { padding: 12px 14px; font-size: 14px; }
    .final-actions { flex-direction: column; align-items: stretch; }
  }
  @media (max-width: 420px) {
    nav .nav-logo { height: 18px !important; }
    nav .btn-sm { padding: 10px 14px; }
  }
`;

/* ─────────────────────────────────────────
   HERO — dark section com o cartão de pré-diagnóstico
───────────────────────────────────────── */
const CHECKS = [
  { ok: true,  t: "Faturamento declarado compatível com o valor pedido" },
  { ok: true,  t: "Finalidade enquadrável: máquinas e ampliação" },
  { ok: true,  t: "CNPJ sem restrições" },
  { ok: false, t: "Garantias: complementar com aval ou fundo garantidor" },
];

function PreDiagCard() {
  return (
    <div className="pd-card">
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.greenDark, marginBottom: 6 }}>
        Pré-diagnóstico de crédito
      </p>
      <p style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: 10 }}>
        Indústria pedindo R$ 800 mil para novas máquinas
      </p>

      {CHECKS.map((c, i) => (
        <div key={c.t} className="pd-row" style={{ animationDelay: `${0.15 + i * 0.15}s` }}>
          {c.ok
            ? <CheckCircle2 size={18} color={C.green} style={{ flexShrink: 0, marginTop: 1 }} />
            : <AlertCircle size={18} color="#D69E2E" style={{ flexShrink: 0, marginTop: 1 }} />}
          <span style={{ color: c.ok ? C.textDark : "#8A6D1F" }}>{c.t}</span>
        </div>
      ))}

      <div style={{ marginTop: 16, opacity: 0, animation: "fadeUp 0.5s ease 0.9s forwards" }}>
        <p style={{ fontSize: 12, color: C.muted, fontWeight: 600, marginBottom: 8 }}>Linhas com potencial</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          <span className="pd-chip">FNE, Banco do Nordeste</span>
          <span className="pd-chip">BNDES via banco parceiro</span>
          <span className="pd-chip">Linha para energia solar</span>
        </div>
      </div>

      <div style={{ marginTop: 16, padding: "14px 16px", background: C.greenLight, borderRadius: 10, opacity: 0, animation: "fadeUp 0.5s ease 1.2s forwards" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
          <span style={{ fontWeight: 700, fontSize: 14 }}>Elegibilidade estimada</span>
          <span style={{ fontWeight: 900, fontSize: 20, color: C.greenDark, letterSpacing: "-0.02em" }}>Boa</span>
        </div>
        <div className="pd-meter" aria-hidden="true">
          <span className="on" /><span className="on" /><span className="on" /><span />
        </div>
      </div>

      <p style={{ fontSize: 12, color: C.muted, marginTop: 12, lineHeight: 1.5 }}>
        Exemplo ilustrativo. A aprovação e as condições dependem da análise do banco.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: `linear-gradient(160deg, ${C.dark} 0%, #0D1F15 60%, #0A1A10 100%)`,
        paddingTop: 110,
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
        color: C.text,
      }}
    >
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,201,123,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="container">
        <div className="two-col hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>
          <div className="hero-copy">
            <span className="tag tag-dark" style={{ marginBottom: 28 }}>
              <Landmark size={11} /> Captação de recursos para empresas
            </span>

            <h1 style={{ fontSize: "clamp(36px, 5.5vw, 62px)", fontWeight: 900, lineHeight: 1.07, letterSpacing: "-0.035em", marginBottom: 24 }}>
              Crédito para investir existe.<br />
              <span style={{ color: C.green }}>O difícil é chegar até ele.</span>
            </h1>

            <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, marginBottom: 40, maxWidth: 560 }}>
              Linhas como o FNE, do Banco do Nordeste, financiam máquinas, obras, energia solar e capital de giro com prazo longo, carência e juros bem menores que os do crédito comum. A Axi descobre quais linhas cabem na sua empresa e cuida do pedido do começo ao fim.
            </p>

            <div className="hero-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
              <a href="#diagnostico" className="btn btn-primary btn-lg">
                Fazer pré-diagnóstico gratuito <ArrowRight size={18} />
              </a>
              <WaButton msg={WA_MSG} origem={`${ORIGEM}-hero`} className="btn btn-outline-dark btn-lg">
                <Phone size={17} /> WhatsApp
              </WaButton>
            </div>
            <p style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 48 }}>
              <Video size={16} color={C.green} style={{ flexShrink: 0 }} />
              Online, por videochamada, para empresas de todo o Brasil.
            </p>

            <div className="hero-stats" style={{ display: "flex", gap: 40, flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
              {[
                { n: "R$2,3M", l: "contratados em uma única operação" },
                { n: "+120", l: "empresas atendidas" },
                { n: "1 hora", l: "para saber se você tem acesso" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="stat-num" style={{ color: C.green }}>{s.n}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 4, maxWidth: 170 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <PreDiagCard />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PARA QUE SERVE — light section
───────────────────────────────────────── */
function FinalidadesSection() {
  const ico = { size: 24, color: "#fff", strokeWidth: 2 };
  const items = [
    { icon: <Cog {...ico} />,       title: "Máquinas e equipamentos", desc: "Comprar, trocar ou ampliar o parque de máquinas para produzir mais e com menos custo." },
    { icon: <Building2 {...ico} />, title: "Obra, reforma e ampliação", desc: "Construir, reformar, ampliar a estrutura ou abrir uma nova unidade." },
    { icon: <Sun {...ico} />,       title: "Energia solar", desc: "Instalar geração própria de energia e reduzir o peso da conta de luz no caixa." },
    { icon: <Wallet {...ico} />,    title: "Capital de giro", desc: "Reforçar o caixa para comprar estoque, atravessar a sazonalidade e sustentar o crescimento." },
    { icon: <Truck {...ico} />,     title: "Veículos e frota", desc: "Caminhões, utilitários e veículos que fazem a operação rodar." },
    { icon: <Cpu {...ico} />,       title: "Tecnologia e inovação", desc: "Sistemas, equipamentos e projetos que modernizam a empresa." },
  ];

  return (
    <section id="finalidades" style={{ background: C.cream }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="tag tag-green"><Landmark size={11} /> Para que serve</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, marginBottom: 16, lineHeight: 1.15 }}>
            O projeto que está no papel<br />
            <span style={{ color: C.green }}>pode ter crédito para sair dele</span>
          </h2>
          <p style={{ color: C.muted, maxWidth: 560, margin: "0 auto", fontSize: 17 }}>
            Crédito de longo prazo é feito para investir. Estes são os projetos que mais aparecem nos nossos pré-diagnósticos.
          </p>
        </div>

        <div className="fin-grid" style={{ marginBottom: 48 }}>
          {items.map((it) => (
            <div key={it.title} className="card card-light" style={{ padding: "28px 24px" }}>
              <div className="fin-ico" aria-hidden="true">{it.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.textDark, marginBottom: 8, letterSpacing: "-0.02em" }}>{it.title}</h3>
              <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.65 }}>{it.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#diagnostico" className="btn btn-primary btn-lg">
            Quero saber se tenho acesso <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   LINHAS — dark section
───────────────────────────────────────── */
function LinhasSection() {
  const fne = [
    "Prazo longo para pagar e carência para começar",
    "Juros bem menores que os do crédito bancário comum",
    "Investimento e capital de giro ligado ao projeto",
    "Para empresas de todos os portes, da micro à grande",
  ];
  const outras = [
    { title: "BNDES", desc: "Máquinas, equipamentos e investimento, contratados por meio de bancos parceiros em todo o Brasil." },
    { title: "Bancos e cooperativas", desc: "Linhas de investimento e capital de giro em bancos públicos, privados e cooperativas de crédito." },
    { title: "Fundos regionais", desc: "Fundos de outras regiões, como FNO e FCO, e agências de fomento estaduais." },
    { title: "Energia e projetos verdes", desc: "Linhas específicas para geração de energia e projetos sustentáveis." },
  ];

  return (
    <section id="linhas" style={{ background: C.dark, color: C.text }}>
      <div className="container">
        <div style={{ maxWidth: 660, marginBottom: 52 }}>
          <span className="tag tag-dark"><Landmark size={11} /> Linhas de crédito</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}>
            A linha certa faz diferença<br className="br-desktop" />{" "}
            <span style={{ color: C.green }}>em cada parcela</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 16, lineHeight: 1.8 }}>
            O banco costuma oferecer o crédito que está na prateleira. A Axi compara as linhas disponíveis para o porte, o setor e a região da sua empresa e busca a que tem o prazo e o custo mais adequados ao projeto.
          </p>
        </div>

        <div className="lin-grid">
          <div className="card lin-fne" style={{ background: "#fff", color: C.textDark, padding: "32px 30px", borderRadius: 16 }}>
            <div className="lin-seal" aria-hidden="true"><Landmark size={28} color="#fff" /></div>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.greenDark, marginBottom: 10 }}>
              Nosso destaque
            </p>
            <h3 style={{ fontSize: 26, fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 8, paddingRight: 80 }}>
              FNE, Banco do Nordeste
            </h3>
            <p style={{ color: C.muted, fontSize: 14.5, lineHeight: 1.7, marginBottom: 20 }}>
              Recurso do Fundo Constitucional de Financiamento do Nordeste, para empresas do Nordeste e do norte de Minas Gerais e do Espírito Santo.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {fne.map((t) => (
                <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color={C.green} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.45 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lin-others">
            {outras.map((o) => (
              <div key={o.title} className="card card-dark" style={{ padding: "22px 20px", borderTop: `3px solid ${C.green}`, borderRadius: "0 0 12px 12px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8, color: C.text }}>{o.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.66)", fontSize: 14, lineHeight: 1.65 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 28, fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 760 }}>
          <Info size={15} style={{ flexShrink: 0, marginTop: 2 }} />
          A Axi Business é uma consultoria financeira, não um banco. A aprovação do crédito, as taxas e as condições dependem da análise de cada instituição.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   O QUE TRAVA x COMO A AXI DESTRAVA — light section
───────────────────────────────────────── */
function TravasSection() {
  const rows = [
    { a: "Não sabe quais linhas existem para a sua empresa", d: "Mapeamos as linhas compatíveis com o seu porte, setor e região" },
    { a: "Pedido parado há meses ou negado sem explicação", d: "Projeto montado do jeito que o banco analisa" },
    { a: "Papelada, certidões e exigências sem fim", d: "Organizamos a documentação junto com você" },
    { a: "Medo de a parcela apertar o caixa", d: "Simulamos a parcela no seu fluxo de caixa antes de assinar" },
    { a: "Ninguém acompanha o pedido dentro do banco", d: "Acompanhamos a análise até o dinheiro sair" },
  ];

  return (
    <section id="travas" style={{ background: C.creamDark }}>
      <div className="container" style={{ maxWidth: 980 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="tag tag-red"><AlertCircle size={11} /> Por que o crédito não sai</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, marginBottom: 16, lineHeight: 1.15 }}>
            O que trava o crédito<br />
            <span style={{ color: C.green }}>e como a Axi destrava</span>
          </h2>
          <p style={{ color: C.muted, maxWidth: 540, margin: "0 auto", fontSize: 17 }}>
            Na maioria das vezes, o problema não é a empresa. É o caminho até o banco.
          </p>
        </div>

        <div className="tv-head" style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.red, paddingLeft: 18 }}>Sem ajuda</p>
          <span />
          <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.greenDark, paddingLeft: 18 }}>Com a Axi</p>
        </div>

        {rows.map((r) => (
          <div key={r.a} className="tv-row">
            <div className="tv-cell tv-before">
              <span className="tv-ico" style={{ background: C.redFaint }}><X size={14} color={C.red} strokeWidth={3} /></span>
              {r.a}
            </div>
            <div className="tv-arrow" aria-hidden="true"><ArrowRight size={20} /></div>
            <div className="tv-cell tv-after">
              <span className="tv-ico" style={{ background: C.greenLight }}><Check size={14} color={C.green} strokeWidth={3} /></span>
              {r.d}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   COMO FUNCIONA — light section
───────────────────────────────────────── */
function ComoFuncionaSection() {
  const ico = { size: 20, color: "#fff" };
  const steps = [
    { n: "1", icon: <Search {...ico} />,     title: "Pré-diagnóstico gratuito", desc: "Em 1 hora de conversa online, entendemos o projeto e dizemos se a sua empresa tem acesso a crédito e por quais linhas." },
    { n: "2", icon: <Calculator {...ico} />, title: "Enquadramento e simulação", desc: "Escolhemos a linha mais adequada e simulamos valor, prazo, carência e parcela dentro do seu fluxo de caixa." },
    { n: "3", icon: <FileText {...ico} />,   title: "Projeto e documentação", desc: "Montamos o projeto e organizamos os documentos no formato que o banco pede." },
    { n: "4", icon: <Handshake {...ico} />,  title: "Acompanhamento até a liberação", desc: "Seguimos a análise junto ao banco, respondemos às exigências e ficamos com você até a assinatura." },
  ];

  return (
    <section id="como-funciona" style={{ background: C.cream }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="tag tag-green"><ArrowRight size={11} /> Como funciona</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, lineHeight: 1.15 }}>
            Do pré-diagnóstico<br />
            <span style={{ color: C.green }}>ao contrato assinado</span>
          </h2>
        </div>

        <div className="steps4" style={{ marginBottom: 48 }}>
          {steps.map((s) => (
            <div key={s.n} className="card card-light" style={{ padding: "28px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: `linear-gradient(135deg, ${AXI.menta} 0%, ${AXI.medio} 70%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {s.icon}
                </div>
                <span style={{ fontWeight: 900, fontSize: 12, color: C.green, letterSpacing: "0.1em" }}>ETAPA {s.n}</span>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.textDark, marginBottom: 10, letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#diagnostico" className="btn btn-primary btn-lg">
            Começar pelo pré-diagnóstico <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   RESULTADOS — dark section, sem nome de cliente
───────────────────────────────────────── */
function ResultadosSection() {
  const andamento = [
    { icon: <Factory size={20} color={C.green} />,     seg: "Indústria têxtil",     det: "R$ 1 milhão, em projeto dividido em duas fases" },
    { icon: <Factory size={20} color={C.green} />,     seg: "Indústria",            det: "R$ 600 mil em projeto de investimento" },
    { icon: <Stethoscope size={20} color={C.green} />, seg: "Clínica de saúde",     det: "Projeto de crédito com obra" },
  ];

  return (
    <section id="resultados" style={{ background: `linear-gradient(160deg, #0A1A10 0%, ${C.dark} 100%)`, color: C.text }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span className="tag tag-dark"><CheckCircle2 size={11} /> Resultados reais</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.15 }}>
            Resultado de verdade,<br />
            <span style={{ color: C.green }}>com contrato assinado</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: "0 auto", fontSize: 15 }}>
            Por respeito aos clientes, não divulgamos nomes. Os valores e os segmentos são reais.
          </p>
        </div>

        <div className="res-grid">
          <div className="card" style={{ background: "#fff", color: C.textDark, padding: "34px 32px", borderRadius: 16 }}>
            <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.greenDark, marginBottom: 14 }}>
              Crédito contratado
            </p>
            <div className="res-big" style={{ color: AXI.medio }}>R$ 2,3 milhões</div>
            <p style={{ fontSize: 17, fontWeight: 700, marginTop: 12, marginBottom: 22, lineHeight: 1.4 }}>
              no Banco do Nordeste para uma locadora de máquinas
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { v: "120 meses", l: "para pagar" },
                { v: "2026", l: "contrato assinado em julho" },
              ].map((k) => (
                <div key={k.l} style={{ background: "#F4F7F5", borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em" }}>{k.v}</div>
                  <div style={{ fontSize: 12, color: C.muted }}>{k.l}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.65, marginTop: 18 }}>
              A Axi estruturou o projeto e acompanhou todo o processo junto ao banco até a assinatura do contrato.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 2 }}>
              Projetos em andamento
            </p>
            {andamento.map((a) => (
              <div key={a.seg + a.det} className="card card-dark" style={{ padding: "18px 20px", display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: C.greenFaint, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {a.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 3 }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{a.seg}</p>
                    <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F6C453", background: "rgba(246,196,83,0.12)", padding: "3px 8px", borderRadius: 100 }}>
                      Em andamento
                    </span>
                  </div>
                  <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{a.det}</p>
                </div>
              </div>
            ))}
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginTop: 4 }}>
              Empresas de segmentos diferentes, cada uma com a linha e o projeto adequados ao seu momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FAQ / FORMULÁRIO — conteúdo de captação
───────────────────────────────────────── */
const FAQS = [
  { q: "A Axi garante a aprovação do crédito?", a: "Não. Quem aprova é o banco, depois da análise dele. O trabalho da Axi é aumentar as chances: escolher a linha certa, montar o projeto e a documentação do jeito que o banco precisa e acompanhar a análise até a resposta. Se no pré-diagnóstico percebermos que o pedido não tem chance hoje, dizemos isso com clareza e mostramos o que precisa mudar." },
  { q: "Minha empresa não fica no Nordeste. Vocês atendem?", a: "Atendemos. O FNE é exclusivo para empresas do Nordeste e do norte de Minas Gerais e do Espírito Santo, mas existem outras linhas para empresas de todo o Brasil, como as do BNDES, de bancos públicos e privados, de cooperativas e de fundos regionais. O pré-diagnóstico e o acompanhamento são online." },
  { q: "Minha empresa é pequena. Consigo crédito?", a: "Existem linhas para todos os portes, inclusive para micro e pequenas empresas. O que mais pesa é o faturamento declarado, a situação do CNPJ e a capacidade de pagar a parcela. É isso que olhamos no pré-diagnóstico." },
  { q: "Que tipo de garantia o banco pede?", a: "Depende da linha, do valor e do perfil da empresa. Pode ser imóvel, máquinas, aval dos sócios, fundo garantidor ou uma combinação deles. No pré-diagnóstico já avaliamos o que a sua empresa tem disponível e o que costuma ser aceito." },
  { q: "Que documentos vou precisar?", a: "Em geral: contrato social, faturamento declarado, certidões negativas, demonstrativos contábeis e orçamentos do que vai ser comprado ou construído. Para o pré-diagnóstico não precisa ter nada pronto. Organizar é com a gente." },
  { q: "Quanto tempo leva até o dinheiro sair?", a: "Depende da linha, do valor e da análise do banco. Projeto bem montado e documentação completa fazem o processo andar mais rápido. No pré-diagnóstico damos uma estimativa realista para o seu caso." },
  { q: "Já tive crédito negado. Vale tentar de novo?", a: "Vale entender o motivo. Muitas negativas acontecem por linha errada, projeto mal apresentado ou documentação incompleta, e isso dá para corrigir. No pré-diagnóstico olhamos o que aconteceu e se faz sentido um novo pedido." },
  { q: "O pré-diagnóstico é gratuito mesmo?", a: "É. Uma conversa online de 1 hora, por videochamada, com um dos sócios da Axi, sem compromisso de contratação." },
];

const FORM_FIELDS = [
  { name: "nome", label: "Seu nome *", type: "text", placeholder: "Como podemos te chamar?", required: true, autoComplete: "name" },
  { name: "whatsapp", label: "WhatsApp *", type: "tel", placeholder: "(DDD) 99999-9999", required: true, autoComplete: "tel" },
  { name: "empresa", label: "Nome ou @ da empresa", type: "text", placeholder: "@suaempresa", required: false, autoComplete: "organization" },
  { name: "cidade_uf", label: "Cidade e estado da empresa *", type: "text", placeholder: "Ex: Fortaleza, CE", required: true, autoComplete: "address-level2" },
  { name: "segmento", label: "Segmento *", type: "select", required: true, options: ["Indústria", "Comércio e distribuição", "Serviços", "Saúde e clínicas", "Agronegócio", "Imobiliário e construção", "Turismo, hotelaria e alimentação", "Outro"] },
  { name: "faturamento_anual", label: "Faturamento anual declarado *", type: "select", required: true, options: ["Até R$360 mil", "R$360 mil a R$4,8 milhões", "R$4,8 milhões a R$16 milhões", "R$16 milhões a R$90 milhões", "Acima de R$90 milhões", "Empresa nova, ainda sem faturamento"] },
  { name: "valor_necessario", label: "Valor que a empresa precisa *", type: "select", required: true, options: ["Até R$100 mil", "R$100 mil a R$500 mil", "R$500 mil a R$1 milhão", "R$1 milhão a R$5 milhões", "Acima de R$5 milhões", "Ainda não sei"] },
  { name: "finalidade", label: "Finalidade do crédito *", type: "select", required: true, options: ["Máquinas e equipamentos", "Obra, reforma ou ampliação", "Energia solar", "Capital de giro", "Veículos e frota", "Tecnologia e inovação", "Mais de uma finalidade", "Outra"] },
  { name: "projeto", label: "Conte um pouco do projeto", type: "textarea", placeholder: "Ex: comprar duas máquinas novas e ampliar o galpão", required: false },
];

function Diagnostico() {
  const mes = new Date().toLocaleString("pt-BR", { month: "long" });
  return (
    <DiagnosticoSection
      tag="Pré-diagnóstico gratuito"
      title={["Descubra em 1 hora", "o crédito que a sua empresa pode buscar."]}
      text="Uma conversa online, por videochamada, com um dos sócios da Axi. Você conta o projeto, a gente analisa o perfil da empresa e mostra os caminhos de crédito possíveis, sem compromisso."
      bullets={[
        "Se a sua empresa tem acesso a crédito hoje e por quais linhas",
        "Uma estimativa de prazo, carência e parcela para o seu projeto",
        "O que ajustar antes de levar o pedido ao banco",
        "Os próximos passos para tirar o projeto do papel",
      ]}
      scarcity={<>A agenda de pré-diagnósticos de <strong style={{ color: C.text }}>{mes}</strong> tem poucas vagas.</>}
      formTitle="Peça seu pré-diagnóstico"
      formHint="Leva cerca de 1 minuto."
      submitLabel="Quero meu pré-diagnóstico gratuito"
      fields={FORM_FIELDS}
      hidden={{ interesse: "Captação de recursos" }}
      subject="Novo lead: Pré-diagnóstico de crédito (Captação)"
      origem={ORIGEM}
      waIntro="Olá! Vim pela página de captação de recursos da Axi Business e quero fazer meu pré-diagnóstico de crédito gratuito."
    />
  );
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */
export default function CaptacaoApp() {
  return (
    <>
      <style>{styles}</style>
      <style>{capStyles}</style>
      <Nav links={navLinks} homeHref="/captacao/" ctaLabel="Pré-diagnóstico grátis" />
      <Hero />
      <MarcasSection />
      <FinalidadesSection />
      <LinhasSection />
      <TravasSection />
      <ComoFuncionaSection />
      <ResultadosSection />
      <ProvaSection
        title={["Quem trabalha com a Axi", "cresce com mais segurança."]}
        ctaLabel="Quero meu pré-diagnóstico gratuito"
      />
      <SociosSection
        title={["Quem já esteve do lado do banco", "sabe o que ele analisa."]}
        text="Antes da Axi, os sócios atuaram como executivos em bancos e grandes empresas. Hoje usam essa experiência para preparar o pedido de crédito do jeito que a instituição precisa ver."
      />
      <Diagnostico />
      <FAQ items={FAQS} title={["Perguntas comuns", "sobre crédito para empresas"]} />
      <FinalCTA
        badge="Projeto parado também custa"
        title={["Enquanto o projeto espera,", "o crescimento também espera."]}
        text="A máquina nova, a obra ou a nova unidade podem sair do papel com crédito de longo prazo. O primeiro passo é saber se a sua empresa tem acesso, e isso leva 1 hora."
        ctaLabel="Quero meu pré-diagnóstico"
        waMsg={WA_DIAG}
        origem={ORIGEM}
      />
      <Footer
        links={navLinks}
        waMsg={WA_MSG}
        origem={ORIGEM}
        tagline="Captação de recursos e consultoria financeira para empresas que querem investir e crescer com crédito de longo prazo."
      />
      <StickyCTA label="Fazer pré-diagnóstico gratuito" />
    </>
  );
}
