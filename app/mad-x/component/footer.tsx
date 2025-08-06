import ThemeToggle from "./theme";

// components/Footer.tsx
export default function FooterP() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
        {/* Left Column - Email & Social Icons */}
        <div className="space-y-4">
          <p className="text-white">hi@cursor.com</p>
          <div className="flex items-center gap-4">
            {/* Dummy icons – replace with your SVGs or img tags */}
            <div ><img src="/mad-x/social media/x.svg" alt="social media" className="w-[18px] h-[18px]"/>
            </div>
            <div ><img src="/mad-x/social media/git.svg" alt="social media" className="w-[18px] h-[18px]"/></div>
            <div ><img src="/mad-x/social media/r.svg" alt="social media" className="w-[18px] h-[18px]"/></div>
            <div ><img src="/mad-x/social media/yt.svg" alt="social media" className="w-[18px] h-[18px]"/></div>
          </div>
        </div>

        {/* Middle Navigation Sections */}
        <div className="grid grid-cols-4 gap-8 col-span-3">
          {/* Product */}
          <div>
            <h4 className="mb-2 font-semibold text-gray-500">Product</h4>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Pricing</li>
              <li>Features</li>
              <li>Enterprise</li>
              <li>Bugbot</li>
              <li>Downloads</li>
              <li>Students</li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="mb-2 font-semibold text-gray-500">Resources</h4>
            <ul className="space-y-1">
              <li>Docs</li>
              <li>Blog</li>
              <li>Forum</li>
              <li>Changelog</li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="mb-2 font-semibold text-gray-500">Company</h4>
            <ul className="space-y-1">
              <li>Anysphere</li>
              <li>Careers</li>
              <li>Community</li>
              <li>Customers</li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="mb-2 font-semibold text-gray-500">Legal</h4>
            <ul className="space-y-1">
              <li>Terms</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>

        {/* Right Column – Language + Theme */}
        <div className="space-y-4">
          {/* Language Selector */}
          <div className="border border-gray-600 rounded-md px-4 py-2 flex items-center gap-2">
            {/* Dummy globe icon */}
            <div ><img src="/mad-x/language/web.svg" alt="web" /></div>
            <select className="bg-transparent focus:outline-none text-white">
              <option>English</option>
              <option>Hindi</option>
              <option>French</option>
            </select>
          </div>

          {/* Theme Switcher (dummy icons) */}
          <ThemeToggle />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mx-24">
        <p>© 2025 Made by <span className="text-white">Anysphere</span></p>
        <div className="mt-4 md:mt-0 flex items-center gap-2 border border-white text-white rounded-md px-3 py-1 text-xs">
          {/* Dummy shield icon */}
          <div className="w-4 h-4 bg-white rounded-full"></div>
          SOC 2 Certified
        </div>
      </div>
    </footer>
  );
}
