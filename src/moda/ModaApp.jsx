import { AlertTriangle, ArrowRight, Phone, Store, Zap } from "lucide-react";
import { C, styles } from "../shared/theme.js";
import {
  WaButton, Nav, ProvaSection, SociosSection, FAQ, DiagnosticoSection, FinalCTA, Footer
} from "../shared/components.jsx";

/* Página para lojas de moda e varejo — axibusiness.com.br/moda/ */
const ORIGEM = "pagina-moda";
const WA_MSG = "Olá! Vim pela página de lojas da Axi Business e quero saber mais sobre a organização financeira para a minha loja.";
const WA_DIAG = "Olá! Vim pela página de lojas da Axi Business e quero agendar meu diagnóstico gratuito.";

const navLinks = [
  { label: "Sinais",        href: "#problemas"     },
  { label: "O que fazemos", href: "#solucao"       },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos",   href: "#provas"        },
];

const brl = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const modaStyles = `
  .sale-card {
    background: #fff; color: ${C.textDark};
    border-radius: 18px; padding: 28px 28px 24px;
    box-shadow: 0 24px 80px rgba(0,0,0,0.45);
  }
  .sale-row {
    display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
    padding: 11px 0; border-bottom: 1px dashed rgba(0,0,0,0.12); font-size: 14px;
    opacity: 0; animation: fadeUp 0.5s ease forwards;
  }
  .sale-row span:last-child { font-variant-numeric: tabular-nums; font-weight: 600; white-space: nowrap; }
  .sale-row.minus span:last-child { color: ${C.red}; }

  .solution-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
  .steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; position: relative; }

  @media (max-width: 900px) {
    .solution-grid, .steps-grid { grid-template-columns: 1fr; }
    .sale-card { padding: 22px 20px 20px; }
    .final-actions { flex-direction: column; align-items: stretch; }
  }
`;

/* ─────────────────────────────────────────
   HERO — dark section com o "cupom" da venda
───────────────────────────────────────── */
const VENDA = 200;
const SAIDAS = [
  { l: "Custo da peça", v: 80 },
  { l: "Taxa da maquininha (3x no crédito)", v: 9.8 },
  { l: "Imposto (Simples Nacional)", v: 12 },
  { l: "Comissão da vendedora", v: 6 },
  { l: "Aluguel, equipe e contas da loja", v: 60 },
];
const SOBRA = SAIDAS.reduce((acc, s) => acc - s.v, VENDA);

function SaleCard() {
  return (
    <div className="sale-card">
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.greenDark, marginBottom: 6 }}>
        Para onde vai uma venda
      </p>
      <p style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.3, marginBottom: 14 }}>
        Você vendeu {brl(VENDA)}. Quanto ficou?
      </p>

      <div className="sale-row" style={{ animationDelay: "0.1s" }}>
        <span>Venda</span><span>{brl(VENDA)}</span>
      </div>
      {SAIDAS.map((s, i) => (
        <div key={s.l} className="sale-row minus" style={{ animationDelay: `${0.25 + i * 0.15}s` }}>
          <span style={{ color: C.muted }}>{s.l}</span><span>− {brl(s.v)}</span>
        </div>
      ))}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 16, padding: "14px 16px", background: C.greenLight, borderRadius: 10, opacity: 0, animation: "fadeUp 0.5s ease 1.2s forwards" }}>
        <span style={{ fontWeight: 700, fontSize: 15 }}>Sobrou de verdade</span>
        <span style={{ fontWeight: 900, fontSize: 24, color: C.greenDark, letterSpacing: "-0.03em" }}>{brl(SOBRA)}</span>
      </div>

      <p style={{ fontSize: 12, color: C.muted, marginTop: 12, lineHeight: 1.5 }}>
        Pela conta "venda menos custo da peça", pareceria que sobraram {brl(VENDA - SAIDAS[0].v)}. Exemplo ilustrativo.
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
              <Store size={11} /> Para lojas de moda e varejo
            </span>

            <h1 style={{ fontSize: "clamp(36px, 5.5vw, 62px)", fontWeight: 900, lineHeight: 1.07, letterSpacing: "-0.035em", marginBottom: 24 }}>
              Sua loja vende.<br />
              <span style={{ color: C.green }}>Mas no fim do mês, cadê o lucro?</span>
            </h1>

            <p style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, marginBottom: 40, maxWidth: 540 }}>
              A Axi Business organiza o financeiro de lojas de moda para você saber quanto realmente ganha em cada venda, quanto pode retirar e onde o dinheiro escapa entre a maquininha, o estoque e o fornecedor.
            </p>

            <div className="hero-actions" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
              <a href="#diagnostico" className="btn btn-primary btn-lg">
                Agendar diagnóstico gratuito <ArrowRight size={18} />
              </a>
              <WaButton msg={WA_MSG} origem={`${ORIGEM}-hero`} className="btn btn-outline-dark btn-lg">
                <Phone size={17} /> WhatsApp
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

          <SaleCard />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SINAIS — light section
