import React, { useState, useEffect, useRef } from "react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, 
        rootMargin: "-50px", 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} id="narahubung" className="bg-red-900 overflow-hidden">
      <div className="container px-6 lg:py-12 mx-auto py-24">
        <div className={`text-center transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h1 className="mt-2 text-2xl font-semibold text-gray-200 md:text-3xl">Hubungi Kami</h1>
          <p className="mt-3 text-gray-200">Our friendly team is always here to chat.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "fa-solid fa-envelope",
              title: "Email",
              text: "contact@danantaraindonesia.com",
            },
            {
              icon: "fa-solid fa-map",
              title: "Kantor",
              text: "Jl. RP. Soeroso No.2-4, RT.10/RW.5, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
            },
            {
              icon: "fa-solid fa-house",
              title: "Official Website",
              text: "https://www.danantara.id",
              isLink: true,
            },
          ].map((item, index) => (
            <div key={index} className={`flex flex-col items-center justify-center text-center transition-all duration-700 transform hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}>
              <div className="flex items-center justify-center w-16 h-16 text-red-900 rounded-full bg-gray-200 transition-transform duration-300 hover:scale-110">
                <i className={`${item.icon} text-[25px]`}></i>
              </div>

              <h2 className="mt-4 text-lg font-medium text-gray-200">{item.title}</h2>
              {item.isLink ? (
                <a href={item.text} target="_blank" rel="noopener noreferrer" className="mt-2 text-gray-300/80 hover:text-white transition-colors duration-300">
                  {item.text}
                </a>
              ) : (
                <p className="mt-2 text-gray-300/80">{item.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
