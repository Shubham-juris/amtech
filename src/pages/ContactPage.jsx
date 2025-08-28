import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/contact/hero1.jpg";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent backdrop-blur-[2px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Get in Touch
          </h1>
          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[4px] bg-blue-500 mx-auto mt-4 rounded-full"
          ></motion.div>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 shadow-md rounded-2xl p-6"
          >
            <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Our Address</h3>
            <p className="text-slate-600 mt-2">
              Amtech Industries, Textile Hub, New Delhi, India
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 shadow-md rounded-2xl p-6"
          >
            <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-slate-600 mt-2">info@amtechindustries.com</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-50 shadow-md rounded-2xl p-6"
          >
            <Phone className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="text-slate-600 mt-2">+91 98765 43210</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
            Send Us a Message
          </h2>
          <form className="grid gap-6 bg-white shadow-lg p-8 rounded-2xl">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          title="Amtech Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8390797799!2d77.0688993!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d023e1234567%3A0xabcdef123456789!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1616625400000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-none"
        ></iframe>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build a Partnership Together
        </h2>
        <Link
          to="/products"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-slate-100 transition"
        >
          Explore Products
        </Link>
      </section>
    </div>
  );
}
