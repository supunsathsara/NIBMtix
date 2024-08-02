import { LayoutDashboardIcon } from "@/components/ui/Icons";

export interface DashboardNavItem {
  href: string;
  icon: typeof LayoutDashboardIcon; // use 'typeof' here for the icon type
  srText: string;
  name: string;
}

export type Event = {
  id: string;
  image?: string;
  name: string;
  date: string;
  time: string;
  location: string;
  availableTickets: number;
  ticketsSold: number;
  ticketPrice: number;
  slug: string;
  mealProvided: boolean;
  description: string;
  default?: boolean;
  status: 0 | 1 | 2 | 3; // 0 = Pending, 1 = Active, 2 = Rejected, 3 = Archived
};

export type Ticket = {
  id: string;
  name: string;
  email: string;
  attendance: number; // 0 = not-attended, 1 = attended
  arrival: string;
  paymentMethod: 1 | 2; // 1 = Cash, 2 = Card
  status: 0 | 1 | 2 | 3; // 0 = not-paid, 1 = paid, 2 = refunded
};
