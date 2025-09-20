import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane, MapPin, Shield, Package, Ticket, ArrowRight, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

const Hero = () => {
  const services = [
    { icon: Plane, title: "Passagens Aéreas", description: "Melhores preços e horários", color: "bg-gradient-ocean" },
    { icon: MapPin, title: "Hospedagem", description: "Hotéis e pousadas selecionados", color: "bg-gradient-sunset" },
    { icon: Shield, title: "Seguro Viagem", description: "Proteção completa", color: "bg-gradient-tropical" },
    { icon: Ticket, title: "Ingressos", description: "Atrações e passeios", color: "bg-gradient-ocean" },
    { icon: Package, title: "Pacotes Completos", description: "Viagens sob medida", color: "bg-gradient-sunset" },
  ];

  const stats = [
    { number: "2000+", label: "Viagens Realizadas" },
    { number: "4.9", label: "Avaliação Média", icon: Star },
    { number: "98%", label: "Clientes Satisfeitos" },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-300"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/30">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">Agência #1 do Nordeste 2024</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Descubra os
            <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              Tesouros do Nordeste
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Especialistas em criar experiências únicas nos destinos mais encantadores do Brasil. 
            <span className="block mt-2 font-medium">Sua jornada dos sonhos começa aqui.</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-1 text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                  {stat.icon && <stat.icon className="w-6 h-6 text-yellow-400 fill-current" />}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-warm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-full group"
            >
              <Users className="w-5 h-5 mr-2" />
              Monte Sua Viagem Perfeita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-full backdrop-blur-sm bg-white/10"
            >
              <Plane className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-elegant group"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-lg">{service.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">Atendimento 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span className="text-sm">Garantia de Qualidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;