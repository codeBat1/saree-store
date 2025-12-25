"use client";
import React from "react";
import Image from "next/image";
import Story from "@/public/story-section.webp";

const StoryBanner = () => {
  const handleVisitStore = () => {
    // Replace with your actual shop location link
    window.open(
      "https://www.google.com/maps?q=Banaras+Saree+Store+Varanasi",
      "_blank"
    );
  };

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <Image
            src={Story}
            alt="Our Story"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Story
            </h2>
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg mb-6 text-white/90">
              Discover the legacy of timeless Banarasi sarees, crafted with love
              and tradition for generations.
            </p>
            <button
              onClick={handleVisitStore}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              📍 Visit Our Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBanner;
