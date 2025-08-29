import React from "react";
import bg from "../../assets/products/bgg.jpeg";

export function ProductCTA() {
  return (
    <section
      className="relative py-24 bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Place Your Order?
        </h2>
        <p className="text-lg mb-8">
          Contact us today for bulk orders, custom textile solutions, and export partnerships.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-2xl shadow-lg hover:opacity-90 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
