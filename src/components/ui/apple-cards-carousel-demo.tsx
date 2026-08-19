"use client";

import { Card, Carousel, type CarouselItem } from "@/components/ui/apple-cards-carousel";
import aparelhoFixoImg from "@/assets/aparelho-fixo.png.asset.json";
import alinhadoresImg from "@/assets/alinhadores.png.asset.json";

const treatmentContent = (
  title: string,
  description: string,
  items: string[],
) => (
  <div className="space-y-8">
    <div className="rounded-[1.75rem] bg-cream p-6 md:p-8">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-gold-deep">Tratamento</p>
      <h4 className="mt-3 font-display text-3xl text-deep md:text-4xl">{title}</h4>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-deep-soft">{description}</p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-2xl border border-deep/10 bg-sand p-4 text-sm leading-relaxed text-deep-soft">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const data: CarouselItem[] = [
  {
    category: "Prótese",
    title: "Prótese Odontológica",
    src: aparelhoFixoImg.url,
    content: treatmentContent(
      "Prótese Odontológica",
      "Reconstituição e substituição de dentes ausentes ou danificados, devolvendo estética natural, estabilidade e total eficiência mastigatória.",
      [
        "Recuperação da função mastigatória e saúde bucal.",
        "Planejamento sofisticado e alinhado com suas feições.",
        "Material de alta qualidade e durabilidade.",
      ],
    ),
  },
  {
    category: "Estética",
    title: "Odontologia Estética",
    src: alinhadoresImg.url,
    content: treatmentContent(
      "Odontologia Estética",
      "Harmonização do sorriso com foco em proporções naturais, respeitando a anatomia individual e a essência de cada paciente.",
      [
        "Análise visual e estética minuciosa do rosto.",
        "Tratamentos delicados e altamente personalizados.",
        "Resultados elegantes longe da estética padronizada.",
      ],
    ),
  },
  {
    category: "Reabilitação",
    title: "Reabilitação do Sorriso",
    content: treatmentContent(
      "Reabilitação do Sorriso",
      "Visão integrada para reconstruir sorrisos comprometidos, unindo prótese, estética e saúde em um plano de tratamento harmonioso.",
      [
        "Visão global da anatomia dental e mastigatória.",
        "Tratamento estruturado em etapas claras e previsíveis.",
        "Restabelecimento da confiança e autoestima.",
      ],
    ),
  },
  {
    category: "Restauração",
    title: "Restaurações Estéticas",
    content: treatmentContent(
      "Restaurações Estéticas",
      "Reconstrução precisa de dentes com fraturas ou cáries, utilizando materiais de ponta que mimetizam a cor e textura natural do dente.",
      [
        "Preservação da estrutura dental original.",
        "Acabamento imperceptível e harmônico.",
        "Resistência e alta estética com resinas modernas.",
      ],
    ),
  },
  {
    category: "Harmonização",
    title: "Recontorno Estético com Resina",
    content: treatmentContent(
      "Recontorno Estético com Resina",
      "Ajuste sutil de bordas, formatos e pequenas assimetrias dentárias para alcançar proporções ideais sem desgaste invasivo.",
      [
        "Procedimento minimamente invasivo.",
        "Harmonização imediata do sorriso.",
        "Resinas de alta tecnologia e excelente brilho.",
      ],
    ),
  },
  {
    category: "Luminosidade",
    title: "Clareamento Dental",
    content: treatmentContent(
      "Clareamento Dental",
      "Tratamento seguro e guiado para renovar o brilho e a tonalidade dos dentes com proteção ao esmalte dental.",
      [
        "Protocolo seguro e individualizado.",
        "Realce do brilho e luminosidade natural.",
        "Acompanhamento profissional contínuo.",
      ],
    ),
  },
  {
    category: "Proporção",
    title: "Harmonia e Proporção do Sorriso",
    content: treatmentContent(
      "Harmonia, Proporção e Leitura",
      "Desenvolvimento de sorrisos equilibrados onde a estética nasce da leitura detalhada da personalidade e das feições do paciente.",
      [
        "Análise estética e facial personalizada.",
        "Respeito às características individuais.",
        "Alinhamento perfeito entre estética, função e identidade.",
      ],
    ),
  },
];

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.title} card={card} index={index} />);

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">Áreas de Atuação</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-deep md:text-5xl">
            Principais áreas de atuação e tratamentos.
          </h2>
          <p className="mt-4 text-base text-deep-soft">
            Tratamentos voltados para a estética, prótese e reabilitação do sorriso com leitura atenta do paciente.
          </p>
        </div>

        <div className="mt-10">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}
