import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import logoAgencia from '@/assets/logo-rodape.svg';
import { useIrParaWhatsApp } from "@/hooks/useIrParaWhatsApp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: MessageCircle, href: "/#/whatsapp?tipo=faleconosco", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com/rotadeembarquetur", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/rotadeembarquetur", label: "Facebook" },
  ];

  const irParaWhatsApp = useIrParaWhatsApp();

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
            <div className="flex flex-col items-center gap-6 md:gap-4 mb-0">
              {/* Logo placeholder */}
              
                <img className="w-40 h-15"
          src={logoAgencia} 
          alt="Logotipo Rota de Embarque" 
        />
              </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  size="lg"
                  variant="social"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              );
            })}
          </div>

          {/* CNPJ */}
          <div className="text-white/80">
            <p>CNPJ: 42.102.852/0001-30</p>
          </div>

          {/* Copyright and Developer */}
          <div className="flex flex-col items-center space-y-2 text-sm text-white/60">
            <p>© {currentYear} Rota de Embarque. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{" "}
              <a 
                href="https://zapturize.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors duration-300 font-medium"
              >
                ZapTurize
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={()=> irParaWhatsApp("faleconosco", null)}
          size="lg"
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-800 animate-pulse"
          asChild
        >
          <a>
            <MessageCircle className="w-6 h-6" />
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;