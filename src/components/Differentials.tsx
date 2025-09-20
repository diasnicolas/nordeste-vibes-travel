import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Clock, 
  Heart, 
  Shield, 
  Users, 
  CreditCard, 
  MapPin, 
  Phone, 
  Award 
} from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Suporte completo antes, durante e depois da sua viagem",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Viagens Personalizadas",
      description: "Roteiros únicos criados especialmente para você",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description: "Proteção completa com seguro viagem incluído",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Especialistas Locais",
      description: "Guias nativos com conhecimento profundo da região",
      color: "text-accent"
    },
    {
      icon: CreditCard,
      title: "Facilidade de Pagamento",
      description: "Parcelamento em até 12x sem juros no cartão",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Destinos Exclusivos",
      description: "Acesso a locais únicos e experiências autênticas",
      color: "text-accent"
    },
    {
      icon: Phone,
      title: "Contato Direto",
      description: "WhatsApp exclusivo para emergências durante a viagem",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "Premiados",
      description: "Reconhecidos como melhor agência do Nordeste 2023",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que Escolher Nossa Agência?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos muito mais que uma simples viagem. Criamos experiências 
            inesquecíveis com o melhor atendimento e serviços diferenciados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-tropical p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Mais de 10.000 Clientes Satisfeitos!
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Junte-se aos milhares de viajantes que já descobriram o Nordeste conosco
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm opacity-80">Avaliação Google</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">Recomendação</div>
              </div>
              <div>
                <div className="text-3xl font-bold">0%</div>
                <div className="text-sm opacity-80">Cancelamentos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;