"use client";
import React, { useState } from "react";
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
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
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our exquisite saree collection? Our dedicated
            team is here to assist you with personalized service and expert
            guidance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Store Info Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 rounded-lg p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1.5">
                      Visit Our Showroom
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      123 Silk Market Road,
                      <br />
                      Fashion District,
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 rounded-lg p-3 flex-shrink-0">
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

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 rounded-lg p-3 flex-shrink-0">
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

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-purple-50 rounded-lg p-3 flex-shrink-0">
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

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-slate-800 mb-5">
                Connect With Us
              </h2>
              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3.5 transition-all transform hover:scale-105 shadow-sm">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg p-3.5 transition-all transform hover:scale-105 shadow-sm">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg p-3.5 transition-all transform hover:scale-105 shadow-sm">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-3.5 transition-all transform hover:scale-105 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
              <p className="text-slate-600 text-sm mt-4">
                Follow us for latest collections and exclusive offers
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8 lg:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-600">
                  We typically respond within 24 hours
                </p>
              </div>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-lg mb-6 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">
                    Thank you! Your message has been sent successfully. We'll
                    get back to you soon.
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 hover:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 hover:bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 hover:bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 hover:bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Inquiry</option>
                      <option value="order">Order Status</option>
                      <option value="custom">Custom Order Request</option>
                      <option value="complaint">Complaint / Issue</option>
                      <option value="feedback">Feedback</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-2"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none bg-gray-50 hover:bg-white"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-center text-slate-500 text-sm">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-slate-800">
              Visit Our Store
            </h2>
            <p className="text-slate-600 mt-1">
              Find us at our physical location in Mumbai
            </p>
          </div>
          <div className="h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9544392394973!2d72.82772731490137!3d19.01715098712546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec9c0d94d83%3A0x20f2b19e8e24ac4!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635345678901!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
