// app/layout.tsx

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import Footer from "@/global-component/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
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
      <body className="bg-overallbg max-w-[1440px] min-h-screen overflow-x-hidden mx-auto">
        <Providers>
          <div className="flex flex-col px-10 md:px-0">
            <main className="w-full flex-grow">{children}</main>
            <footer className="">
              {/* Footer content here */}
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
