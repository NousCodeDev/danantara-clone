import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const VisiMission = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [setHasAnimated] = useState(false);

  const missions = [
    {
      id: 1,
      misi: "Mengelola kekayaan negara secara profesional, transparan, dan berkelanjutan sesuai dengan prinsip good governance untuk mendorong kesejahteraan rakyat, sebagaimana diamanatkan dalam Pasal 33 Ayat 3 UUD 1945 dan misi Asta Cita.",
    },
    {
      id: 2,
      misi: "Mengoptimalkan dan mengelola aset BUMN untuk menciptakan nilai tambah ekonomi yang signifikan.",
    },
    {
      id: 3,
      misi: "Menjadi katalisator pertumbuhan ekonomi nasional melalui investasi strategis di sektor prioritas yang mendorong daya saing global.",
    },
    {
      id: 4,
      misi: "Menarik dan mengakselerasi investasi domestik maupun internasional dengan membangun kemitraan strategis guna mendukung pembangunan nasional yang inklusif dan berkelanjutan.",
    },
    {
      id: 5,
      misi: "Membangun institusi Sovereign Wealth Fund yang mandiri dan unggul, dengan tata kelola keuangan yang sehat serta berorientasi pada keberlanjutan jangka panjang.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  });

  return (
    <div className="bg-gray-200 py-16 lg:py-12 overflow-hidden" id="visi-misi" ref={sectionRef}>
      <div className="pt-8 sm:pt-12 md:pt-16">
        <div className="container m-auto px-4 sm:px-6">
          <div className="flex justify-center items-center">
            <div className={`w-full md:w-10/12 lg:w-8/12 xl:w-6/12 py-5 px-2 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm">
                <h1 className={`text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 font-bold text-center text-black/90 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
                  Visi <span className="text-red-900">Kami</span>{" "}
                </h1>
                <p className={`text-center md:text-left text-[#374151] text-sm sm:text-base transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  Sebagai pengelola investasi terkemuka, di mana BUMN strategis akan menjadi enabler penempatan investasinya, Danantara Indonesia mendorong transformasi ekonomi Indonesia dengan menumbuhkan badan Sovereign Wealth Fund berskala dunia, mendukung pembangunan nasional dan menciptakan
                  kemakmuran bagi seluruh rakyat Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-8 sm:pb-10 md:pb-14">
        <h1 className={`text-center py-8 sm:py-10 md:py-12 text-3xl sm:text-4xl md:text-[50px] font-bold transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          Misi <span className="text-red-900">Kami</span>{" "}
        </h1>

        <div className="flex justify-center items-center">
          <div className={`w-full sm:w-11/12 md:w-10/12 lg:w-4/5 px-4 sm:px-0 mt-4 sm:mt-6 md:mt-8 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                540: {
                  spaceBetween: 20,
                  slidesPerView: 1,
                },
                768: {
                  spaceBetween: 24,
                  slidesPerView: 2,
                },
                1024: {
                  spaceBetween: 28,
                  slidesPerView: 2,
                },
              }}>
              {missions.map((mission, index) => (
                <SwiperSlide key={mission.id}>
                  <div
                    className={`group relative bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:border-red-900 min-h-full flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{
                      transitionDelay: isVisible ? `${1100 + index * 200}ms` : "0ms",
                    }}>
                    <p className="text-sm sm:text-base text-gray-500 leading-6 transition-all duration-500 group-hover:text-gray-800 mb-8">{mission.misi}</p>

                    {/* Mission number in bottom-right corner */}
                    <div className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-red-900 text-white font-bold rounded-full text-sm sm:text-base transition-all duration-300 group-hover:bg-red-800 group-hover:scale-110">{mission.id}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={`flex justify-center items-center mt-8 sm:mt-12 md:mt-16 transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-10">
            <button onClick={() => swiperRef.current?.swiper.slidePrev()} className="group flex justify-center items-center border border-solid border-red-900 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-500 rounded-lg hover:bg-red-900 cursor-pointer">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-900 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => swiperRef.current?.swiper.slideNext()} className="group flex justify-center items-center border border-solid border-red-900 w-10 h-10 sm:w-12 sm:h-12 transition-all duration-500 rounded-lg hover:bg-red-900 cursor-pointer">
              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-900 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
