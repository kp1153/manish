import {
  Award,
  Users,
  Globe,
  Shield,
  Target,
  Clock,
  CheckCircle,
  Download,
} from "lucide-react";

const AboutSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Founder & CEO",
      experience: "15+ years",
      specialization: "Corporate Event Strategy",
      certifications: ["CMP Certified", "Event Management Professional"],
    },
    {
      id: 2,
      name: "Rahul Singh",
      position: "Operations Director",
      experience: "12+ years",
      specialization: "Venue Management & Logistics",
      certifications: ["MICE Specialist", "Venue Management Expert"],
    },
    {
      id: 3,
      name: "Anita Patel",
      position: "Client Relations Head",
      experience: "10+ years",
      specialization: "Corporate Partnerships",
      certifications: ["Customer Success Professional", "Business Development"],
    },
  ];

  const achievements = [
    { number: "200+", label: "Successful Events", icon: Award },
    { number: "50+", label: "Corporate Clients", icon: Users },
    { number: "6", label: "MICE Destinations", icon: Globe },
    { number: "98%", label: "Client Satisfaction", icon: Shield },
  ];

  const certifications = [
    "Certified Meeting Professional (CMP)",
    "Event Management Certification",
    "MICE Industry Association Member",
    "ISO 9001:2015 Quality Management",
    "Corporate Event Planning Specialist",
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Excellence in Execution",
      description:
        "We deliver flawless corporate events that exceed client expectations and create lasting impressions.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "Every project is completed on time with meticulous planning and efficient resource management.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "Building long-term partnerships through consistent quality service and transparent communication.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Your business objectives drive our event strategy and execution methodology.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            About Connektpro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Since 2013, we've been transforming corporate events across India
            with professional expertise, innovative solutions, and unwavering
            commitment to excellence.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">Our Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded by visionary entrepreneurs with a passion for creating
              exceptional corporate experiences, Connektpro has emerged as
              India's trusted MICE solutions provider. Our journey began with a
              simple mission: to connect visions and craft experiences that
              drive business success.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we proudly serve Fortune 500 companies, emerging startups,
              and established enterprises across multiple industries, delivering
              tailored event solutions that align with their strategic
              objectives.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <IconComponent className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-slate-800 text-sm mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-xs">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Company Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-slate-200 h-80 lg:h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-slate-600">
                <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <p className="text-lg font-medium">Our Professional Team</p>
                <p className="text-sm">Dedicated MICE Experts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Our Achievements
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Leadership Team
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-semibold mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 mb-4">
                  {member.experience} in {member.specialization}
                </p>

                <div className="space-y-1">
                  {member.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-slate-800 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Certifications & Accreditations
              </h3>
              <p className="text-gray-300 mb-6">
                Our team holds industry-leading certifications ensuring
                professional excellence and adherence to global MICE standards.
              </p>

              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <Award className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-200">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <Award className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-4">
                  Download Our Credentials
                </h4>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Company Profile PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Partner With India's Leading MICE Experts
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to elevate your next corporate event? Let's discuss how our
            expertise can help you achieve your business objectives through
            exceptional event experiences.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Strategy Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
