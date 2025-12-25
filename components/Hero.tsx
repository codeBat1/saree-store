"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeBanner = () => {
  const banners = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Discover the latest trends",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=600&fit=crop",
      cta: "Shop Now",
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Get up to 50% off on selected items",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&h=600&fit=crop",
      cta: "Explore Now",
    },
  ];

  return (
    <section className="w-full h-screen max-h-[600px] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/60",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="h-full w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white max-w-4xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
                    {banner.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 animate-fade-in-delay">
                    {banner.subtitle}
                  </p>
                  <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {banner.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-white !w-10 !h-10 sm:!w-12 sm:!h-12 after:!text-2xl sm:after:!text-3xl !left-2 sm:!left-4 !hidden md:!flex" />
        <div className="swiper-button-next !text-white !w-10 !h-10 sm:!w-12 sm:!h-12 after:!text-2xl sm:after:!text-3xl !right-2 sm:!right-4 !hidden md:!flex" />
      </Swiper>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        :global(.swiper-pagination) {
          bottom: 20px !important;
        }

        :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          margin: 0 6px !important;
        }

        @media (max-width: 640px) {
          :global(.swiper-pagination-bullet) {
            width: 10px;
            height: 10px;
            margin: 0 4px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeBanner;
