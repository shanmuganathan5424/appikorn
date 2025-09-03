// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 text-center md:text-left items-center md:items-start">
        
        {/* Left Column - Logo, Description & Email */}
        <div className="md:col-span-2 space-y-6 flex flex-col items-center md:items-start">
          <a href="/" aria-label="Appikorn Home">
            <img
              src="/footer-icons/appikorn-footer-logo.svg"
              alt="Appikorn Logo"
              width={160}
              height={80}
              className="object-contain"
              loading="lazy"
            />
          </a>

          <p className="text-sm md:text-base leading-relaxed max-w-md">
            Join us on the journey to redefine possibilities, where technology
            seamlessly enhances human potential. Experience the power of Appikorn
            Industry 4.0 solutions and unlock the door to unprecedented growth,
            efficiency, and sustainability.
          </p>

          <form
            className="flex w-full max-w-md items-center gap-3"
            action="#"
            method="post"
            aria-label="Subscribe for updates"
          >
            <label htmlFor="email" className="sr-only">
              Enter your email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 h-[48px] rounded-full bg-gray-800 pl-5 text-gray-200 placeholder-gray-500 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition rounded-full text-white font-semibold h-[48px] px-6 text-sm flex items-center justify-center"
            >
              <span className="hidden md:inline">Contact Us</span>
              <img
                src="/send.png"
                alt="Send Email"
                className="md:hidden w-[28px] h-[28px]"
                loading="lazy"
              />
            </button>
          </form>
        </div>

{/* Middle Navigation Sections */}
<nav
  className="md:col-span-2 grid grid-cols-2 gap-10 justify-center md:justify-start"
  aria-label="Footer navigation"
>
  {/* Services */}
  <div className="flex justify-center md:justify-start">
    <div className="text-left">
      <h3 className="mb-3 font-semibold text-gray-500">Services</h3>
      <ul className="space-y-1 text-sm">
        {[
          { name: "Cloud Service", href: "/services/cloud" },
          { name: "UI/UX Design", href: "/services/ui-ux" },
          { name: "Product Design", href: "/services/product-design" },
          { name: "QA & Testing", href: "/services/qa-testing" },
          { name: "Web Development", href: "/services/web-dev" },
          { name: "VR/AR Technologies", href: "/services/vr-ar" },
          { name: "iOS/Android Application", href: "/services/mobile-apps" },
          { name: "Automations", href: "/services/automations" },
        ].map((service) => (
          <li key={service.name}>
            <a
              href={service.href}
              className="hover:text-white transition block"
            >
              {service.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Company */}
  <div className="flex justify-center md:justify-start">
    <div className="text-left">
      <h3 className="mb-3 font-semibold text-gray-500">Company</h3>
      <ul className="space-y-1 text-sm">
        {[
          { name: "About Us", href: "/about" },
          { name: "Contact Us", href: "/contact" },
          { name: "Help Center", href: "/help" },
        ].map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="hover:text-white transition block"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>


        {/* Right Column - Contact & Social */}
        <address className="md:col-span-1 space-y-6 flex flex-col items-center md:items-start not-italic">
          <a
            href="mailto:hi@cursor.com"
            className="text-white font-medium hover:text-purple-400 transition"
          >
            hi@cursor.com
          </a>
          <div className="flex gap-5">
            {[
              { src: "/mad-x/social media/x.svg", alt: "Twitter", link: "https://twitter.com" },
              { src: "/mad-x/social media/git.svg", alt: "GitHub", link: "https://github.com" },
              { src: "/mad-x/social media/r.svg", alt: "Reddit", link: "https://reddit.com" },
              { src: "/mad-x/social media/yt.svg", alt: "YouTube", link: "https://youtube.com" },
            ].map((icon) => (
              <a
                key={icon.alt}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
              >
                <img
                  src={icon.src}
                  alt=""
                  className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </address>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 text-sm text-gray-500 gap-4 text-center md:text-left">
          <p>
            © 2025 Made by{" "}
            <span className="text-white font-medium">Appikorn</span>
          </p>
          <p className="md:text-right">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
