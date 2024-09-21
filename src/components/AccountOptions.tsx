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
import { EventListCmb } from "./EventListCmb";

async function AccountOptions() {
  const supabase = createClient();

  const [userResult, eventResult] = await Promise.all([
    supabase.from("user_profile").select("*").single(),
    supabase
      .from("events_view")
      .select("id,name,slug,default")
      .returns<Event[]>(),
  ]);

  const { data: user, error: userError } = userResult;
  const { data: eventData, error } = eventResult;

  return (
    <div className="ml-auto flex items-center gap-10">
      <EventListCmb eventList={eventData} />
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
