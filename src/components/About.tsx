import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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

            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  className="bg-gradient-tropical hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  Conhecer Mais
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full h-full max-w-none p-0 flex flex-col">
                <SheetHeader className="p-6 pb-0 flex-shrink-0">
                  <SheetTitle className="text-3xl font-bold text-primary text-center">
                    Conheça Nossa Especialista
                  </SheetTitle>
                </SheetHeader>
                
                <div className="flex-1 flex flex-col p-6 pt-4">
                  {/* Foto e Info Principal */}
                  <div className="flex flex-col items-center text-center mb-6 flex-shrink-0">
                    <img 
                      src={agentPhoto} 
                      alt="Ana Paula - Especialista em Viagens"
                      className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-2xl font-semibold text-primary mb-2">
                      Ana Paula Santos
                    </h3>
                    <p className="text-accent font-medium text-lg mb-4">
                      Especialista em Turismo Nordestino
                    </p>
                  </div>

                  {/* Texto com Scroll */}
                  <div className="flex-1 overflow-y-auto mb-6 px-2">
                    <div className="max-w-2xl mx-auto space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        Nascida e criada no Nordeste, Ana Paula é apaixonada por mostrar 
                        as belezas da região para viajantes do mundo todo. Com formação 
                        em Turismo e certificações internacionais, ela já organizou mais 
                        de 2.000 viagens inesquecíveis.
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        Sua expertise inclui roteiros personalizados, conhecimento profundo 
                        da cultura local e parcerias exclusivas com os melhores hotéis e 
                        operadores da região.
                      </p>

                      <p className="text-muted-foreground leading-relaxed">
                        Com uma abordagem personalizada, Ana Paula se dedica a entender 
                        os sonhos e expectativas de cada cliente, criando roteiros únicos 
                        que superam as expectativas. Ela possui um conhecimento íntimo 
                        dos destinos nordestinos, desde as praias mais paradisíacas até 
                        os centros históricos mais charmosos.
                      </p>

                      <p className="text-muted-foreground leading-relaxed">
                        Fluente em português, inglês e espanhol, Ana Paula já atendeu 
                        clientes de diversos países, sempre com o compromisso de 
                        proporcionar experiências autênticas e memoráveis. Sua paixão 
                        pelo turismo sustentável e valorização da cultura local faz 
                        dela uma verdadeira embaixadora do Nordeste brasileiro.
                      </p>

                      <div className="bg-gradient-card rounded-lg p-4 mt-6">
                        <h4 className="font-semibold text-primary mb-3">Contato Direto</h4>
                        <div className="space-y-2">
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
                      </div>
                    </div>
                  </div>

                  {/* Redes Sociais Fixadas */}
                  <div className="flex-shrink-0 border-t pt-4">
                    <div className="text-center mb-4">
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
                                {social.label}
                              </a>
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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