"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import lawyer1 from "../assets/lawyer-1.jpg";
import lawyer2 from "../assets/lawyer-2.jpg";
import lawyer3 from "../assets/lawyer-3.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function TeamsSection() {
  const team = [
    {
      name: "Dr. Carlos Santos",
      role: "Sócio Fundador",
      oab: "OAB/SP 123.456",
      image: lawyer1,
      specialties: "Direito Empresarial e Tributário",
    },
    {
      name: "Dra. Marina Almeida",
      role: "Sócia",
      oab: "OAB/SP 234.567",
      image: lawyer2,
      specialties: "Direito Civil e Família",
    },
    {
      name: "Dr. Roberto Ferreira",
      role: "Advogado Sênior",
      oab: "OAB/SP 345.678",
      image: lawyer3,
      specialties: "Direito Trabalhista",
    },
  ];
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa <span className="text-icon-about-section">Equipe</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Profissionais experientes e dedicados, comprometidos com a
            excelência e o sucesso dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-0 pb-6 overflow-hidden hover:shadow-gold transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full h-80 aspect-3/4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-base">
                  {member.role} • {member.oab}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {member.specialties}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/teams">Conheça toda a equipe</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
