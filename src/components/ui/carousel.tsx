"use client";
import { IconArrowNarrowRight, IconBrandGithub, IconBrandYoutube } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";
import Image from "next/image";

interface SlideData {
  title: string;
  description: string;
  tools: string;
  src: string;
  githubLink?: string;
  youtubeLink?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  isClone?: boolean;
  originalIndex?: number;
}

const Slide = ({ slide, index, current, handleSlideClick, isClone = false, originalIndex }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, title, description, tools, githubLink, youtubeLink } = slide;

  // For clones, use the original index for click handling
  const clickIndex = isClone ? (originalIndex ?? index) : index;
  
  // Determine if this slide should be considered "current" based on the actual position
  const isCurrentSlide = current === index;

  return (
    <div className="[perspective:600px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-72 h-56 z-0 group cursor-pointer"
        onClick={() => handleSlideClick(clickIndex)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            !isCurrentSlide
              ? "scale(0.95) rotateX(4deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-lg overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              isCurrentSlide
                ? "translate3d(calc(var(--x) / 50), calc(var(--y) / 50), 0)"
                : "none",
          }}
        >
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: isCurrentSlide ? 1 : 0.7,
            }}
            alt={title}
            src={src}
            fill
            onLoad={imageLoaded}
            priority
          />
          {isCurrentSlide && (
            <div className="absolute inset-0 bg-black/20 transition-all duration-1000" />
          )}
          
          {/* Hover overlay with description */}
          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 z-10">
            <div className="text-white text-center">
              <h3 className="text-sm font-semibold mb-3">{title}</h3>
              <p className="text-xs mb-2 leading-relaxed line-clamp-4">{description}</p>
              <p className="text-xs text-gray-300 mb-3"><strong>Tools:</strong> {tools}</p>
              
              {/* Links */}
              <div className="flex justify-center space-x-3">
                {githubLink && githubLink !== "#" && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconBrandGithub className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                )}
                {youtubeLink && youtubeLink !== "#" && (
                  <a
                    href={youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-xs transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconBrandYoutube className="w-3 h-3" />
                    <span>YouTube</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <article
          className={`relative p-3 transition-opacity duration-1000 ease-in-out group-hover:opacity-0 ${
            isCurrentSlide ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-base font-semibold relative text-center">
            {title}
          </h2>
        </article>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(1); // Start at 1 (first real slide)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLUListElement>(null);

  // Create circular slides array with clones
  const circularSlides = [
    slides[slides.length - 1], // Clone of last slide at beginning
    ...slides, // Original slides
    slides[0], // Clone of first slide at end
  ];

  const handlePreviousClick = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrent(prev => prev - 1);
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrent(prev => prev + 1);
  };

  const handleSlideClick = (originalIndex: number) => {
    if (isTransitioning) return;
    
    // Find the real slide index (add 1 because of the clone at the beginning)
    const targetIndex = originalIndex + 1;
    if (current !== targetIndex) {
      setIsTransitioning(true);
      setCurrent(targetIndex);
    }
  };

  // Handle seamless looping
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      if (current === 0) {
        // We're at the clone of the last slide, jump to the real last slide
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          // Temporarily set transform to the real last slide position
          const slideWidth = 100 / slides.length;
          const lastSlideTransform = slides.length * slideWidth; // Account for clone at beginning
          carouselRef.current.style.transform = `translateX(-${lastSlideTransform}%)`;
        }
        setCurrent(slides.length);
        // Small delay to ensure the DOM update completes
        requestAnimationFrame(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = '';
          }
        });
        setIsTransitioning(false);
      } else if (current === slides.length + 1) {
        // We're at the clone of the first slide, jump to the real first slide
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
          // Temporarily set transform to the first slide position
          const slideWidth = 100 / slides.length;
          const firstSlideTransform = 1 * slideWidth; // Account for clone at beginning
          carouselRef.current.style.transform = `translateX(-${firstSlideTransform}%)`;
        }
        setCurrent(1);
        // Small delay to ensure the DOM update completes
        requestAnimationFrame(() => {
          if (carouselRef.current) {
            carouselRef.current.style.transition = '';
          }
        });
        setIsTransitioning(false);
      } else {
        setIsTransitioning(false);
      }
    }, 300); // Match this with transition duration

    return () => clearTimeout(timer);
  }, [current, slides.length, isTransitioning]);

  const id = useId();

  // Calculate transform to show slight portions of adjacent slides
  const getTransformX = () => {
    // Use original slides length for calculations to maintain consistent visibility
    const slideWidth = 100 / slides.length;
    // Since we have a clone at the beginning, we need to account for that
    // current = 1 should show the first real slide (index 1 in circularSlides)
    // So we need to translate by the width of one slide to skip the clone
    const baseTransform = current * slideWidth; // This will properly position the slides
    return baseTransform;
  };

  return (
    <div
      className="relative w-full h-full max-h-[18rem] overflow-hidden flex flex-col justify-center"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <div className="relative h-56 overflow-hidden">
        <ul
          ref={carouselRef}
          className="absolute flex h-full items-center"
          style={{
            transform: `translateX(-${getTransformX()}%)`,
            transition: isTransitioning ? 'transform 300ms ease-in-out' : 'none',
            width: `${slides.length * 100}%`, // Base width on original slides count
            gap: '0.0rem',
          }}
        >
          {circularSlides.map((slide, index) => {
            // Determine if this is a clone and what the original index is
            let isClone = false;
            let originalIndex = index;
            
            if (index === 0) {
              // Clone of last slide at beginning
              isClone = true;
              originalIndex = slides.length - 1;
            } else if (index === circularSlides.length - 1) {
              // Clone of first slide at end
              isClone = true;
              originalIndex = 0;
            } else {
              // Regular slide
              originalIndex = index - 1;
            }

            return (
              <div
                key={isClone ? `slide-wrapper-clone-${originalIndex}` : `slide-wrapper-${index}`}
                style={{
                  minWidth: `${100 / slides.length}%`, // Base width on original slides count
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Slide
                  key={isClone ? `clone-${originalIndex}` : index}
                  slide={slide}
                  index={index}
                  current={current}
                  handleSlideClick={handleSlideClick}
                  isClone={isClone}
                  originalIndex={originalIndex}
                />
              </div>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-center w-full mt-3">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

export default Carousel; 