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
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

async function AccountOptions() {
  const supabase = createClient();

  const { data: user, error: userError } = await supabase
    .from("user_profile ")
    .select("*")
    .single();

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
            <AvatarImage src={user.avatar_url} alt="User profile picture" />
            <AvatarFallback>
              {user.full_name
                .split(" ")
                .map((name: string) => name[0])
                .join("")}
            </AvatarFallback>
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
