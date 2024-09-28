import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/provider";
import { Toaster } from "@/components/ui/toaster";

const APP_NAME = "NIBMTix";
const APP_DEFAULT_TITLE = "NIBMTix - Your Event, Your Ticket, Your Way ✨";
const APP_TITLE_TEMPLATE = "%s - NIBMTix";
const APP_DESCRIPTION =
  "Revolutionizing event ticketing at NIBM with convenience, efficiency, and innovation. Buy tickets, manage events, and experience seamless digital ticketing with NIBMTix.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#180d3b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
