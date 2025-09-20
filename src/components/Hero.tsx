import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, MapPin, Shield, Package, Ticket } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  const services = [
    { icon: Plane, title: "Passagens Aéreas", description: "Melhores preços e horários" },
    { icon: MapPin, title: "Hospedagem", description: "Hotéis e pousadas selecionados" },
    { icon: Shield, title: "Seguro Viagem", description: "Proteção completa" },
    { icon: Ticket, title: "Ingressos", description: "Atrações e passeios" },
    { icon: Package, title: "Pacotes Completos", description: "Viagens sob medida" },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Descubra os Tesouros do
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Nordeste Brasileiro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Sua jornada pelos destinos mais encantadores do Brasil começa aqui. 
            Serviços completos para uma viagem inesquecível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-sunset hover:shadow-warm transition-all duration-300 text-lg px-8 py-6"
            >
              Monte Sua Viagem
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-6"
            >
              Falar com Especialista
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold text-white mb-1">{service.title}</h3>
                    <p className="text-sm text-white/80">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;