"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { TCard } from "./HeroSection";
import Image from "next/image";

interface CardCarouselProps {
  cards: TCard[];
  className?: string;
}

export default function CardCarousel({
  cards,
  className = "",
}: CardCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      className={`space-y-3 z-50`}
    >
      <motion.div
        animate={{
          y: [0, 1, -2, 1, 0],
          x: [0, -3, 2, -2, 0],
          rotate: [0, -0.5, 0, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Carousel
          setApi={setApi}
          className="w-[90vw]  rounded-lg p-0"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 min-h-96 bg-yellow-300/10 shadow-lg relative rounded-xl ">
                  <CardContent className="p-0 bg-transparent rounded-xl ">
                    {/* Card Icon */}
                    <div className="text-3xl mb-1 absolute -top-10 left-10 z-50">
                      {card.icon}
                    </div>
                    {/* Card Image */}

                    <div className="w-full max-h-48 bg-gradient-to-br  from-primary/20 to-accent/20 flex items-center justify-center rounded-t-xl relative">
                      <Image
                        src={card.image}
                        alt={card.title}
                        className="rounded-t-xl w-full h-48 object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 rounded-xl ">
                      <h3 className="text-lg font-semibold text-text-dark mb-2">
                        {card.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {card.paragraph}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-1 mt-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current - 1 ? "bg-primary" : "bg-text-muted/30"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </motion.div>
    </motion.div>
  );
}
