import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { number: 20, label: "Countries Served", suffix: "+" },
    { number: 100, label: "Happy Clients", suffix: "+" },
    { number: 5000, label: "Products Delivered", suffix: "+" },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {stats.map((stat, idx) => (
          <CounterCard
            key={idx}
            number={stat.number}
            label={stat.label}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </section>
  );
}

// ✅ Counter Component
function CounterCard({ number, label, suffix }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6"
    >
      <h3 className="text-4xl font-bold">
        {count}
        {suffix}
      </h3>
      <p className="mt-2 text-lg">{label}</p>
    </motion.div>
  );
}
