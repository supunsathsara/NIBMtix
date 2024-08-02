import AccountOptions from "@/components/AccountOptions";
import MobileNav from "@/components/MobileNav";
import SheetNav from "@/components/SheetNav";

export default function TicketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full">
      <MobileNav active="Tickets" />

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 w-full">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <SheetNav active="Tickets" />

          <AccountOptions />
        </header>
        {children}
      </div>
    </div>
  );
}
