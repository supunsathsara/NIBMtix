"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Event } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal
} from "lucide-react";
import Link from "next/link";

/*
export type Event = {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  ticketsSold: number;
  default: boolean;
};
*/

export const eventColumns: ColumnDef<Event>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "Event ID",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <span className="flex items-center gap-2">
          <span>{row.original.name}</span>
          {row.original.default && (
            <Badge
              variant="outline"
              className="text-green-500 border-green-500"
            >
              Default
            </Badge>
          )}
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "ticketsSold",
    header: "Tickets Sold",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const event = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(
                  `https://example.com/buy/${event.slug}`
                )
              }
            >
              Copy Event Link
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link href={`/dashboard/events/${event.slug}`}>
            <DropdownMenuItem>
              View Details
            </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Mark as default</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
