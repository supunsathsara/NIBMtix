import { signOut } from "@/actions/Auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function AccountOptions() {
  return (
    <div className="ml-auto flex items-center gap-2">
      <Input
        type="search"
        placeholder="Search events..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src="https://github.com/supunsathsara.png"
              alt="@supunsathsara"
            />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/dashboard/settings" prefetch={false}>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>
          <Link href="/support" prefetch={false}>
          <DropdownMenuItem>Support</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <form action={signOut}>
          <DropdownMenuItem>
            <button>Logout</button>
          </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default AccountOptions;
