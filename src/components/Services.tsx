import { Card, CardContent } from "@/components/ui/card";
import { Plane, MapPin, Shield, Package, Ticket } from "lucide-react";

const Services = () => {
  const services = [
    { 
      icon: Plane, 
      title: "Passagens Aéreas", 
      description: "Melhores preços e horários",
      link: "https://wa.me/5585999999999?text=Olá! Gostaria de informações sobre passagens aéreas."
    },
    { 
      icon: MapPin, 
      title: "Hospedagem", 
      description: "Hotéis e pousadas selecionados",
      link: "https://wa.me/5585999999999?text=Olá! Gostaria de informações sobre hospedagem."
    },
    { 
      icon: Shield, 
      title: "Seguro Viagem", 
      description: "Proteção completa",
      link: "https://wa.me/5585999999999?text=Olá! Gostaria de informações sobre seguro viagem."
    },
    { 
      icon: Ticket, 
      title: "Ingressos", 
      description: "Atrações e passeios",
      link: "https://wa.me/5585999999999?text=Olá! Gostaria de informações sobre ingressos."
    },
    { 
      icon: Package, 
      title: "Pacotes Completos", 
      description: "Viagens sob medida",
      link: "https://wa.me/5585999999999?text=Olá! Gostaria de informações sobre pacotes completos."
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos tudo que você precisa para sua viagem perfeita
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
                onClick={() => window.open(service.link, '_blank')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-muted-foreground mb-2 text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;