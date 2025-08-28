import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Amtech’s products have exceeded our expectations in quality and delivery. Truly a reliable partner.",
      name: "Mr. Rahul Sharma",
    },
    {
      quote:
        "We have been importing from Amtech for over 3 years. Their professionalism and timely delivery is unmatched.",
      name: "Ms. Emily Watson",
    },
    {
      quote:
        "The quality of textiles is outstanding. Our customers love the products and we always get repeat orders.",
      name: "Mr. Ahmed Khan",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-slate-800">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <p className="text-slate-600">"{item.quote}"</p>
              <h4 className="mt-4 font-semibold text-slate-800">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
