import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinksProps = {
  id: string; 
  title: string;
  links: FooterLink[];
};

// components/Footer.tsx
export default function FooterP() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-2 md:py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-24 justify-center items-start">
        
        {/* Left Column - Logo, Description & Email */}
        <div className="flex flex-col items-center md:items-start space-y-6 md:col-span-2">
          <img
            src="/footer-icons/appikorn-footer-logo.svg"
            alt="Appikorn company logo"
            width={160}
            height={80}
            className="object-contain"
          />

          <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-[16px] max-w-lg text-center md:text-left">
            Join us on the journey to redefine possibilities, where technology seamlessly enhances human potential. Experience the power of Appikorn Industry 4.0 solutions and unlock the door to unprecedented growth, efficiency, and sustainability.
          </p>

          <form className="flex w-full max-w-md items-center gap-3" aria-label="Subscribe to our newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-[48px] rounded-full bg-gray-800 pl-5 text-gray-200 placeholder-gray-500 text-sm outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition rounded-full text-white font-semibold h-[48px] px-6 text-sm flex items-center justify-center"
            >
              <span className="hidden md:inline">Contact Us</span>
              <img src="/send.png" alt="Send email" className="md:hidden w-[28px] h-[28px]" />
            </button>
          </form>
        </div>

        {/* Middle Navigation Sections */}
        <nav
  className="grid grid-cols-2 sm:grid-cols-4 gap-8 col-span-1 md:col-span-3"
  aria-label="Footer navigation"
>
  {/* Product */}
  <section className="flex flex-col items-center" aria-labelledby="footer-product">
    <FooterLinks
      id="footer-product"
      title="Product"
      links={[
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "Features", href: "/features" },
        { label: "Enterprise", href: "/enterprise" },
        { label: "Bugbot", href: "/bugbot" },
        { label: "Downloads", href: "/downloads" },
        { label: "Students", href: "/students" },
      ]}
    />
  </section>

  {/* Resources */}
  <section className="flex flex-col items-center" aria-labelledby="footer-resources">
    <FooterLinks
      id="footer-resources"
      title="Resources"
      links={[
        { label: "Docs", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Forum", href: "/forum" },
        { label: "Changelog", href: "/changelog" },
      ]}
    />
  </section>

  {/* Company */}
  <section className="flex flex-col items-center" aria-labelledby="footer-company">
    <FooterLinks
      id="footer-company"
      title="Company"
      links={[
        { label: "Anysphere", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Community", href: "/community" },
        { label: "Customers", href: "/customers" },
      ]}
    />
  </section>

  {/* Legal */}
  <section className="flex flex-col items-center" aria-labelledby="footer-legal">
    <FooterLinks
      id="footer-legal"
      title="Legal"
      links={[
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Privacy", href: "/privacy" },
      ]}
    />
  </section>
</nav>


        {/* Right Column - Contact & Social */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <p className="text-white font-medium">hi@cursor.com</p>
          <div className="flex gap-5">
            {[
              { src: "/mad-x/social media/x.svg", alt: "Twitter", href: "https://twitter.com" },
              { src: "/mad-x/social media/git.svg", alt: "GitHub", href: "https://github.com" },
              { src: "/mad-x/social media/r.svg", alt: "Reddit", href: "https://reddit.com" },
              { src: "/mad-x/social media/yt.svg", alt: "YouTube", href: "https://youtube.com" },
            ].map((icon) => (
              <Link key={icon.alt} href={icon.href} aria-label={icon.alt}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © 2025 Made by <span className="text-white">Appikorn</span>
          </p>
          <p className="mt-3 md:mt-0">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* Reusable Footer Links Component */
export function FooterLinks({ id, title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 id={id} className="mb-2 font-semibold text-gray-500">
        {title}
      </h3>
      <ul className="space-y-1 text-left">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-white transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}