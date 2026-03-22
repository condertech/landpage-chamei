import logoChamei from "@/assets/chamei.logo.png";
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 max-w-5xl mx-auto">
          {/* Logo e Redes Sociais */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <img
              src={logoChamei}
              alt="Chamei"
              className="h-10 rounded-md mb-4 mx-auto lg:mx-0"
            />
            <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto lg:mx-0">
              A solução completa para gestão de quadras esportivas.
            </p>
            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href="https://instagram.com/chamei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/chamei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/chamei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Produto */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              PRODUTO
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#beneficios"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Como funciona
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Recursos
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              SUPORTE
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              LEGAL
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Informações de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <a
            href="mailto:contato@chamei.com.br"
            className="flex items-center justify-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={18} className="text-primary flex-shrink-0" />
            <span>contato@chamei.com.br</span>
          </a>
          <a
            href="tel:+5511999999999"
            className="flex items-center justify-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone size={18} className="text-primary flex-shrink-0" />
            <span>(11) 99999-9999</span>
          </a>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <MapPin size={18} className="text-primary flex-shrink-0" />
            <span>São Paulo, SP - Brasil</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright e Créditos */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Chamei - Gestão de Quadras Esportivas. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Desenvolvido por</span>
            <a
              href="https://condertech.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              ConderTech
            </a>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            CNPJ: 00.000.000/0001-00 | Razão Social: Chamei Tecnologia Ltda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
