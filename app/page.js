import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import FoodShowcase from "@/components/FoodShowcase";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <FoodShowcase />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
    </main>
  );
}