import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { eventColumns } from "@/components/ui/event-columns";
import { EventTable } from "@/components/ui/event-table";
import { Event } from "@/types";

export default async function EventsPage() {
  const events: Event[] = [
    {
      id: "1",
      name: "Event 1",
      date: "2022-01-01",
      time: "08:00",
      location: "Location 1",
      ticketsSold: 100,
      slug: "event-1",
      default: true,
      availableTickets: 0,
      ticketPrice: 0,
      mealProvided: false,
      description: "",
      status: 1,
    },
    {
      id: "2",
      name: "Event 2",
      date: "2022-01-02",
      time: "09:00",
      location: "Location 2",
      ticketsSold: 40,
      slug: "event-2",
      default: false,
      availableTickets: 0,
      ticketPrice: 0,
      mealProvided: false,
      description: "",
      status: 2,
    },
    {
      id: "3",
      name: "Event 3",
      date: "2022-01-03",
      time: "10:00",
      location: "Location 3",
      ticketsSold: 70,
      slug: "event-3",
      default: false,
      availableTickets: 0,
      ticketPrice: 0,
      mealProvided: false,
      description: "",
      status: 0,
    },
    {
      id: "4",
      name: "Event 4",
      date: "2022-01-04",
      time: "11:00",
      location: "Location 4",
      ticketsSold: 20,
      slug: "event-4",
      default: false,
      availableTickets: 0,
      ticketPrice: 0,
      mealProvided: false,
      description: "",
      status: 3,
    },
  ];
  return (
    <div>
      <Breadcrumb className="hidden md:flex ml-6 -mt-12 z-40 absolute mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard" prefetch={false}>
                Dashboard
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#" prefetch={false}>
                Events
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full">
        <div className="pb-6">
          <h2 className="text-2xl font-bold tracking-tight">Events</h2>
          <p className="text-muted-foreground">Here&apos;s the events list</p>
          <div className="mt-6 flex justify-end">
            <Link href="/dashboard/events/new">
              <Button color="primary" size="lg">
                Create Event
              </Button>
            </Link>
          </div>
        </div>
        <EventTable data={events} columns={eventColumns} />
      </main>
    </div>
  );
}
