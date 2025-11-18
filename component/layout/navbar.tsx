import { Button } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const Navlinks = [
  {
    title: "Home",
    src: "#",
  },
  {
    title: "Services",
    src: "#",
  },
  {
    title: "Doctors",
    src: "#",
  },
  {
    title: "Contact us",
    src: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full h-24 px-12 py-6 flex justify-between items-center">
      <Image src="/logo.png" width={24} height={24} alt="Logo" />

      <div className="flex gap-10 items-center">
        {Navlinks.map((item) => (
          <Link key={item.title} href={item.src}>
            {item.title}
          </Link>
        ))}
      </div>

      <Button>Book an appointment</Button>
    </nav>
  );
};

export default Navbar;
