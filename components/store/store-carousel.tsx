'use client';

import { useState, useEffect, CSSProperties } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import type { CarouselApi } from '@/components/ui/carousel';
import { heroSlides, stats } from '@/lib/dummy-data';

export default function ArtCarouselHero() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [particlePositions, setParticlePositions] = useState<{ x: number; y: number }[][]>([]);

  // Hydration guard
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  // Mouse move tracking
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isClient]);

  // Precompute particles
  useEffect(() => {
    if (!isClient) return;

    const positions = heroSlides.map((slide) =>
      slide.particles.map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticlePositions(positions);
  }, [isClient]);

  // Auto-advance
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [api]);

  // ✅ FIXED: Proper event listener cleanup
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden  from-slate-900 to-slate-800 p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-6xl mx-auto">
        <Carousel
          className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
          setApi={setApi}
          opts={{ align: 'start', loop: true }}
        >
          <CarouselContent>
            {heroSlides.map((slide, slideIndex) => {
              const CtaIcon = slide.ctaIcon;
              const particles = isClient
                ? particlePositions[slideIndex] || slide.particles.map(() => ({ x: 50, y: 50 }))
                : slide.particles.map(() => ({ x: 50, y: 50 }));

              return (
                <CarouselItem key={slideIndex}>
                  {/* ✅ Flexible container: full width, height adapts to content + padding */}
                  <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-2xl sm:rounded-3xl overflow-hidden">
                    {/* Background */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
                      style={{
                        backgroundImage: `url(${slide.bgImage.trim()})`,
                        transform: isClient
                          ? `translate(${mousePosition.x * 0.004}px, ${mousePosition.y * 0.004}px) scale(1.03)`
                          : 'scale(1.03)',
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 from-pink-500/40 via-purple-600/40 to-blue-700/40 mix-blend-multiply" />

                    {/* Particles */}
                    {particles.map((pos, idx) => {
                      const particle = slide.particles[idx];
                      return (
                        <div
                          key={idx}
                          className={`absolute ${particle.color} ${particle.size} rounded-full opacity-40 blur-sm animate-float`}
                          style={
                            {
                              left: `${pos.x}%`,
                              top: `${pos.y}%`,
                              '--delay': particle.delay,
                              '--duration': particle.duration,
                            } as CSSProperties
                          }
                        />
                      );
                    })}

                    {/* Splatters */}
                    <div className="absolute top-4 left-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-yellow-300 opacity-20 rounded-full blur-xl animate-pulse" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-pink-500 opacity-20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />

                    {/* Content: Centered, responsive text */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 tracking-tight drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 font-light drop-shadow-md">
                        {slide.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base max-w-md mb-4 sm:mb-6 px-2 text-white/90">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                        <Button
                          size="sm"
                          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:scale-[1.03] transition-transform shadow-md group"
                        >
                          <CtaIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 group-hover:rotate-12 transition-transform" />
                          {slide.cta}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-blue-900/70 hover:bg-blue-800 text-white border-blue-700/50 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base font-semibold rounded-lg hover:scale-[1.03] transition-transform shadow-md group"
                        >
                          <Upload className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 group-hover:-translate-y-0.5 transition-transform" />
                          Upload Your Wall
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Arrows – better positioned & sized */}
          <button
            onClick={() => api?.scrollPrev()}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/40 backdrop-blur-sm p-1.5 sm:p-2.5 rounded-full transition-all duration-300 border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/40 backdrop-blur-sm p-1.5 sm:p-2.5 rounded-full transition-all duration-300 border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </button>

          {/* Stats – hidden on mobile, visible from sm (640px) and up */}
<div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 z-20 w-full px-2 hidden sm:block">
  <div className="bg-black/20 backdrop-blur-lg rounded-full px-3 py-2 sm:px-4 sm:py-2.5 border border-white/10 max-w-md sm:max-w-2xl mx-auto">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div key={index} className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5">
              <div className="p-1 bg-emerald-500/50 rounded-full">
                <IconComponent className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-300" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white">{stat.number}</span>
            </div>
            <span className="text-[8px] sm:text-xs text-white/70">{stat.title}</span>
          </div>
        );
      })}
    </div>
  </div>
</div>

          {/* Indicators */}
          <div className="absolute bottom-4 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-1">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-emerald-400 w-4'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

    
    </section>
  );
}