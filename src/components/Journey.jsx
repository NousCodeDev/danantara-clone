import React, { useState, useEffect } from "react";
import IndonesiaMapBackground from "../assets/indonesia-flag.png";

export const Journey = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("perjalanan-kami");
    if (section) {
      const rect = section.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#121214] flex justify-center items-center lg:py-32 py-32 w-full relative bg-top bg-no-repeat bg-cover" id="perjalanan-kami" style={{ backgroundImage: `url(${IndonesiaMapBackground})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-red-950/85"></div>

      {/* Konten */}
      <div className={`w-[90%] md:w-[65rem] text-center relative z-10 transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h1 className="mb-7 text-[24px] md:text-[32px] text-white font-bold uppercase">Perjalanan Menggapai Kemakmuran Indonesia</h1>
        <p className="text-[20px] md:text-[40px] text-white font-big-shoulders-inline font-semibold">
          "Setiap aset dan sumber daya negara harus dikelola secara efektif dan tepat sasaran agar manfaatnya dapat langsung dirasakan oleh seluruh rakyat Indonesia, sesuai dengan upaya mengoptimalkan pengamalan mandat Pasal 33 Ayat 3 Undang Undang Dasar 1945 serta Misi Asta Cita terkait pengelolaan
          kekayaan negara"
        </p>
      </div>
    </div>
  );
};
