import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  ChevronRight,
  Send,
  Star,
} from "lucide-react";
import { jobOpenings } from "../core/constants/jobOpenings";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredJobOpenings = jobOpenings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance bonuses",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career Growth",
      description:
        "Professional development opportunities and training programs",
    },
  ];

  const companyValues = [
    {
      title: "Innovation",
      description:
        "We continuously push the boundaries of solar technology to create more efficient and sustainable solutions.",
    },
    {
      title: "Sustainability",
      description:
        "Our commitment to environmental responsibility drives everything we do, from product design to operations.",
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards in quality, performance, and customer service across all our endeavors.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and foster an inclusive environment where diverse perspectives thrive.",
    },
  ];

  const handleApplyNow = (jobTitle) => {
    const subject = `Application for ${jobTitle} Position`;
    const body = `Dear Hiring Manager,

I am writing to express my interest in the ${jobTitle} position at Abundance Solar. I have attached my resume for your review.

I would welcome the opportunity to discuss how my skills and experience align with your requirements.

Thank you for your consideration.

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:info@abundancesolar.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleSendResume = () => {
    const subject = "General Job Application - Abundance Solar";
    const body = `Dear Hiring Manager,

I am writing to express my interest in joining the Abundance Solar team. While I may not see a specific position that matches my current background, I am passionate about renewable energy and would love to contribute to your mission.

I have attached my resume for your review and would appreciate the opportunity to discuss how I can add value to your organization.

Thank you for your time and consideration.

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:info@abundancesolar.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleViewOpenPositions = () => {
    const element = document.getElementById("current-opportunities-heading");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header page={"career"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/90 to-secondary text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-primary">Solar Revolution</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Be part of a team that&apos;s powering the future with clean,
              sustainable energy solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleViewOpenPositions}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </button>
              <button
                onClick={() => navigate("/about")}
                className="border-2 border-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Abundance Solar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a company that&apos;s not just manufacturing solar panels,
              but shaping the future of renewable energy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-secondary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Company Values */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="current-opportunities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              id="current-opportunities-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Current Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and become part of our
              innovative team
            </p>
          </div>
          {/* Search Section */}
          <section className="py-10 ">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Search Job Openings
                </h2>
                <input
                  type="text"
                  placeholder="Search by title, department, or description"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>
          </section>
          <div className="grid gap-8">
            {filteredJobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="text-secondary font-medium">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                        Posted {job.posted}
                      </span>
                      <button
                        onClick={() => handleApplyNow(job.title)}
                        className="block w-full lg:w-auto bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                      >
                        Apply Now
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-lg">
                    {job.description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Requirements:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined hiring process ensures we find the right fit for
              both you and our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                description:
                  "Submit your application through our career portal with your resume and cover letter.",
              },
              {
                step: "02",
                title: "Initial Review",
                description:
                  "Our HR team reviews your application and assesses your qualifications for the role.",
              },
              {
                step: "03",
                title: "Interview Process",
                description:
                  "Participate in phone/video interviews with hiring managers and team members.",
              },
              {
                step: "04",
                title: "Final Decision",
                description:
                  "Receive feedback and, if successful, welcome to the Abundance Solar family!",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don&apos;t See the Right Position?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                We&apos;re always looking for talented individuals to join our
                team. Send us your resume and let us know how you can contribute
                to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  <span>info@abundancesolar.com</span>
                </div>
                <button
                  onClick={handleSendResume}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Your Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
