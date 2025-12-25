"use client";
import React from "react";
import { Truck, Banknote, RefreshCw, ShieldCheck, Lock } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const WhyChooseUs = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Free Shipping",
      description: "On all orders above ₹999",
      icon: <Truck className="w-8 h-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      title: "COD Available",
      description: "Pay on delivery option",
      icon: <Banknote className="w-8 h-8" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 3,
      title: "Easy Returns",
      description: "7 days return policy",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 4,
      title: "100% Authentic",
      description: "Genuine products guaranteed",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 5,
      title: "Secure Payments",
      description: "Safe & encrypted checkout",
      icon: <Lock className="w-8 h-8" />,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-12 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best shopping with our customer-first approach
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-white border-2 border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon Container */}
              <div
                className={`${feature.bgColor} ${feature.color} w-20 h-20 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-full border border-pink-200">
            <ShieldCheck className="w-5 h-5 text-pink-600" />
            <span className="text-sm font-semibold text-gray-800">
              Trusted by 50,000+ Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
