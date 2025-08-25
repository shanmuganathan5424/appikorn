// app/layout.tsx
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import FooterWrapper from "@/global-component/footer-wrap";
import TopNavBar from "@/global-component/navigation";

// ✅ SEO Metadata (applies globally unless overridden in a page)
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // more SEO-friendly than "-"
  },
  description: siteConfig.description,
  keywords: [
    "Appikorn",
    "Software Development",
    "Embedded Design",
    "UI/UX Design",
    "Automation",
    "Product Development",
    "Tech Support",
  ],
  authors: [{ name: "Appikorn Team", url: "https://www.appikorn.com" }],
  creator: "Appikorn",
  publisher: "Appikorn",
  icons: {
    icon: "/appikorn-logo.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.appikorn.com",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/appikorn-preview.png", // add preview image for social sharing
        width: 1200,
        height: 630,
        alt: "Appikorn - Software Solutions & Embedded Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@appikorn", // replace if you have a handle
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/appikorn-preview.png"],
  },
  metadataBase: new URL("https://www.appikorn.com"), // canonical URL
  alternates: {
    canonical: "https://www.appikorn.com",
  },
};

// ✅ Viewport & Theme
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // prevents zoom for better UX on mobile
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className="bg-overallbg min-h-screen overflow-x-hidden mx-auto antialiased text-gray-900"
      >
        <Providers>
          <div className="flex flex-col px-0">
            <header className="absolute top-0 left-0 w-full z-50">
              {/* ✅ Semantic header for SEO & accessibility */}
              <TopNavBar />
            </header>

            <main
              className="relative w-full flex-grow"
              role="main"
              aria-label="Main content"
            >
              {children}
            </main>

            <footer role="contentinfo">
              <FooterWrapper />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
