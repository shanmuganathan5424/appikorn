export default function WhyChoose() {
  const cardData = [
    { title: "Lorem ipsum dolor sit amet consectetur.", icon: "/mad-x/setting.svg" },
    { title: "Lorem ipsum dolor sit amet consectetur.", icon: "/mad-x/brain.svg" },
    { title: "Lorem ipsum dolor sit amet consectetur.", icon: "/mad-x/reload.svg" },
    { title: "Lorem ipsum dolor sit amet consectetur.", icon: "/mad-x/grid.svg" },
    { title: "Lorem ipsum dolor sit amet consectetur.", icon: "/mad-x/message.svg" },
    { title: "Lorem ipsum dolor sit amet consectetur.", icon: "/mad-x/lock.svg" },
  ];

  return (
    <section className="bg-black text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Why Choose Madix</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-[#1a1a1a] to-[#111] shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 mb-5 bg-gray-800 rounded-full flex items-center justify-center">
              <img src={card.icon} alt="icon" className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-3 leading-snug">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nulla vitae nam quis
              etiam nullam. Ipsum enim ante leo habitant justo enim ut et est.
              Et mauris commodo sed ut augue pharetra neque. Urna egestas enim
              eget.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
