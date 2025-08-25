
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-2 md:py-6 mt-16">
      <div
  className="max-w-7xl mx-auto
             grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-24
             justify-center items-start"
>

        {/* Left Column - Logo, Description & Email */}
                <div className="flex flex-col items-center md:items-start space-y-6 md:col-span-2">
                  <img
                    src="/footer-icons/appikorn-footer-logo.svg"
                    alt="Appikorn Logo"
                    width={160}
                    height={80}
                    className="object-contain"
                  />
        
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-[16px] max-w-lg text-center md:text-left">
                    Join us on the journey to redefine possibilities, where technology
                    seamlessly enhances human potential. Experience the power of
                    Appikorn Industry 4.0 solutions and unlock the door to unprecedented
                    growth, efficiency, and sustainability.
                  </p>
        
                  <div className="flex w-full max-w-md items-center gap-3">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="flex-1 h-[48px] rounded-full bg-gray-800 pl-5 text-gray-200 placeholder-gray-500 text-sm outline-none"
                    />
                    <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition rounded-full text-white font-semibold h-[48px] px-6 text-sm flex items-center justify-center">
                      <span className="hidden md:inline">Contact Us</span>
                      <img
                        src="/send.png"
                        alt="send"
                        className="md:hidden w-[28px] h-[28px]"
                      />
                    </button>
                  </div>
                </div>

        {/* Middle Navigation Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 col-span-1 md:col-span-3">
          {/* service */}
          <div className="container mx-auto px-4 col-span-1 md:col-span-2">
  <div className="flex flex-col items-center">
    
    <ul className="space-y-1 text-left">
      <li className="mb-2 font-semibold text-gray-500 ">Services</li>
      <li>"Cloud service</li>
      <li>UI/UX Design</li>
      <li>Product Design</li>
      <li>QA & Testing</li>
      <li>Web Development</li>
      <li>VR/AR Technologys</li>
      <li>IOS/Android Application</li>
      <li>Automations</li>
    </ul>
  </div>
</div>


{/* Company */}
<div className="container mx-auto px-4">
  <div className="flex flex-col items-center">
   
    <ul className="space-y-1 text-left">
      <li className="mb-2 font-semibold text-gray-500 ">Company</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Help Center</li>
    </ul>
  </div>
</div>

        </div>

        {/* Right Column - Contact & Social */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <p className="text-white font-medium">hi@cursor.com</p>
          <div className="flex gap-5">
            {[
              { src: "/mad-x/social media/x.svg", alt: "Twitter" },
              { src: "/mad-x/social media/git.svg", alt: "GitHub" },
              { src: "/mad-x/social media/r.svg", alt: "Reddit" },
              { src: "/mad-x/social media/yt.svg", alt: "YouTube" },
            ].map((icon) => (
              <img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
              />
            ))}
          </div>
        </div>


      </div>

      {/* Footer Bottom */}
      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Made by <span className="text-white">Appikorn</span></p>
          <p className="mt-3 md:mt-0">All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
}
