import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Camera } from "lucide-react";
import { useState } from "react";
import DestinationModal from "./DestinationModal";
import lencois0Image from "@/assets/lencois0.webp";
import lencois1Image from "@/assets/lencois1.webp";
import lencois2Image from "@/assets/lencois2.webp";
import noronha0Image from "@/assets/noronha0.webp";
import noronha1Image from "@/assets/noronha1.webp";
import noronha2Image from "@/assets/noronha2.webp";
import portoseguro0Image from "@/assets/portoseguro0.webp";
import portoseguro1Image from "@/assets/portoseguro1.webp";
import portoseguro2Image from "@/assets/portoseguro2.webp";
import jericoacoara0Image from "@/assets/jericoacoara0.webp";
import jericoacoara1Image from "@/assets/jericoacoara1.webp";
import jericoacoara2Image from "@/assets/jericoacoara2.webp";
import maceio0Image from "@/assets/maceio0.webp";
import maceio1Image from "@/assets/maceio1.webp";
import maceio2Image from "@/assets/maceio2.webp";
import portoGalinhas0Image from "@/assets/portogalinhas0.webp";
import portoGalinhas1Image from "@/assets/portogalinhas1.webp";
import portoGalinhas2Image from "@/assets/portogalinhas2.webp";
import maragogi0Image from "@/assets/maragogi0.webp";
import maragogi1Image from "@/assets/maragogi1.webp";
import maragogi2Image from "@/assets/maragogi2.webp";
import natal0Image from "@/assets/natal0.webp";
import natal1Image from "@/assets/natal1.webp";
import natal2Image from "@/assets/natal2.webp";
import { useIrParaWhatsApp } from "@/hooks/useIrParaWhatsApp";

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const destinations = [
   {
    name: "Porto Seguro",
    state: "Bahia",
    image: portoseguro0Image,
    images: [portoseguro0Image, portoseguro1Image, portoseguro2Image],
    rating: 4.8,
    highlights: ["Praias históricas", "Vida noturna animada", "Passeios culturais"],
    description: "Um dos destinos mais procurados do Brasil, com praias paradisíacas e muita história.",
    fullDescription: "Porto Seguro é considerado o berço do Brasil, local onde os portugueses chegaram em 1500. Além de suas belas praias com águas mornas e falésias coloridas, a cidade também oferece passeios históricos pelo centro, festas típicas e uma vibrante vida noturna.",
    bestTime: "Novembro a Março",
    duration: "5 a 7 dias",
    climate: "Tropical úmido",
    activities: ["Praia de Taperapuã", "Passeio histórico no centro", "Trancoso e Arraial d’Ajuda", "Passeios de escuna", "Vida noturna animada"],
    includes: ["Hospedagem", "Traslado aeroporto", "Passeios guiados", "Café da manhã", "Seguro viagem"],
    attractions: [
      { name: "Centro Histórico", description: "Visita às igrejas e ao Marco do Descobrimento." },
      { name: "Praia de Taperapuã", description: "A praia mais badalada, com barracas e shows ao vivo." },
      { name: "Trancoso", description: "Vilarejo charmoso com praias preservadas e o famoso Quadrado." },
      { name: "Arraial d’Ajuda", description: "Destino tranquilo com belas praias e vida noturna aconchegante." }
    ],
    tips: [
      "Aproveite para conhecer as festas típicas de axé e forró",
      "Leve roupas leves e confortáveis para o calor",
      "Não deixe de visitar Trancoso ao entardecer",
      "Reserve passeios com antecedência na alta temporada"
    ]
  },
  {
    name: "Natal",
    state: "Rio Grande do Norte",
    image: natal0Image,
    images: [natal0Image, natal1Image, natal2Image],
    rating: 4.9,
    highlights: ["Dunas incríveis", "Praias paradisíacas", "Passeios de buggy"],
    description: "Natal encanta com suas dunas, praias e o famoso passeio de buggy com emoção.",
    fullDescription: "Natal é conhecida como a 'Cidade do Sol', oferecendo praias belíssimas, dunas imensas e lagoas de águas cristalinas. O passeio de buggy é uma das atrações mais procuradas, passando por Genipabu e outras paisagens incríveis. A cidade ainda possui forte influência cultural, artesanato e uma gastronomia rica em frutos do mar.",
    bestTime: "Setembro a Fevereiro",
    duration: "4 a 6 dias",
    climate: "Tropical litorâneo",
    activities: ["Passeio de buggy nas dunas", "Banho de lagoa", "Visita ao Forte dos Reis Magos", "Praia de Ponta Negra", "Visita a Genipabu"],
    includes: ["Hospedagem em hotel à beira-mar", "Traslados", "Passeio de buggy", "Guia local", "Seguro viagem"],
    attractions: [
      { name: "Dunas de Genipabu", description: "O cartão-postal de Natal, com passeios de buggy e dromedários." },
      { name: "Praia de Ponta Negra", description: "A mais famosa da cidade, com o Morro do Careca ao fundo." },
      { name: "Forte dos Reis Magos", description: "Construção histórica de 1598, símbolo da cidade." },
      { name: "Lagoa de Pitangui", description: "Perfeita para banho e lazer em águas tranquilas." }
    ],
    tips: [
      "Peça o passeio de buggy 'com emoção' para mais adrenalina",
      "Leve óculos escuros e protetor solar",
      "Experimente a culinária local com peixes e frutos do mar",
      "Reserve um dia para conhecer Pipa, ao sul de Natal"
    ]
  },
  {
    name: "Maceió",
    state: "Alagoas",
    image: maceio0Image,
    images: [maceio0Image, maceio1Image, maceio2Image],
    rating: 4.9,
    highlights: ["Águas azul-turquesa", "Piscinas naturais", "Belezas tropicais"],
    description: "Um dos litorais mais bonitos do Brasil, com águas cristalinas e piscinas naturais.",
    fullDescription: "Maceió é conhecida como o Caribe Brasileiro, com praias de águas transparentes, piscinas naturais e coqueirais intermináveis. Além da orla urbana, os passeios para Maragogi e São Miguel dos Milagres são imperdíveis, oferecendo cenários paradisíacos e experiências inesquecíveis.",
    bestTime: "Dezembro a Março",
    duration: "5 a 7 dias",
    climate: "Tropical litorâneo",
    activities: ["Passeio às piscinas naturais de Pajuçara", "Visita a Maragogi", "Tour por São Miguel dos Milagres", "Praia do Francês", "Passeios de jangada"],
    includes: ["Hospedagem em hotel à beira-mar", "Traslados", "Passeios guiados", "Café da manhã", "Seguro viagem"],
    attractions: [
      { name: "Praia de Pajuçara", description: "Famosa pelas jangadas que levam às piscinas naturais." },
      { name: "Maragogi", description: "Conhecido como o Caribe Brasileiro, com águas cristalinas." },
      { name: "São Miguel dos Milagres", description: "Praias tranquilas e piscinas naturais preservadas." },
      { name: "Praia do Francês", description: "Movimentada, com boa estrutura turística e mar azul intenso." }
    ],
    tips: [
      "Leve máscara de snorkel para aproveitar as piscinas naturais",
      "Programe o passeio a Maragogi conforme a tábua da maré",
      "Não esqueça o protetor solar e roupas leves",
      "Experimente a culinária local com frutos do mar e tapioca"
    ]
  },
  {
    name: "Lençóis Maranhenses",
    state: "Maranhão",
    image: lencois0Image,
    images: [lencois0Image, lencois1Image, lencois2Image],
    rating: 4.9,
    highlights: ["Lagoas cristalinas", "Dunas brancas", "Pôr do sol único"],
    description: "Um dos destinos mais impressionantes do Brasil, com paisagens únicas de dunas e lagoas.",
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
    image: noronha0Image,
    images: [noronha0Image, noronha1Image, noronha2Image],
    rating: 5.0,
    highlights: ["Mergulho com golfinhos", "Praias paradisíacas", "Vida marinha"],
    description: "Arquipélago paradisíaco considerado um dos melhores destinos de mergulho do mundo.",
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
    name: "Jericoacoara",
    state: "Ceará",
    image: jericoacoara0Image,
    images: [jericoacoara0Image, jericoacoara1Image, jericoacoara2Image],
    rating: 4.9,
    highlights: ["Kitesurf", "Duna do Pôr do Sol", "Vila de pescadores"],
    description: "Destino paradisíaco famoso pelos ventos ideais para esportes aquáticos.",
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
  },
  {
    name: "Porto de Galinhas",
    state: "Pernambuco",
    image: portoGalinhas0Image,
    images: [portoGalinhas0Image, portoGalinhas1Image, portoGalinhas2Image],
    rating: 4.8,
    highlights: ["Piscinas naturais", "Mergulho livre", "Jangadas tradicionais"],
    description: "Praia paradisíaca com piscinas naturais de águas cristalinas e corais coloridos.",
    fullDescription: "Porto de Galinhas é um dos destinos mais procurados do Nordeste, famoso por suas piscinas naturais formadas por recifes de corais. Durante a maré baixa, as piscinas revelam um aquário natural com peixes tropicais coloridos. A vila oferece excelente infraestrutura turística mantendo o charme de uma comunidade de pescadores.",
    bestTime: "Setembro a Março",
    duration: "3 a 5 dias",
    climate: "Tropical quente e úmido",
    activities: ["Mergulho nas piscinas naturais", "Passeio de jangada", "Stand up paddle", "Trilha dos cavalos-marinhos", "Buggy tour", "Mergulho autônomo"],
    includes: ["Hospedagem em resort", "Passeio às piscinas naturais", "Mergulho livre", "Transfer", "Seguro viagem"],
    attractions: [
      { name: "Piscinas Naturais", description: "Formações de corais que criam piscinas cristalinas com vida marinha." },
      { name: "Praia de Maracaípe", description: "Praia selvagem ideal para surf e observação de cavalos-marinhos." },
      { name: "Vila de Artesãos", description: "Centro de artesanato local com produtos únicos da região." },
      { name: "Pontal de Maracaípe", description: "Encontro do rio com o mar, santuário dos cavalos-marinhos." }
    ],
    tips: [
      "Visite as piscinas naturais na maré baixa",
      "Use aqua shoes para proteção dos pés nos corais",
      "Não toque nos corais - preserve o ecossistema",
      "Reserve passeios com antecedência na alta temporada"
    ]
  },
  {
    name: "Maragogi",
    state: "Alagoas",
    image: maragogi0Image,
    images: [maragogi0Image, maragogi1Image, maragogi2Image],
    rating: 4.9,
    highlights: ["Galés de Maragogi", "Águas cristalinas", "Mergulho nos corais"],
    description: "Destino conhecido como 'Caribe Brasileiro' pelas águas verde-esmeralda e recifes de corais.",
    fullDescription: "Maragogi é considerada a joia do litoral de Alagoas, com suas águas cristalinas em tons de verde e azul que lembram o Caribe. Os Galés de Maragogi, piscinas naturais a 6km da costa, oferecem uma das experiências de mergulho livre mais impressionantes do Brasil, com visibilidade de até 20 metros e rica vida marinha.",
    bestTime: "Setembro a Março",
    duration: "4 a 6 dias",
    climate: "Tropical quente e úmido",
    activities: ["Mergulho nos Galés", "Passeio de catamarã", "Stand up paddle", "Caiaque", "Caminhada na praia", "Massagem relaxante"],
    includes: ["Hospedagem all-inclusive", "Passeio aos Galés", "Equipamentos de mergulho", "Transfer", "Seguro viagem"],
    attractions: [
      { name: "Galés de Maragogi", description: "Piscinas naturais oceânicas com corais e peixes tropicais exuberantes." },
      { name: "Praia de Antunes", description: "Praia paradisíaca com coqueirais e águas cristalinas." },
      { name: "Barra Grande", description: "Vila de pescadores com charme rústico e gastronomia local." },
      { name: "São José da Coroa Grande", description: "Praia vizinha com piscinas naturais e ambiente mais reservado." }
    ],
    tips: [
      "Escolha dias de mar calmo para visitar os Galés",
      "Leve câmera aquática para registrar a vida marinha",
      "Use protetor solar biodegradável",
      "Experimente a lagosta grelhada nos restaurantes locais"
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
      items: ["Pelourinho (Salvador)", "Olinda (Pernambuco)", "São Luís (Maranhão)", "Alcântara (Maranhão)"]
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

  const irParaWhatsApp = useIrParaWhatsApp();

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Melhores Destinos do Nordeste
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
                <div className="absolute top-4 left-4 bg-gradient-sunset text-white px-4 py-2 rounded-full text-sm font-semibold shadow-glow">
                  {destination.state}
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

                <div className="flex justify-end">
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
                Pronto para Sua Próxima Viagem?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Entre em contato e monte seu roteiro personalizado pelos destinos mais incríveis do Nordeste
              </p>
              <Button onClick={() => irParaWhatsApp("planejarminhaviagem", null)}
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