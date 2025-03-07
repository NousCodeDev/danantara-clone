import React, { useRef, useEffect, useState } from "react";
import AboutImage from "../assets/danantara-company.jpg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div ref={sectionRef} className="lg:py-32 py-28 lg:px-24 px-6 overflow-hidden" id="tentang-kami">
      <div className="container m-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Image Section - Moved to the top in mobile view */}
          <div
            className={`lg:w-5/12 transition-all duration-1000 ease-out order-1 lg:order-2
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}>
            <img
              src={AboutImage}
              alt="Danantara Company"
              className={`rounded-3xl w-full lg:w-[600px] lg:h-[500px] object-cover
                transition-all duration-1000 ease-out delay-500
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}
              style={{
                transform: isVisible && window.innerWidth >= 1024 ? "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)" : "scale(1)",
              }}
            />
          </div>

          {/* Text Section */}
          <div
            className={`lg:w-6/12 transition-all duration-1000 ease-out order-2 lg:order-1
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}>
            <p
              className={`transition-all duration-1000 ease-out delay-200
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}>
              Tentang Kami
            </p>
            <h1
              className={`text-4xl font-bold leading-tight mb-5 capitalize
              transition-all duration-1000 ease-out delay-300
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}>
              DANANTARA <span className="text-red-900">INDONESIA</span>
            </h1>
            <p
              className={`text-[16px] text-[#374151]
              transition-all duration-1000 ease-out delay-500
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}>
              <b>Badan Pengelola Investasi Daya Anagata Nusantara (Danantara Indonesia) adalah badan pengelola investasi strategis yang mengonsolidasikan dan mengoptimalkan investasi pemerintah untuk mendukung pertumbuhan ekonomi nasional.</b> Nama "Daya Anagata Nusantara" diberikan langsung oleh
              Presiden Prabowo Subianto. "Daya" berarti energi, "Anagata" berarti masa depan, dan "Nusantara" merujuk pada Negara Kesatuan Republik Indonesia, yang secara keseluruhan mencerminkan kekuatan dan potensi masa depan Indonesia.
            </p>
            <p
              className={`mt-5 text-[#374151]
              transition-all duration-1000 ease-out delay-700
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}>
              Untuk mencapai tujuan strategisnya, <b>Danantara Indonesia berkomitmen untuk mendorong transformasi ekonomi dengan pendekatan profesional dan menerapkan good governance.</b> Danantara Indonesia berkomitmen untuk meningkatkan efisiensi aset, menarik investasi global, dan memperkuat daya
              saing Indonesia di sektor strategis, sehingga menciptakan kemakmuran yang merata bagi seluruh rakyat Indonesia.
            </p>

            <div
              className={`py-5 mt-5 transition-all duration-1000 ease-out delay-1000
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}>
              <a href="#perjalanan-kami" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                  <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Lihat Perjalanan Kami</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
