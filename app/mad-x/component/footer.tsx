import ThemeToggle from "./theme";

// components/Footer.tsx
export default function FooterP() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 md:py-16">
      <div
        className="max-w-7xl mx-auto
                   grid grid-cols-1 md:grid-cols-5 gap-8
                   justify-center items-start"
      >
        {/* Left Column - Email & Social Icons */}
        <div className="space-y-4 text-center md:text-left flex flex-col items-center">
          <div className="flex flex-col item-center md:items-start gap-4">
          <p className="text-white">hi@cursor.com</p>
          <div className="flex justify-center md:justify-start items-center gap-4">
            {/* Social Icons */}
            <img
              src="/mad-x/social media/x.svg"
              alt="Twitter"
              className="w-5 h-5"
            />
            <img
              src="/mad-x/social media/git.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
            <img
              src="/mad-x/social media/r.svg"
              alt="Reddit"
              className="w-5 h-5"
            />
            <img
              src="/mad-x/social media/yt.svg"
              alt="YouTube"
              className="w-5 h-5"
            />
          </div>
          </div>
        </div>

        {/* Middle Navigation Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 col-span-1 md:col-span-3">
          {/* Product */}
          <div className="container mx-auto px-4">
  <div className="flex flex-col items-center">
    
    <ul className="space-y-1 text-left">
      <li className="mb-2 font-semibold text-gray-500 ">Product</li>
      <li>Home</li>
      <li>Pricing</li>
      <li>Features</li>
      <li>Enterprise</li>
      <li>Bugbot</li>
      <li>Downloads</li>
      <li>Students</li>
    </ul>
  </div>
</div>

{/* Resources */}
<div className="container mx-auto px-4">
  <div className="flex flex-col items-center">
    
    <ul className="space-y-1 text-left">
      <li className="mb-2 font-semibold text-gray-500 ">Resources</li>
      <li>Docs</li>
      <li>Blog</li>
      <li>Forum</li>
      <li>Changelog</li>
    </ul>
  </div>
</div>

{/* Company */}
<div className="container mx-auto px-4">
  <div className="flex flex-col items-center">
   
    <ul className="space-y-1 text-left">
      <li className="mb-2 font-semibold text-gray-500 ">Company</li>
      <li>Anysphere</li>
      <li>Careers</li>
      <li>Community</li>
      <li>Customers</li>
    </ul>
  </div>
</div>

{/* Legal */}
<div className="container mx-auto px-4">
  <div className="flex flex-col items-center">
    
    <ul className="space-y-1 text-left">
      <li className="mb-2 font-semibold text-gray-500 ">Legal</li>
      <li>Terms</li>
      <li>Security</li>
      <li>Privacy</li>
    </ul>
  </div>
</div>

        </div>

        {/* Right Column – Theme Toggle */}
        <div className="space-y-4 flex justify-center md:justify-center items-center">
          <ThemeToggle />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500 ">
        <p className="mb-3 md:mb-0">
          © 2025 Made by <span className="text-white">Appikorn</span>
        </p>
        {/* Optional extra section commented out */}
        {/* <div className="flex items-center gap-2 border border-white text-white rounded-md px-3 py-1 text-xs">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          SOC 2 Certified
        </div> */}
      </div>
    </footer>
  );
}
