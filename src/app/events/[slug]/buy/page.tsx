import BuyTicketForm from "@/components/BuyTicketForm";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  CalendarCheck,
  Clock10Icon,
  MapPinIcon,
  TicketCheckIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TicketBuyPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="justify-center relative my-4 z-10 w-full">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[100vw] w-full flex flex-col items-center justify-center">
          <h1
            className={`text-lg md:text-2xl lg:text-4xl font-bold text-center dark:text-white text-black mt-2 tracking-widest uppercase`}
          >
            Masthani Night
          </h1>
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Where the Night Comes Alive.
          </p>
          <Card className="bg-muted/60 md:w-[70vw] mt-6 px-4">
            <CardHeader>
              <CardTitle>
                Ticket Information
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4 flex items-center gap-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full">
                    LKR: 1000
                  </span>
                </p>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-4 flex gap-2">
              <div className="w-1/2">
                <BuyTicketForm />
              </div>
              <div className="w-1/2 h-full mx-auto group/card mt-8">
                <div
                  className={cn(
                    "cursor-pointer overflow-hidden relative card rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                    "bg-[url(/MASTHANI_NIGHT.jpeg)] bg-cover transform"
                  )}
                  style={{ width: "100%", height: "auto" }}
                >
                  <div className="absolute bg-black-100/20 w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                  <div className="flex flex-row items-center space-x-4 z-10">
                    <div className="flex flex-col">
                      <p className="font-normal text-base text-gray-50 relative z-10">
                        12th March 2024
                      </p>
                      <p className="text-sm text-gray-400">7:00 PM Onwards</p>
                    </div>
                  </div>
                  <div className="text content">
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      Masthani Night
                    </h1>
                    <p className="font-normal text-sm text-gray-50 relative z-10 my-4 flex items-center gap-3">
                      <TicketCheckIcon className="w-6 h-6" />
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full">
                        LKR: 1000
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mx-auto text-center w-full pl-16 mt-10">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="w-6 h-6" />
                    <span>12th March 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock10Icon className="w-6 h-6" />
                    <span>7:00 PM Onwards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-6 h-6" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default TicketBuyPage;
