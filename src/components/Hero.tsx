import { Button } from "@/components/ui/button";
import { Plane, ArrowRight, Star, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-beach.webp";
import { useIrParaWhatsApp } from "@/hooks/useIrParaWhatsApp";

const Hero = () => {
  const stats = [
    { number: "4.9", label: "Avaliação Média", icon: Star },
    { number: "98%", label: "Clientes Satisfeitos" },
  ];

  const scrollToSection = () => {
  const aboutSection = document.getElementById('sobre');
  if (aboutSection) {
    aboutSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  }
  };
  
  const irParaWhatsApp = useIrParaWhatsApp();

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-accent/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
     
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div 
  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/30 cursor-pointer hover:bg-white/30 hover:scale-105 transition-all duration-300 group"
  onClick={scrollToSection}
>
  <Plane className="w-4 h-4 text-yellow-400 fill-current group-hover:animate-bounce" />
  <span className="text-white text-sm font-medium">Rota de Embarque</span>
</div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Descubra os
            <span className="block bg-gradient-to-r from-orange-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              Paraísos do Nordeste
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Especialistas em criar experiências únicas nos destinos mais encantadores do Nordeste Brasileiro. 
            <span className="block mt-2 font-medium">O Destino dos seus Sonhos começa Aqui.</span>
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
            <Button onClick={() => irParaWhatsApp("montesuaviagemperfeita", null) }
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-warm hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-full group"
            >
              <Users className="w-5 h-5 mr-2" />
              Monte Sua Viagem Perfeita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button  onClick={() => irParaWhatsApp("especialista", null) }
              variant="outline" 
              size="lg"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 rounded-full backdrop-blur-sm bg-white/10"
            >
              <Plane className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;