import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

import { Ticket } from "@/types";
import { TicketTable } from "@/components/ui/ticket-table";
import { TicketColumns } from "@/components/ui/ticket-columns";

export default async function TicketsPage() {
  const data: Ticket[] = [
    {
      id: "3f3a6fac-b252-418e-a7e7-37c244f16862",
      name: "John Brown",
      email: "chris.martinez@gmail.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 1,
      status: 1,
    }, {
      id: "deda391c-4c5c-4067-93db-78fec14cede9",
      name: "Chris Jones",
      email: "john.miller@example.com",
      attendance: 1,
      arrival: "18:17",
      paymentMethod: 1,
      status: 1,
    }, {
      id: "f705b6b4-c9a2-4675-8383-a5143679954c",
      name: "Laura Brown",
      email: "jane.smith@example.com",
      attendance: 1,
      arrival: "13:20",
      paymentMethod: 2,
      status: 1,
    }, {
      id: "9a54c9ae-3412-46e4-9686-8364d3834d7b",
      name: "Chris Williams",
      email: "anna.hernandez@example.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 2,
      status: 0,
    }, {
      id: "8fb3078d-d46f-4d97-95b3-f00f8a342dad",
      name: "Anna Johnson",
      email: "emily.garcia@yahoo.com",
      attendance: 1,
      arrival: "05:38",
      paymentMethod: 2,
      status: 2,
    }, {
      id: "70bf22a4-a3c6-4ecf-9d7e-aca72914cd51",
      name: "Katie Johnson",
      email: "alex.jones@yahoo.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 2,
      status: 0,
    }, {
      id: "3735b7ee-e51e-452a-9cfc-a83e51fa0938",
      name: "Mike Garcia",
      email: "mike.jones@gmail.com",
      attendance: 1,
      arrival: "17:47",
      paymentMethod: 2,
      status: 1,
    }, {
      id: "a2adb4a8-2a99-404e-b6e8-91e934e66a91",
      name: "Emily Smith",
      email: "alex.martinez@example.com",
      attendance: 1,
      arrival: "19:46",
      paymentMethod: 1,
      status: 1,
    }, {
      id: "e50caaf9-14f7-4e73-93d7-203a535b08f9",
      name: "Laura Jones",
      email: "katie.garcia@yahoo.com",
      attendance: 1,
      arrival: "00:24",
      paymentMethod: 1,
      status: 0,
    }, {
      id: "2c46c5c5-2da4-4de2-badc-464dc6162bf3",
      name: "John Smith",
      email: "john.miller@gmail.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 1,
      status: 1,
    }, {
      id: "c2fc09d9-7e09-4614-bf5f-1b26ab5bddc6",
      name: "John Garcia",
      email: "chris.brown@outlook.com",
      attendance: 1,
      arrival: "14:21",
      paymentMethod: 2,
      status: 1,
    }, {
      id: "8a43481b-31ad-4304-88b5-579cfd58866e",
      name: "Mike Smith",
      email: "john.hernandez@example.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 2,
      status: 2,
    }, {
      id: "c1e487ca-f574-4a3b-bcf9-0dbe786792fa",
      name: "Sam Jones",
      email: "mike.jones@outlook.com",
      attendance: 1,
      arrival: "13:38",
      paymentMethod: 2,
      status: 2,
    }, {
      id: "6c23cef3-3d60-49aa-8283-bd0ba1bec3be",
      name: "John Williams",
      email: "emily.williams@outlook.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 1,
      status: 2,
    }, {
      id: "7bccb97b-c940-45eb-8015-7a6939ce8342",
      name: "Alex Hernandez",
      email: "alex.martinez@yahoo.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 1,
      status: 1,
    }, {
      id: "4a356fe9-53a7-4de7-b429-74d842e1c686",
      name: "Chris Smith",
      email: "katie.martinez@outlook.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 1,
      status: 1,
    }, {
      id: "48c3680f-cca6-47be-869e-6700cc007376",
      name: "John Garcia",
      email: "alex.davis@outlook.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 2,
      status: 1,
    }, {
      id: "6fa87b42-798d-4dd6-ae60-fa24e329a801",
      name: "Emily Martinez",
      email: "mike.smith@example.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 2,
      status: 2,
    }, {
      id: "b9feb3ea-3742-4a5e-b57a-4c0ba484adc9",
      name: "Alex Johnson",
      email: "alex.hernandez@yahoo.com",
      attendance: 1,
      arrival: "20:18",
      paymentMethod: 1,
      status: 1,
    }, {
      id: "36c1fa58-cea9-435f-a4e8-e0f01b6facaf",
      name: "Anna Brown",
      email: "mike.hernandez@example.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 1,
      status: 1,
    }, {
      id: "3c11df26-7a5c-48b2-a8bf-e35d4da495ae",
      name: "Alex Martinez",
      email: "jane.jones@yahoo.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 2,
      status: 1,
    }, {
      id: "c5d26e6b-27c2-4d5c-9993-75d662174c49",
      name: "John Miller",
      email: "emily.martinez@outlook.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 1,
      status: 2,
    }, {
      id: "8159c2f6-8608-4f45-a0c9-d81587d060ad",
      name: "Sam Johnson",
      email: "laura.miller@outlook.com",
      attendance: 0,
      arrival: "",
      paymentMethod: 2,
      status: 1,
    }, {
      id: "4986b1e8-4c62-467c-996f-65a4c24c4eca",
      name: "Jane Garcia",
      email: "anna.martinez@outlook.com",
      attendance: 1,
      arrival: "09:49",
      paymentMethod: 2,
      status: 1,
    }, {
      id: "3a45646d-093e-4781-9af6-6817e5256683",
      name: "Mike Smith",
      email: "alex.miller@outlook.com",
      attendance: 1,
      arrival: "14:05",
      paymentMethod: 2,
      status: 0,
    }
  ]

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
                Tickets
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full">
        <div className="pb-6">
          <h2 className="text-2xl font-bold tracking-tight">Tickets</h2>
          <p className="text-muted-foreground">
            {/* TODO: UPDATE EVENT NAME */}
            Here&apos;s the ticket list for EVENT NAME
          </p>
        </div>
        <TicketTable columns={TicketColumns} data={data} />
      </main>
    </div>
  );
}
