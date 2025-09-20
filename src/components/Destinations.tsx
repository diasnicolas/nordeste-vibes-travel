import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Camera } from "lucide-react";
import { useState } from "react";
import DestinationModal from "./DestinationModal";
import lencoisImage from "@/assets/lencois.jpg";
import noronhaImage from "@/assets/noronha.jpg";
import salvadorImage from "@/assets/salvador.jpg";
import jericoacoaraImage from "@/assets/jericoacoara.jpg";

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const destinations = [
    {
      name: "Lençóis Maranhenses",
      state: "Maranhão",
      image: lencoisImage,
      rating: 4.9,
      highlights: ["Lagoas cristalinas", "Dunas brancas", "Pôr do sol único"],
      description: "Um dos destinos mais impressionantes do Brasil, com paisagens únicas de dunas e lagoas.",
      price: "A partir de R$ 1.299",
      fullDescription: "Os Lençóis Maranhenses são um espetáculo da natureza único no mundo. Durante a época das chuvas (janeiro a junho), as depressões entre as dunas se enchem de água da chuva, formando milhares de lagoas de água doce cristalina. É um verdadeiro oásis no meio do semiárido brasileiro, oferecendo uma experiência surreal e inesquecível.",
      bestTime: "Junho a Setembro",
      duration: "4 a 6 dias",
      climate: "Tropical semiárido",
      activities: ["Trekking nas dunas", "Banho nas lagoas", "Passeio de quadriciclo", "Sobrevoo de avião", "Pesca esportiva", "Observação de aves"],
      includes: ["Hospedagem em Barreirinhas", "Transporte 4x4", "Guia especializado", "Refeições", "Seguro viagem"],
      attractions: [
        { name: "Lagoa Azul", description: "A mais famosa e fotografada lagoa dos Lençóis, com águas azul-turquesa cristalinas." },
        { name: "Lagoa Bonita", description: "Ideal para relaxar e contemplar a natureza em um ambiente mais reservado." },
        { name: "Circuito das Lagoas", description: "Roteiro completo visitando as principais lagoas em um dia inteiro." },
        { name: "Rio Preguiças", description: "Passeio de barco pelos manguezais até as praias de Atins e Caburé." }
      ],
      tips: [
        "Leve protetor solar e chapéu - o sol é muito forte",
        "Use calçados adequados para caminhada na areia",
        "Hidrate-se constantemente durante os passeios",
        "Respeite as regras ambientais do parque nacional"
      ]
    },
    {
      name: "Fernando de Noronha",
      state: "Pernambuco", 
      image: noronhaImage,
      rating: 5.0,
      highlights: ["Mergulho com golfinhos", "Praias paradisíacas", "Vida marinha"],
      description: "Arquipélago paradisíaco considerado um dos melhores destinos de mergulho do mundo.",
      price: "A partir de R$ 2.499",
      fullDescription: "Fernando de Noronha é um arquipélago vulcânico que oferece algumas das águas mais cristalinas do planeta. Patrimônio Mundial da UNESCO, o local é um santuário ecológico com biodiversidade marinha única. É o destino perfeito para quem busca contato direto com a natureza preservada e experiências submarinas extraordinárias.",
      bestTime: "Abril a Novembro",
      duration: "5 a 7 dias",
      climate: "Tropical oceânico",
      activities: ["Mergulho livre", "Mergulho autônomo", "Trilhas ecológicas", "Surf", "Stand up paddle", "Observação de golfinhos"],
      includes: ["Voo de ida e volta", "Hospedagem", "Taxa de preservação", "Mergulhos", "Guia credenciado"],
      attractions: [
        { name: "Baía do Sancho", description: "Eleita a praia mais bonita do mundo, com acesso por trilha e fenda na rocha." },
        { name: "Baía dos Porcos", description: "Piscinas naturais cristalinas ideais para mergulho livre." },
        { name: "Projeto Tamar", description: "Centro de preservação das tartarugas marinhas da região." },
        { name: "Morro do Pico", description: "Ponto mais alto da ilha com vista panorâmica de 360°." }
      ],
      tips: [
        "Reserve com antecedência - número de visitantes é limitado",
        "Respeite as regras ambientais rigorosas da ilha",
        "Leve equipamentos de mergulho ou alugue na ilha",
        "Não use protetor solar químico nas praias"
      ]
    },
    {
      name: "Salvador",
      state: "Bahia",
      image: salvadorImage,
      rating: 4.8,
      highlights: ["Pelourinho histórico", "Cultura afro-brasileira", "Gastronomia baiana"],
      description: "Primeira capital do Brasil, rica em história, cultura e tradições únicas.",
      price: "A partir de R$ 899",
      fullDescription: "Salvador é uma cidade vibrante que pulsa com a energia da cultura afro-brasileira. O centro histórico preservado, conhecido como Pelourinho, é Patrimônio da Humanidade pela UNESCO. A cidade oferece uma experiência única de imersão cultural, com sua música, dança, culinária e arquitetura colonial colorida que conta a história do Brasil.",
      bestTime: "Dezembro a Março",
      duration: "3 a 5 dias", 
      climate: "Tropical quente e úmido",
      activities: ["City tour histórico", "Aulas de capoeira", "Degustação gastronômica", "Shows de axé", "Visita a terreiros", "Compras no Mercado Modelo"],
      includes: ["Hospedagem no centro histórico", "City tour", "Show folclórico", "Degustação de acarajé", "Transporte"],
      attractions: [
        { name: "Pelourinho", description: "Centro histórico com arquitetura colonial preservada e vida cultural intensa." },
        { name: "Elevador Lacerda", description: "Cartão postal que conecta a cidade alta à cidade baixa." },
        { name: "Igreja do Bonfim", description: "Santuário religioso famoso pelas fitinhas do Senhor do Bonfim." },
        { name: "Mercado Modelo", description: "Centro de artesanato e cultura popular baiana." }
      ],
      tips: [
        "Use roupas leves e confortáveis para o calor",
        "Prove as comidas típicas como acarajé e vatapá", 
        "Cuidado com pertences em locais muito movimentados",
        "Aproveite a vida noturna animada do Pelourinho"
      ]
    },
    {
      name: "Jericoacoara",
      state: "Ceará",
      image: jericoacoaraImage,
      rating: 4.9,
      highlights: ["Kitesurf", "Duna do Pôr do Sol", "Vila de pescadores"],
      description: "Destino paradisíaco famoso pelos ventos ideais para esportes aquáticos.",
      price: "A partir de R$ 1.099",
      fullDescription: "Jericoacoara é um destino único que combina belezas naturais exuberantes com um ambiente rústico e acolhedor. Antiga vila de pescadores transformada em destino internacional, Jeri mantém seu charme autêntico com ruas de areia, casas simples e uma atmosfera relaxante. É considerado um dos melhores spots de kitesurf do mundo.",
      bestTime: "Julho a Dezembro",
      duration: "4 a 6 dias",
      climate: "Tropical semiárido",
      activities: ["Kitesurf", "Windsurfing", "Passeio de buggy", "Cavalgada", "Capoeira na praia", "Forró pé de serra"],
      includes: ["Transfer 4x4", "Hospedagem em pousada", "Aulas de kitesurf", "Passeio às lagoas", "Seguro viagem"],
      attractions: [
        { name: "Duna do Pôr do Sol", description: "Local sagrado para assistir ao pôr do sol mais famoso do Ceará." },
        { name: "Pedra Furada", description: "Formação rochosa icônica e cartão postal de Jericoacoara." },
        { name: "Lagoa do Paraíso", description: "Lagoa de água doce com redes dentro d'água e ambiente paradisíaco." },
        { name: "Árvore da Preguiça", description: "Árvore centenária símbolo da tranquilidade de Jeri." }
      ],
      tips: [
        "Leve dinheiro em espécie - poucos lugares aceitam cartão",
        "Use chinelos ou sapatos fechados nas ruas de areia",
        "Aproveite o vento constante para esportes aquáticos",
        "Respeite o ambiente natural preservado da região"
      ]
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

  const handleViewMore = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 group bg-gradient-card border-0 shadow-card">
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-1 shadow-card">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-gradient-tropical text-white px-4 py-2 rounded-full text-sm font-semibold shadow-glow">
                  {destination.state}
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-lg font-bold">{destination.price}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{destination.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Camera className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-primary">{destination.price}</div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-tropical hover:shadow-glow transition-all duration-300 text-white"
                    onClick={() => handleViewMore(destination)}
                  >
                    Ver Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <DestinationModal
          destination={selectedDestination}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((category, index) => (
            <div key={index} className="bg-gradient-card p-6 rounded-xl shadow-card border-0 hover:shadow-elegant transition-all duration-300">
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
          <div className="bg-gradient-hero p-12 rounded-3xl text-white shadow-glow relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Pronto para Sua Próxima Aventura?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Entre em contato e monte seu roteiro personalizado pelos destinos mais incríveis do Nordeste
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold rounded-full shadow-warm"
              >
                Planejar Minha Viagem
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;