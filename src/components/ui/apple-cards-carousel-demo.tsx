"use client";

import { Card, Carousel, type CarouselItem } from "@/components/ui/apple-cards-carousel";
import aparelhoFixoImg from "@/assets/aparelho-fixo.jpg";
import alinhadoresImg from "@/assets/alinhadores.jpg";
import ortopedistaImg from "@/assets/ortopedista.jpg";
import diagnosticoImg from "@/assets/diagnostico.jpg";
import interceptacaoImg from "@/assets/interceptacao.jpg";
import manutencaoImg from "@/assets/manutencao.jpg";

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
    category: "Prótese Fixa",
    title: "Sorriso renovado e seguro",
    src: aparelhoFixoImg,
    content: treatmentContent(
      "Prótese Fixa & Sobre Implante",
      "Correção da mastigação, espaço e estética facial com coroas e pontes em cerâmica de alta resistência com encaixe perfeito.",
      [
        "Devolução completa da segurança ao mastigar e sorrir.",
        "Materiais cerâmicos de alta durabilidade e estética natural.",
        "Planejamento individualizado para cada tipo de reabilitação.",
      ],
    ),
  },
  {
    category: "Lentes & Facetas",
    title: "Harmonia e naturalidade",
    src: alinhadoresImg,
    content: treatmentContent(
      "Lentes de Contato & Facetas Cerâmicas",
      "Laminados cerâmicos ultrafinos planejados para transformar cor, formato e harmonia do sorriso com mínima intervenção.",
      [
        "Planejamento digital do sorriso antes do procedimento.",
        "Preservação máxima da estrutura dental natural.",
        "Resultado harmônico sob medida para suas feições.",
      ],
    ),
  },
  {
    category: "Reabilitação Oral",
    title: "Função e beleza integradas",
    src: ortopedistaImg,
    content: treatmentContent(
      "Reabilitação Oral Completa",
      "Tratamento integrado para recuperar a estabilidade mastigatória, dimensão vertical e a beleza estética do seu sorriso.",
      [
        "Visão global da saúde, estética e função mastigatória.",
        "Recuperação de dentes desgastados ou perdidos.",
        "Conforto articular e harmonia facial duradoura.",
      ],
    ),
  },

  {
    category: "Diagnóstico Estético",
    title: "Plano individualizado",
    src: diagnosticoImg,
    content: treatmentContent(
      "Avaliação e Diagnóstico Estético",
      "Análise minuciosa da estética facial e dental para desenhar a solução mais elegante e conservadora para você.",
      [
        "Exames clínicos e fotografias de alta resolução.",
        "Estratégia personalizada para os seus objetivos.",
        "Transparência em prazos, etapas e materiais utilizados.",
      ],
    ),
  },

  {
    category: "Restaurações Estéticas",
    title: "Preservação e precisão",
    src: interceptacaoImg,
    content: treatmentContent(
      "Restaurações em Resina & Porcelana",
      "Substituição de restaurações antigas ou escuras por materiais modernos invisíveis que devolvem a força e a beleza aos dentes.",
      [
        "Técnicas adesivas de alta performance.",
        "Acabamento e polimento com brilho natural.",
        "Prevenção de infiltrações e fraturas dentais.",
      ],
    ),
  },

  {
    category: "Próteses & Manutenção",
    title: "Resultado duradouro",
    src: manutencaoImg,
    content: treatmentContent(
      "Próteses Removíveis & Manutenção",
      "Acompanhamento preventivo e confecção de próteses modernas para assegurar o máximo de conforto, firmeza e estabilidade.",
      [
        "Acompanhamento regular para higienização e ajustes.",
        "Estabilidade das próteses e saúde gengival.",
        "Foco na longevidade dos trabalhos protéticos.",
      ],
    ),
  },

];

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.title} card={card} index={index} />);

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
            ESPECIALIDADES & TRATAMENTOS
          </span>
          <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
            Prótese & Estética pensadas para <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-gold-deep">transformar o seu</span> sorriso.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
            Diagnóstico sincero, planejamento individualizado e <strong className="font-semibold text-deep">opções de tratamento sob medida</strong> para devolver sua função mastigatória e autoestima.
          </p>
        </div>

        <div className="mt-16">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}
