import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  location?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <Quote className="w-12 h-12 text-green-500 mb-6" />

          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < current.rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="text-xl text-gray-700 mb-6 italic">"{current.text}"</p>

          <div>
            <p className="text-gray-900">{current.name}</p>
            {current.location && (
              <p className="text-sm text-gray-500">{current.location}</p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={prev}
          className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-green-50 transition-all group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-green-600" />
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? "bg-green-600 w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-green-50 transition-all group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-green-600" />
        </button>
      </div>
    </div>
  );
}
