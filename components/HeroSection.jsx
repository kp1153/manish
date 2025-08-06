"use client";

import {
  ArrowRight,
  Play,
  Mic,
  Briefcase,
  Users,
  Building,
  MapPin,
  Award,
  FileText,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const images = Array.from({ length: 8 }, (_, i) => `/${i + 1}.jpeg`);

const clients = [
  "amazon",
  "google",
  "microsoft",
  "tcs",
  "infosys",
  "accenture",
];

const downloadables = [
  {
    title: "Sample Conference Agenda",
    file: "sample-agenda.pdf",
    icon: FileText,
  },
  {
    title: "MICE Logistics Checklist",
    file: "logistics-checklist.pdf",
    icon: FileText,
  },
  {
    title: "ROI Best Practices Guide",
    file: "roi-case-study.pdf",
    icon: FileText,
  },
];

const testimonials = [
  {
    quote:
      "We organized a 200-person leadership summit in Jaipur with simultaneous translation and high-end catering. The execution was flawless, and our team was highly impressed.",
    client: "Global Tech Solutions",
    name: "Jane Doe, Head of Corporate Events",
  },
  {
    quote:
      "Our incentive trip for top sales performers to Rishikesh included adventure excursions and branded events. It was a huge success, boosting morale and performance.",
    client: "Fintech Innovators",
    name: "John Smith, VP of Sales",
  },
];

const featuredVenues = [
  {
    name: "The Leela Palace, Jaipur",
    image: "/venues/jaipur-leela.jpeg",
    location: "Jaipur, Rajasthan",
    features: ["Conference Hall", "Boardrooms", "A/V Tech", "Luxury Resort"],
  },
  {
    name: "JW Marriott Mussoorie",
    image: "/venues/marriott-mussoorie.jpeg",
    location: "Mussoorie, Uttarakhand",
    features: [
      "Team Building",
      "Scenic Views",
      "Spa & Wellness",
      "Breakout Rooms",
    ],
  },
  {
    name: "The Westin, Goa",
    image: "/venues/westin-goa.jpeg",
    location: "Goa",
    features: [
      "Beachfront",
      "Outdoor Events",
      "Large Capacity",
      "High-Speed Wi-Fi",
    ],
  },
];

const serviceHighlights = [
  {
    title: "Full-Service Conference Production",
    description:
      "From venue sourcing to A/V, registration & branding—we ensure flawless delivery.",
    icon: Mic,
  },
  {
    title: "Incentive & Offsite Programs",
    description:
      "Destination experiences tailored to corporate objectives and rewards.",
    icon: Award,
  },
  {
    title: "Meeting & Event Coordination",
    description:
      "We handle scheduling, logistics, speaker liaison, and real-time support.",
    icon: Briefcase,
  },
];

export default function ConnektproHeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-50 text-slate-800 font-sans">
      {/* Carousel Section (Images Only) */}
      <div className="relative h-screen overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay (optional, can be removed if no dimming effect is desired) */}
        <div className="absolute inset-0 bg-black/10 z-10" />

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
      </div>

      {/* Main Content Sections (Below Carousel) */}
      <div className="relative z-30">
        {/* Hero Content Block */}
        <div className="py-20 px-6 lg:px-24 bg-white -mt-20 relative z-40 rounded-t-3xl shadow-lg">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              <span className="text-blue-600">Elevating MICE:</span> Experience,
              Engagement, Excellence
            </h1>
            <p className="text-xl text-gray-600">
              Delivering Seamless Corporate Events, Globally
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all hover:scale-105">
                Request a Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-slate-300 text-slate-800 hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Corporate Logo Strip */}
        <div className="bg-white py-6 px-4 lg:px-24 border-t">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
            {clients.map((logo, idx) => (
              <img
                key={idx}
                src={`/logos/${logo}.svg`}
                alt={`${logo} logo`}
                className="w-full h-10 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-slate-50 py-20 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-2">
                Our MICE Services
              </h2>
              <p className="text-lg text-gray-600">
                Tailored solutions for conferences, incentives, and meetings.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {serviceHighlights.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border-l-4 border-blue-600 flex flex-col items-center text-center"
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-slate-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Venue Showcase */}
        <div className="bg-white py-20 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-2">
                Business-Ready Venues
              </h2>
              <p className="text-lg text-gray-600">
                Discover ideal destinations for your next corporate event.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredVenues.map((venue, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-slate-50 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition"
                >
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800">
                      {venue.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mt-2 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{venue.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {venue.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-slate-50 py-20 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-2">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600">
                Stories from our successful corporate events.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-between"
                >
                  <blockquote className="italic text-gray-700 text-lg mb-6">
                    <span className="text-3xl text-blue-600 font-serif">“</span>
                    {testimonial.quote}
                    <span className="text-3xl text-blue-600 font-serif">”</span>
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-slate-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.client}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Downloadables & Blog */}
        <div className="bg-white py-20 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-2">
                Resources & Insights
              </h2>
              <p className="text-lg text-gray-600">
                Best practices, case studies, and MICE trends.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {downloadables.map((item, i) => (
                <motion.a
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  href={`/downloads/${item.file}`}
                  className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition border border-gray-200 flex items-center space-x-4"
                  download
                >
                  <item.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-blue-600 font-semibold mb-1 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">Download Now</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
