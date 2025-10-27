"use client";

import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      icon: Award,
      value: "20+",
      label: "Anos de experiência",
    },
    {
      icon: Users,
      value: "500+",
      label: "Clientes atendidos",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Taxa de sucesso",
    },
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre o{" "}
              <span className="text-icon-about-section">
                Advogados & Associados
              </span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-lg text-justify">
              Fundado em 2003, o escritório Advogados Associados nasceu com a
              missão de oferecer soluções jurídicas de excelência para pequenas
              e médias empresas.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed text-lg text-justify">
              Nossa equipe é formada por profissionais altamente qualificados,
              com expertise em diversas áreas do Direito, sempre comprometidos
              com a ética, transparência e resultados concretos.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg text-justify">
              Acreditamos que cada cliente merece atenção personalizada e
              soluções adaptadas às suas necessidades específicas. Por isso,
              trabalhamos de forma próxima e consultiva, garantindo segurança
              jurídica em todas as etapas.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 gap-1 hover:shadow-2xs transition-shadow"
              >
                <stat.icon className="w-10 h-10 text-icon-about-section" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
