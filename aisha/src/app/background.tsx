"use client";

import { useEffect, useState } from "react";

const Background = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Generate random sparkles
    const count = 25; // number of stars
    const newSparkles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() > 0.7 ? "w-1.5 h-1.5" : "w-1 h-1", // small variation
      delay: `${Math.random() * 5}s`, // random animation delay
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-blue-950 opacity-70"></div>

      {/* Animated blobs */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-violet-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-6000"></div>
      </div>

      {/* Dynamic Sparkles */}
      <div className="absolute inset-0">
        {sparkles.map((s) => (
          <div
            key={s.id}
            className={`absolute ${s.size} bg-white rounded-full animate-sparkle`}
            style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          ></div>
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-radial from-white/10 via-transparent to-transparent blur-3xl"></div>

      {/* Top fade overlay */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black via-black/50 to-transparent"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-sparkle {
          animation: sparkle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Background;
