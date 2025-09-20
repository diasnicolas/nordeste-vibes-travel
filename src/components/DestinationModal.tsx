import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Star, 
  Calendar, 
  Users, 
  Camera, 
  Plane, 
  Car, 
  Utensils,
  Clock,
  ThermometerSun,
  Waves
} from "lucide-react";

interface Destination {
  name: string;
  state: string;
  image: string;
  rating: number;
  highlights: string[];
  description: string;
  price: string;
  fullDescription: string;
  bestTime: string;
  duration: string;
  activities: string[];
  includes: string[];
  climate: string;
  attractions: { name: string; description: string }[];
  tips: string[];
}

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
}

const DestinationModal = ({ destination, isOpen, onClose }: DestinationModalProps) => {
  if (!destination) return null;

  const infoItems = [
    { icon: Calendar, label: "Melhor época", value: destination.bestTime },
    { icon: Clock, label: "Duração recomendada", value: destination.duration },
    { icon: ThermometerSun, label: "Clima", value: destination.climate },
    { icon: Users, label: "Ideal para", value: "Casais, Famílias, Aventureiros" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary mb-2">
            {destination.name}
          </DialogTitle>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-accent text-white">
              {destination.state}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-medium">{destination.rating}</span>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src={destination.image} 
              alt={destination.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-2xl font-bold">{destination.price}</div>
              <div className="text-sm opacity-90">por pessoa</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Sobre o Destino</h3>
            <p className="text-muted-foreground leading-relaxed">
              {destination.fullDescription}
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg border">
                  <Icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Attractions */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Principais Atrações
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {destination.attractions.map((attraction, index) => (
                <div key={index} className="p-4 bg-gradient-card rounded-lg border">
                  <h4 className="font-semibold text-primary mb-2">{attraction.name}</h4>
                  <p className="text-sm text-muted-foreground">{attraction.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Waves className="w-5 h-5" />
              Atividades Disponíveis
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.activities.map((activity, index) => (
                <Badge key={index} variant="outline" className="border-primary text-primary">
                  {activity}
                </Badge>
              ))}
            </div>
          </div>

          {/* Includes */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
              <Plane className="w-5 h-5" />
              O que está incluído
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {destination.includes.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Dicas Importantes</h3>
            <div className="space-y-2">
              {destination.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-sm text-muted-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <Button 
              className="flex-1 bg-gradient-tropical hover:shadow-glow transition-all duration-300"
              size="lg"
            >
              <Car className="w-4 h-4 mr-2" />
              Montar Pacote Personalizado
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
              size="lg"
            >
              <Utensils className="w-4 h-4 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationModal;