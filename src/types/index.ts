import { LayoutDashboardIcon } from "@/components/ui/Icons";

export interface DashboardNavItem {
  href: string;
  icon: typeof LayoutDashboardIcon; // use 'typeof' here for the icon type
  srText: string;
  name: string;
}
