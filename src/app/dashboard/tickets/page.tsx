import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

import { TicketTable } from "@/components/ui/ticket-table";
import { TicketColumns } from "@/components/ui/ticket-columns";
import { createClient } from "@/utils/supabase/server";

export default async function TicketsPage() {

  const supabase = createClient();
  const { data, error } = await supabase.from("view_tickets_for_default_event").select('id,name,email,mobile,attendance,payment_method,status,event_name');

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching tickets");
  }


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
            Here&apos;s the ticket list for {data[0].event_name}
          </p>
        </div>
        <TicketTable columns={TicketColumns} data={data} />
      </main>
    </div>
  );
}
