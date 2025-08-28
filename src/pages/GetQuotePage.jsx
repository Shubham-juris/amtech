import React from "react";
import { motion } from "framer-motion";

export default function GetQuote() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Get a Quote</h2>
          <p className="mt-2 text-blue-100">
            Fill out the form below and we’ll get back to you with the best solution.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-6 text-slate-700"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Company (optional)</label>
            <input
              type="text"
              placeholder="Enter your company name"
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Requirement */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 font-medium">Your Requirement</label>
            <textarea
              rows="4"
              placeholder="Tell us about your requirement..."
              className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
