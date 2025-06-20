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
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
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

  return (
    <div className="[perspective:600px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-72 h-56 mx-2 z-0 group cursor-pointer"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
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
              current === index
                ? "translate3d(calc(var(--x) / 50), calc(var(--y) / 50), 0)"
                : "none",
          }}
        >
          <Image
            className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.7,
            }}
            alt={title}
            src={src}
            fill
            onLoad={imageLoaded}
            priority
          />
          {current === index && (
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
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
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
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-full h-full max-h-[18rem] overflow-hidden flex flex-col justify-center"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <div className="relative h-56 overflow-hidden">
        <ul
          className="absolute flex mx-[-0.5rem] transition-transform duration-1000 ease-in-out h-full items-center"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
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