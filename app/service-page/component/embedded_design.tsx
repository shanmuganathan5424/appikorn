"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInParagraph = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-[24px] leading-[45px] text-justify mb-6"
    >
      {children}
    </motion.p>
  );
};

const EmbeddedDesign = () => {
  return (
    <div className="bg-[#F8F8FF] text-black py-30 px-4 md:py-20 md:px-2">
      <h1 className="text-purple1 text-[58px] md:text-[40px] pb-10 font-bold leading-[71.22px] tracking-[-0.49px]">
        Embedded Design
      </h1>
      <div className="font-normal space-y-4">
        <FadeInParagraph>
          Lorem ipsum dolor sit amet consectetur. Id aliquam etiam at mauris
          ornare. Ullamcorper rhoncus a nullam feugiat mauris imperdiet a
          lacinia. Scelerisque mollis sed interdum elit tortor diam faucibus.
          Scelerisque at gravida risus ullamcorper ipsum quis eget risus. Justo
          adipiscing ut tortor ultrices vehicula amet. Turpis aliquam dictumst
          tellus sit tortor egestas. Sed mauris sit aliquam volutpat eu eu quam.
          Dolor in dolor maecenas sed id et lorem a tellus. Interdum pharetra
          donec pulvinar dui sed eros.
        </FadeInParagraph>
        <FadeInParagraph>
          Ullamcorper auctor pellentesque lacus orci non ullamcorper porta in
          pharetra. Ultricies sit eleifend elit risus urna in. Aliquam amet at
          pulvinar malesuada vel posuere mattis et habitasse. Phasellus dolor
          est urna parturient. Enim aenean feugiat feugiat diam vulputate amet
          sed eget facilisi. Nullam magna rhoncus nec ultrices quam cras cursus
          cursus faucibus. Nam aliquam hac mauris nulla. Ullamcorper id massa
          auctor vulputate a et sodales cras. Interdum accumsan pharetra tempor
          pretium feugiat sagittis. Id vitae erat enim sit diam egestas. Ut
          maecenas nulla volutpat mauris dui pretium proin.
        </FadeInParagraph>
      </div>
    </div>
  );
};

export default EmbeddedDesign;
