"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";
import Image from "next/image";
import heroImage from "../assets/background-hero.jpg";
import Container from "../components/Container";

export default function Contact() {
  const Map = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.warning("Campos obrigatórios", {
        description: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }

    toast.success("Mensagem enviada!", {
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content:
        "Av. Paulista, 1000 - 10º andar\nBela Vista, São Paulo - SP\nCEP: 01310-100",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3456-7890\n(11) 98765-4321",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@santosalmeida.com.br\natendimento@email.com.br",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 9h às 18h\nSábados: Sob agendamento",
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
                Entre em Contato
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Estamos prontos para atender você. Conte-nos como podemos
                ajudar.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="animate-fade-in">
                  <CardContent className="pt-8">
                    <h2 className="text-2xl font-bold mb-6">
                      Envie sua mensagem
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Nome completo *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="Seu nome"
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="seu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="(11) 99999-9999"
                          />
                        </div>

                        <div>
                          <Label htmlFor="subject">Assunto *</Label>
                          <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                subject: e.target.value,
                              })
                            }
                            placeholder="Qual o assunto?"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder="Descreva como podemos ajudar..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:opacity-90"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        Enviar mensagem
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        Suas informações estão seguras e serão tratadas com
                        confidencialidade.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6 animate-slide-in-right">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-gold transition-shadow"
                  >
                    <CardContent className="flex items-start gap-4 pt-6">
                      <info.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                          {info.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa{" "}
                <span className="text-icon-about-section">Localização</span>
              </h2>
              <p className="text-muted-foreground">
                Estamos estrategicamente localizados na Avenida Belém, em Belém.
              </p>
            </div>

            <Card className="overflow-hidden max-w-5xl mx-auto p-0">
              <div className="relative isolate z-0 h-[400px] w-full overflow-hidden rounded-lg shadow-md">
                <Map />
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
