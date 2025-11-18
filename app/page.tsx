import HeroSection from "./hero";
import ServiceSection from "./services";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-12 h-screen w-full">
      <HeroSection />
      <ServiceSection />
    </main>
  );
};

export default HomePage;
