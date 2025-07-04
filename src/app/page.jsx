"use client";

import React from "react";
import { Download, ArrowRight, Code, PenTool, Star } from "lucide-react";
import AOSInitializer from "./components/AOSInitializer";
import Link from "next/link";

// --- Reusable Components ---
const ProjectCard = ({
  imageSrc,
  title,
  description,
  tags,
  liveLink,
  githubLink,
}) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col group border border-transparent hover:border-green-500 transition-all duration-300">
    <div className="overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {/* Etiketler */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Butonlar */}
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-sm text-green-600 hover:text-green-800"
          >
            View Live
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-sm text-gray-600 hover:text-gray-800"
          >
            View on Github
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  </div>
);
const MarqueeStyles = () => (
  <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .animate-marquee {
            animation: scroll 40s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
            animation-play-state: paused;
        }
    `}</style>
);
// --- Main Home Page Component ---
export default function HomePage() {
  const featuredProjects = [
    {
      imageSrc: "https://placehold.co/600x400/10b981/ffffff?text=Kabul+Yazılım",
      title: "Kabul Yazılım Corporate Website",
      description:
        "A modern, dynamic, and responsive corporate website developed with React and Tailwind CSS, powered by a .NET Web API backend.",
      tags: ["React", ".NET Web API", "Tailwind CSS"],
      liveLink: "https://kabulyazilim.com.tr",
      githubLink: null,
      aosDelay: "0",
    },

    {
      imageSrc:
        "https://placehold.co/600x400/f59e0b/ffffff?text=Demirsoy+Plast",
      title: "Demirsoy Plast Corporate Website",
      description:
        "A corporate website for Demirsoy Plast, developed using the .NET MVC framework and styled with Bootstrap.",
      tags: [".NET MVC", "C#", "Bootstrap"],
      liveLink: "https://demirsoyplast.com",
      githubLink: null,
      aosDelay: "200",
    },
    {
      imageSrc: "https://placehold.co/600x400/06b6d4/ffffff?text=Weather+App",
      title: "React Weather App",
      description:
        "Fetches real-time data from the OpenWeatherMap API to show current conditions and a 5-day forecast for any location. ",
      tags: ["React.js", "JavaScript", "API", "CSS"],
      liveLink: null,
      githubLink: "https://github.com/hasamuddinafz/weather-app",
      aosDelay: "400",
    },
  ];
  const companies = [
    {
      name: "AFZ MEDIA",
      logo: "/images/logo/afz-medya.jpg",
    },
    {
      name: "BARUTBEY",
      logo: "/images/logo/barutbey.png",
    },
    {
      name: "BOSS BURGER",
      logo: "/images/logo/burger-boss.png",
    },
    {
      name: "DILBAZ",
      logo: "/images/logo/dilbaz.png",
    },
    {
      name: "GAYE",
      logo: "/images/logo/gaye.png",
    },
    {
      name: "KABUL YAZILIM",
      logo: "/images/logo/kabul-yazilim.png",
    },
    {
      name: "KARABUK TEKNOKENT",
      logo: "/images/logo/teknokent.png",
    },
    {
      name: "WIZHA",
      logo: "/images/logo/wizha.png",
    },
  ];

  // Duplicate the logos to create a seamless loop
  const extendedCompanies = [...companies, ...companies];

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <AOSInitializer />
      <MarqueeStyles />
      {/* New Hero Section */}
      <section className="min-h-screen flex items-center bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center md:text-left">
              <h1
                className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
                data-aos="fade-right"
              >
                <span className="text-green-600">
                  Full-Stack Developer & Graphic Designer
                </span>
              </h1>
              <p
                className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 mb-8"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Hi, I'm Hasamuddin Afzali. I create seamless web experiences and
                visually striking designs that amplify your brand.
              </p>
              <div
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center bg-green-600 text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Hire Me
                </Link>
                <Link
                  href="/projects"
                  className="w-full sm:w-auto text-center flex items-center justify-center gap-2 text-gray-700 font-semibold hover:text-green-600 transition-colors duration-300"
                >
                  Previous Works <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div
                className="flex justify-center md:justify-start space-x-8 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div>
                  <p className="text-3xl font-bold text-green-600">2+</p>
                  <p className="text-sm text-gray-500">Years of Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">50+</p>
                  <p className="text-sm text-gray-500">Projects Done</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">24/7</p>
                  <p className="text-sm text-gray-500">Support</p>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div
              className="relative hidden md:flex justify-center items-center"
              data-aos="zoom-in-up"
            >
              <div className="absolute w-[450px] h-[450px] bg-green-100 rounded-full blur-2xl opacity-50"></div>
              {/* Floating Icons */}
              <div
                className="absolute top-0 left-10 w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-pulse"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                <Code size={32} className="text-green-500" />
              </div>
              <div
                className="absolute bottom-10 right-0 w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-pulse"
                style={{ animationDelay: "0.5s" }}
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <PenTool size={32} className="text-purple-500" />
              </div>
              <div
                className="absolute -bottom-8 left-20 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-pulse"
                style={{ animationDelay: "1s" }}
                data-aos="zoom-in"
                data-aos-delay="1200"
              >
                <Star size={32} className="text-yellow-500" />
              </div>

              <img
                src="/images/me.jpg"
                alt="HASAM professional portrait"
                className="relative rounded-full shadow-2xl w-[400px] h-[400px] object-cover border-8 border-white"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x400/e2e8f0/334155?text=Portrait";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            About Me
          </h2>
          <p
            className="text-lg text-gray-600 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I'm a passionate full-stack developer with a focus on creating
            beautiful, functional, and user-centric web applications. With a
            strong foundation in both front-end and back-end technologies, I
            enjoy turning complex challenges into seamless digital experiences.
            My goal is to always write clean, efficient, and scalable code.
          </p>
          <a
            href="/files/CV-EN.pdf"
            download
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Download className="mr-3 h-5 w-5" />
            Download CV
          </a>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section id="projects" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              My Latest Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Here's a selection of some of my recent work.
            </p>
          </div>
          {/* Öne Çıkan Projeler Gridi */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={project.aosDelay}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* --- Tüm Projeleri Gör Butonu (YENİ) --- */}
          <div className="text-center mt-16" data-aos="fade-up">
            <a
              href="/projects"
              className="inline-block bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:-translate-y-1"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-base font-semibold text-blue-600 tracking-wider uppercase">
              Trusted by Industry Leaders
            </h3>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powering the world's best teams
            </p>
          </div>
          <div
            className="relative w-full overflow-hidden marquee-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 z-10 [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]"></div>
            <div className="flex w-max animate-marquee">
              {extendedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 mx-6 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-44 object-contain opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `/images/logo${company.name}`;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
