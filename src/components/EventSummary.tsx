import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "@/utils/supabase/server";
import { Key } from "react";

const EventSummary = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("all_events_summary")
    .select("id, event_name, event_date, tickets_sold, total_revenue");

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching data");
  }
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Event</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Tickets Sold</TableHead>
            <TableHead>Revenue</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(
            (event: {
              id: Key;
              event_name: string;
              event_date: string;
              tickets_sold: number;
              total_revenue: number;
            }) => (
              <TableRow key={event.id}>
                <TableCell>{event.event_name}</TableCell>
                <TableCell>
                  {new Date(event.event_date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell>{event.tickets_sold}</TableCell>
                <TableCell>Rs. {event.total_revenue.toFixed(2)}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};
export default EventSummary;
