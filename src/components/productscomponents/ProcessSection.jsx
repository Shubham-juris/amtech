import React from "react";
import { Boxes, Package, Truck, CheckCircle } from "lucide-react";

export function ProcessSection() {
  const steps = [
    { icon: <Boxes className="w-10 h-10 text-blue-500" />, title: "Sourcing", desc: "We source the best textile materials from trusted suppliers." },
    { icon: <CheckCircle className="w-10 h-10 text-green-500" />, title: "Sorting", desc: "Each product is carefully inspected and sorted for quality." },
    { icon: <Package className="w-10 h-10 text-yellow-500" />, title: "Packaging", desc: "Durable and eco-friendly packaging for safe shipping." },
    { icon: <Truck className="w-10 h-10 text-cyan-500" />, title: "Exporting", desc: "Efficient global logistics for on-time delivery." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-12">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl shadow-md">
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
