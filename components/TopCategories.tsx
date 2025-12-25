import Image from "next/image";
import React from "react";
import Georgette from "../public/Georgette.webp";
import Katan from "../public/Katan.webp";
import Kora from "../public/Kora.webp";
import Tissue from "../public/Tissue.webp";

const TopCategories = () => {
  const topCategories = [
    { name: "Cotton Silk", img: Georgette },
    { name: "Kora Silk", img: Katan },
    { name: "Tissue Silk", img: Kora },
    { name: "Georgette Banarasi", img: Tissue },
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-2 text-center">Top Categories</h2>
      <p className="text-center mb-4">
        Celebrate your uniqueness with our specialty collection—where style
        meets elegance.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {topCategories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image Card */}
            <div className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden shadow-md">
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-center">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
