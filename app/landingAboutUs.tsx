import React from "react";

const LandingAboutUs = () => {
  return (
    <div className="h-[100vh] border-2 bg-black">
      <div className="flex p-20">
        {/* Left Content */}
        <div className="text-white pr-20 space-y-8">
          <h1 className="text-4xl">
            About <span className="text-purple-500">Us</span>
          </h1>
          <p className="text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className="p-4 bg-purple-500 rounded-full text-medium">
            Know More
          </button>
          {/* Timeline */}
          <div className="w-full py-10">
            <div className="relative flex items-center justify-between">
              {/* <!-- Center Line --> */}
              <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-300"></div>

              {/* <!-- Step 1 --> */}
              <div className="relative flex flex-col items-center text-center group">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white 
                  group-hover:scale-110 transition transform duration-300 cursor-pointer"
                >
                  1
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Step One
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Jan 2023
                  </p>
                </div>
              </div>

              {/* <!-- Step 2 --> */}
              <div className="relative flex flex-col items-center text-center group">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-700 
                  group-hover:bg-green-500 group-hover:text-white group-hover:scale-110 
                  transition transform duration-300 cursor-pointer"
                >
                  2
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Step Two
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mar 2023
                  </p>
                </div>
              </div>

              {/* <!-- Step 3 --> */}
              <div className="relative flex flex-col items-center text-center group">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-700 
                  group-hover:bg-purple-500 group-hover:text-white group-hover:scale-110 
                  transition transform duration-300 cursor-pointer"
                >
                  3
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Step Three
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Jul 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="615"
            height="407"
            viewBox="0 0 615 407"
            fill="none"
          >
            <path
              d="M0.111453 26.9555V233.456C0.111453 250.254 15.4447 255.789 23.1113 256.457H162.111C179.711 256.457 182.445 269.79 181.611 276.457C181.778 300.79 182.011 355.657 181.611 380.457C181.211 405.257 201.778 407.79 212.111 405.957H591.611C610.411 405.957 614.778 391.957 614.611 384.957C614.445 276.29 614.211 52.557 614.611 26.9555C615.011 1.35411 590.111 -1.37839 577.611 0.455543C408.445 0.288876 62.8115 0.0555429 33.6115 0.455543C4.41145 0.855543 -0.888547 18.2889 0.111453 26.9555Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LandingAboutUs;
