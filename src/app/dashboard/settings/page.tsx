import APIManage from "@/components/APIManage";
import DeleteAccount from "@/components/DeleteAccount";
import PayoutHistory from "@/components/PayoutHistory";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import UpdateBankAccount from "@/components/UpdateBankAccount";
import UpdateGeneralInfo from "@/components/UpdateGeneralInfo";
import UpdateSecurityInfo from "@/components/UpdateSecurityInfo";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function SettingsPage() {
  const supabase = createClient();
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getUser();
  if (sessionError) {
    console.error(sessionError);
    throw new Error("An error occurred while fetching data");
  }
  const { data, error } = await supabase
    .from("profiles")
    .select(
      `
      id,
      full_name,
      mobile,
      avatar_url,
      bank:bank_accounts(account_name ,bank,account_number,branch),
      keys:api_keys(key)
      `
    )
    .eq("id", sessionData.user.id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching data");
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
                Settings
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 w-full">
        <div className="pb-6">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        </div>

        <div className="space-y-6 mx-1 md:mx-14 pb-12">
          <UpdateGeneralInfo
            data={{ ...data, email: sessionData.user.email }}
          />
          <UpdateSecurityInfo data={{ email: sessionData.user.email }} />
          <APIManage data={data.keys} />
          <Separator className="my-4" />
          <UpdateBankAccount profile={data} />
          <PayoutHistory />
          <Separator className="my-8" />
          <DeleteAccount />
        </div>
      </main>
    </div>
  );
}
