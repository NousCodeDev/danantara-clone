import React, { useState, useEffect } from "react";
import DanantaraLogo from "../assets/danantara-logo.png";

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2700); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-200 z-50 transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <div
        style={{
          animation: "spin 2s ease-in-out infinite",
          transformOrigin: "center",
        }}>
        <img
          src={DanantaraLogo}
          alt="Danantara Logo"
          className="w-32 h-32 object-contain"
          style={{
            filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))",
          }}
        />
      </div>
      <style>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.2);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
};
