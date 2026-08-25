import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroRetrato from "@/assets/wanessa-hero.jpg.asset.json";
import logoTambani from "@/assets/logo-tambani.png.asset.json";
import sobreRetrato from "@/assets/wanessa-sobre.jpg.asset.json";
import AppleCardsCarouselDemo from "@/components/ui/apple-cards-carousel-demo";
import FAQSections from "@/components/ui/faq-sections";
import {
  Smile,
  Scan,
  Shield,
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Heart,
  AlignCenter,
  Activity,
} from "lucide-react";

const SITE_URL = "https://clinicatambani.com.br";
const WHATSAPP_URL = "https://wa.me/5569000000000";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#wanessa`,
  name: "Dra. Wanessa Galmacci",
  jobTitle: "Cirurgiã-Dentista · Prótese Dentária & Estética Dental",
  url: SITE_URL,
  worksFor: { "@type": "Organization", name: "Clínica Tambani" },
  knowsAbout: [
    "Prótese Dentária",
    "Estética Dental",
    "Lentes de Contato Dental",
    "Facetas Cerâmicas",
    "Reabilitação Oral",
    "Clareamento Dental",
  ],
};

const faq = [
  {
    q: "Qual a diferença entre faceta e lente de contato dental?",
    a: "A lente de contato dental é ultrafina (0,2 a 0,5mm) e exige o mínimo ou nenhum desgaste dental, ideal para pequenas correções de formato e cor. A faceta é indicada quando precisamos corrigir dentes mais escurecidos ou desestruturados.",
  },
  {
    q: "Quanto tempo dura uma prótese ou lente de porcelana?",
    a: "Com higiene adequada e acompanhamento regular, próteses e laminados de cerâmica de alta resistência duram muitos anos (frequentemente mais de 10 a 15 anos) mantendo cor e brilho originais.",
  },
  {
    q: "O tratamento protético ou estético causa dor?",
    a: "Não! Todos os procedimentos são realizados de forma totalmente confortável, com anestesia local de alta eficiência e técnicas minimamente invasivas.",
  },
  {
    q: "Como é a primeira consulta de avaliação?",
    a: "Analisamos sua queixa principal, formato dos dentes, estética do sorriso e mastigação. Em seguida, apresentamos o plano de tratamento individualizado de forma clara e transparente.",
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
      { title: "Dra. Wanessa Galmacci — Prótese Dentária & Estética | Clínica Tambani" },
      {
        name: "description",
        content:
          "Cirurgiã-dentista especialista em prótese dentária e estética dental na Clínica Tambani. Prótese fixa, lentes de contato dental, facetas cerâmicas e reabilitação oral com planejamento personalizado.",
      },
      { property: "og:title", content: "Dra. Wanessa Galmacci — Prótese Dentária & Estética | Clínica Tambani" },
      {
        property: "og:description",
        content:
          "Transformar sorrisos com precisão técnica, naturalidade e cuidado: saúde mastigatória, beleza e confiança.",
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
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap",
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
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-40px"]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-[100svh] overflow-hidden bg-deep font-sans text-cream"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={heroRetrato.url}
          alt="Dra. Wanessa Galmacci"
          className="h-full w-full object-cover object-[55%_center] md:object-[45%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/90 via-50% to-transparent pointer-events-none md:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/40 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07080a] via-[#07080a]/85 to-transparent pointer-events-none z-10" />
      </motion.div>

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <div className="flex items-center gap-3">
          <img src={logoTambani.url} alt="Clínica Tambani" className="h-16 w-auto object-contain md:h-24" />
        </div>
        <nav className="hidden items-center gap-8 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream/90 md:flex">
          <a href="#sobre" className="transition hover:text-gold">Sobre</a>
          <a href="#tratamentos" className="transition hover:text-gold">Especialidades</a>
          <a href="#atendimento" className="transition hover:text-gold">Atendimento</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cream/40 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-gold hover:bg-gold hover:text-deep"
          >
            Contato
          </a>
        </nav>
      </header>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[calc(100svh-120px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-4 md:px-12"
      >
        <div className="max-w-2xl">
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold"
          >
            PRÓTESE DENTÁRIA — ESTÉTICA DENTAL — REABILITAÇÃO ORAL
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              variants={titleRevealVariants}
              className="font-display text-5xl font-normal leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl"
            >
              Dra. Wanessa
              <span className="block font-normal italic text-gold">Galmacci</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-sm leading-relaxed text-cream/80 md:text-base"
          >
            Cirurgiã-dentista especialista em prótese dentária e estética dental, unindo precisão, naturalidade e alta tecnologia para devolver o conforto, a função e a beleza do seu sorriso.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-deep shadow-md shadow-gold/20 transition hover:bg-cream hover:text-deep hover:shadow-lg"
            >
              Conheça a Dra. Wanessa
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-black/30 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-md transition hover:border-gold hover:bg-black/50 hover:text-gold"
            >
              Agendamento
              <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#reconhecimento"
        aria-label="Deslizar para a próxima seção"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="group absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 cursor-pointer opacity-70 transition-opacity hover:opacity-100"
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white">
          Deslize
        </span>

        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white p-1">
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1 rounded-full bg-white"
          />
        </div>
      </motion.a>
    </section>
  );
}

const itensReconhecimento = [
  {
    num: "1",
    titulo: "Estética & Harmonia",
    detalhe: "Dentes amarelados, desgastados ou com formatos irregulares.",
  },
  {
    num: "2",
    titulo: "Falta de Dentes ou Mastigação",
    detalhe: "Dificuldade ou desconforto ao mastigar por conta de dentes ausentes.",
  },
  {
    num: "3",
    titulo: "Próteses Desconfortáveis",
    detalhe: "Próteses antigas, instáveis ou sem aspecto natural.",
  },
];

function GanchoSection() {
  return (
    <section id="reconhecimento" className="relative bg-cream px-6 py-32 font-sans md:px-10 md:py-48 min-h-[85vh] flex items-center justify-center">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
          01 — RECONHECIMENTO
        </span>
        <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
          O que pode estar incomodando <br className="hidden sm:inline" />
          o seu <span className="font-serif italic font-normal text-gold-deep">sorriso</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
          Identificar a causa é o primeiro passo para <strong className="font-semibold text-deep">conquistar um sorriso bonito e funcional</strong>.
        </p>

        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/80 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">1.</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Estética & Harmonia</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Dentes <strong className="font-semibold text-deep">amarelados</strong>, <strong className="font-semibold text-deep">desgastados</strong> ou com <strong className="font-semibold text-deep">formatos irregulares</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/80 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">2.</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Perda ou Falta de Dentes</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Dificuldade ou <strong className="font-semibold text-deep">desconforto ao mastigar</strong> devido a dentes ausentes ou fraturados.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/80 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">3.</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Próteses Desconfortáveis</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Próteses antigas <strong className="font-semibold text-deep">sem estabilidade</strong>, <strong className="font-semibold text-deep">desgastadas</strong> ou sem aspecto natural.
            </p>
          </motion.div>
        </div>

        <div className="mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-deep px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-md transition hover:bg-deep-soft hover:shadow-lg"
          >
            Quero avaliar meu caso
            <ArrowUpRight className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}

const sobreContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const sobreItemVariants = {
  hidden: {
    opacity: 0,
    y: 85,
    filter: "blur(14px)",
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function SobreSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["2%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  const credenciais = [
    "Cirurgiã-Dentista",
    "Especialista em Prótese Dentária",
    "Estética Dental Avançada",
    "Clínica Tambani",
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
        alt="Dra. Wanessa Galmacci em atendimento"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] md:object-[50%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/95 to-transparent pointer-events-none md:w-3/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/40 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#07080a] via-[#07080a]/85 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07080a] via-[#07080a]/85 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 mx-auto flex min-h-[110svh] max-w-6xl items-center justify-start px-6 py-28 md:px-10 md:py-40">
        <motion.div
          variants={sobreContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mr-auto max-w-xl"
        >
          <motion.p
            variants={sobreItemVariants}
            className="mb-5 text-[0.65rem] uppercase tracking-[0.4em] text-gold font-bold"
          >
            QUEM SOU
          </motion.p>
          <motion.h2
            variants={sobreItemVariants}
            className="font-sans text-4xl font-semibold leading-tight text-cream md:text-5xl"
          >
            Prazer, sou <span className="font-serif italic font-normal text-gold">Dra. Wanessa Galmacci</span>.
          </motion.h2>
          <motion.p
            variants={sobreItemVariants}
            className="mt-6 text-base leading-relaxed text-cream/90"
          >
            Sou cirurgiã-dentista especialista em Prótese Dentária e apaixonada pela Odontologia Estética. Minha missão é devolver a autoestima, o conforto mastigatório e a alegria de sorrir aos meus pacientes por meio de tratamentos altamente precisos e personalizados.
          </motion.p>
          <motion.p
            variants={sobreItemVariants}
            className="mt-4 text-base leading-relaxed text-cream/90"
          >
            Aliando técnica avançada, materiais de alta qualidade e um olhar atento à harmonia facial, busco transformar sorrisos com máxima naturalidade, longevidade e respeito à individualidade de cada paciente.
          </motion.p>

          <motion.div
            variants={sobreItemVariants}
            className="mt-10 flex flex-wrap gap-3"
          >
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
  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
          METODOLOGIA & CUIDADO
        </span>
        <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
          Como funciona o seu <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-gold-deep">atendimento</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
          Tratamento planejado com clareza para você saber exatamente o que <strong className="font-semibold text-deep">esperar de cada etapa</strong>.
        </p>

        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/90 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">Passo 1</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Consulta Inicial & Avaliação</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Conversamos em detalhes sobre <strong className="font-semibold text-deep">suas vontades estéticas</strong> e analisamos a saúde e mordida.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/90 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">Passo 2</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Planejamento & Teste do Sorriso</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Apresento o projeto personalizado com <strong className="font-semibold text-deep">simulação prévia</strong> para você aprovar cada detalhe.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/90 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">Passo 3</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Execução de Precisão & Longevidade</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Confecção minuciosa com <strong className="font-semibold text-deep">materiais cerâmicos nobres</strong> e acompanhamento preventivo contínuo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BeneficiosSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
          O QUE VOCÊ GANHA
        </span>
        <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
          O que você conquista com o <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-gold-deep">tratamento</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
          Resultados que vão além dos dentes perfeitos e <strong className="font-semibold text-deep">impactam diretamente sua autoestima</strong>.
        </p>

        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/25 bg-[#f5f0e8] p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-sans text-lg font-bold text-deep">Mastigação & Conforto</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Recuperação da força e <strong className="font-semibold text-deep">firmeza mastigatória</strong> sem dores, desconfortos ou próteses soltas.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/25 bg-[#f5f0e8] p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-sans text-lg font-bold text-deep">Estética Natural</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Lentes e próteses com <strong className="font-semibold text-deep">brilho, cor e formato</strong> perfeitamente integrados ao seu rosto.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/25 bg-[#f5f0e8] p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-sans text-lg font-bold text-deep">Confiança Absoluta</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Liberdade total para <strong className="font-semibold text-deep">sorrir, conversar em público</strong> e tirar fotos com orgulho.
            </p>
          </motion.div>
        </div>
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
        src="/wanessa-sobre.jpg"
        alt="Dra. Wanessa Galmacci em atendimento"
        className="absolute inset-[-4%_0_-10%_0] h-[120%] w-full object-cover object-center brightness-[0.4]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-3xl items-end justify-center py-16 text-center md:min-h-[520px] md:py-24">
        <div className="max-w-md space-y-4">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/90">Seu sorriso merece cuidado e precisão</p>
          <h2 className="font-display text-2xl font-normal leading-tight text-white md:text-3xl">
            Comece pelo <span className="font-normal italic text-gold">diagnóstico certo</span>.
          </h2>
          <p className="text-sm leading-relaxed text-cream/80">
            Avaliação estética personalizada, materiais nobres e sorriso com máxima confiança.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-white transition hover:border-gold hover:bg-gold/20 backdrop-blur-sm"
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
      <SobreSection />
      <GanchoSection />
      <ServicosSection />
      <AbordagemSection />
      <BeneficiosSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
