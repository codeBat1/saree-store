"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "The quality of sarees here is exceptional! I bought a Banarasi silk saree for my sister's wedding and received so many compliments. The fabric, the embroidery, everything was perfect.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Anita Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Amazing collection and excellent customer service! The staff helped me choose the perfect Kanjivaram saree for my daughter's engagement. Fast delivery and beautiful packaging too!",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Lakshmi Iyer",
    location: "Chennai",
    rating: 5,
    text: "I'm a regular customer now! The variety of traditional and contemporary sarees is impressive. Prices are reasonable and the quality never disappoints. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 4,
    name: "Divya Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Beautiful collection of designer sarees! I purchased a georgette saree with intricate work for a function. The color was exactly as shown online and the fit was perfect.",
    image: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 5,
    name: "Meera Kapoor",
    location: "Delhi",
    rating: 5,
    text: "Excellent shopping experience! The silk sarees are authentic and the prices are very competitive. The return policy is also hassle-free. Will definitely shop again!",
    image: "https://i.pravatar.cc/150?img=16",
  },
];

const TestimonialsSection = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Read testimonials from our satisfied customers who found their
            perfect sarees with us
          </p>
          <div className="flex justify-center items-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600 font-medium">
              5.0 from 500+ reviews
            </span>
          </div>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active !bg-pink-600",
          }}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 h-full">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-pink-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #db2777;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }

        .swiper-button-next.swiper-button-disabled,
        .swiper-button-prev.swiper-button-disabled {
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
