import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroRetrato from "@/assets/wanessa-hero.png.asset.json";
import logoTambani from "@/assets/logo-tambani.png.asset.json";
import sobreRetrato from "@/assets/wanessa-sobre.png.asset.json";
import AppleCardsCarouselDemo from "@/components/ui/apple-cards-carousel-demo";
import FAQSections from "@/components/ui/faq-sections";
import {
  Smile,
  Scan,
  Shield,
  Check,
  Sparkles,
  ArrowUpRight,
  Calendar,
  Heart,
  AlignCenter,
  Activity,
  Layers,
  UserCheck,
} from "lucide-react";

const SITE_URL = "https://clinicatambani.com.br";
const WHATSAPP_URL = "https://wa.me/5569000000000";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#wanessa`,
  name: "Dra. Wanessa Galmacci",
  jobTitle: "Cirurgiã-Dentista · Estética e Reabilitação do Sorriso",
  url: SITE_URL,
  worksFor: { "@type": "Organization", name: "Clínica CTA" },
  knowsAbout: [
    "Prótese odontológica",
    "Odontologia estética",
    "Reabilitação do sorriso",
    "Restaurações estéticas",
    "Recontorno estético com resina",
    "Clareamento dental",
    "Harmonia e proporção do sorriso",
  ],
};

