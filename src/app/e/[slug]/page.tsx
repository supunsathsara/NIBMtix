import CountDown from "@/components/CountDown";
import MagicButton from "@/components/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Clock, MapPin } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";

const EventLandingPage = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
        <div className="pb-20 pt-20">
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="h-[80vh] w-[50vw] top-10 left-full"
              fill="purple"
            />
            <Spotlight
              className="left-80 top-28 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>

          {/**
           *  UI: grid
           */}
          <div
            className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]
            absolute top-0 left-0 flex items-center justify-center"
          >
            {/* Radial gradient for the container to give a faded look */}
            <div
              className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
            />
          </div>

          <div className="flex">
            <div className="flex justify-center relative my-4 z-10">
              <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h1
                  className={`text-3xl md:text-4xl lg:text-7xl font-bold text-center dark:text-white text-black mt-2 tracking-widest uppercase`}
                >
                  Masthani Night
                </h1>
                <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                  Where the Night Comes Alive.
                </p>
                <div className="flex-col gap-5 mt-10 text-center md:tracking-wider mb-4 text-xs md:text-md lg:text-xl">
                  <div className="flex mx-auto my-auto">
                    <MapPin size={24} />
                    <span className="ml-2">NIBM Galle Campus</span>
                  </div>
                  <div className="flex mx-auto my-auto">
                    <Clock size={24} />
                    <span className="ml-2">26th August 2024, 9.00 AM</span>
                  </div>
                </div>
                {/* <p className="text-center md:tracking-wider mb-4 text-xs md:text-md lg:text-xl">
                   At NIBM Galle Campus
                </p> */}
                <div className="mt-8">
                  <CountDown targetDate={new Date("2024-08-26T00:09:00")} />
                </div>
                <a href="#">
                  <MagicButton
                    title="Buy Tickets Now"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </div>
            </div>
            <div className="relative w-3/4">
              <img
                src="/MASTHANI_NIGHT.jpeg"
                alt="hero"
                className="w-full z-10 fade-edges"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default EventLandingPage;
