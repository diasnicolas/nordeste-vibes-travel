import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: Phone, text: "(85) 99999-9999", href: "tel:+5585999999999" },
    { icon: Mail, text: "contato@viagensnordeste.com", href: "mailto:contato@viagensnordeste.com" },
    { icon: MapPin, text: "Fortaleza - CE", href: "#" },
    { icon: Clock, text: "Seg-Sex: 8h-18h | Sáb: 8h-12h", href: "#" },
  ];

  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/5585999999999", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  const quickLinks = [
    "Passagens Aéreas",
    "Hospedagem",
    "Seguro Viagem",
    "Pacotes Completos",
    "Destinos Nordeste"
  ];

  const destinations = [
    "Fernando de Noronha",
    "Lençóis Maranhenses",
    "Jericoacoara",
    "Salvador",
    "Maragogi"
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent">
              Viagens Nordeste
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Especialistas em turismo nordestino há mais de 10 anos. 
              Criamos experiências únicas e inesquecíveis pelos destinos 
              mais belos do Brasil.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white hover:text-primary transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-4 h-4" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4 text-accent" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Destinos Populares</h4>
            <ul className="space-y-2">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60">
              © {currentYear} Viagens Nordeste. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                CNPJ: 00.000.000/0001-00
              </a>
            </div>
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