const faq = [
  {
    q: "Quais são as principais áreas de atuação da Dra. Wanessa Galmacci?",
    a: "A Dra. Wanessa é cirurgiã-dentista com atuação voltada para prótese odontológica, odontologia estética, reabilitação do sorriso, restaurações estéticas, recontorno estético com resina, clareamento e harmonização estética do sorriso.",
  },
  {
    q: "O que significa 'a estética começar pela leitura do paciente'?",
    a: "Significa que não aplicamos padrões genéricos ou procedimentos padronizados. Antes de qualquer tratamento, entendemos a história do paciente, o que seu sorriso representa, suas necessidades funcionais e qual estética harmoniza com sua identidade.",
  },
  {
    q: "Como funciona o recontorno estético com resina?",
    a: "É um tratamento estético minucioso onde moldamos e harmonizamos contornos, formas e proporções dos dentes com resina composta de altíssima qualidade, devolvendo simetria e sofisticação com preservação dental.",
  },
  {
    q: "Como é agendada a primeira consulta de avaliação?",
    a: "Na consulta inicial, a Dra. Wanessa realiza uma escuta atenta dos seus objetivos, avalia a saúde funcional e estética da boca e elabora um plano de tratamento personalizado e transparente.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Wanessa Galmacci — Estética & Reabilitação do Sorriso | CTA" },
      {
        name: "description",
        content:
          "Dra. Wanessa Galmacci, cirurgiã-dentista especialista em estética, prótese e reabilitação do sorriso. Odontologia que une saúde, função e identidade.",
      },
      { property: "og:title", content: "Dra. Wanessa Galmacci — Estética & Reabilitação do Sorriso" },
      {
        property: "og:description",
        content:
          "A profissional que transforma sorrisos sem perder a identidade de quem está sorrindo. Estética + Função + Identidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE_URL}${heroRetrato.url}` },
      { name: "twitter:image", content: `${SITE_URL}${heroRetrato.url}` },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(personLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "preload", as: "image", href: heroRetrato.url },
    ],
  }),
  component: Home,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.35 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const titleRevealVariants = {
  hidden: { y: "100%", rotate: 2 },
  visible: {
    y: "0%",
    rotate: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-40px"]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-[100svh] overflow-hidden bg-deep font-sans text-cream"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0"
      >
        <img
          src={heroRetrato.url}
          alt="Dra. Wanessa Galmacci, cirurgiã-dentista especialista em estética e reabilitação do sorriso"
          className="h-full w-full object-cover object-[65%_center] md:object-[60%_center]"
        />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-6 py-24 md:px-10"
      >
        <div className="max-w-xl">
          <motion.img
            variants={itemVariants}
            src={logoTambani.url}
            alt="Clínica CTA"
            className="mb-10 w-40 md:w-52"
          />

          <motion.p
            variants={itemVariants}
            className="mb-4 text-[0.7rem] uppercase tracking-[0.45em] text-gold"
          >
            Cirurgiã-Dentista · Estética & Reabilitação
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              variants={titleRevealVariants}
              className="font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl"
            >
              Dra. Wanessa
              <span className="block text-cream">Galmacci</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base font-light leading-relaxed text-cream/90 md:text-lg"
          >
            “A profissional que transforma sorrisos sem perder a identidade de quem está sorrindo.”
          </motion.p>

          <motion.div variants={itemVariants} className="mt-4 flex flex-wrap gap-2 text-xs font-semibold tracking-wider text-gold uppercase">
            <span>Estética</span>
            <span>•</span>
            <span>Função</span>
            <span>•</span>
            <span>Identidade</span>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-deep shadow-lg shadow-gold/20 transition duration-500 hover:bg-cream hover:text-deep hover:shadow-xl hover:shadow-gold/30"
            >
              <Calendar className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
              <span className="font-display text-lg font-medium">Agendar consulta</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <a
              href="#sobre"
              className="inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/70 transition hover:border-gold hover:text-gold"
            >
              Conheça o posicionamento
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-cream/50">Deslize</span>
        <motion.span
          animate={{ height: [12, 32, 12], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gold"
        />
      </div>
    </section>
  );
}

function SectionHeader({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">{index}</p>
      <h2 className="max-w-3xl font-display text-3xl leading-tight text-deep sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

const itens = [
  { icon: Layers, b: "Prótese odontológica", t: "para restaurar a estrutura, a função e a segurança ao mastigar." },
  { icon: Sparkles, b: "Odontologia estética", t: "alinhada à harmonia facial e às proporções do seu rosto." },
  { icon: Activity, b: "Reabilitação do sorriso", t: "recuperando dentes e estética com planejamento integrado." },
  { icon: Smile, b: "Restaurações e recontorno", t: "aperfeiçoamento estético com resina preservando a essência dental." },
  { icon: UserCheck, b: "Leitura do paciente", t: "a estética deve começar pela pessoa e não pelo procedimento." },
];

function GanchoItem({ icon: Icon, b, t }: (typeof itens)[number]) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-start gap-4 rounded-2xl border border-deep/10 bg-white/70 p-6 transition hover:-translate-y-1 hover:border-gold/40"
    >
      <Icon className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
      <p className="text-sm leading-relaxed text-deep-soft">
        <span className="font-medium text-deep">{b}</span> {t}
      </p>
    </motion.div>
  );
}

function GanchoSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01 — Posicionamento & Filosofia">
          A estética deve começar pela leitura do paciente e não pelo procedimento.
        </SectionHeader>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {itens.map((i) => (
            <GanchoItem key={i.b} {...i} />
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 max-w-3xl text-lg leading-relaxed text-deep-soft"
        >
          <span className="font-display text-deep">O objetivo não é simplesmente colocar uma lente, fazer uma restauração ou reconstruir um dente.</span>{" "}
          É entender o que aquele sorriso representa para você, o que precisa ser recuperado e qual resultado combina com a sua história.
        </motion.p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep px-7 py-3.5 text-sm text-cream transition hover:bg-deep-soft"
        >
          Quero avaliar meu caso com a Dra. Wanessa
          <ArrowUpRight className="h-4 w-4 text-gold" />
        </a>
      </div>
    </section>
  );
}

function SobreSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  const credenciais = [
    "Cirurgiã-Dentista",
    "Estética e Reabilitação do Sorriso",
    "Prótese Odontológica",
    "Clínica CTA",
  ];

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative min-h-[110svh] overflow-hidden bg-deep font-sans"
    >
      <motion.img
        style={{ y: imageY, scale: imageScale }}
        src={sobreRetrato.url}
        alt="Dra. Wanessa Galmacci sorrindo"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 mx-auto flex min-h-[110svh] max-w-6xl items-center px-6 py-28 md:px-10 md:py-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[0.65rem] uppercase tracking-[0.4em] text-gold"
          >
            02 — Quem é você?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl leading-tight text-cream md:text-5xl"
          >
            Dra. Wanessa Galmacci
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-cream/90 md:text-lg"
          >
            Sou a Dra. Wanessa Galmacci, cirurgiã-dentista, com atuação voltada para a estética e reabilitação do sorriso. Acredito em uma odontologia que une saúde, função e estética, buscando resultados que respeitem as características e a individualidade de cada paciente.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-cream/80">
            Meu posicionamento se baseia em transformar sorrisos sem perder a essência e a identidade de quem está sorrindo. Cada detalhes é planejado para conversar harmoniosamente com suas feições.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            {credenciais.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs text-cream/90"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {c}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AbordagemSection() {
  const beneficios = [
    "A estética deve começar pela leitura do paciente",
    "União perfeita entre prótese, estética e reabilitação",
    "Respeito total às características e individualidade",
    "Resultados elegantes e autênticos sem estética genérica",
  ];

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">
            Três palavras como eixo
          </p>
          <h2 className="font-display text-3xl leading-tight text-deep md:text-4xl">
            Estética + Função + Identidade
          </h2>
          <p className="mt-6 text-base leading-relaxed text-deep-soft">
            Não colocamos a Dra. Wanessa simplesmente como “a dentista que faz estética”. O foco está em conectar prótese, estética e reabilitação oral com a essência do paciente, garantindo sofisticação e alta qualidade biológica e funcional.
          </p>
        </div>

        <div className="space-y-4">
          {beneficios.map((texto, idx) => (
            <motion.div
              key={texto}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-5 border-b border-deep/10 pb-4"
            >
              <span className="font-display text-2xl text-gold-deep">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-base text-deep">{texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const beneficios = [
  { b: "Estética", t: "harmonia, proporção e luminosidade natural em cada restauração e recontorno." },
  { b: "Função", t: "prótese e reabilitação que devolvem eficiência mastigatória e saúde bucal." },
  { b: "Identidade", t: "transformação elegante que preserva a essência de quem está sorrindo." },
  { b: "Leitura do Paciente", t: "entender o significado do sorriso antes de iniciar qualquer tratamento." },
  { b: "Individualidade", t: "soluções sob medida que evitam resultados padronizados ou genéricos." },
];

function BeneficiosSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-deep md:text-5xl">
          Muito mais do que
          <span className="block text-gold-deep">uma estética genérica.</span>
        </h2>
        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.4em] text-deep-soft">
          Eixo do tratamento
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {beneficios.map((i) => (
            <motion.div
              key={i.b}
              variants={fadeUp}
              className="rounded-2xl border border-deep/10 bg-white/70 p-7"
            >
              <p className="text-base leading-relaxed text-deep-soft">
                <span className="font-display text-xl text-deep">{i.b}:</span> {i.t}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicosSection() {
  return <AppleCardsCarouselDemo />;
}

function FAQSection() {
  return <FAQSections items={faq.map((f) => ({ question: f.q, answer: f.a }))} />;
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-deep px-6 py-24 font-sans md:px-10 md:py-32">
      <img
        src="/wanessa-cta.png"
        alt="Dra. Wanessa Galmacci"
        className="absolute inset-[-4%_0_-10%_0] h-[120%] w-full object-cover object-[50%_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/50" />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-3xl items-end justify-center py-16 text-center md:min-h-[520px] md:py-24">
        <div className="max-w-md space-y-4">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/90">Estética + Função + Identidade</p>
          <h2 className="font-display text-2xl leading-tight text-white md:text-3xl">
            Transforme seu sorriso sem perder quem você é.
          </h2>
          <p className="text-sm leading-relaxed text-cream/80">
            Leitura individualizada, planejamento sofisticado e um resultado que combina com você.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-white transition hover:border-gold hover:bg-gold/20"
          >
            Agendar consulta
            <ArrowUpRight className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <GanchoSection />
      <SobreSection />
      <AbordagemSection />
      <BeneficiosSection />
      <ServicosSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

