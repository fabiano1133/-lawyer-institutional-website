import { Award, Eye, Heart, Target } from "lucide-react";
import Navbar from "../components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "../components/Footer";
import Image from "next/image";
import heroImageAbout from "../assets/background-hero.jpg";
import Container from "../components/Container";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description:
        "Compromisso com a qualidade técnica e atualização constante.",
    },
    {
      icon: Heart,
      title: "Ética",
      description:
        "Conduta profissional irrepreensível e transparência em todas as relações.",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Foco em soluções práticas e efetivas para nossos clientes.",
    },
    {
      icon: Eye,
      title: "Visão Estratégica",
      description:
        "Abordagem consultiva e preventiva, antecipando riscos e oportunidades.",
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
              src={heroImageAbout}
              alt="Advogados Associados"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-primary/95 to-primary/70" />
          </div>
          <Container>
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Sobre a Associação de Advogados
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Mais de duas décadas de excelência em assessoria jurídica para
                empresas e pessoas físicas.
              </p>
            </div>
          </Container>
        </section>

        {/* History */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Nossa <span className="text-icon-about-section">História</span>
              </h2>

              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Fundado em 2003 pelos advogados Carlos Santos e Marina
                  Almeida, o escritório nasceu da visão de oferecer um
                  atendimento jurídico diferenciado, que combinasse excelência
                  técnica com proximidade ao cliente.
                </p>

                <p className="leading-relaxed">
                  Ao longo dos anos, construímos uma reputação sólida no mercado
                  jurídico, atendendo centenas de empresas e pessoas físicas com
                  dedicação e profissionalismo. Nossa trajetória é marcada por
                  vitórias importantes e pela confiança depositada por nossos
                  clientes.
                </p>

                <p className="leading-relaxed">
                  Hoje, contamos com uma equipe multidisciplinar de advogados
                  especializados nas principais áreas do Direito, sempre
                  atualizados com as constantes mudanças legislativas e
                  jurisprudenciais. Nosso compromisso é oferecer soluções
                  personalizadas, éticas e eficazes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="hover:shadow-gold transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">Nossa Missão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Oferecer assessoria jurídica de excelência, com soluções
                      personalizadas e estratégicas, contribuindo para o sucesso
                      e segurança jurídica de nossos clientes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-gold transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">Nossa Visão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser referência em advocacia empresarial e consultiva,
                      reconhecido pela ética, qualidade técnica e resultados
                      concretos alcançados para nossos clientes.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Nossos <span className="text-icon-about-section">Valores</span>
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <value.icon className="w-12 h-12 text-icon-about-section mx-auto mb-4" />
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Nossos{" "}
                <span className="text-icon-about-section">Diferenciais</span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Atendimento Personalizado
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cada cliente recebe atenção dedicada de advogados
                      experientes, com soluções adaptadas às suas necessidades
                      específicas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Atuação Preventiva
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Trabalhamos de forma consultiva, antecipando riscos e
                      orientando decisões estratégicas para evitar litígios
                      desnecessários.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Transparência e Comunicação
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mantemos nossos clientes sempre informados sobre o
                      andamento de seus processos, com linguagem clara e
                      acessível.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Expertise Multidisciplinar
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nossa equipe reúne especialistas em diversas áreas do
                      Direito, garantindo uma visão completa e integrada das
                      questões jurídicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
