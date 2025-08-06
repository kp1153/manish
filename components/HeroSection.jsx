"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

const images = Array.from({ length: 10 }, (_, i) => `/${i + 1}.jpeg`);

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-white text-blue-600 overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover object-center px-6"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center min-h-screen px-6 lg:px-20">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Connecting Visions,{" "}
              <span className="text-blue-400">Crafting Experiences</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Delivering Seamless Corporate Events, Globally
            </p>
            <p className="text-lg text-gray-300">
              Tailored Incentive Travel & Business Conferences with Impact
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105">
                Plan Your Next Conference
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all">
                Schedule a Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">200+</div>
                <div className="text-gray-300 text-sm">Corporate Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-300 text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">6</div>
                <div className="text-gray-300 text-sm">MICE Destinations</div>
              </div>
            </div>
          </div>

          {/* Right CTA Visual */}
          <div className="flex justify-center lg:justify-end">
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all">
              <Play className="w-8 h-8 text-white fill-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 ${
              index === current
                ? "bg-white w-8 h-3 rounded-full"
                : "bg-white/50 hover:bg-white/75 w-3 h-3 rounded-full"
            }`}
          />
        ))}
      </div>

      {/* Services Section */}
      <div className="relative z-20 bg-white text-slate-900 py-20 px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-2">
              Full-Service Conference Production
            </h3>
            <p className="text-gray-700">
              End-to-end management: venue sourcing, AV setup, registration,
              branding.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-2">
              Incentive & Offsite Programs
            </h3>
            <p className="text-gray-700">
              Destination experiences aligned with corporate goals.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold mb-2">
              Meeting Coordination
            </h3>
            <p className="text-gray-700">
              Logistics, scheduling, speaker liaison and onsite assistance.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-20 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Ready to Elevate Your Next Event?
        </h2>
        <p className="text-blue-700 mb-8">
          Let us help you craft an unforgettable experience tailored to your
          goals.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold">
          Request Proposal
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-lg font-semibold mb-4">Connektpro</h4>
            <p className="text-gray-400 text-sm">
              Connecting Visions, Crafting Experiences for corporate MICE events
              across India.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Services</li>
              <li>Packages</li>
              <li>Venues</li>
              <li>Case Studies</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-400 text-sm">
              LinkedIn | Instagram | YouTube
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">
          &copy; {new Date().getFullYear()} Connektpro. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
