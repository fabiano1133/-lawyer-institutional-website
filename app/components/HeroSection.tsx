"use client";

import Image from "next/image";
import heroImage from "../assets/hero-law.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Advogados Associados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 to-primary/70" />
      </div>

      <Container>
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Excelência, ética e resultados em soluções jurídicas
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Há mais de 20 anos oferecendo assessoria jurídica completa para
            pequenas e médias empresas, com foco em Direito Civil, Empresarial,
            Trabalhista e Tributário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 shadow-gold text-base"
            >
              <Link href="/contact">
                Fale com um especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary text-base"
            >
              <Link href="/about">Conheça o escritório</Link>
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
