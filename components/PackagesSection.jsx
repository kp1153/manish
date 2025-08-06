import { Check, Star, ArrowRight } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      name: "Essential Meetings",
      price: "Starting at ₹50,000",
      description:
        "Perfect for small business meetings and corporate gatherings up to 50 attendees.",
      features: [
        "Venue booking & coordination",
        "Basic A/V equipment setup",
        "Catering arrangements",
        "Basic event coordination",
        "Photography coverage",
        "Post-event report",
      ],
      popular: false,
      cta: "Get Essential Package",
    },
    {
      id: 2,
      name: "Premium Events",
      price: "Starting at ₹2,50,000",
      description:
        "Comprehensive solution for mid-scale conferences and incentive programs up to 200 attendees.",
      features: [
        "Everything in Essential",
        "Professional staging & branding",
        "Live streaming capabilities",
        "Registration management system",
        "Dedicated event manager",
        "Transportation coordination",
        "Welcome & networking events",
        "Custom mobile event app",
      ],
      popular: true,
      cta: "Choose Premium",
    },
    {
      id: 3,
      name: "Enterprise Solutions",
      price: "Custom Pricing",
      description:
        "Full-scale MICE solutions for large conferences, exhibitions, and multi-day corporate events.",
      features: [
        "Everything in Premium",
        "Multi-venue coordination",
        "International speaker management",
        "Exhibitor & sponsor management",
        "Multi-language support",
        "VIP guest services",
        "Custom branding & design",
        "Detailed ROI analytics",
        "24/7 support team",
      ],
      popular: false,
      cta: "Request Custom Quote",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Choose Your MICE Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with comprehensive packages designed to meet
            every corporate event requirement, from intimate meetings to
            large-scale conferences.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                pkg.popular
                  ? "border-blue-500 shadow-lg scale-105"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center ${
                    pkg.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-800 text-white hover:bg-blue-600"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Need Something Different?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every corporate event is unique. Our team specializes in creating
            custom solutions that align perfectly with your business objectives
            and budget requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-slate-800 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 hover:text-white transition-colors">
              Download Pricing Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
