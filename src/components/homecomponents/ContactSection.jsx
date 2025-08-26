import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-slate-50 px-6">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Contact Us</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p><strong>📍 Address:</strong> Amtech Industries, [Your City, State]</p>
          <p><strong>📞 Phone:</strong> +91 00000 00000</p>
          <p><strong>📧 Email:</strong> info@amtech.com</p>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-xl border" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-xl border" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded-xl border h-28" />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}
