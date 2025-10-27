"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-6 h-6 text-secondary" />
              <div className="flex flex-col">
                <span className="font-bold">Advogados & Associados</span>
                <span className="text-xs opacity-80">Advogados Associados</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Excelência, ética e resultados. Soluções jurídicas para pequenas e
              médias empresas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="text-sm opacity-80 hover:text-secondary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/areas"
                  className="text-sm opacity-80 hover:text-secondary transition-colors"
                >
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-sm opacity-80 hover:text-secondary transition-colors"
                >
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm opacity-80 hover:text-secondary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Av. Capital de Belém, 1000 - Belém, PA</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="w-4 h-4 shrink-0" />
                <span>(91) 3456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="w-4 h-4 shrink-0" />
                <span>contato@advocacia.com.br</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {currentYear} Advogados Associados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
