"use client";

import HeroContent from "./HeroContent";
import ProfilePicture from "./ProfilePicture";
import CardCarousel from "./CardCarousel";
import BackgroundDecorations from "./BackgroundDecorations";
import { StaticImageData } from "next/image";

export interface TCard {
  id: number;
  icon: string;
  image: StaticImageData;
  title: string;
  paragraph: string;
}

interface HeroSectionProps {
  name: string;
  cards: TCard[];
}

export default function HeroSection({ name,  cards }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-10">
      <div className="max-w-md mx-auto px-0">
        <div className="space-y-16">
          {/* Title */}
          <HeroContent
            name={name}
            
            className="order-1"
          />

         

          {/* Card Carousel */}
          <CardCarousel cards={cards} className="order-3" />
        </div>
      </div>

      {/* Background Decorative Elements */}
      <BackgroundDecorations />
    </section>
  );
} 