import {
  CalendarIcon,
  DollarSignIcon,
  LayoutDashboardIcon,
  MenuIcon,
  SettingsIcon,
  TicketIcon,
  UsersIcon,
} from "@/components/ui/Icons";
import { DashboardNavItem } from "@/types";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
  { name: "Login", link: "/login" },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const dashboardNavItems: DashboardNavItem[] = [
  {
    href: "#",
    icon: LayoutDashboardIcon,
    srText: "Dashboard",
    name: "Dashboard",
  },
  {
    href: "#",
    icon: CalendarIcon,
    srText: "Events",
    name: "Events",
  },
  {
    href: "#",
    icon: TicketIcon,
    srText: "Tickets",
    name: "Tickets",
  },
  {
    href: "#",
    icon: UsersIcon,
    srText: "Customers",
    name: "Customers",
  },
  {
    href: "#",
    icon: SettingsIcon,
    srText: "Settings",
    name: "Settings",
  },
];
