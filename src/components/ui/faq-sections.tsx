"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FAQSections({
  items,
  title = "Antes da primeira consulta.",
  eyebrow = "FAQ",
}: {
  items?: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = items ?? [
    {
      question: "Quais são as principais áreas de atuação da Dra. Wanessa Galmacci?",
      answer:
        "A Dra. Wanessa é cirurgiã-dentista com atuação voltada para prótese odontológica, odontologia estética, reabilitação do sorriso, restaurações estéticas, recontorno estético com resina, clareamento e harmonização estética do sorriso.",
    },
    {
      question: "O que significa 'a estética começar pela leitura do paciente'?",
      answer:
        "Significa que não aplicamos padrões genéricos ou procedimentos padronizados. Antes de qualquer tratamento, entendemos a história do paciente, o que seu sorriso representa, suas necessidades funcionais e qual estética harmoniza com sua identidade.",
    },
    {
      question: "Como funciona o recontorno estético com resina?",
      answer:
        "É um tratamento estético minucioso onde moldamos e harmonizamos contornos, formas e proporções dos dentes com resina composta de altíssima qualidade, devolvendo simetria e sofisticação com preservação dental.",
    },
    {
      question: "Como é agendada a primeira consulta de avaliação?",
      answer:
        "Na consulta inicial, a Dra. Wanessa realiza uma escuta atenta dos seus objetivos, avalia a saúde funcional e estética da boca e elabora um plano de tratamento personalizado e transparente.",
    },
  ];

  return (
    <section className="bg-cream px-3 py-24 font-sans md:px-6 md:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center text-slate-800">
        <p className="text-base font-medium text-deep-soft">{eyebrow}</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-deep md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-md text-sm text-deep-soft md:text-base">
          Dúvidas comuns antes de começar — tudo explicado com clareza para que você escolha o melhor caminho com segurança.
        </p>

        <div className="mt-6 flex w-full max-w-xl flex-col gap-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="flex w-full flex-col items-start">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between rounded-xl border border-deep/10 bg-white p-4 shadow-sm transition hover:border-gold/40"
                >
                  <h2 className="text-sm font-medium text-deep md:text-base">{faq.question}</h2>

                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-deep transition-all duration-500 ease-in-out",
                      isOpen && "rotate-180 text-gold-deep",
                    )}
                  />
                </button>

                <p
                  className={cn(
                    "w-full px-4 text-sm text-deep-soft transition-all duration-500 ease-in-out",
                    isOpen ? "max-h-[300px] translate-y-0 pt-4 opacity-100" : "max-h-0 -translate-y-2 opacity-0",
                  )}
                >
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSections;
