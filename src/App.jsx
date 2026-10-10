import {
  TrendingUp, AlertTriangle, ArrowRight, BarChart3, Shield, Target, Zap, Phone
} from "lucide-react";
import { C, IMG, styles } from "./shared/theme.js";
import {
  useCountdown, WaButton, Nav, ProvaSection, SociosSection, FAQ,
  DiagnosticoSection, FinalCTA, Footer
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
            Vagas limitadas - encerram em {cd.d}d {cd.h}h {cd.m}m {cd.s}s
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
              alt="Igor e Wilton - sócios Axi Business"
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
   DOR — light section
───────────────────────────────────────── */
function DorSection() {
  const pains = [
    { icon: "💸", title: "Fatura mas não sobra nada", desc: "O mês termina e você não sabe para onde foi o dinheiro. Você trabalha mais que funcionário e ganha menos que deveria." },
    { icon: "📊", title: "Decisão no escuro", desc: "Você toma decisão por intuição porque não tem dado confiável. Um número errado pode custar o negócio." },
    { icon: "🔥", title: "Apagando incêndio todo dia", desc: "Fornecedor cobrando, imposto atrasado, folha de pagamento apertada. Você gerencia crise, não empresa." },
    { icon: "😰", title: "Medo de olhar o financeiro", desc: "Você evita abrir o extrato porque sabe que vai doer. E enquanto evita, o problema cresce." },
    { icon: "📅", title: "Sem previsibilidade de caixa", desc: "Você não sabe o que vai sobrar (ou faltar) nos próximos 90 dias. É impossível crescer assim." },
    { icon: "🎯", title: "Sócios sem alinhamento", desc: "Sem dados claros, cada sócio tem sua versão da realidade. Isso gera conflito, não estratégia." },
  ];

  return (
    <section id="problemas" style={{ background: C.cream }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="tag tag-red"><AlertTriangle size={11} /> O diagnóstico real</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, marginBottom: 16, lineHeight: 1.15 }}>
            Reconhece algum desses<br />
            <span style={{ color: C.green }}>sintomas no seu negócio?</span>
          </h2>
          <p style={{ color: C.muted, maxWidth: 480, margin: "0 auto", fontSize: 17 }}>
            Se você identificou 2 ou mais, seu negócio tem um problema financeiro que está freando o crescimento.
          </p>
        </div>

        <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 56 }}>
          {pains.map((p, i) => (
            <div key={i} className="card card-light" style={{ padding: "28px 24px" }}>
              <span style={{ fontSize: 30, display: "block", marginBottom: 16 }}>{p.icon}</span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: C.textDark, marginBottom: 10, letterSpacing: "-0.02em" }}>{p.title}</h3>
              <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ color: C.muted, fontSize: 15, marginBottom: 24 }}>
            Esses não são problemas de esforço. São problemas de sistema financeiro.
          </p>
          <a href="#diagnostico" className="btn btn-primary btn-lg">
            Quero resolver isso agora <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MÉTODO — dark section
