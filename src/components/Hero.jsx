import React, { useRef, useEffect, useState } from "react";
import HeroImage from "../assets/hero-children-indo.png";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className={`
        h-[80vh] flex justify-around items-center w-full bg-center object-cover bg-no-repeat bg-cover relative
        transition-opacity duration-1000 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      style={{ backgroundImage: `url(${HeroImage})` }}
      id="hero">
      <div className="absolute inset-0 bg-black/50"></div>
      <div
        className={`
          text-center text-white relative z-10
           duration-1000 ease-out
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}>
        <h1
          className={`
            text-[16px] text-white
            transition-transform duration-700 ease-out
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}>
          Daya Anagata Nusantara
        </h1>
        <h1
          className={`
            text-[50px] uppercase font-bold text-white/60
            transition-transform duration-900 ease-out delay-200
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}>
          Danantara Indonesia
        </h1>
        <p
          className={`
            text-[20px] mb-10
            transition-transform duration-900 ease-out delay-400
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}>
          "Untuk Kemakmuran Indonesia"
        </p>
        <a
          href="#tentang-kami"
          className={`
            relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group
            transition-transform duration-900 ease-out delay-600
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}>
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-red-900">Jelajahi Kami</span>
          <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
      </div>
    </div>
  );
};
