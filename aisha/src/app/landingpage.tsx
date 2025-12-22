"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MessageCircle,
  Ghost,
  DollarSign,
  Flag,
  BarChart3,
  Clock,
  Check,
  X,
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  User,
  Link as LinkIcon,
  Settings,
  ShoppingCart,
  Home,
  Calendar,
} from "lucide-react";

export default function LandingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const features = [
    {
      icon: MessageCircle,
      title: "WhatsApp Automation",
      description: "Auto-respond to inquiries, calculate totals, and send payment links directly through WhatsApp",
    },
    {
      icon: Ghost,
      title: "Ghosting Prevention",
      description: "Detect when client go silent and send gentle follow-ups to recover lost sales",
    },
    {
      icon: DollarSign,
      title: "Transactional Support",
      description: "Automated order calculations, payment processing, and shipping coordination - so you can focus on your business, not paperwork",
    },
    {
      icon: Flag,
      title: "Kenyan personality",
      description: "Warm, authentic communication with local phrases that build trust with your customers",
    },
    {
      icon: BarChart3,
      title: "Smart Analytics",
      description: "Track conversions, response times, and customer engagement all in one dashboard",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry, even when you're sleeping or taking personal time",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      icon: "📄",
      title: "Register Business",
      description: "Full legal registration ensures you can focus on growing your business",
    },
    {
      step: 2,
      icon: "🔗",
      title: "Connect and customize",
      description: "Link your WhatsApp Business & customize Aisha's voice",
    },
    {
      step: 3,
      icon: "🤖",
      title: "Automate",
      description: "Aisha handles FAQs, bookings & updates around the clock",
    },
    {
      step: 4,
      icon: "📈",
      title: "Focus and grow",
      description: "Reclaim 10+ hours/week to focus on your craft",
    },
  ];

  const testimonials = [
    {
      name: "Eve Mipata",
      role: "Web developer, Nairobi",
      image: "👩",
      rating: 5,
      text: "As a freelance developer, Aisha manages client inquiries, project timelines, and milestone payments. I've reduced administrative time by 80% and doubled my client capacity!",
    },
    {
      name: "Zuri Bakers",
      role: "Zuri Bakers, Thika",
      image: "🎂",
      rating: 5,
      text: "Aisha takes cake orders, manages delivery schedules, and handles special dietary requests. I went from 5 to 25 orders per week without the stress of constant messaging!",
    },
    {
      name: "Agro-Farmers",
      role: "Agro-Farmers Company, Kisumu",
      image: "🌱",
      rating: 5,
      text: "Aisha manages my milk orders, coordinates with delivery riders, and sends payment reminders to customers. No more missed orders or payment delays. I've doubled my regular customers in 2 months!",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      monthlyPrice: 500,
      yearlyPrice: 400,
      features: [
        { text: "Up to 50 client conversations/month", included: true },
        { text: "Basic inquiry management", included: true },
        { text: "Standard Kenyan personality responses", included: true },
        { text: "Payment confirmation (20 transactions)", included: true },
        { text: "Basic analytics dashboard", included: true },
        { text: "WhatsApp integration", included: true },
        { text: "Email support", included: true },
        { text: "Automated follow-ups", included: false },
        { text: "Limited AI training", included: false },
        { text: "Basic reporting only", included: false },
      ],
    },
    {
      name: "Premium",
      description: "Designed for growing business",
      monthlyPrice: 1000,
      yearlyPrice: 800,
      popular: true,
      features: [
        { text: "300 client conversations/month", included: true },
        { text: "Advanced ghosting prevention", included: true },
        { text: "Automated follow-up sequences", included: true },
        { text: "Payment link integration (M-Pesa)", included: true },
        { text: "Shipping coordination", included: true },
        { text: "Priority AI personality training", included: true },
        { text: "Enhanced analytics dashboard", included: true },
        { text: "Phone & email support", included: true },
        { text: "Custom response templates", included: true },
      ],
    },
    {
      name: "Pro",
      description: "Perfect for established businesses",
      monthlyPrice: 2000,
      yearlyPrice: 1600,
      features: [
        { text: "Unlimited conversations", included: true },
        { text: "Custom AI personality tuning", included: true },
        { text: "Multi-user access", included: true },
        { text: "Advanced reporting & insights", included: true },
        { text: "Priority onboarding", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "API access (future)", included: true },
        { text: "Custom workflow automation", included: true },
        { text: "White-label options", included: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#D5EEDA]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 bg-[#D5EEDA] sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Image
            src="/aisha_official_logo.png"
            alt="Aisha Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold text-[#1a5f3f]">Aisha</h1>
        </div>

        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-[#1a5f3f] font-semibold">
          <li className="cursor-pointer hover:text-[#0d3d26]">Home</li>
          <li className="cursor-pointer hover:text-[#0d3d26]">Features</li>
          <li className="cursor-pointer hover:text-[#0d3d26]">Testimonials</li>
          <li className="cursor-pointer hover:text-[#0d3d26]">About us</li>
          <li className="cursor-pointer hover:text-[#0d3d26]">Pricing</li>
        </ul>

        <div className="flex space-x-2 md:space-x-4">
          <button className="px-4 md:px-5 py-2 rounded-md border border-[#1a5f3f] text-[#1a5f3f] font-semibold hover:bg-[#1a5f3f] hover:text-white transition">
            Login
          </button>
          <button className="px-4 md:px-5 py-2 rounded-md bg-[#1a5f3f] text-white font-semibold hover:bg-[#0d3d26] transition">
            Get started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-lg mb-8 lg:mb-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a5f3f] leading-tight">
            Your 24/7 WhatsApp sales Assistant
          </h2>
          <p className="text-base md:text-lg text-[#1a5f3f] mt-4">
            Karibu to effortless client care, Aisha handles the hustle and lets
            you focus on what you love.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button className="px-6 py-3 bg-[#1a5f3f] text-white rounded-md font-semibold hover:bg-[#0d3d26] transition">
              Start free trial
            </button>
            <button className="px-6 py-3 bg-[#1a5f3f] text-white rounded-md font-semibold hover:bg-[#0d3d26] transition flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              View Dashboard
            </button>
            <button className="px-6 py-3 bg-[#1a5f3f] text-white rounded-md font-semibold hover:bg-[#0d3d26] transition">
              See how it works
            </button>
          </div>
        </div>

        <div className="w-full lg:w-auto flex justify-center">
          <Image
            src="/aisha_right_logo.png"
            alt="Aisha chatbot and user"
            width={400}
            height={400}
            className="w-full max-w-[400px] h-auto"
          />
        </div>
      </section>

      {/* Businesses Section */}
      <section className="px-6 md:px-10 py-8">
        <p className="text-center text-[#1a5f3f] mb-6">
          Aisha has empowered several businesses across Kenya
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
          {/* Business logos placeholder - you can replace with actual logos */}
          <div className="text-[#1a5f3f] font-semibold">THE EN HUT</div>
          <div className="text-[#1a5f3f] font-semibold">NIHAL ELEGANCE</div>
          <div className="text-[#1a5f3f] font-semibold">Bamburi cement</div>
          <div className="text-[#1a5f3f] font-semibold">KAKUZI</div>
          <div className="text-[#1a5f3f] font-semibold">LUSH Hair</div>
          <div className="text-[#1a5f3f] font-semibold">TEXTILE</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-10 py-16 bg-[#D5EEDA]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a5f3f] text-center mb-12">
          Aisha is designed for creaters like You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#1a5f3f] rounded-lg p-6 text-white hover:transform hover:scale-105 transition-transform"
              >
                <IconComponent className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-200">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Value Comparison Section */}
      <section className="px-6 md:px-10 py-16 bg-[#D5EEDA]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="text-sm text-[#1a5f3f] mb-4 md:mb-0">
              <p>14-day free trial with full features</p>
              <p>No credit card required.</p>
            </div>
            <div className="text-sm text-[#1a5f3f] text-right">
              <p>Pay via M-Pesa, bank transfer, or card</p>
              <p>Instant activation.</p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1a5f3f] text-center mb-12">
            Incredible Value for creators
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-2 border-blue-500 rounded-lg p-8 bg-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1a5f3f] mb-4">
                Traditional secretary
              </h3>
              <div className="text-4xl font-bold text-amber-700 mb-2">
                KES 10,000+
              </div>
              <p className="text-sm text-gray-600 mb-6">per month</p>
              <ul className="text-left space-y-2 text-[#1a5f3f]">
                <li className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  8-hour work day limitations
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  Training required
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  Additional benefits costs
                </li>
                <li className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  Limited scalability
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1a5f3f] mb-4">
                Aisha assistant
              </h3>
              <div className="text-4xl font-bold text-green-600 mb-2">
                From KES 500
              </div>
              <p className="text-sm text-gray-600 mb-6">per month</p>
              <ul className="text-left space-y-2 text-[#1a5f3f]">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  24/7 availability
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  No training needed
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  instant setup
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  90% cost saving
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Aisha Works Section */}
      <section className="px-6 md:px-10 py-16 bg-[#D5EEDA]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a5f3f] text-center mb-12">
          How Aisha works
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {howItWorks.map((step, index) => (
              <React.Fragment key={step.step}>
                <div className="flex-1 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#1a5f3f] text-white flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <h3 className="text-xl font-bold text-[#1a5f3f] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#1a5f3f]">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <ArrowRight className="w-8 h-8 text-[#1a5f3f] hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="text-center space-y-2 mt-8">
            <p className="text-[#1a5f3f]">
              She automatically handles routine inquiries while you focus on
              growth—keeping customers happy and your workload manageable
            </p>
            <p className="text-[#1a5f3f] font-bold">
              All it takes is a few simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 md:px-10 py-16 bg-[#D5EEDA]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a5f3f] text-center mb-12">
          What people are saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 border-2 border-[#1a5f3f] rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1a5f3f] flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-[#1a5f3f]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-green-600">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#1a5f3f]">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 md:px-10 py-16 bg-[#D5EEDA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5f3f] mb-4">
              Find Your Perfect Plan
            </h2>
            <p className="text-[#1a5f3f] mb-6">
              All plans include our core features to get you started. Upgrade
              anytime.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md font-semibold transition ${
                  billingCycle === "monthly"
                    ? "bg-[#1a5f3f] text-white"
                    : "bg-white text-[#1a5f3f] border border-[#1a5f3f]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-md font-semibold transition ${
                  billingCycle === "yearly"
                    ? "bg-[#1a5f3f] text-white"
                    : "bg-white text-[#1a5f3f] border border-[#1a5f3f]"
                }`}
              >
                Yearly
              </button>
              <span className="text-green-600 text-sm font-semibold">
                Save 20%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg border-2 ${
                  plan.popular
                    ? "border-[#1a5f3f] relative"
                    : "border-gray-300"
                } p-6`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mostly used
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#1a5f3f] mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-green-600">
                    KSH {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "text-[#1a5f3f]"
                            : "text-gray-400 line-through"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-[#1a5f3f] text-white rounded-md font-semibold hover:bg-[#0d3d26] transition">
                  Start free trial
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-[#1a5f3f]">
            <div>
              <p>14-day free trial with full features</p>
              <p>No credit card required.</p>
            </div>
            <div>
              <p>Pay via M-Pesa, bank transfer, or card</p>
              <p>Instant activation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-10 py-16 bg-[#D5EEDA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a5f3f] mb-4">
            Ready to Transform Your Client Communication?
          </h2>
          <p className="text-lg text-[#1a5f3f] mb-8">
            Join hundreds of solo creators and micro-business owners who are
            saving time and growing their businesses with Aisha
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-[#1a5f3f] text-white rounded-md font-semibold hover:bg-[#0d3d26] transition">
              Start your free trial
            </button>
            <button className="px-8 py-3 bg-[#1a5f3f] text-white rounded-md font-semibold hover:bg-[#0d3d26] transition flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              View Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a5f3f] text-white px-6 md:px-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-2">Aisha</h3>
              <p className="text-gray-300">
                Join thousands of creators who chose to automate.
              </p>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-green-400">Features</li>
                <li className="cursor-pointer hover:text-green-400">Testimonials</li>
                <li className="cursor-pointer hover:text-green-400">About</li>
                <li className="cursor-pointer hover:text-green-400">Pricing</li>
                <li className="cursor-pointer hover:text-green-400">Changelog</li>
                <li className="cursor-pointer hover:text-green-400">API documentation</li>
              </ul>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-4">Solution</h4>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-green-400">For creators</li>
                <li className="cursor-pointer hover:text-green-400">For builders</li>
                <li className="cursor-pointer hover:text-green-400">For E-commerce</li>
                <li className="cursor-pointer hover:text-green-400">For consultants</li>
              </ul>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-green-400">Help center</li>
                <li className="cursor-pointer hover:text-green-400">Case studies</li>
                <li className="cursor-pointer hover:text-green-400">Community</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-green-400 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-green-400">About Us</li>
                <li className="cursor-pointer hover:text-green-400">Contact us</li>
                <li className="cursor-pointer hover:text-green-400">Partners</li>
              </ul>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Email: everlinenemipata3@gmail.com</li>
                <li>Contact us: 254 798080246</li>
                <li>Address: 300623-0100, Nairobi, Kenya</li>
              </ul>
            </div>

            <div>
              <h4 className="text-green-400 font-semibold mb-4">Socials</h4>
              <div className="flex gap-4">
                <Linkedin className="w-6 h-6 cursor-pointer hover:text-green-400" />
                <Instagram className="w-6 h-6 cursor-pointer hover:text-green-400" />
                <Twitter className="w-6 h-6 cursor-pointer hover:text-green-400" />
                <Facebook className="w-6 h-6 cursor-pointer hover:text-green-400" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>© 2025 Aisha. All Rights Reserved</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="cursor-pointer hover:text-white">Privacy policy</span>
              <span className="cursor-pointer hover:text-white">Terms of service</span>
              <span className="cursor-pointer hover:text-white">Cookie policy</span>
              <span className="cursor-pointer hover:text-white">Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
