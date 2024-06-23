import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import About from "@/components/About";
import ConnectWorldWide from "@/components/ConnectWorldWide";


export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
       <div className="max-w-7xl w-full">
       <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <ConnectWorldWide />
        </div>
    </main>
  );
}
