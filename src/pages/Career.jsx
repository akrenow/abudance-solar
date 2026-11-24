import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {
  MapPin,
  Clock,
  Briefcase,
  ChevronRight,
  Send,
  Cpu,
  TrendingUp,
  Leaf,
  Globe,
} from "lucide-react";
import { jobOpenings } from "../core/constants/jobOpenings";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/useLanguage";
import { SITE_URL } from "@/i18n/routing";
import { jobPostingNode } from "@/seo/structuredData";

const Career = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { t, lang, localizePath } = useLanguage();

  // Relative times ("3 weeks ago") depend on today's date, so pre-rendered HTML
  // shows the posting date and the browser switches to relative time.
  const [today, setToday] = useState(null);
  useEffect(() => setToday(new Date()), []);
  const formatPostedDate = (postedDate) =>
    new Intl.DateTimeFormat(lang === "ar" ? "ar-AE-u-nu-latn" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(postedDate));

  // Function to calculate time difference from posted date
  const getTimeAgo = (postedDate) => {
    const currentDate = today;
    const postDate = new Date(postedDate);
    const timeDiff = currentDate - postDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) {
      return t("Today");
    } else if (daysDiff === 1) {
      return t("1 day ago");
    } else if (daysDiff < 7) {
      return t("{count} days ago", { count: daysDiff });
    } else if (daysDiff < 30) {
      const weeksDiff = Math.floor(daysDiff / 7);
      return weeksDiff === 1 ? t("1 week ago") : t("{count} weeks ago", { count: weeksDiff });
    } else if (daysDiff < 365) {
      const monthsDiff = Math.floor(daysDiff / 30);
      return monthsDiff === 1 ? t("1 month ago") : t("{count} months ago", { count: monthsDiff });
    } else {
      const yearsDiff = Math.floor(daysDiff / 365);
      return yearsDiff === 1 ? t("1 year ago") : t("{count} years ago", { count: yearsDiff });
    }
  };

  const query = searchQuery.toLowerCase();
  const matches = (text) =>
    text.toLowerCase().includes(query) || t(text).toLowerCase().includes(query);
  const filteredJobOpenings = jobOpenings.filter(
    (job) =>
      matches(job.title) || matches(job.description) || matches(job.department)
  );

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth in Renewables",
      description:
        "Structured progression paths in the fast-growing renewable energy sector with mentorship from industry leaders",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Impact Through Sustainability",
      description:
        "Direct contribution to meaningful climate solutions and sustainable infrastructure projects with measurable environmental impact",
    },

    {
      icon: <Globe className="w-6 h-6" />,
      title: "Future-Focused Projects",
      description:
        "Work with cutting-edge technologies in solar, wind, and energy storage systems that are shaping tomorrow's energy landscape",
    },

    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Innovation Culture",
      description:
        "Dedicated R&D time and resources to develop sustainable energy solutions and patentable technologies",
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

I am writing to express my interest in the ${jobTitle} position at Bronze Solar. I have attached my resume for your review.

I would welcome the opportunity to discuss how my skills and experience align with your requirements.

Thank you for your consideration.

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:info@bronzesolar.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleSendResume = () => {
    const subject = "General Job Application - Bronze Solar";
    const body = `Dear Hiring Manager,

I am writing to express my interest in joining the Bronze Solar team. While I may not see a specific position that matches my current background, I am passionate about renewable energy and would love to contribute to your mission.

I have attached my resume for your review and would appreciate the opportunity to discuss how I can add value to your organization.

Thank you for your time and consideration.

Best regards,
[Your Name]`;

    const mailtoLink = `mailto:info@bronzesolar.com?subject=${encodeURIComponent(
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
      <SEOHead
        title="Careers | Bronze Solar - Join Our Solar Revolution Team"
        description="Join Bronze Solar's team and help shape the future of renewable energy. Explore career opportunities in solar technology, engineering, and sustainability."
        keywords="careers at Bronze Solar, solar industry jobs, renewable energy careers UAE, job openings Abu Dhabi"
        ogImage="https://bronzesolar.com/Croppedlogo.png"
        breadcrumbs={[["Home", "/"], ["Career", "/career"]]}
        jsonLd={jobOpenings.map((job) =>
          jobPostingNode({ t, url: SITE_URL + localizePath("/career"), job })
        )}
      />
      <Header page={"career"} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/90 to-secondary text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("Join Our")} <span className="text-primary">{t("Solar Revolution")}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {t("Be part of a team that's powering the future with clean, sustainable energy solutions")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleViewOpenPositions}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                {t("View Open Positions")}
              </button>
              <button
                onClick={() => navigate(localizePath("/about"))}
                className="border-2 border-white hover:bg-white hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                {t("Learn About Our Culture")}
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
              {t("Why Choose Bronze Solar?")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("Join a company that's not just manufacturing solar panels, but shaping the future of renewable energy")}
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
                  {t(benefit.title)}
                </h3>
                <p className="text-gray-600">{t(benefit.description)}</p>
              </div>
            ))}
          </div>

          {/* Company Values */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t("Our Core Values")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {t(value.title)}
                    </h4>
                    <p className="text-gray-600">{t(value.description)}</p>
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
              {t("Current Opportunities")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("Explore exciting career opportunities and become part of our innovative team")}
            </p>
          </div>
          {/* Search Section */}
          <section className="py-10 ">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t("Search Job Openings")}
                </h2>
                <input
                  type="text"
                  placeholder={t("Search by title, department, or description")}
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
                        {t(job.title)}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 me-1" />
                          {t(job.department)}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 me-1" />
                          {t(job.location)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 me-1" />
                          {t(job.type)}
                        </span>
                        <span className="text-secondary font-medium">
                          {t(job.experience)}
                        </span>
                        <span className="text-secondary font-medium">
                          {t(job.openings)}
                        </span>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="inline-block bg-primary/20 text-secondary text-sm font-medium px-3 py-1 rounded-full mb-2">
                        {t("Posted {time}", {
                          time: today ? getTimeAgo(job.postedDate) : formatPostedDate(job.postedDate),
                        })}
                      </span>
                      <button
                        onClick={() => handleApplyNow(job.title)}
                        className="block w-full lg:w-auto bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                      >
                        {t("Apply Now")}
                        <ChevronRight className="w-4 h-4 ms-2 rtl:-scale-x-100" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-lg">
                    {t(job.description)}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {t("Key Requirements:")}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 me-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{t(req)}</span>
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
              {t("Application Process")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("Our streamlined hiring process ensures we find the right fit for both you and our team")}
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
                  "Receive feedback and, if successful, welcome to the Bronze Solar family!",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(process.title)}
                </h3>
                <p className="text-gray-600">{t(process.description)}</p>
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
                {t("Don't See the Right Position?")}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {t("We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to our mission.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-lg">
                  <Send className="w-5 h-5 me-2" />
                  <span>info@bronzesolar.com</span>
                </div>
                <button
                  onClick={handleSendResume}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  {t("Send Your Resume")}
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
