"use client";
import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Calendar,
  Briefcase,
  PartyPopper,
  Coffee,
} from "lucide-react";

interface Occasion {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  gradient: string;
}

const ShopByOccasion = () => {
  const occasions: Occasion[] = [
    {
      id: 1,
      title: "Wedding",
      description: "Bridal & festive wear",
      image:
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&h=600&fit=crop",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-500",
    },
    {
      id: 2,
      title: "Festival",
      description: "Traditional celebrations",
      image:
        "https://images.unsplash.com/photo-1610030469750-a0fe014010f5?w=800&h=600&fit=crop",
      icon: <Calendar className="w-6 h-6" />,
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      id: 3,
      title: "Office",
      description: "Professional & elegant",
      image:
        "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&h=600&fit=crop",
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "Party",
      description: "Glamorous evenings",
      image:
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&h=600&fit=crop",
      icon: <PartyPopper className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 5,
      title: "Casual",
      description: "Everyday comfort",
      image:
        "https://images.unsplash.com/photo-1583391733981-e8c9e277ca12?w=800&h=600&fit=crop",
      icon: <Coffee className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const handleOccasionClick = (occasion: string) => {
    console.log(`Navigate to ${occasion} collection`);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Shop by Occasion
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect saree for every special moment in your life
          </p>
        </div>

        {/* Occasions Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">
          {occasions.map((occasion) => (
            <div
              key={occasion.id}
              onClick={() => handleOccasionClick(occasion.title)}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                {/* Background Image */}
                <Image
                  src={occasion.image}
                  alt={occasion.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${occasion.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div
                    className={`w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {occasion.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{occasion.title}</h3>
                  <p className="text-sm text-white/90">
                    {occasion.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Occasions Grid - Tablet (3 cols + 2 cols) */}
        <div className="hidden sm:grid lg:hidden gap-6">
          {/* First Row - 3 items */}
          <div className="grid grid-cols-3 gap-6">
            {occasions.slice(0, 3).map((occasion) => (
              <div
                key={occasion.id}
                onClick={() => handleOccasionClick(occasion.title)}
                className="group cursor-pointer"
              >
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${occasion.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <div
                      className={`w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {occasion.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{occasion.title}</h3>
                    <p className="text-sm text-white/90">
                      {occasion.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 items */}
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {occasions.slice(3, 5).map((occasion) => (
              <div
                key={occasion.id}
                onClick={() => handleOccasionClick(occasion.title)}
                className="group cursor-pointer"
              >
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    fill
                    sizes="50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${occasion.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                    <div
                      className={`w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {occasion.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{occasion.title}</h3>
                    <p className="text-sm text-white/90">
                      {occasion.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Occasions Grid - Mobile */}
        <div className="grid sm:hidden grid-cols-1 gap-6">
          {occasions.map((occasion) => (
            <div
              key={occasion.id}
              onClick={() => handleOccasionClick(occasion.title)}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg active:shadow-2xl transition-all duration-300 active:scale-95">
                <Image
                  src={occasion.image}
                  alt={occasion.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${occasion.gradient} opacity-60`}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div
                    className={`w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3`}
                  >
                    {occasion.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{occasion.title}</h3>
                  <p className="text-sm text-white/90">
                    {occasion.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm sm:text-base">
            Can't decide?{" "}
            <button className="text-pink-600 font-semibold hover:text-pink-700 underline">
              Browse all collections
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopByOccasion;
