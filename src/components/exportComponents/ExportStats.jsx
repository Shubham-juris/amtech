import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Users, Package, Clock } from "lucide-react";

export function ExportStats() {
  const stats = [
    { icon: <Globe size={40} />, value: 20, label: "Countries Served", suffix: "+" },
    { icon: <Users size={40} />, value: 500, label: "Happy Clients", suffix: "+" },
    { icon: <Package size={40} />, value: 1000, label: "Shipments Completed", suffix: "+" },
    { icon: <Clock size={40} />, value: 15, label: "Years Experience", suffix: "+" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">
          Our Global Impact
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <CounterCard
              key={idx}
              icon={stat.icon}
              number={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={idx * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterCard({ icon, number, label, suffix, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    const duration = 2000; // 2s
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
      transition={{ delay }}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-3xl font-bold">
        {count}
        {suffix}
      </h3>
      <p className="text-slate-600">{label}</p>
    </motion.div>
  );
}
