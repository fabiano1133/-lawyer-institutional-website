import Image from "next/image";
import lawyer1 from "../assets/lawyer-1.jpg";
import lawyer2 from "../assets/lawyer-2.jpg";
import lawyer3 from "../assets/lawyer-3.jpg";
import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import Footer from "../components/Footer";
import heroImage from "../assets/background-hero-2.jpg";
import Container from "../components/Container";
export default function Teams() {
  const team = [
    {
      name: "Dr. Carlos Santos",
      role: "Sócio Fundador",
      oab: "OAB/SP 123.456",
      image: lawyer1,
      specialties: "Direito Empresarial e Tributário",
      bio: "Graduado pela USP, com especialização em Direito Empresarial pela FGV. Mais de 25 anos de experiência em consultoria para empresas de médio e grande porte. Especialista em planejamento tributário e reestruturações societárias.",
      email: "carlos.santos@santosalmeida.com.br",
    },
    {
      name: "Dra. Marina Almeida",
      role: "Sócia",
      oab: "OAB/SP 234.567",
      image: lawyer2,
      specialties: "Direito Civil e Família",
      bio: "Graduada pela PUC-SP, com mestrado em Direito Civil. Especialista em direito de família, sucessões e contratos. Atua há mais de 18 anos defendendo interesses de pessoas físicas e jurídicas com sensibilidade e técnica apurada.",
      email: "marina.almeida@santosalmeida.com.br",
    },
    {
      name: "Dr. Roberto Ferreira",
      role: "Advogado Sênior",
      oab: "OAB/SP 345.678",
      image: lawyer3,
      specialties: "Direito Trabalhista",
      bio: "Graduado pela Mackenzie, especialista em Direito e Processo do Trabalho. Mais de 20 anos de experiência em consultoria trabalhista preventiva e contenciosa. Reconhecido pela atuação estratégica em negociações coletivas.",
      email: "roberto.ferreira@santosalmeida.com.br",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative bg-primary h-80 flex items-center justify-center overflow-hidden">
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Nossa Equipe
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Profissionais altamente qualificados, dedicados e comprometidos
                com o sucesso dos nossos clientes.
              </p>
            </div>
          </Container>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-start animate-fade-in ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Card className="overflow-hidden hover:shadow-gold transition-shadow p-0">
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Card>
                  </div>

                  {/* Info */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-3xl">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {member.role} • {member.oab}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                            Especialidades
                          </h3>
                          <p className="text-foreground">
                            {member.specialties}
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-2">
                            Perfil Profissional
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {member.bio}
                          </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-2 text-sm text-icon-about-section hover:underline"
                          >
                            <Mail className="w-4 h-4" />
                            Enviar e-mail
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-sm text-icon-about-section hover:underline"
                          >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Team Info */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Uma equipe{" "}
                <span className="text-icon-about-section">
                  multidisciplinar
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Além dos nossos sócios e advogados seniores, contamos com uma
                equipe de advogados associados, estagiários e colaboradores
                especializados, todos comprometidos em oferecer o melhor
                atendimento e as soluções mais eficazes para cada caso.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa estrutura permite atender demandas de diferentes
                complexidades, sempre mantendo o padrão de excelência que nos
                caracteriza.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
