import {
  Calendar,
  Award,
  Users,
  Headphones,
  Monitor,
  MapPin,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: Calendar,
      title: "Full-Service Conference Production",
      description:
        "Complete venue sourcing, A/V setup, registration management, and brand integration for impactful corporate conferences.",
      features: [
        "Venue Sourcing",
        "A/V Management",
        "Registration Systems",
        "Brand Integration",
      ],
      cta: "Plan Conference",
    },
    {
      id: 2,
      icon: Award,
      title: "Incentive & Offsite Programs",
      description:
        "Destination experiences perfectly aligned with corporate goals, from team building to reward programs.",
      features: [
        "Team Building Activities",
        "Luxury Destinations",
        "Custom Experiences",
        "Performance Rewards",
      ],
      cta: "Design Program",
    },
    {
      id: 3,
      title: "Meeting Coordination",
      icon: Users,
      description:
        "Seamless logistics management, scheduling coordination, and speaker liaison for productive business meetings.",
      features: [
        "Logistics Management",
        "Speaker Coordination",
        "Schedule Optimization",
        "Technical Support",
      ],
      cta: "Coordinate Meeting",
    },
  ];

  const businessFeatures = [
    {
      icon: Monitor,
      title: "Event Apps",
      description:
        "Custom mobile applications for seamless attendee experience",
    },
    {
      icon: Users,
      title: "Registration Portals",
      description: "Automated registration and attendee management systems",
    },
    {
      icon: MapPin,
      title: "Exhibitor Management",
      description: "Complete expo and trade show coordination services",
    },
    {
      icon: Headphones,
      title: "Sponsor Packages",
      description: "Comprehensive sponsorship integration and brand visibility",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            MICE Services That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate board meetings to large-scale conferences, we deliver
            corporate events that enhance your brand image and achieve
            measurable ROI.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 ml-4">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                    {service.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Advanced Business Features
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {businessFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="bg-blue-50 p-4 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
