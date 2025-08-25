export default function () {
  return (
    <div className="flex items-center-safe justify-center">
      <div className="flex w-[95%] h-[600px] rounded-[20px] overflow-hidden ">
        {/* Panel 1 */}
        <div className="group relative flex-1 hover:flex-[54%] transition-all duration-500 ease-in-out bg-orangecustom flex flex-col items-start justify-between text-white p-6 cursor-pointer leading-[71.2px] overflow-hidden">
          {/* Number and Content Wrapper */}
          <div className="max-w-[360px] z-10">
            <h2 className="text-[58px] font-bold mb-7">01</h2>

            {/* Robot Image (center before hover, left on hover) */}
            <div className="absolute inset-0 flex items-end justify-center group-hover:justify-center pl-0 group-hover:pl-36 transition-all duration-700 ease-in-out z-0">
              <img
                src="/panel/center-image/01.svg"
                alt="Robot"
                className="w-[287px] h-[509px] object-cover mix-blend-overlay"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-[40px] leading-[40px] font-bold">
                JuzAI Powered Intelligence Document Management
              </h3>
              <p className="text-[16px] leading-5 mt-4">
                JuzAi revolutionizes document management with AI-powered
                automation, smart search, and secure data processing. It
                automatically organizes files, extracts insights, and
                streamlines workflows—boosting productivity while ensuring
                compliance and easy collaboration.
              </p>

              {/* Review Section */}
              <p className="mt-4 text-[16px] leading-4">Creators</p>
              <div className="flex items-center gap-3">
                <div className="mt-2 flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-1.png"
                    alt="Creator 1"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-4.png"
                    alt="Creator 2"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-3.png"
                    alt="Creator 3"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-2.png"
                    alt="Creator 4"
                  />
                </div>
                <div>
                  <img
                    className="mt-2 w-[100px] h-8"
                    src="/panel/review/Line-arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div>
            <img
              src="/panel/bg-image/bg1.png"
              alt="Background"
              className="absolute bottom-0 right-0 w-[375px] h-[600px] object-cover mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Panel 2 */}
        <div className="group relative flex-1 hover:flex-[54%] transition-all duration-500 ease-in-out bg-browncustom flex flex-col items-start justify-between text-white p-6 cursor-pointer leading-[71.2px] overflow-hidden">
          {/* Number and Content Wrapper */}
          <div className="max-w-[360px] z-10">
            <h2 className="text-[58px] font-bold mb-7">02</h2>

            {/* Robot Image (center before hover, left on hover) */}
            <div className="absolute inset-0 flex items-end justify-center group-hover:justify-center pl-0 group-hover:pl-36 transition-all duration-700 ease-in-out z-0">
              <img
                src="/panel/center-image/02.svg"
                alt="image2"
                className="w-[287px] h-[509px] object-cover mix-blend-overlay"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-[40px] leading-[40px] font-bold">
                Bestea coffee vending machine
              </h3>
              <p className="text-[16px] leading-5 mt-4">
                Experience café-quality beverages at your workplace with Bestea
                Coffee Vending Machines. Designed for convenience and
                consistency, Bestea delivers freshly brewed coffee, tea, and
                specialty drinks at the touch of a button. With its sleek
                design, easy maintenance, and customizable options, it’s the
                perfect solution for offices, cafeterias, and public spaces.
                Enjoy great taste, every time—made simple with Bestea.
              </p>

              {/* Review Section */}
              <p className="mt-4 text-[16px] leading-4">Creators</p>
              <div className="flex items-center gap-3">
                <div className="mt-2 flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-1.png"
                    alt="Creator 1"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-4.png"
                    alt="Creator 2"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-3.png"
                    alt="Creator 3"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-2.png"
                    alt="Creator 4"
                  />
                </div>
                <div>
                  <img
                    className="mt-2 w-[100px] h-8"
                    src="/panel/review/Line-arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div>
            <img
              src="/panel/bg-image/bg2.png"
              alt="Background"
              className="absolute bottom-0 right-0 w-[375px] h-[600px] object-cover mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Panel 3 */}
        <div className="group relative flex-1 hover:flex-[54%] transition-all duration-500 ease-in-out bg-pinkcustom flex flex-col items-start justify-between text-white p-6 cursor-pointer leading-[71.2px] overflow-hidden">
          {/* Number and Content Wrapper */}
          <div className="max-w-[360px] z-10">
            <h2 className="text-[58px] font-bold mb-7">03</h2>

            {/* Robot Image (center before hover, left on hover) */}
            <div className="absolute inset-0 flex items-end justify-center group-hover:justify-center pl-0 group-hover:pl-36 transition-all duration-700 ease-in-out z-0">
              <img
                src="/panel/center-image/03.png"
                alt="image3"
                className="max-w-[287px] h-[509px] object-cover mix-blend-overlay"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-[40px] leading-[40px] font-bold">
                JuzDate dating application for couples
              </h3>
              <p className="text-[16px] leading-5 mt-4">
                JuzDate is a smart dating app designed for couples to build
                meaningful connections and lasting relationships. With
                intelligent matching, fun interaction features, and private
                communication tools, JuzDate helps partners explore, share, and
                grow together. Whether you’re starting fresh or strengthening
                your bond, JuzDate makes every moment more special.
              </p>

              {/* Review Section */}
              <p className="mt-4 text-[16px] leading-4">Creators</p>
              <div className="flex items-center gap-3">
                <div className="mt-2 flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-1.png"
                    alt="Creator 1"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-4.png"
                    alt="Creator 2"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-3.png"
                    alt="Creator 3"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-2.png"
                    alt="Creator 4"
                  />
                </div>
                <div>
                  <img
                    className="mt-2 w-[100px] h-8"
                    src="/panel/review/Line-arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div>
            <img
              src="/panel/bg-image/bg3.png"
              alt="Background"
              className="absolute bottom-0 right-0 w-[375px] h-[600px] object-cover mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Panel 4 */}
        <div className="group relative flex-1 hover:flex-[54%] transition-all duration-500 ease-in-out bg-yellowcustom flex flex-col items-start justify-between text-white p-6 cursor-pointer leading-[71.2px] overflow-hidden">
          {/* Number and Content Wrapper */}
          <div className="max-w-[360px] z-10">
            <h2 className="text-[58px] font-bold mb-7">04</h2>

            {/* Robot Image (center before hover, left on hover) */}
            <div className="absolute inset-0 flex items-end justify-center group-hover:justify-center pl-0 group-hover:pl-36 transition-all duration-700 ease-in-out z-0">
              <img
                src="/panel/center-image/04.svg"
                alt="image4"
                className="w-[287px] h-[509px] object-cover mix-blend-overlay"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-[40px] leading-[40px] font-bold">
                Juzscan Seamless Food Delivery Application
              </h3>
              <p className="text-[16px] leading-5 mt-4">
                JuzScan redefines the way you order food with a fast, reliable,
                and seamless delivery experience. From local favorites to
                gourmet cuisines, the app connects you with a wide range of
                restaurants and ensures your meals arrive fresh and on time.
                With easy navigation, smart recommendations, and secure
                payments, JuzScan makes food ordering effortless—anytime,
                anywhere.
              </p>

              {/* Review Section */}
              <p className="mt-4 text-[16px] leading-4">Creators</p>
              <div className="flex items-center gap-3">
                <div className="mt-2 flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-1.png"
                    alt="Creator 1"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-4.png"
                    alt="Creator 2"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-3.png"
                    alt="Creator 3"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-2.png"
                    alt="Creator 4"
                  />
                </div>
                <div>
                  <img
                    className="mt-2 w-[100px] h-8"
                    src="/panel/review/Line-arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div>
            <img
              src="/panel/bg-image/bg4.png"
              alt="Background"
              className="absolute bottom-0 right-0 w-[375px] h-[600px] object-cover mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Panel 5 */}
        <div className="group relative flex-1 hover:flex-[54%] transition-all duration-500 ease-in-out bg-vilotcustom flex flex-col items-start justify-between text-white p-6 cursor-pointer leading-[71.2px] overflow-hidden">
          {/* Number and Content Wrapper */}
          <div className="max-w-[360px] z-10">
            <h2 className="text-[58px] font-bold mb-7">05</h2>

            {/* Robot Image (center before hover, left on hover) */}
            <div className="absolute inset-0 flex items-end justify-center group-hover:justify-center pl-0 group-hover:pl-36 transition-all duration-700 ease-in-out z-0">
              <img
                src="/panel/center-image/05.svg"
                alt="image5"
                className="w-[287px] h-[509px] object-cover mix-blend-overlay"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-[40px] leading-[40px] font-bold">
                Eco-friendly Health & Wellness System
              </h3>
              <p className="text-[16px] leading-5 mt-4">
                Our Eco-friendly Health & Wellness System promotes a balanced
                lifestyle while caring for the planet. Designed with sustainable
                practices and green technology, it integrates wellness solutions
                that support physical health, mental well-being, and
                environmental responsibility. From energy-efficient devices to
                eco-conscious programs, this system empowers individuals and
                communities to stay healthy while reducing their ecological
                footprint.
              </p>

              {/* Review Section */}
              <p className="mt-4 text-[16px] leading-4">Creators</p>
              <div className="flex items-center gap-3">
                <div className="mt-2 flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-1.png"
                    alt="Creator 1"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-4.png"
                    alt="Creator 2"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-3.png"
                    alt="Creator 3"
                  />
                  <img
                    className="w-8 h-8 rounded-full"
                    src="/panel/review/Ellipse-2.png"
                    alt="Creator 4"
                  />
                </div>
                <div>
                  <img
                    className="mt-2 w-[100px] h-8"
                    src="/panel/review/Line-arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div>
            <img
              src="/panel/bg-image/bg5.png"
              alt="Background"
              className="absolute bottom-0 right-0 w-[375px] h-[600px] object-cover mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
