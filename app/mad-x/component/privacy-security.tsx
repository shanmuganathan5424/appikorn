import Image from "next/image";

export default function PrivacySection() {
  const cardData = [
    {
      title: "Secure Data Storage",
      description:
        "We safeguard your information with state-of-the-art encryption and storage protocols, preventing unauthorized access and minimizing risk.",
    },
    {
      title: "User-Controlled Privacy",
      description:
        "You are in charge of your data. Manage your preferences, control sharing, and revoke access at any time—privacy that adapts to your needs.",
    },
    {
      title: "Continuous Monitoring & Updates",
      description:
        "Our security infrastructure is continuously monitored and updated, staying ahead of emerging threats to maintain the highest level of protection.",
    },
  ];
  return (
    <section className="bg-[#111] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-[20px] md:text-4xl font-bold mb-4">
          Privacy and Security
        </h2>
        <p className="text-gray-400 max-w-2xl mb-12">
          Your data is your most valuable asset. We protect it with advanced
          security measures, ensuring it remains private, secure, and under your
          control.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center w-full">
          {cardData.map((card, index) => (
            <article
              key={index}
              tabIndex={0}
              className="flex flex-col items-start gap-6 p-6 pr-12 rounded-[20px] bg-[rgba(237,239,242,0.04)] max-w-[425.667px] min-h-[240px] mx-auto focus:outline-none focus:ring-2 focus:ring-[#32F08C] hover:bg-[rgba(237,239,242,0.08)] transition"
              aria-labelledby={`privacy-card-title-${index}`}
            >
              <div>
                <h3
                  id={`privacy-card-title-${index}`}
                  className="text-white font-semibold text-lg mb-2"
                >
                  {card.title} {/* Use the title from cardData */}
                </h3>
                <p className="text-gray-400 text-sm mb-4 text-start">
                  {card.description} {/* Use the description from cardData */}
                </p>
                <Image
                  src="/mad-x/privacy.svg"
                  alt="Privacy icon"
                  width={24}
                  height={24}
                  className="text-green-400"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
