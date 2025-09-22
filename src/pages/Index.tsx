import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Differentials />
      <Destinations />
      <Footer />
    </main>
  );
};

export default Index;
