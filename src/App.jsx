import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function App() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <Carousel
        className="relative carousel-container"
        plugins={[Autoplay({ delay: 1000 })]} // Autoplay plugin is added here
      >
        <CarouselContent>
          <CarouselItem>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              alt="Boat on Calm Water"
              className="carousel-image object-cover w-full h-96 rounded-lg shadow-xl" // Ensure images cover the space and maintain aspect ratio
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              alt="Wintry Mountain Landscape"
              className="carousel-image object-cover w-full h-96 rounded-lg shadow-xl" // Set same height for consistency
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              alt="Waves at Sea"
              className="carousel-image object-cover w-full h-96 rounded-lg shadow-xl" // Set same height for consistency
            />
          </CarouselItem>
        </CarouselContent>

        {/* Carousel navigation buttons */}
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full shadow-lg">
          &lt;
        </CarouselPrevious>
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full shadow-lg">
          &gt;
        </CarouselNext>
      </Carousel>
    </div>
  );
}