───────────────────────────────────────── */
function SinaisSection() {
  const pains = [
    { icon: "💳", title: "A maquininha come a margem", desc: "Parcelou em 6x, antecipou o recebível e ninguém sabe quanto a loja pagou de taxa naquela venda." },
    { icon: "👗", title: "Estoque parado, grade quebrada", desc: "Sobra P e GG da coleção passada e falta M do que gira. É dinheiro parado na arara." },
    { icon: "🏷️", title: "Preço definido no olho", desc: "O preço sai do custo vezes dois ou do que a concorrência cobra, sem saber se paga as contas da loja." },
    { icon: "🏠", title: "Dinheiro da loja e da casa juntos", desc: "Tira do caixa para uma conta pessoal aqui, cobre a loja com o cartão de casa ali, e no fim ninguém sabe quanto a loja lucrou." },
    { icon: "🔥", title: "Promoção que vende e não lucra", desc: "A loja enche na liquidação, o faturamento sobe e o caixa continua apertado no mês seguinte." },
    { icon: "🎯", title: "Equipe sem meta clara", desc: "A equipe não sabe quanto precisa vender por dia, e a comissão não puxa o resultado da loja." },
  ];

  return (
    <section id="problemas" style={{ background: C.cream }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="tag tag-red"><AlertTriangle size={11} /> Acontece em quase toda loja</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, marginBottom: 16, lineHeight: 1.15 }}>
            Você se reconhece em<br />
            <span style={{ color: C.green }}>alguma dessas situações?</span>
          </h2>
          <p style={{ color: C.muted, maxWidth: 500, margin: "0 auto", fontSize: 17 }}>
            Se marcou duas ou mais, a sua loja provavelmente está deixando lucro pelo caminho todo mês.
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
            Não é falta de esforço. É falta de número na mão.
          </p>
          <a href="#diagnostico" className="btn btn-primary btn-lg">
            Quero entender os números da minha loja <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   O QUE FAZEMOS — dark section
───────────────────────────────────────── */
function SolucaoSection() {
  const items = [
    { num: "01", title: "Controle de vendas do dia", desc: "Cada venda registrada com forma de pagamento, número de parcelas e a taxa real da maquininha calculada peça por peça." },
    { num: "02", title: "DRE da loja", desc: "Quanto entrou, quanto saiu e quanto sobrou de verdade no mês, com o dinheiro da loja separado do dinheiro de casa." },
    { num: "03", title: "Preço mínimo e preço ideal", desc: "Para cada peça, o menor preço que ainda dá lucro e o preço que paga a operação com folga." },
    { num: "04", title: "Estoque por grade", desc: "O que gira, o que está parado e o que comprar na próxima coleção, por modelo e por tamanho." },
    { num: "05", title: "Metas e comissão da equipe", desc: "Meta de faturamento da loja e um modelo de comissão que premia quem vende sem sacrificar a margem." },
    { num: "06", title: "Vender sem queimar margem", desc: "Ações com a sua base de clientes no WhatsApp e no Instagram para datas fortes e fim de mês, sem depender só de desconto." },
  ];

  return (
    <section id="solucao" style={{ background: C.dark, color: C.text }}>
      <div className="container">
        <div style={{ maxWidth: 640, marginBottom: 56 }}>
          <span className="tag tag-dark"><Zap size={11} /> Feito para a rotina de loja</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}>
            Um financeiro que entende<br className="br-desktop" />{" "}
            <span style={{ color: C.green }}>de arara, grade e maquininha</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 16, lineHeight: 1.8 }}>
            Nada de relatório genérico. A gente monta com você as ferramentas que uma loja precisa para decidir com segurança, e acompanha até o resultado aparecer no caixa.
          </p>
        </div>

        <div className="solution-grid">
          {items.map((s) => (
            <div key={s.num} className="card card-dark method-step" style={{ padding: "26px 24px 26px 20px", borderLeft: `3px solid ${C.green}`, borderRadius: "0 12px 12px 0" }}>
              <div className="method-step-row" style={{ display: "flex", gap: 16 }}>
                <span style={{ fontWeight: 900, fontSize: 12, color: C.green, letterSpacing: "0.1em", flexShrink: 0, marginTop: 3 }}>
                  {s.num}
                </span>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8, color: C.text }}>
                    {s.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 14.5, lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
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
   COMO FUNCIONA — light section
───────────────────────────────────────── */
function ComoFuncionaSection() {
  const steps = [
    { n: "1", title: "Diagnóstico gratuito de 1 hora", desc: "Uma conversa com um dos sócios para olhar os números da sua loja e mostrar onde o dinheiro está escapando." },
    { n: "2", title: "Plano para a sua loja", desc: "Se fizer sentido para os dois lados, você recebe uma proposta com o que vamos organizar primeiro e em quanto tempo." },
    { n: "3", title: "Implantação e acompanhamento", desc: "Montamos as ferramentas junto com você e sua equipe, e acompanhamos os números da loja todo mês." },
  ];

  return (
    <section id="como-funciona" style={{ background: C.creamDark }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="tag tag-green"><ArrowRight size={11} /> Como funciona</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, letterSpacing: "-0.03em", color: C.textDark, lineHeight: 1.15 }}>
            Do primeiro papo ao<br />
            <span style={{ color: C.green }}>lucro com número na mão</span>
          </h2>
        </div>

        <div className="steps-grid" style={{ marginBottom: 48 }}>
          {steps.map((s) => (
            <div key={s.n} className="card card-light" style={{ padding: "28px 24px" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.green, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 17, marginBottom: 18 }}>
                {s.n}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.textDark, marginBottom: 10, letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#diagnostico" className="btn btn-primary btn-lg">
            Agendar meu diagnóstico <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FAQ / FORMULÁRIO — conteúdo para lojas
───────────────────────────────────────── */
const FAQS = [
  { q: "Já uso um sistema na loja. Ainda faz sentido?", a: "Faz. O sistema registra as vendas, mas não diz se a loja está dando lucro. A Axi usa o que o seu sistema já gera e transforma em DRE, preço, metas e decisões. Se a loja ainda não tem sistema, começamos com um controle simples e evoluímos quando for a hora." },
  { q: "Minha loja é pequena. Vale a pena?", a: "Loja pequena é justamente onde um erro de preço ou de taxa pesa mais no fim do mês. Atendemos lojas a partir de R$30 mil de faturamento mensal." },
  { q: "Vendo na loja física e pelo Instagram. Vocês organizam os dois?", a: "Sim. As vendas de todos os canais entram no mesmo controle, com as taxas e o frete de cada um, para você ver qual canal realmente dá lucro." },
  { q: "Já tenho contador. O que muda?", a: "O contador cuida do que passou: impostos, folha e obrigações legais. A Axi cuida do que está acontecendo e do que vai acontecer: caixa, margem, preço, estoque e metas. São trabalhos que se completam." },
  { q: "Como funciona o diagnóstico gratuito?", a: "É uma conversa de 1 hora com um dos sócios da Axi. Você traz os números que tiver e sai com pelo menos 3 pontos de ação para a sua loja, mesmo que não contrate a gente." },
  { q: "Preciso organizar tudo antes da reunião?", a: "Não. Traga o que tiver à mão: extrato da maquininha, relatório de vendas do sistema, contas do mês. Organizar é com a gente." },
];

const FORM_FIELDS = [
  { name: "nome", label: "Seu nome *", type: "text", placeholder: "Como podemos te chamar?", required: true, autoComplete: "name" },
  { name: "whatsapp", label: "WhatsApp *", type: "tel", placeholder: "(85) 99999-9999", required: true, autoComplete: "tel" },
  { name: "loja", label: "Nome ou @ da loja", type: "text", placeholder: "@sualoja", required: false },
  { name: "canal", label: "Onde você vende? *", type: "select", required: true, options: ["Loja física", "Online (Instagram, site, marketplace)", "Loja física e online"] },
  { name: "faturamento", label: "Faturamento mensal da loja *", type: "select", required: true, options: ["Até R$30 mil", "R$30 mil – R$100 mil", "R$100 mil – R$300 mil", "Acima de R$300 mil"] },
  { name: "dor_financeira", label: "O que mais pesa hoje na loja?", type: "textarea", placeholder: "Ex: estoque parado, taxa da maquininha, não sei quanto lucro...", required: false },
];

function Diagnostico() {
  const mes = new Date().toLocaleString("pt-BR", { month: "long" });
  return (
    <DiagnosticoSection
      title={["1 hora para enxergar", "o lucro real da sua loja."]}
      text="Uma conversa direta com um dos sócios da Axi. Sem script de venda: você traz os números da loja e sai sabendo o que resolver primeiro."
      bullets={[
        "Onde a sua loja está perdendo dinheiro hoje",
        "Quanto as taxas e o parcelamento custam por mês",
        "3 ações para começar já na próxima semana",
        "Proposta personalizada, se fizer sentido para os dois lados",
      ]}
      scarcity={<>A agenda de diagnósticos de <strong style={{ color: C.text }}>{mes}</strong> tem poucas vagas.</>}
      formHint="Leva menos de 1 minuto."
      fields={FORM_FIELDS}
      hidden={{ segmento: "Moda e varejo" }}
      subject="Novo lead - Diagnóstico Axi Business (Lojas)"
      origem={ORIGEM}
      waIntro="Olá! Vim pela página de lojas da Axi Business e quero agendar meu diagnóstico gratuito."
    />
  );
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */
export default function ModaApp() {
  return (
    <>
      <style>{styles}</style>
      <style>{modaStyles}</style>
      <Nav links={navLinks} homeHref="/moda/" />
      <Hero />
      <SinaisSection />
      <SolucaoSection />
      <ComoFuncionaSection />
      <ProvaSection ctaLabel="Quero organizar o financeiro da minha loja" />
      <SociosSection />
      <Diagnostico />
      <FAQ items={FAQS} title={["Perguntas que todo lojista", "faz antes de começar"]} />
      <FinalCTA
        badge="A próxima coleção já está chegando"
        title={["Venda sem margem clara", "é lucro indo embora."]}
        text="A coleção nova chega, a liquidação passa e o caixa continua apertado. Dá para mudar isso começando por uma conversa de 1 hora."
        ctaLabel="Agendar diagnóstico gratuito"
        waMsg={WA_DIAG}
        origem={ORIGEM}
      />
      <Footer
        links={navLinks}
        waMsg={WA_MSG}
        origem={ORIGEM}
        tagline="Organização financeira para lojas de moda e varejo que querem vender com lucro e crescer com número na mão."
      />
    </>
  );
}
