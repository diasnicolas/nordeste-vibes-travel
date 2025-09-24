import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import agentPhoto from "@/assets/agent-photo.webp";
import logoAgencia from '@/assets/logo.svg';

const About = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/rotadeembarquetur", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/rotadeembarquetur", label: "Facebook" },
  ];

  const enviarEmailClick = () => {
    window.location.href = "mailto:reservas@rotadeembarque.tur.br";
  };

  const fazerLigacaoClick = () => {
    window.location.href = "tel:+5531996297732";
  };

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
  
               
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <img className=" grid grid-cols-1 lg:grid-cols-1 gap-2 items-center w-100 h-15"
          src={logoAgencia} 
          alt="Logotipo Rota de Embarque" 
        />
          <div>
             
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Conheça nossa agência
            </h2>
            <p className="text-lg text-justify text-muted-foreground mb-6 leading-relaxed">
              A Rota de Embarque nasceu do amor por viajar, ajudando familiares e amigos a planejarem roteiros completos com dedicação.
            </p>
            <p className="text-lg text-justify text-muted-foreground mb-8 leading-relaxed">
              Com confiança e acolhimento, transformamos experiências pessoais em uma agência que realiza sonhos e cria memórias inesquecíveis.
            </p>
            

            <Sheet>
  <SheetTrigger asChild>
    <Button 
      className="bg-gradient-tropical hover:shadow-glow transition-all duration-300"
      size="lg"
    >
      Conhecer Mais
    </Button>
  </SheetTrigger>
  <SheetContent className="w-full h-full max-w-none p-0 flex flex-col overflow-hidden">
    <SheetHeader className="p-6 pb-0 flex-shrink-0">
      <SheetTitle className="text-3xl font-bold text-primary text-center">
        Sobre nossa agência
      </SheetTitle>
    </SheetHeader>
    
    {/* Container principal com scroll */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden">
                  
      <div className="p-6 space-y-6">
                    {/* Foto e Info Principal */}
                    
        <div className="flex flex-col items-center text-center mb-6">
          <img 
            src={agentPhoto} 
            alt="Ana Paula - Especialista em Viagens"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold text-primary mb-2">
            Jessica & Lucas
          </h3>
          <p className="text-accent font-medium text-lg mb-4">
            Especialistas em Viagens
          </p>
        </div>

        {/* Conteúdo de Texto */}
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-muted-foreground text-justify leading-relaxed">
            A Rota de Embarque nasceu do nosso amor por viajar. Eu (Jéssica de Melo) e o Lucas sempre tivemos a paixão de viver boas experiências em cada viagem e, ao longo dos anos, ajudamos familiares e amigos a planejarem suas próprias viagens, desde a escolha do destino até cada detalhe do roteiro.
          </p>
          
          <p className="text-muted-foreground text-justify leading-relaxed">
            Com o tempo, percebemos que esse cuidado e dedicação poderiam ir além do nosso círculo próximo. Decidimos transformar essa experiência em algo maior: criar uma agência que oferecesse não apenas pacotes de viagem, mas também confiança, atenção e acolhimento em cada etapa da jornada.
          </p>

          <p className="text-muted-foreground text-justify leading-relaxed">
           Acreditamos que viajar vai muito além de conhecer destinos; é viver momentos únicos. Por isso, oferecemos atendimento personalizado, roteiros exclusivos e todo o suporte necessário para que cada cliente sinta-se acolhido e aproveite plenamente sua experiência.
          </p>

          <p className="text-muted-foreground text-justify leading-relaxed">
            Na Rota de Embarque, cada cliente é especial, e nossa missão é transformar sonhos em memórias inesquecíveis.
          </p>

          <div className="bg-gradient-card rounded-lg p-4 mt-6">
            <h4 className="font-semibold text-primary mb-3">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground" onClick={fazerLigacaoClick}>
                <Phone className="w-4 h-4" />
                <span>(31) 9 9629-7732</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground" onClick={enviarEmailClick}>
                <Mail className="w-4 h-4" />
                <span>reservas@rotadeembarque.tur.br</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Redes Sociais Fixadas no Bottom */}
    <div className="flex-shrink-0 bg-background p-6 border-t">
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Siga-nos nas redes sociais
        </p>
        <div className="flex justify-center gap-4">
       
                      {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <Button
                key={index}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="w-5 h-5 mr-2" />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  </SheetContent>
</Sheet>
          </div>
           
        </div>
      </div>
    </section>
  );
};

export default About;