import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Camera } from "lucide-react";
import lencoisImage from "@/assets/lencois.jpg";
import noronhaImage from "@/assets/noronha.jpg";
import salvadorImage from "@/assets/salvador.jpg";
import jericoacoaraImage from "@/assets/jericoacoara.jpg";

const Destinations = () => {
  const destinations = [
    {
      name: "Lençóis Maranhenses",
      state: "Maranhão",
      image: lencoisImage,
      rating: 4.9,
      highlights: ["Lagoas cristalinas", "Dunas brancas", "Pôr do sol único"],
      description: "Um dos destinos mais impressionantes do Brasil, com paisagens únicas de dunas e lagoas.",
      price: "A partir de R$ 1.299"
    },
    {
      name: "Fernando de Noronha",
      state: "Pernambuco",
      image: noronhaImage,
      rating: 5.0,
      highlights: ["Mergulho com golfinhos", "Praias paradisíacas", "Vida marinha"],
      description: "Arquipélago paradisíaco considerado um dos melhores destinos de mergulho do mundo.",
      price: "A partir de R$ 2.499"
    },
    {
      name: "Salvador",
      state: "Bahia",
      image: salvadorImage,
      rating: 4.8,
      highlights: ["Pelourinho histórico", "Cultura afro-brasileira", "Gastronomia baiana"],
      description: "Primeira capital do Brasil, rica em história, cultura e tradições únicas.",
      price: "A partir de R$ 899"
    },
    {
      name: "Jericoacoara",
      state: "Ceará",
      image: jericoacoaraImage,
      rating: 4.9,
      highlights: ["Kitesurf", "Duna do Pôr do Sol", "Vila de pescadores"],
      description: "Destino paradisíaco famoso pelos ventos ideais para esportes aquáticos.",
      price: "A partir de R$ 1.099"
    }
  ];

  const attractions = [
    {
      title: "Praias Paradisíacas",
      items: ["Praia do Sancho (Fernando de Noronha)", "Praia de Jericoacoara", "Praia do Forte (Bahia)", "Maragogi (Alagoas)"]
    },
    {
      title: "Centros Históricos",
      items: ["Pelourinho (Salvador)", "Olinda (Pernambuco)", "São Luís (Maranhão)", "Paraty (Rio de Janeiro)"]
    },
    {
      title: "Maravilhas Naturais",
      items: ["Chapada Diamantina", "Canyon do Xingó", "Cataratas de Paulo Afonso", "Delta do Parnaíba"]
    },
    {
      title: "Experiências Únicas",
      items: ["Mergulho em Fernando de Noronha", "Kitesurf em Jericoacoara", "Culinária baiana", "Festa de São João"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Destinos Imperdíveis do Nordeste
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os destinos mais encantadores do Nordeste brasileiro, 
            cada um com suas belezas únicas e experiências inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.state}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{destination.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Camera className="w-4 h-4 text-accent" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-primary">
                    {destination.price}
                  </div>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Ver Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-sm leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-ocean p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Sua Próxima Aventura?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Entre em contato e monte seu roteiro personalizado pelos destinos mais incríveis do Nordeste
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-secondary transition-all duration-300"
            >
              Planejar Minha Viagem
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;