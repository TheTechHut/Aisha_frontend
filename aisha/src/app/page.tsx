"use client";

import { useState, useEffect } from "react";
import { Users, Calendar, CheckCircle } from "lucide-react";
import Image from "next/image";
import Background from "./background"; // adjust path if needed

export default function AishaWaitlist() {
  // State
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [interestedUsers, setInterestedUsers] = useState(247);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const launchDate: Date = new Date("2025-10-30T00:00:00");

  // Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  // Handlers
  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    const body: string = JSON.stringify({ username: formData.name, phone_number: formData.phone })
    if (!formData.name || !formData.phone) {
    
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("https://aishabackend-production.up.railway.app/waiting-list/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" , "Accept": "application/json" },
          body: body,
        }
      );
       
      console.log("API response status:", res.status);
      console.log("response body",body)

      if (!res.ok) {
        console.log("API response not ok:", res.statusText);
        throw new  Error("Failed to join waitlist");
      }

      console.log("Submitted to API:", formData);
      setIsSubmitted(true);
      setInterestedUsers((prev) => prev + 1);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "" });
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong, please try again!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background */}
      <Background />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-center space-y-12">
        {/* Launch Countdown */}
        <section>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-purple-400" />
            <h2 className="text-2xl font-semibold text-white">
              Launch Countdown
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-black/40 backdrop-blur-sm rounded-xl shadow-lg p-4 text-center border border-purple-500/20"
              >
                <div className="text-3xl font-bold text-purple-400">
                  {item.value}
                </div>
                <div className="text-sm text-gray-300 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Branding + Image */}
        <section>
          <Image
            src="/image-aisha.png"
            alt="Aisha Assistant"
            width={180}
            height={180}
            className="mx-auto mb-6 rounded-full shadow-lg"
          />
          <h1 className="text-5xl font-bold mb-3 text-white drop-shadow-lg">
            Aisha
          </h1>
          <p className="text-xl text-gray-200">
            Your 24/7 WhatsApp sales assistant
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto mt-2">
            Karibu to effortless client care. Aisha handles the hustle and lets
            you focus on what you love.
          </p>
        </section>

        {/* Waitlist Form */}
        <section>
          {!isSubmitted ? (
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Join the Waitlist
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-gray-400"
                  placeholder="Full Name"
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-gray-400"
                  placeholder="0712345678"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition duration-200 shadow-lg shadow-purple-500/50"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                You`&apos`re on the list!
              </h3>
              <p className="text-gray-300">
                We`&apos`ll notify you as soon as Aisha launches.
              </p>
            </div>
          )}
        </section>

        {/* Interested Users */}
        <section>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Users className="w-6 h-6 text-purple-400" />
            <div>
              <span className="text-3xl font-bold text-purple-400">
                {interestedUsers}
              </span>
              <span className="text-gray-300 ml-2">
                people already interested
              </span>
            </div>
          </div>
          <p className="text-center text-white text-sm mt-6 opacity-90 drop-shadow-lg">
            Be among the first to experience Aisha
          </p>
        </section>
      </div>
    </div>
  );
}
