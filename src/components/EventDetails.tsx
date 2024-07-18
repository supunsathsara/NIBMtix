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
      <CardContent>
        <p>Location: {event.location}</p>
        <p>
          Price:{" "}
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "LKR",
          }).format(event.ticketPrice)}
        </p>
        <p>Available Tickets: {event.availableTickets}</p>
        <p>Tickets Sold: {event.ticketsSold}</p>
        <p>
          Event URL:{" "}
          <a href={`/events/${event.slug}`} className="text-blue-500 underline">
            {`/events/${event.slug}`}
          </a>
        </p>
        <p>Meal Provided: {event.mealProvided ? "Yes" : "No"}</p>
        <p>Description: {event.description}</p>
      </CardContent>
    </Card>
  );
};

export default EventDetails;
