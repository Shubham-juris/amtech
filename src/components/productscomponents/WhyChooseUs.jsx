// WhyChooseUs.jsx
import React from "react";
import { ShieldCheck, Leaf, Globe2, DollarSign } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    { icon: <ShieldCheck className="w-10 h-10 text-blue-500" />, title: "Quality Checked", desc: "Every product passes strict international quality standards." },
    { icon: <Leaf className="w-10 h-10 text-green-500" />, title: "Eco-Friendly", desc: "Sustainable sourcing & recycling for a better planet." },
    { icon: <Globe2 className="w-10 h-10 text-cyan-500" />, title: "Global Export", desc: "Serving clients across Asia, Africa, and Europe." },
    { icon: <DollarSign className="w-10 h-10 text-yellow-500" />, title: "Affordable Pricing", desc: "Competitive prices without compromising quality." },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
