"use client"; // This directive is necessary for using hooks and browser-only libraries.

import React, { useEffect, useState, useMemo } from "react";
import { ArrowRight, Search, Briefcase } from "lucide-react";
import AOSInitializer from "../components/AOSInitializer";

// --- Reusable Components (Unchanged) ---
const ProjectCard = ({
  title,
  category,
  imageSrc,
  description,
  liveLink,
  githubLink,
}) => (
  <div
    className="group relative block w-full h-96 rounded-xl overflow-hidden shadow-lg"
    data-aos="fade-up"
  >
    {/* Image */}
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-full object-cover rounded-xl"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/600x400/e2e8f0/334155?text=Project";
      }}
    />

    {/* Black gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl"></div>

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
      {/* Title and category */}
      <div className="transform transition-transform duration-300 group-hover:-translate-y-4">
        <p className="text-sm font-semibold text-green-300 mb-1">{category}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      {/* Expanded description and buttons */}
      <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-48 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4">
        <p className="text-slate-200 mb-4">{description}</p>
        <div className="flex flex-wrap gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Github <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const FilterButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
      isActive
        ? "bg-green-600 text-white shadow-lg"
        : "bg-white text-gray-700 hover:bg-slate-200 shadow-sm border border-slate-200"
    }`}
  >
    {label}
  </button>
);

// --- Main Projects Page Component ---
export default function ProjectsPage() {
  const allProjects = useMemo(
    () => [
      {
        title: "Kabul Yazılım Corporate Website",
        category: "Web App",
        imageSrc:
          "https://placehold.co/600x400/10b981/ffffff?text=Kabul+Yazılım",
        description:
          "A modern, dynamic, and responsive corporate website developed with React and Tailwind CSS. The backend is powered by .NET Web API.",
        tags: ["React", ".NET Web API", "Tailwind CSS", "Responsive Design"],
        liveLink: "http://kabulyazilim.com.tr",
        githubLink: "https://github.com/hasamuddinafz/Kabul-Yazilim-React",
      },
      {
        title: "Blog & Portfolio Website",
        category: "Web App",
        imageSrc: "https://placehold.co/600x400/3b82f6/ffffff?text=Portfolio",
        description:
          "A personal blog and portfolio site developed using .NET Core and Entity Framework Core for dynamic content management.  It features a secure and modular structure with the Repository Pattern and ASP.NET Core Identity. ",
        tags: [
          ".NET Core",
          "EF Core",
          "ASP.NET Identity",
          "MVC",
          "SQL Server",
          "MySQL",
        ],
        liveLink: "http://hasamuddinafzali.com",
        githubLink: "https://github.com/hasamuddinafz/my-blog-portfolio",
      },
      {
        title: "Demirsoy Plast Corporate Website",
        category: "Web App",
        imageSrc:
          "https://placehold.co/600x400/f59e0b/ffffff?text=Demirsoy+Plast",
        description:
          "A corporate website for the company Demirsoy Plast, developed using C# and Bootstrap under the .NET MVC framework.",
        tags: [".NET MVC", "C#", "Bootstrap", "CSS"],
        liveLink: "http://demirsoyplast.com",
        githubLink: null,
      },
      {
        title: "React Weather App",
        category: "Web App",
        imageSrc: "https://placehold.co/600x400/06b6d4/ffffff?text=Weather+App",
        description:
          "A web application that fetches real-time weather data from the OpenWeatherMap API.  It displays a 5-day forecast and current conditions for any location worldwide. ",
        tags: ["React.js", "JavaScript", "OpenWeatherMap API", "Axios", "CSS"],
        liveLink: null,
        githubLink: "https://github.com/hasamuddinafz/weather-app",
      },
      {
        title: "Order Management System",
        category: "Web App",
        imageSrc:
          "https://placehold.co/600x400/8b5cf6/ffffff?text=Order+System",
        description:
          "An order management system developed as an internship project using .NET Core and Angular. It includes user authentication, role-based access control, and CRUD operations on an MS SQL database. ",
        tags: [".NET Core", "Angular CLI", "MS SQL", "Authentication"],
        liveLink: null,
        githubLink: "https://github.com/hasamuddinafz/SIMPLE-ORDER-TRACKING",
      },
      // {
      //   title: "Graphic Design Work",
      //   category: "Graphic Design",
      //   imageSrc:
      //     "https://placehold.co/600x400/ec4899/ffffff?text=Graphic+Design",
      //   description:
      //     "This space is prepared to showcase your graphic design projects. Please update this description and the image with your own project.",
      //   tags: ["Figma", "Photoshop", "Canva"],
      //   liveLink: null,
      //   githubLink: null,
      // },
    ],
    []
  );

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesCategory = filter === "All" || p.category === filter;
      const matchesSearch =
        searchTerm === "" ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm, allProjects]);

  const categories = useMemo(
    () => ["All", ...new Set(allProjects.map((p) => p.category))],
    [allProjects]
  );

  return (
    <div className="bg-slate-50 text-gray-800">
      <AOSInitializer />

      {/* Header Section (Unchanged) */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-base font-semibold text-green-600 uppercase tracking-wider"
            data-aos="fade-up"
          >
            My Portfolio
          </p>
          <h1
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Featured Projects
          </h1>
          <p
            className="mt-4 text-lg text-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A curated collection of my work, showcasing my passion for creating
            elegant and effective digital solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid Section (Unchanged) */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls & Search */}
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
            data-aos="fade-up"
          >
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <FilterButton
                  key={cat}
                  label={cat}
                  isActive={filter === cat}
                  onClick={() => setFilter(cat)}
                />
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} {...project} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center col-span-full py-24" data-aos="fade-up">
              <Briefcase size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">
                No projects match your criteria.
              </h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your filters or search term.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
