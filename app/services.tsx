import { FaHands, FaSyringe } from "react-icons/fa6";
import { MdElderlyWoman } from "react-icons/md";

const ServiceCards = [
  {
    title: "Vaccinations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <FaSyringe className="text-blue-900 text-xl" />,
  },
  {
    title: "Family care",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <FaHands className="text-blue-900 text-xl" />,
  },
  {
    title: "Vaccinations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam magni beatae!",
    icon: <MdElderlyWoman className="text-white text-xl" />,
  },
];

const ServiceSection = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-24">
      <h1 className="text-4xl font-bold">Our Services</h1>

      <div className="flex itens-center justify-center gap-20 w-full">
        {ServiceCards.map((card, index) => {
          const isBlue = index === 2;

          return (
            <div
              key={index}
              className={`relative w-80 p-8 rounded-2xl shadow-lg text-center transition-all
            ${isBlue ? "bg-blue-600 text-white" : " bg-blue-50 text-gray-800"}`}
            >
              <div
                className="absolute -top-8 left-1/2 -translate-x-1/2
             flex items-center justify-center
             w-20 h-20 rounded-full bg-white"
              >
                <div
                  className={`flex items-center justify-center 
                w-16 h-16 rounded-full 
                ${
                  isBlue
                    ? "bg-blue-600 text-blue-400"
                    : "bg-blue-200 text-blue-400"
                }`}
                >
                  {card.icon}
                </div>
              </div>

              <h3 className="mt-10 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80">
                {card.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;
