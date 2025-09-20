import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import agentPhoto from "@/assets/agent-photo.jpg";

const About = () => {
  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/5585999999999", label: "WhatsApp" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sua Viagem dos Sonhos Começa Aqui
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com mais de 10 anos de experiência no turismo nordestino, nossa agência 
              especializada oferece atendimento personalizado e conhecimento profundo 
              dos melhores destinos da região.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Desde praias paradisíacas até centros históricos encantadores, 
              criamos experiências únicas que ficam para sempre na memória.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-tropical hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  Conhecer Mais
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary mb-4">
                    Conheça Nossa Especialista
                  </DialogTitle>
                </DialogHeader>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={agentPhoto} 
                      alt="Ana Paula - Especialista em Viagens"
                      className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Ana Paula Santos
                    </h3>
                    <p className="text-accent font-medium mb-4">
                      Especialista em Turismo Nordestino
                    </p>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Nascida e criada no Nordeste, Ana Paula é apaixonada por mostrar 
                      as belezas da região para viajantes do mundo todo. Com formação 
                      em Turismo e certificações internacionais, ela já organizou mais 
                      de 2.000 viagens inesquecíveis.
                    </p>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Sua expertise inclui roteiros personalizados, conhecimento profundo 
                      da cultura local e parcerias exclusivas com os melhores hotéis e 
                      operadores da região.
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Fortaleza - CE</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>(85) 99999-9999</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>anapaula@viagensnordeste.com</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <Button
                            key={index}
                            size="sm"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
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
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-ocean text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">2000+</div>
                <div className="text-sm opacity-90">Viagens Realizadas</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-sunset text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-90">Anos de Experiência</div>
              </CardContent>
            </Card>
            
            <Card className="bg-primary text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-90">Satisfação dos Clientes</div>
              </CardContent>
            </Card>
            
            <Card className="bg-accent text-white hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Destinos Nordestinos</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;