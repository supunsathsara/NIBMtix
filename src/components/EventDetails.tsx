import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Event } from "@/types";

interface EventDetailsProps {
  event: Event;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        <CardDescription>
          {event.date} at {event.time}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4 bg-transparent bg-opacity-75 rounded-lg">
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex-1 mb-4 md:mb-0 md:mr-4">
              <p className="text-lg font-semibold">Location: <span className="font-normal">{event.location}</span></p>
              <p className="text-lg font-semibold">
                Price:{" "}
                <span className="font-normal">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "LKR",
                  }).format(event.ticketPrice)}
                </span>
              </p>
              <p className="text-lg font-semibold">Available Tickets: <span className="font-normal">{event.availableTickets}</span></p>
              <p className="text-lg font-semibold">Tickets Sold: <span className="font-normal">{event.ticketsSold}</span></p>
              <p className="text-lg font-semibold">
                Event URL:{" "}
                <a href={`/events/${event.slug}`} className="text-blue-500 underline">
                  {`/events/${event.slug}`}
                </a>
              </p>
              <p className="text-lg font-semibold">Meal Provided: <span className="font-normal">{event.mealProvided ? "Yes" : "No"}</span></p>
              <p className="text-lg font-semibold">Description: <span className="font-normal">{event.description}</span></p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventDetails;
