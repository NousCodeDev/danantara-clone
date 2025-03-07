import React, { useState, useEffect } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsClicked(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const buttonStyles = {
    position: "fixed",
    bottom: "1.5rem",
    right: "1.5rem",
    zIndex: 50,
    padding: "0.75rem",
    borderRadius: "9999px",
    backgroundColor: "#7f1d1d",
    color: "white",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: "all 500ms ease",
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
    pointerEvents: isVisible ? "all" : "none",
    animation: isClicked ? "pulseZoom 500ms ease-in-out" : "none",
  };

  const arrowStyles = {
    height: "1.5rem",
    width: "1.5rem",
    animation: isClicked ? "none" : undefined,
  };

  return (
    <>
      <style>
        {`
          @keyframes pulseZoom {
            0% { transform: scale(1); }
            50% { transform: scale(0.9); background-color: #7f1d1d; }
            100% { transform: scale(1); }
          }
          
          @keyframes floatArrow {
            0% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
          
          .scroll-top-btn:hover {
            background-color: #991b1b;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
          }
          
          .scroll-top-btn:hover .arrow-icon {
            animation: floatArrow 1.5s ease-in-out infinite;
          }

          /* Responsive Styles */
          @media (max-width: 640px) {
            .scroll-top-btn {
              bottom: 1rem;
              right: 1rem;
              padding: 0.5rem;
            }
            .arrow-icon {
              height: 1.25rem;
              width: 1.25rem;
            }
          }
        `}
      </style>

      <button onClick={scrollToTop} aria-label="Scroll to top" className="scroll-top-btn cursor-pointer" style={buttonStyles}>
        <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" style={arrowStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
};

export default ScrollToTop;
