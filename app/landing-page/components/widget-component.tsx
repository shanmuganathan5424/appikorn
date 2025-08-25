"use client";
import { motion } from "framer-motion";
import { memo } from "react";

type Widget = { name: string; title: string };

const WidgetCard = memo(({ widget }: { widget: Widget }) => (
  <article
    className="flex items-center gap-2 px-3 py-2 rounded-full bg-white text-black w-56 flex-shrink-0 shadow-md"
    aria-label={`${widget.name} - ${widget.title}`}
  >
    <span
      className="w-8 h-8 bg-black rounded-full shrink-0"
      aria-hidden="true"
    />
    <div className="overflow-hidden whitespace-nowrap">
      <strong className="text-sm">{widget.name}</strong>
      <p className="text-xs text-gray-500 truncate">{widget.title}</p>
    </div>
  </article>
));
WidgetCard.displayName = "WidgetCard";

function ScrollRow({
  widgets,
  direction,
}: {
  widgets: Widget[];
  direction: "left" | "right";
}) {
  const animateX = direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"];
  return (
    <div className="relative w-full max-w-4xl overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {widgets.concat(widgets).map((widget, i) => (
          <WidgetCard key={i} widget={widget} />
        ))}
      </motion.div>
    </div>
  );
}

export default function AnimatedWidgets() {
  const row1 = [
    { name: "TextFieldAppi", title: "Advanced text input" },
    { name: "SearchableTextFieldAppi", title: "Search + filter input" },
    { name: "JsonInputFieldAppi", title: "JSON input with syntax" },
  ];
  const row2 = [
    { name: "NumberKeypadAppi", title: "Numeric keypad" },
    { name: "NumberStepperAppi", title: "Stepper input" },
    { name: "QuillEditorAppi", title: "Rich text editor" },
  ];
  const row3 = [
    { name: "PieChartAppi", title: "Interactive pie charts" },
    { name: "LineChartAppi", title: "Line chart with zoom" },
    { name: "TableAppi", title: "Advanced table with filtering" },
  ];

  return (
    <section
      className="relative w-full flex flex-col justify-center items-center text-white space-y-8 py-10"
      aria-labelledby="widgets-heading"
    >
      <h2 id="widgets-heading" className="sr-only">
        Appikorn Widgets Showcase
      </h2>
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" />

      <ScrollRow widgets={row1} direction="left" />
      <ScrollRow widgets={row2} direction="right" />
      <ScrollRow widgets={row3} direction="left" />
    </section>
  );
}