───────────────────────────────────────── */
function MetodoSection() {
  const steps = [
    { num: "01", title: "Diagnóstico Financeiro", desc: "Mapeamos a situação real do seu negócio em 72 horas. Sem eufemismos: você vai enxergar exatamente onde está perdendo dinheiro.", detail: "Análise de DRE, fluxo de caixa, estrutura de custos e margem real por produto ou serviço." },
    { num: "02", title: "Arquitetura Financeira", desc: "Redesenhamos toda a estrutura: separação de caixas, pró-labore, reservas estratégicas e previsibilidade de 90 dias.", detail: "Dashboard em tempo real para você tomar decisão com dado, não com instinto." },
    { num: "03", title: "Execução e BPO", desc: "Você pode delegar o financeiro operacional para a gente. Contas, relatórios e indicadores: tudo executado e entregue.", detail: "Gestão contínua com reuniões mensais de análise estratégica e alertas proativos." },
    { num: "04", title: "Inteligência de Crescimento", desc: "Com a base financeira estruturada, você começa a tomar decisões de expansão com segurança e número na mão.", detail: "Modelagem de cenários, análise de viabilidade e projeções antes de qualquer movimento." },
  ];

  return (
    <section id="metodo" style={{ background: C.dark, color: C.text }}>
      <div className="container">
        <div className="two-col method-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
          <div className="method-aside" style={{ position: "sticky", top: 120 }}>
            <span className="tag tag-dark"><Zap size={11} /> Método Axi</span>

            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.15 }}>
              Um sistema que transforma<br />
              <span style={{ color: C.green }}>caos em previsibilidade</span>
            </h2>

            <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              A maioria dos consultores entrega um relatório e vai embora. A Axi implanta, executa e acompanha até o número aparecer na conta.
            </p>

            <div style={{ background: C.greenFaint, border: `1px solid ${C.border}`, borderRadius: 12, padding: "20px 24px" }}>
              <p style={{ fontSize: 11, color: C.green, fontWeight: 700, marginBottom: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>Nossa garantia</p>
              <p style={{ fontSize: 15, color: C.text, lineHeight: 1.65 }}>
                Se após 90 dias você não tiver visibilidade financeira completa do seu negócio, devolvemos seu investimento integralmente.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {steps.map((s, i) => (
              <div key={i} className="card card-dark method-step" style={{ padding: "28px 24px 28px 20px", borderLeft: `3px solid ${C.green}`, borderRadius: "0 12px 12px 0" }}>
                <div className="method-step-row" style={{ display: "flex", gap: 16 }}>
                  <span style={{ fontWeight: 900, fontSize: 12, color: C.green, letterSpacing: "0.1em", flexShrink: 0, marginTop: 3 }}>
                    {s.num}
                  </span>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10, color: C.text }}>
                      {s.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, marginBottom: 10, lineHeight: 1.7 }}>
                      {s.desc}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, lineHeight: 1.65 }}>
                      {s.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SERVIÇOS — cream/light section
───────────────────────────────────────── */
function ServicosSection() {
  const services = [
    {
      icon: <Shield size={22} color={C.green} />,
      title: "BPO Financeiro",
      desc: "Terceirizamos toda a rotina financeira da sua empresa. Você foca no negócio, nós cuidamos dos números com precisão e sem surpresas.",
      ideal: "Empresas que querem escalar sem contratar CFO",
    },
    {
      icon: <BarChart3 size={22} color={C.green} />,
      title: "Consultoria Financeira",
      desc: "Diagnóstico completo mais estruturação financeira para empresas que querem clareza e controle. Ideal para quem está pronto para parar de trabalhar no escuro.",
      ideal: "Empresas faturando R$30k–500k/mês",
      highlight: true,
    },
    {
      icon: <Target size={22} color={C.green} />,
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
          <p style={{ color: C.muted, maxWidth: 480, margin: "0 auto" }}>
            Nosso diagnóstico inicial é sempre gratuito e define qual caminho faz mais sentido para o seu caso.
          </p>
        </div>

        <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 32 }}>
          {services.map((s, i) => (
            <div
              key={i}
              className="card card-light"
              style={{
                padding: 32,
                position: "relative",
                ...(s.highlight ? { border: `2px solid ${C.green}`, boxShadow: `0 8px 32px rgba(0,201,123,0.15)` } : {})
              }}
            >
              {s.highlight && (
                <div style={{
                  position: "absolute",
                  top: -1,
                  left: 20,
                  background: C.green,
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 800,
                  padding: "4px 12px",
                  borderRadius: "0 0 8px 8px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  Mais popular
                </div>
              )}

              <div style={{ width: 44, height: 44, borderRadius: 10, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, marginTop: s.highlight ? 20 : 0 }}>
                {s.icon}
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.textDark, letterSpacing: "-0.02em", marginBottom: 12 }}>
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
   FAQ / FORMULÁRIO — conteúdo da página geral
───────────────────────────────────────── */
const FAQS = [
  { q: "Minha empresa é pequena. Faz sentido contratar uma consultoria financeira?", a: "Sim — especialmente por isso. Empresas pequenas perdem proporcionalmente mais dinheiro por falta de estrutura financeira do que as grandes. Um erro de precificação ou uma conta ignorada tem impacto direto na sobrevivência do negócio. Atendemos empresas a partir de R$30k/mês de faturamento." },
  { q: "Já tenho contador. O que a Axi faz de diferente?", a: "O contador cuida do que passou (fiscal, tributos, obrigações legais). A Axi cuida do que está acontecendo e do que vai acontecer: fluxo de caixa, previsibilidade, margem e decisão estratégica. São funções complementares, não concorrentes." },
  { q: "Quanto tempo leva para ver resultado?", a: "Nossos clientes costumam ter as primeiras percepções em até 30 dias — quando entregamos o diagnóstico completo com os principais pontos de sangria financeira. Mudanças estruturais e aumento de margem costumam aparecer entre 60 e 90 dias de implementação." },
  { q: "Como funciona o diagnóstico gratuito?", a: "É uma reunião de 45 a 60 minutos com um dos nossos sócios. Sem script de venda. Analisamos os números que você trouxer e você sai com pelo menos 3 insights acionáveis — mesmo que não contrate a gente." },
  { q: "E se eu não quiser gerenciar nada disso?", a: "Nosso BPO Financeiro foi feito exatamente para isso. Você delega a operação financeira inteira pra nós. Contas, relatórios, alertas, reuniões mensais — tudo sob nossa responsabilidade. Você só toma a decisão final." },
];

const FORM_FIELDS = [
  { name: "nome", label: "Nome completo *", type: "text", placeholder: "Seu nome", required: true, autoComplete: "name" },
  { name: "whatsapp", label: "WhatsApp *", type: "tel", placeholder: "(85) 99999-9999", required: true, autoComplete: "tel" },
  { name: "email", label: "E-mail *", type: "email", placeholder: "voce@empresa.com", required: true, autoComplete: "email" },
  { name: "segmento", label: "Segmento da empresa *", type: "text", placeholder: "Ex: clínica...", required: true },
  { name: "faturamento", label: "Faturamento mensal *", type: "select", required: true, options: ["Até R$50 mil", "R$50k – R$150k", "R$150k – R$500k", "Acima de R$500k"] },
  { name: "dor_financeira", label: "Principal dor financeira", type: "textarea", placeholder: "Descreva brevemente...", required: false },
];

function Diagnostico() {
  const cd = useCountdown();
  return (
    <DiagnosticoSection
      title={["45 minutos que podem", "mudar o seu negócio."]}
      text="Uma conversa direta com um dos nossos sócios. Sem script de venda. Você traz os números, a gente traz os insights gratuitamente."
      bullets={[
        "Identificação dos principais pontos de perda financeira",
        "Análise da sua estrutura de caixa atual",
        "3 ações imediatas que você pode implementar sozinho",
        "Proposta personalizada se fizer sentido para os dois lados",
      ]}
      scarcity={<>Apenas <strong style={{ color: C.text }}>3 vagas</strong> este mês. Encerramento em {cd.d}d {cd.h}h {cd.m}m.</>}
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
      <Nav links={navLinks} />
      <Hero />
      <DorSection />
      <MetodoSection />
      <ServicosSection />
      <ProvaSection />
      <SociosSection />
      <Diagnostico />
      <FAQ items={FAQS} />
      <FinalCTA
        badge="Você ainda está aqui. Isso significa algo."
        title={["Todo mês que passa sem estrutura", "é dinheiro que não volta."]}
        text="A decisão de organizar o financeiro da sua empresa nunca vai ser urgente — até o dia que for tarde demais."
        ctaLabel="Começar agora — é gratuito"
        waMsg={WA_DIAG}
        origem={ORIGEM}
      />
      <Footer
        links={navLinks}
        waMsg={WA_MSG}
        origem={ORIGEM}
        tagline="Consultoria financeira empresarial para quem quer parar de trabalhar no escuro e começar a crescer com inteligência."
      />
    </>
  );
}
