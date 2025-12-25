import Image from "next/image";
import HomeBanner from "../components/Hero";
import TopCategories from "@/components/TopCategories";
import Trending from "@/components/Trending";
import ShopByOccasion from "@/components/ByOccassion";
import StoryBanner from "@/components/StoryBanner";
import WhyChooseUs from "@/components/WhyChoose";
import TestimonialsSection from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <HomeBanner />
      <TopCategories />
      <Trending />
      <ShopByOccasion />
      <StoryBanner />
      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  );
}
