import { LayoutDashboardIcon } from "@/components/ui/Icons";

export interface DashboardNavItem {
  href: string;
  icon: typeof LayoutDashboardIcon; // use 'typeof' here for the icon type
  srText: string;
  name: string;
}

export type Event = {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  ticketsSold: number;
  slug: string;
  default: boolean;
};
