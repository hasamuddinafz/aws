"use client";
import React, { useState, useEffect } from "react";
import {
  Layers,
  Code,
  Users,
  Zap,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Lightbulb,
  Database,
} from "lucide-react";
import AOSInitializer from "../components/AOSInitializer";

const TimelineItem = ({
  icon,
  date,
  title,
  subtitle,
  description,
  index,
  isLast = false,
}) => {
  const isOdd = index % 2 !== 0;
  const contentAlignment = isOdd ? "md:text-left" : "md:text-right";
  const cardPosition = isOdd ? "md:left-0 md:pr-8" : "md:right-0 md:pl-8";
  const aosAnimation = isOdd ? "fade-left" : "fade-right";

  return (
    <div className="relative">
      {/* The vertical line */}
      {!isLast && (
        <div className="hidden md:block absolute top-6 left-1/2 w-0.5 h-full bg-slate-300/80 -translate-x-1/2"></div>
      )}

      <div
        className={`mb-8 md:mb-12 flex flex-col md:flex-row items-center ${
          isOdd ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Content Card */}
        <div
          className={`w-full md:w-5/12 ${cardPosition}`}
          data-aos={aosAnimation}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/80 hover:shadow-xl transition-shadow duration-300">
            <p
              className={`text-sm font-semibold text-green-600 mb-1 ${contentAlignment}`}
            >
              {date}
            </p>
            <h4
              className={`text-xl font-bold text-gray-900 ${contentAlignment}`}
            >
              {title}
            </h4>
            <p
              className={`text-md font-medium text-gray-500 ${contentAlignment}`}
            >
              {subtitle}
            </p>
            <p className={`mt-2 text-gray-600 text-sm ${contentAlignment}`}>
              {description}
            </p>
          </div>
        </div>

        {/* Dot and Icon */}
        <div className="w-full md:w-2/12 flex justify-center">
          <div className="z-10 relative flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-green-500 shadow-md my-4 md:my-0">
            {icon}
          </div>
        </div>

        {/* Spacer on desktop */}
        <div className="hidden md:block w-5/12"></div>
      </div>
    </div>
  );
};

export default function About() {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsData = {
    frontend: {
      icon: <Layers size={20} />,
      title: "Frontend",
      skills: [
        "React.js & Next.js",
        "JavaScript (ES6+)",
        "Tailwind CSS & Sass",
        "Redux Toolkit & Context API",
        "React Query",
        "API Integration",
      ],
    },
    backend: {
      icon: <Code size={20} />,
      title: "Backend",
      skills: [
        ".NET Core & EF Core",
        "Node.js & Express.js",
        "RESTful API Design",
        "ASP.NET Core MVC & Web API",
        "Authentication (JWT, Identity)",
      ],
    },
    databaseAndTools: {
      icon: <Database size={20} />,
      title: "Databases & Tools",
      skills: [
        "SQL Server & Oracle SQL",
        "PostgreSQL & MySQL",
        "Git & GitHub",
        "Docker",
        "Postman & Swagger",
        "CI/CD",
      ],
    },
  };

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
        activeTab === id
          ? "bg-green-600 text-white shadow-lg"
          : "bg-white text-gray-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );

  const ActiveSkills = skillsData[activeTab];

  const timelineData = [
    {
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      date: "June 2024 - July 2024",
      title: "Fullstack Web Developer Intern",
      subtitle: "Karabük Teknokent - Karabük, Türkiye",
      description:
        "Modernized the company's website frontend, developed dynamic forms, and optimized the email submission system to improve communication efficiency.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      date: "June 2023 - July 2023",
      title: "Fullstack Web Developer Intern",
      subtitle: "Real Solutions - Düzce, Türkiye",
      description:
        "Developed an order management system using .NET Core and Angular, implementing user authentication, role-based access, and a secure MS SQL database schema.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      date: "2022 - 2025",
      title: "Bachelor's Degree in Computer Engineering",
      subtitle: "Karabük University - Karabük, Türkiye",
      description:
        "Pursuing advanced studies in computer engineering, focusing on software architecture, modern development practices, and system design.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-600" />,
      date: "2019 - 2021",
      title: "Associate Degree in Computer Programming",
      subtitle: "Karabük University - Karabük, Türkiye",
      description:
        "Gained a strong foundation in computer programming, database management, and fundamental software development principles.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <AOSInitializer />

      {/* Introduction Section */}
      <section className="bg-white py-24 md:py-32 relative">
        {/* Background decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left" data-aos="fade-right">
            <p className="text-base font-semibold text-green-600 uppercase tracking-wider">
              About HASAM
            </p>
            <h1
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 mb-6"
              data-aos-delay="100"
            >
              Passionate Developer Crafting Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-purple-600">
                Experiences
              </span>
            </h1>
            <p
              className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
              data-aos-delay="200"
            >
              I specialize in transforming ideas into high-quality,
              user-friendly software. Driven by a relentless curiosity and a
              passion for problem-solving, I build digital products that are
              both impactful and elegant.
            </p>
          </div>

          {/* Right Column: Value Propositions (No Image) */}
          <div className="space-y-6">
            <div
              className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:shadow-green-500/10 hover:shadow-lg hover:border-green-300/80 hover:-translate-y-1"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="relative flex items-start gap-5">
                <div className="bg-slate-100 text-green-600 p-4 rounded-xl mt-1 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:scale-110">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Creative Problem-Solving
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Finding elegant solutions to complex technical challenges.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:shadow-green-500/10 hover:shadow-lg hover:border-green-300/80 hover:-translate-y-1"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="relative flex items-start gap-5">
                <div className="bg-slate-100 text-green-600 p-4 rounded-xl mt-1 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:scale-110">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Clean & Scalable Code
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Writing maintainable code that grows with your business.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:shadow-green-500/10 hover:shadow-lg hover:border-green-300/80 hover:-translate-y-1"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <div className="relative flex items-start gap-5">
                <div className="bg-slate-100 text-green-600 p-4 rounded-xl mt-1 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:scale-110">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    User-Centric Focus
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Prioritizing intuitive and engaging user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section
        id="journey"
        className="py-20 md:py-28 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              My Professional Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A timeline of my key experiences and educational background.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                index={index}
                isLast={index === timelineData.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Services I Provide
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              From initial concept to final deployment, I offer a range of
              services to bring your project to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-green-500/50"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-purple-500 rounded-t-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-6 text-green-600">
                <Layers size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Full-Stack Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end development of robust, scalable web applications from
                database to UI.
              </p>
            </div>

            <div
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-green-500/50"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-purple-500 rounded-t-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-6 text-green-600">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Frontend Engineering
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building beautiful, responsive, and intuitive user interfaces
                with modern frameworks.
              </p>
            </div>

            <div
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-green-500/50"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-purple-500 rounded-t-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <div className="mb-6 text-green-600">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Performance & SEO
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizing applications for speed, efficiency, and search engine
                visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              My Technical Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A curated list of the technologies and tools I use to build
              modern, high-performance applications.
            </p>
          </div>

          <div
            className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-slate-200/80 shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-3 mb-4 bg-slate-100 p-2 rounded-lg">
              <TabButton id="frontend" label="Frontend" />
              <TabButton id="backend" label="Backend" />
              <TabButton id="databaseAndTools" label="Databases & Tools" />
            </div>

            {/* Content */}
            <div key={activeTab} className="p-6 animate-content-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-green-600">{ActiveSkills.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {ActiveSkills.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {ActiveSkills.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-slate-200 transition-colors cursor-default"
                  >
                    <Zap size={14} className="text-green-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-green-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center py-20 px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold text-white sm:text-4xl"
            data-aos="zoom-in"
          >
            Have a project in mind?
          </h2>
          <p
            className="mt-4 text-lg text-green-100"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Let's connect and build something amazing together.
          </p>
          <a
            href="#contact"
            className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 sm:w-auto transition-transform duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
