import { Button } from "@/components/ui/button";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/5585999999999", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
              Viagens Nordeste
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
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
            <p>CNPJ: 00.000.000/0001-00</p>
          </div>

          {/* Copyright and Developer */}
          <div className="flex flex-col items-center space-y-2 text-sm text-white/60">
            <p>© {currentYear} Viagens Nordeste. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{" "}
              <a 
                href="https://zapturize.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors duration-300 font-medium"
              >
                ZapTurize
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          asChild
        >
          <a href="https://wa.me/5585999999999" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-6 h-6" />
            <span className="sr-only">Contato via WhatsApp</span>
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;