"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const Map = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.warning("Campos obrigatórios", {
        description: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }
    toast.success("Mensagem enviada!", {
      description: "Entraremos em contato em breve.",
    });

    console.log({
      name,
      email,
      phone,
      message,
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Belém do Pará, 1000 - Umarizal, Belém - PA, 01310-100",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(91) 3456-7890",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "advassociados@email.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 9h às 18h",
    },
  ];
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-icon-about-section">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Envie sua mensagem e retornaremos
            em breve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:opacity-90"
                >
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-gold transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <info.icon className="w-6 h-6 text-icon-about-section shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map placeholder */}
            <Card className="overflow-hidden p-0">
              <div className="relative isolate z-0 h-[400px] w-full overflow-hidden rounded-lg shadow-md">
                {/* <MapPin className="w-12 h-12 text-muted-foreground/50" /> */}
                <Map />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
