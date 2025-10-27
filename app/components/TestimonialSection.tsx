"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "João Silva",
      role: "CEO, TechStart Ltda",
      content:
        "O atendimento personalizado e a expertise da equipe foram fundamentais para a estruturação jurídica da nossa empresa. Recomendo sem hesitar.",
    },
    {
      name: "Maria Oliveira",
      role: "Diretora, Comércio São Paulo",
      content:
        "Profissionais extremamente competentes e éticos. Resolveram uma questão complexa com maestria e agilidade. Continuaremos parceiros por muitos anos.",
    },
    {
      name: "Ricardo Costa",
      role: "Empresário",
      content:
        "A consultoria preventiva economizou milhares de reais à minha empresa. O escritório Santos & Almeida é sinônimo de confiança e resultados.",
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem nossos{" "}
            <span className="text-icon-about-section">clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A confiança dos nossos clientes é o nosso maior patrimônio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative hover:shadow-gold transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-icon-about-section mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
