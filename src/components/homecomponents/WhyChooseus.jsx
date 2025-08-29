import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe2, PackageCheck, Handshake } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Uncompromised Quality",
      desc: "We ensure every product meets international standards with rigorous quality checks.",
    },
    {
      icon: <Globe2 className="h-10 w-10 text-blue-600" />,
      title: "Global Reach",
      desc: "Serving clients across Canada, USA, and the Middle East with a strong export network.",
    },
    {
      icon: <PackageCheck className="h-10 w-10 text-blue-600" />,
      title: "Diverse Products",
      desc: "From T-shirts, pyjamas, and undergarments to custom fabrics & waste fabric export.",
    },
    {
      icon: <Handshake className="h-10 w-10 text-blue-600" />,
      title: "Trusted Partnership",
      desc: "Years of experience with reliable delivery and long-term business relationships.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12"
        >
          Why <span className="text-blue-600">Choose Us</span>?
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {f.title}
              </h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
