"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Building2,
  Calculator,
  FileText,
  Scale,
  Users2,
} from "lucide-react";
import Link from "next/link";

export default function PraticeAreaSection() {
  const areas = [
    {
      icon: Building2,
      title: "Direito Empresarial",
      description:
        "Consultoria completa para empresas, contratos, societário e compliance.",
    },
    {
      icon: Scale,
      title: "Direito Civil",
      description:
        "Contratos, família, sucessões, imobiliário e responsabilidade civil.",
    },
    {
      icon: Users2,
      title: "Direito Trabalhista",
      description:
        "Assessoria em relações de trabalho, processos e compliance trabalhista.",
    },
    {
      icon: Calculator,
      title: "Direito Tributário",
      description: "Planejamento tributário, consultivo e contencioso fiscal.",
    },
    {
      icon: FileText,
      title: "Contratos",
      description: "Elaboração, revisão e negociação de contratos complexos.",
    },
    {
      icon: Briefcase,
      title: "Consultoria Jurídica",
      description:
        "Assessoria preventiva e estratégica para tomada de decisões.",
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Áreas de <span className="text-icon-about-section">Atuação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos soluções jurídicas especializadas em diversas áreas do
            Direito, sempre com foco nas necessidades específicas de cada
            cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <area.icon className="w-12 h-12 text-icon-about-section" />
                <CardTitle className="text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="hover:opacity-90">
            <Link href="/areas">Ver todas as áreas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
