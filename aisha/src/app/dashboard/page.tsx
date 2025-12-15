"use client";

import React from "react";
import {
  Home,
  MessageCircle,
  BarChart3,
  ShoppingCart,
  Link as LinkIcon,
  Settings,
} from "lucide-react";
import Image from "next/image";

export default function CreatorDashboard() {
  const metrics = [
    { label: "Today's conversations", value: "50" },
    { label: "Completed orders", value: "10" },
    { label: "Ghosting cases", value: "3" },
    { label: "Today's Revenue", value: "KSH 23,750" },
  ];

  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: MessageCircle, label: "Conversations" },
    { icon: BarChart3, label: "Analytics" },
    { icon: ShoppingCart, label: "Orders" },
    { icon: LinkIcon, label: "Link WhatsApp" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-[#E8F5E9] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a5f3f] text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-green-700">
          <div className="flex items-center gap-3">
            <Image
              src="/aisha_official_logo.png"
              alt="Aisha Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h1 className="text-xl font-bold">Logo</h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="text-xs uppercase text-green-300 mb-4 px-2">MAIN</div>
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                      item.active
                        ? "bg-green-700 text-white"
                        : "text-green-200 hover:bg-green-800 hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#C8E6C9] p-8">
        <div className="max-w-7xl mx-auto border-2 border-blue-400 rounded-lg p-6 bg-[#C8E6C9]">
          {/* Title */}
          <h1 className="text-3xl font-bold text-[#1a5f3f] text-center mb-8">
            Creator dashboard
          </h1>

          {/* Welcome Banner */}
          <div className="bg-[#A5D6A7] rounded-lg p-4 mb-6 border border-[#1a5f3f]">
            <p className="text-[#1a5f3f] text-lg">
              Hi Sharleen! 👋 Aisha handled 15 chats in your absence. Karibu!
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-[#C8E6C9] border-2 border-[#1a5f3f] rounded-lg p-6 text-center"
              >
                <p className="text-sm text-[#1a5f3f] mb-2">{metric.label}</p>
                <p className="text-2xl font-bold text-[#1a5f3f]">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-[#1a5f3f] mb-4">
              Start your free trial to access the complete Aisha dashboard
            </p>
            <button className="px-8 py-3 bg-[#1a5f3f] text-white rounded-md font-semibold hover:bg-[#0d3d26] transition">
              Start free trial
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

