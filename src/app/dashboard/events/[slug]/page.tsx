import EventDetails from "@/components/EventDetails";
import ParticipantDetails from "@/components/ParticipantDetails";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Participant } from "@/components/ui/participant-columns";
import { Event } from "@/types";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function EventDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const dummyData: Participant[] = [
    {
      id: "b596e80d-4687-494d-9760-c9de5ff22fc2",
      name: "Chris Johnson",
      email: "katie.jones@outlook.com",
      mobile: "0345678993",
      mealType: "Non-Veg",
      refreshments: 0,
      lunch: 1,
      attendance: 0,
      arrival: "",
    },
    {
      id: "a6c7e2a4-bc75-4f0a-92a2-b4edba11709b",
      name: "John Miller",
      email: "laura.martinez@gmail.com",
      mobile: "0345678901",
      mealType: "Veg",
      refreshments: 1,
      lunch: 1,
      attendance: 0,
      arrival: "",
    },
    {
      id: "01ebc5ff-0856-4f27-bbe2-478482283f86",
      name: "Anna Williams",
      email: "sam.jones@example.com",
      mobile: "0345678902",
      mealType: "Non-Veg",
      refreshments: 1,
      lunch: 0,
      attendance: 0,
      arrival: "",
    },
    {
      id: "aaa88301-3d88-4fc7-a731-affc145d13bc",
      name: "Sam Davis",
      email: "emily.miller@outlook.com",
      mobile: "0345678903",
      mealType: "Fish",
      refreshments: 1,
      lunch: 0,
      attendance: 0,
      arrival: "",
    },
    {
      id: "654e9c97-6b8b-4629-811d-01d4e8e04e8d",
      name: "Alex Brown",
      email: "katie.hernandez@example.com",
      mobile: "0345678904",
      mealType: "Veg",
      refreshments: 1,
      lunch: 0,
      attendance: 0,
      arrival: "",
    },
    {
      id: "1ff1ad5a-e5dd-469d-9241-be18974ed04e",
      name: "Jane Williams",
      email: "katie.davis@outlook.com",
      mobile: "0345678905",
      mealType: "Fish",
      refreshments: 1,
      lunch: 0,
      attendance: 0,
      arrival: "",
    },
    {
      id: "1d48577c-82f7-4e72-b94b-c3b67dcb4c17",
      name: "Sam Johnson",
      email: "emily.martinez@outlook.com",
      mobile: "0345678906",
      mealType: "Veg",
      refreshments: 1,
      lunch: 1,
      attendance: 0,
      arrival: "",
    },
    {
      id: "bc7d29e5-1c2e-407b-8246-6663bec49105",
      name: "John Martinez",
      email: "sam.martinez@gmail.com",
      mobile: "0345678907",
      mealType: "Fish",
      refreshments: 0,
      lunch: 0,
      attendance: 1,
      arrival: "16:54",
    },
    {
      id: "df919916-99bc-418f-9de8-7973878ae09b",
      name: "Jane Martinez",
      email: "sam.jones@gmail.com",
      mobile: "0345678908",
      mealType: "Fish",
      refreshments: 1,
      lunch: 1,
      attendance: 0,
      arrival: "",
    },
    {
      id: "eea05d49-5be3-4285-820e-aa031daa224a",
      name: "Alex Martinez",
      email: "laura.garcia@outlook.com",
      mobile: "0345678909",
      mealType: "Fish",
      refreshments: 0,
      lunch: 0,
      attendance: 0,
      arrival: "",
    },
    {
      id: "3e48b296-89be-4d47-8156-7377aee6362d",
      name: "Sam Smith",
      email: "anna.williams@yahoo.com",
      mobile: "0345678910",
      mealType: "Fish",
      refreshments: 0,
      lunch: 1,
      attendance: 1,
      arrival: "12:53",
    },
    {
      id: "8d99cd3b-2bfb-4c61-af88-1d0b01eb3e4f",
      name: "John Garcia",
      email: "john.johnson@example.com",
      mobile: "0345678911",
      mealType: "Non-Veg",
      refreshments: 0,
      lunch: 1,
      attendance: 0,
      arrival: "",
    },
    {
      id: "f89f98bd-f974-417c-bf0b-3b58c6ab9c96",
      name: "Katie Williams",
      email: "emily.jones@example.com",
      mobile: "0345678912",
      mealType: "Fish",
      refreshments: 0,
      lunch: 0,
      attendance: 1,
      arrival: "16:31",
    },
    {
      id: "18791716-9734-4a03-bade-0019cb2691ba",
      name: "Jane Jones",
      email: "jane.johnson@yahoo.com",
      mobile: "0345678913",
      mealType: "Fish",
      refreshments: 1,
      lunch: 0,
      attendance: 0,
      arrival: "",
    },
    {
      id: "e9e62a89-ef69-4c3c-b0aa-a7d4f9be522a",
      name: "Mike Garcia",
      email: "sam.miller@gmail.com",
      mobile: "0345678914",
      mealType: "Veg",
      refreshments: 1,
      lunch: 0,
      attendance: 1,
      arrival: "05:54",
    },
    {
      id: "a900f878-f71d-4115-b42d-e2f9bc87fad4",
      name: "Chris Martinez",
      email: "chris.johnson@outlook.com",
      mobile: "0345678915",
      mealType: "Non-Veg",
      refreshments: 0,
      lunch: 1,
      attendance: 0,
      arrival: "",
    },
    {
      id: "55354516-9d84-44f9-a30e-01aacb0a890a",
      name: "Alex Garcia",
      email: "katie.smith@example.com",
      mobile: "0345678916",
      mealType: "Non-Veg",
      refreshments: 1,
      lunch: 1,
      attendance: 1,
      arrival: "06:49",
    },
    {
      id: "e6f65557-c2d1-499e-a7b5-e8fa55156efe",
      name: "Katie Hernandez",
      email: "emily.jones@gmail.com",
      mobile: "0345678917",
      mealType: "Fish",
      refreshments: 0,
      lunch: 1,
      attendance: 1,
      arrival: "14:20",
    },
    {
      id: "a19242a2-adc3-4c98-b784-7c0d5dbf70b3",
      name: "Anna Hernandez",
      email: "chris.williams@gmail.com",
      mobile: "0345678918",
      mealType: "Fish",
      refreshments: 1,
      lunch: 1,
      attendance: 1,
      arrival: "16:03",
    },
    {
      id: "fc8b8595-27dd-4db3-8726-b842be697f5e",
      name: "Katie Hernandez",
      email: "alex.jones@gmail.com",
      mobile: "0345678919",
      mealType: "Veg",
      refreshments: 0,
      lunch: 1,
      attendance: 1,
      arrival: "20:01",
    },
    {
      id: "95a32280-caf4-416d-9f70-a8f4287edf32",
      name: "John Miller",
      email: "alex.miller@example.com",
      mobile: "0345678920",
      mealType: "Veg",
      refreshments: 0,
      lunch: 1,
      attendance: 1,
      arrival: "22:13",
    },
    {
      id: "bcf17e59-84bb-41ed-be45-790d0b66373f",
      name: "Emily Garcia",
      email: "john.jones@gmail.com",
      mobile: "0345678921",
      mealType: "Fish",
      refreshments: 0,
      lunch: 0,
      attendance: 1,
      arrival: "05:51",
    },
    {
      id: "dddf3e52-33d9-476f-a248-458480ddcf44",
      name: "Mike Miller",
      email: "sam.johnson@yahoo.com",
      mobile: "0345678922",
      mealType: "Fish",
      refreshments: 0,
      lunch: 0,
      attendance: 1,
      arrival: "20:58",
    },
    {
      id: "b7cfc589-b792-4ff6-832a-12eb93b1029f",
      name: "Sam Hernandez",
      email: "chris.jones@example.com",
      mobile: "0345678923",
      mealType: "Veg",
      refreshments: 1,
      lunch: 1,
      attendance: 0,
      arrival: "",
    },
    {
      id: "89366d60-256a-4df0-bb43-62c0a61c26e9",
      name: "Chris Garcia",
      email: "laura.davis@example.com",
      mobile: "0345678924",
      mealType: "Fish",
      refreshments: 0,
      lunch: 0,
      attendance: 0,
      arrival: "",
    },
  ];

  const dummyEvent: Event = {
    id: "1",
    name: "Sample Event",
    image: "/MASTHANI_NIGHT.jpeg",
    date: "2024-07-17",
    time: "10:00 AM",
    location: "NIBM Auditorium",
    availableTickets: 100,
    ticketsSold: 50,
    slug: "sample-event",
    mealProvided: true,
    ticketPrice: 20,
    description: "This is a sample event description.",
    status: 1,
  };
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
              <Link href="/dashboard/events" prefetch={false}>
                Events
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/dashboard/events/${params.slug}`} prefetch={false}>
                {params.slug}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full px-7">
        <div className="pb-6 mt-2">
          <h2 className="text-2xl font-bold tracking-tight">{params.slug}</h2>
          <p className="text-muted-foreground">
            Here&apos;s the details for {params.slug}
          </p>

          <div className="mt-6 flex justify-end">
            <Link href={`/dashboard/events/${params.slug}/edit`}>
              <Button color="primary" size="lg">
              <Pencil2Icon className="h-6 w-6 mr-2" />
                Edit 
              </Button>
            </Link>
          </div>
        </div>
        <EventDetails event={dummyEvent} />

        <ParticipantDetails data={dummyData} />
      </main>
    </div>
  );
}
