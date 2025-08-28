import React from "react";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
     <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Start Your Business With Us?
      </h2>
      <Link
        to="/contact"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:bg-slate-100 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
