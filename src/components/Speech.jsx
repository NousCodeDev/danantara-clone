import React, { useEffect, useRef, useState } from "react";
import PresidentPicture from "../assets/prabowo-bingkai.png";

export const Speech = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasAnimated(true);
          } else {
            setIsVisible(false);
            setTimeout(() => {
              if (!entry.isIntersecting) {
                setHasAnimated(false);
              }
            }, 300);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <div className="bg-white py-8 sm:py-12 md:py-16" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* President Image with Enhanced Animation */}
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 overflow-hidden">
            <div className="relative overflow-hidden rounded-xl">
              <img src={PresidentPicture} alt="President Prabowo" className={`w-full transition-all duration-1500 ease-custom hover:scale-105 cursor-pointer ${isVisible && !hasAnimated ? "animate-appear" : isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} />
            </div>
          </div>

          {/* Text and Button with Staggered Animation */}
          <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start space-y-6 md:space-y-8">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left text-black/90 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              "Semua kekayaan kita harus sebesar-besarnya untuk kepentingan dan kemakmuran rakyat kita (rakyat Indonesia)."
            </h1>

            <div className={`p-4 sm:p-5 bg-black/90 text-white border-l-4 sm:border-l-8 border-red-900 rounded-xl w-full transition-all duration-700 ease-out delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="text-center lg:text-left text-sm sm:text-base">Pidato Presiden Prabowo Subianto pada Sidang Paripurna MPR RI dalam rangka Pelantikan Presiden dan Wakil Presiden RI Terpilih Periode 2024-2029</p>
            </div>

            {/* Button with Enhanced Animation */}
            <a
              href="#visi-misi"
              className={`relative inline-flex items-center px-8 sm:px-12 py-2 sm:py-3 overflow-hidden text-base sm:text-lg font-medium text-red-900 border-2 border-red-900 rounded-full hover:text-white group hover:bg-gray-50 transition-all duration-700 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
              <span className="absolute left-0 block w-full h-0 transition-all bg-red-900 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-8 h-8 sm:w-10 sm:h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="relative">Lihat Visi & Misi</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for Animations */}
      <style>
        {`
          /* Custom ease function for smoother animations */
          .ease-custom {
            transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          
          /* Image appearance animation */
          @keyframes appear {
            0% { 
              opacity: 0;
              transform: scale(0.9) rotate(-5deg); 
              filter: blur(10px);
            }
            30% {
              filter: blur(0);
            }
            100% { 
              opacity: 1;
              transform: scale(1) rotate(0deg);
              filter: blur(0);
            }
          }
          
          .animate-appear {
            animation: appear 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          
          /* Override Tailwind's duration for more specific control */
          .duration-1500 {
            transition-duration: 1500ms;
          }
        `}
      </style>
    </div>
  );
};
