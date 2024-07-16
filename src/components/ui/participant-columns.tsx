"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Check,
  CheckCheckIcon,
  CheckIcon,
  CircleAlert,
  CircleCheckBig,
  ClockIcon,
  MoreHorizontal,
} from "lucide-react";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Participant = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  mealType: string;
  refreshments: number;
  lunch: number;
  attendance: number;
  arrival: string;
};




//toggle functions
export const toggleAttendance = (id: String) => {
  console.log("toggleAttendance", id);  

  window.location.reload()
};

export const toggleRefreshments = (id: String) => {
  console.log("toggleRefreshments", id);
};

export const toggleLunch = (id: String) => {
  console.log("toggleLunch", id);
};

export const participantColumns: ColumnDef<Participant>[] = [
  {
    id: "id",
    accessorKey: "id",
    header: "Participant ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "mealType",
    header: "Meal Type",
  },
  {
    accessorKey: "refreshments",
    header: "Refreshments",
    cell: ({ row }) => {
      //row.original.lunch
      return row.original.refreshments === 1 ? (
        <span className="text-green-600 flex gap-1">
          collected
          <CircleCheckBig className="h-4 w-4 my-auto" />
        </span>
      ) : (
        <span className="text-yellow-600 flex gap-1">
          pending
          <CircleAlert className="h-4 w-4 my-auto" />
        </span>
      );
    },
  },
  {
    accessorKey: "lunch",
    header: "Lunch",
    cell: ({ row }) => {
      //row.original.lunch
      return row.original.lunch === 1 ? (
        <span className="text-green-600 flex gap-1">
          collected
          <CircleCheckBig className="h-4 w-4 my-auto" />
        </span>
      ) : (
        <span className="text-yellow-600 flex gap-1">
          pending
          <CircleAlert className="h-4 w-4 my-auto" />
        </span>
      );
    },
  },
  {
    accessorKey: "attendance",
    header: "Attendance",
    cell: ({ row }) => {
      //row.original.lunch
      return row.original.attendance === 1 ? (
        <span className="text-green-600 flex gap-1">
          arrived
          <CheckCheckIcon className="h-4 w-4 my-auto" />
        </span>
      ) : (
        <span className="text-yellow-600 flex gap-1">
          pending
          <CircleAlert className="h-4 w-4 my-auto" />
        </span>
      );
    },
  },
  {
    accessorKey: "arrival",
    header: "Arrival",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const participant = row.original;

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
              onClick={() => navigator.clipboard.writeText(participant.id)}
            >
              Copy participant ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toggleAttendance(participant.id)}>
              Mark as {participant.attendance === 1 ? "pending" : "arrived"}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => toggleRefreshments(participant.id)}
            >
              Mark as refr...{" "}
              {participant.refreshments === 1 ? "pending" : "collected"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toggleLunch(participant.id)}>
              Mark as lunch {participant.lunch === 1 ? "pending" : "collected"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
