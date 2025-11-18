import { Button } from "@radix-ui/themes";

const HeroSection = () => {
  return (
    <section
      className="w-full flex h-4/5 relative"
      style={{
        backgroundImage: 'url("/logo.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-10 bg-white/40"></div>

      <div className="w-1/2 z-20 flex items-center justify-center">
        <div className="max-w-2xl text-xl w-full flex flex-col gap-8">
          <div className="w-2/5 rounded-full bg-blue-100 flex justify-center items-center">
            <p className="text-lg text-blue-500">Accepting new patients</p>
          </div>
          <h1 className="text-5xl font-bold">
            Riddi Siddi Medical & Dignostics
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            magnam magni beatae! Lorem ipsum dolor sit amet.
          </p>

          <Button
            className="w-3/5"
            style={{
              height: "3rem",
              fontSize: "1rem",
            }}
          >
            Book an appointment
          </Button>
        </div>
      </div>
      <div className="w-1/2 py-20"></div>
    </section>
  );
};

export default HeroSection;
