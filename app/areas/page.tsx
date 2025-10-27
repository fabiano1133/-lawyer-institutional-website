import {
  Briefcase,
  Building2,
  Calculator,
  FileText,
  Home,
  Scale,
  Shield,
  Users2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Link from "next/link";
import heroImage from "../assets/background-hero.jpg";
import Image from "next/image";
import Container from "../components/Container";

export default function Areas() {
  const practiceAreas = [
    {
      icon: Building2,
      title: "Direito Empresarial",
      description:
        "Assessoria completa para empresas em todas as fases do ciclo empresarial.",
      services: [
        "Constituição e registro de empresas",
        "Elaboração e revisão de contratos comerciais",
        "Consultoria em direito societário",
        "Fusões, aquisições e reorganizações",
        "Compliance e governança corporativa",
        "Propriedade intelectual e marcas",
      ],
    },
    {
      icon: Scale,
      title: "Direito Civil",
      description:
        "Soluções jurídicas para questões cíveis de pessoas físicas e jurídicas.",
      services: [
        "Contratos em geral",
        "Direito de família e sucessões",
        "Direito imobiliário",
        "Responsabilidade civil",
        "Indenizações e reparações",
        "Usucapião e regularização fundiária",
      ],
    },
    {
      icon: Users2,
      title: "Direito Trabalhista",
      description:
        "Assessoria preventiva e contenciosa em relações de trabalho.",
      services: [
        "Consultoria em legislação trabalhista",
        "Elaboração de contratos de trabalho",
        "Defesa em reclamações trabalhistas",
        "Compliance trabalhista",
        "Terceirização e quarteirização",
        "Negociações sindicais",
      ],
    },
    {
      icon: Calculator,
      title: "Direito Tributário",
      description: "Planejamento tributário e defesa em questões fiscais.",
      services: [
        "Planejamento tributário estratégico",
        "Recuperação de créditos tributários",
        "Defesas administrativas e judiciais",
        "Consultoria em impostos e contribuições",
        "Regimes especiais de tributação",
        "Compliance fiscal",
      ],
    },
    {
      icon: FileText,
      title: "Contratos",
      description:
        "Elaboração, revisão e negociação de contratos de todos os tipos.",
      services: [
        "Contratos comerciais complexos",
        "Contratos de prestação de serviços",
        "Contratos de distribuição e representação",
        "Contratos internacionais",
        "Due diligence contratual",
        "Resolução de conflitos contratuais",
      ],
    },
    {
      icon: Briefcase,
      title: "Consultoria Jurídica",
      description:
        "Assessoria preventiva e estratégica para tomada de decisões.",
      services: [
        "Consultoria jurídica permanente",
        "Análise de riscos jurídicos",
        "Pareceres técnicos",
        "Orientação em decisões estratégicas",
        "Compliance e gestão de riscos",
        "Treinamentos jurídicos in company",
      ],
    },
    {
      icon: Shield,
      title: "Compliance e Governança",
      description: "Estruturação de programas de conformidade e boas práticas.",
      services: [
        "Implantação de programas de compliance",
        "Lei Anticorrupção (Lei 12.846/13)",
        "LGPD - Lei Geral de Proteção de Dados",
        "Códigos de ética e conduta",
        "Canal de denúncias",
        "Auditoria jurídica",
      ],
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Soluções completas para questões imobiliárias.",
      services: [
        "Compra e venda de imóveis",
        "Locação comercial e residencial",
        "Incorporações imobiliárias",
        "Regularização de imóveis",
        "Condomínios",
        "Loteamentos e desmembramentos",
      ],
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
                Áreas de Atuação
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Soluções jurídicas especializadas para atender todas as
                necessidades do seu negócio e da sua vida pessoal.
              </p>
            </div>
          </Container>
        </section>

        {/* Practice Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {practiceAreas.map((area, index) => (
                <Card
                  key={index}
                  className="hover:shadow-gold transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <area.icon className="w-12 h-12 text-icon-about-section mb-4" />
                    <CardTitle className="text-2xl">{area.title}</CardTitle>
                    <CardDescription className="text-base">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Serviços:
                    </h4>
                    <ul className="space-y-2">
                      {area.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Precisa de{" "}
                <span className="text-icon-about-section">
                  assessoria jurídica
                </span>
                ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Nossa equipe está pronta para entender suas necessidades e
                oferecer a melhor solução jurídica.
              </p>
              <Button asChild size="lg" className="bg-primary hover:opacity-90">
                <Link href="/contact">Fale com um especialista</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
