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
    <section
      className="bg-[#111] text-white py-16 px-4"
      aria-labelledby="privacy-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Heading */}
        <h2
          id="privacy-heading"
          className="text-[20px] md:text-4xl font-bold mb-4"
        >
          Privacy and Security
        </h2>
        <p className="text-gray-400 max-w-2xl mb-12">
          Your data is your most valuable asset. We protect it with advanced
          security measures, ensuring it remains private, secure, and under your
          control.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {cardData.map((card, index) => (
            <article
              key={index}
              tabIndex={0}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 max-w-[425px] min-h-[240px] mx-auto focus:outline-none focus:ring-2 focus:ring-[#32F08C] hover:bg-white/10 transition"
              aria-labelledby={`privacy-card-title-${index}`}
            >
              {/* Icon */}
              <Image
                src="/mad-x/privacy.svg"
                alt=""
                width={28}
                height={28}
                loading="lazy"
                className="text-green-400"
              />

              {/* Title + Description */}
              <div className="text-start">
                <h3
                  id={`privacy-card-title-${index}`}
                  className="text-white font-semibold text-lg mb-2"
                >
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
