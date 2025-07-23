// app/layout.tsx

import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";

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
<<<<<<< HEAD
      <body className="bg-white max-w-[1440px] min-h-screen flex items-center justify-center overflow-x-hidden mx-auto">
  <Providers>{children}</Providers>
</body>

=======
      <body>
        <Providers>
          <div className="">
            <main> {children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              {/* Footer content here */}
            </footer>
          </div>
        </Providers>
      </body>
>>>>>>> f0588877d697509c3a20e08d56aa80e136961944
    </html>
  );
}
