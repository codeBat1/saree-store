"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our exquisite saree collection? Our dedicated
            team is here to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-md border p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1.5">
                      Visit Our Showroom
                    </h3>
                    <p className="text-slate-600 text-sm">
                      123 Silk Market Road,
                      <br />
                      Fashion District,
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1.5">
                      Call Us
                    </h3>
                    <p className="text-slate-600 text-sm">+91 98765 43210</p>
                    <p className="text-slate-600 text-sm">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1.5">
                      Email Us
                    </h3>
                    <p className="text-slate-600 text-sm">
                      info@sareestore.com
                    </p>
                    <p className="text-slate-600 text-sm">
                      support@sareestore.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1.5">
                      Business Hours
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Mon - Sat: 10:00 AM - 8:00 PM
                    </p>
                    <p className="text-slate-600 text-sm">
                      Sunday: 11:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-xl shadow-md border p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-5">
                Connect With Us
              </h2>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white rounded-lg p-3.5">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg p-3.5">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-sky-500 text-white rounded-lg p-3.5">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="bg-green-600 text-white rounded-lg p-3.5">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Send Us a Message
              </h2>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-lg mb-6 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Thank you! Your message has been sent.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  />
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  >
                    <option value="">Select subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="custom">Custom Order</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-slate-800 text-white py-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
