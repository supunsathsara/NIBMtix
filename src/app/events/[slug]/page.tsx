import CountDown from "@/components/CountDown";
import MagicButton from "@/components/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

const EventLandingPage = ({ params }: { params: { slug: string } }) => {
  return (
          <div className="flex flex-col md:flex-row">
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
                <Link href={`/events/${params.slug}/buy`} className="mt-10 md:mt-6">
                  <MagicButton
                    title="Buy Tickets Now"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </Link>
              </div>
            </div>
            <div className="relative w-3/4 mx-auto">
              <img
                src="/MASTHANI_NIGHT.jpeg"
                alt="hero"
                className="w-full z-10 fade-edges mx-auto"
              />
            </div>
          </div>
  );
};
export default EventLandingPage;
