// app/layout.tsx
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import FooterWrapper from "@/global-component/footer-wrap";
import TopNavBar from "@/global-component/navigation";
import FooterP from "./mad-x/component/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/appikorn-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-overallbg min-h-screen overflow-x-hidden mx-auto">
        <Providers>
          <div className="flex flex-col px-0">
            <main className="relative w-full flex-grow">
              
              {/* Fixed Navbar Overlapping */}
              <div className="absolute top-0 left-0 w-full z-50">
                <TopNavBar />
              </div>

              {/* Page Content Behind Navbar */}
              <div className="relative">
                {children}
              </div>
            </main>

            <footer>
              <FooterWrapper />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
