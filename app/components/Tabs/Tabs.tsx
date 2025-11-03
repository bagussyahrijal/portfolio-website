"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { VscGithub, VscLinkExternal, VscDeviceMobile, VscGlobe, VscCode, VscBriefcase, VscRocket, VscMortarBoard } from "react-icons/vsc";

const tabs = ["Projects", "Certificates"];

const projects = [
  {
    id: 1,
    title: "P4MI",
    description: "Company profile P4MI and information of CFTR student certification.",
    image: "/assets/images/p4mi.png",
    technologies: ["Laravel", "React.js", "TypeScript", "Tailwind"],
    type: "website",
    category: "intern",
    liveUrl: "https://ppppmi.id",
  },
  {
    id: 2,
    title: "Tax Learning",
    description: "A tax learning platform for students.",
    image: "/assets/images/tls.png",
    technologies: ["Laravel", "React.js", "TypeScript", "Tailwind"],
    type: "website",
    category: "intern",
    liveUrl: "https://taxlearning.id",
  },
  {
    id: 3,
    title: "Jaring Wan",
    description: "Profile and marketing website for Jaring Wan.",
    image: "/assets/images/jaringwan.png",
    technologies: ["Laravel", "React.js", "TypeScript", "Tailwind"],
    type: "website",
    category: "freelance",
    liveUrl: "https://jaringwan.com",
  },
  {
    id: 4,
    title: "Birthday Project (Netflix Clone)",
    description: "A birthday gift project: a Netflix clone website.",
    image: "/assets/images/buatmamah.png",
    technologies: ["HTML", "CSS", "JS"],
    type: "website",
    category: "project-based-learning",
    liveUrl: "https://bagussyahrijal.github.io/buatmamah",
  },
  {
    id: 5,
    title: "Travel Website",
    description: "A travel website built with Laravel and React.",
    image: "/assets/images/travel.png",
    technologies: ["Laravel", "Vue"],
    type: "website",
    category: "project-based-learning",
  },
  {
    id: 6,
    title: "Ujastore",
    description: "Top-up store mobile app.",
    image: "/assets/images/ujastore.png",
    technologies: ["Dart", "Flutter", "GetX", "Firebase"],
    type: "mobile",
    category: "project-based-learning",
  },
];
// Define your certificates here
const certificates = [
  {
    id: 1,
    title: "Intro to Software Engineering",
    issuer: "RevoU",
    date: "2024",
    image: "/assets/images/certificates/revou.png",
  },
  {
    id: 2,
    title: "Memulai Pemrograman dengan Dart",
    issuer: "Dicoding",
    date: "2024",
    image: "/assets/images/certificates/dicoding.png",
  },
];

// Define your tech stack here
const techStack = [
  {
    name: "React",
    icon: "/assets/icons/react.svg",
    proficiency: 90,
  },
  {
    name: "Next.js",
    icon: "/assets/icons/nextjs.svg",
    proficiency: 85,
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/icons/tailwind.svg",
    proficiency: 95,
  },
  {
    name: "TypeScript",
    icon: "/assets/icons/typescript.svg",
    proficiency: 80,
  },
  {
    name: "Node.js",
    icon: "/assets/icons/nodejs.svg",
    proficiency: 75,
  },
  {
    name: "MongoDB",
    icon: "/assets/icons/mongodb.svg",
    proficiency: 70,
  },
];

const getProjectCategoryBadgeColor = (category: string) => {
  switch (category) {
    case "intern":
      return "from-green-500/20 to-green-400/20 text-green-400";
    case "freelance":
      return "from-orange-500/20 to-yellow-500/20 text-orange-400";
    case "project-based-learning":
      return "from-blue-500/20 to-indigo-500/20 text-blue-400";
    default:
      return "from-gray-500/20 to-gray-600/20 text-gray-400";
  }
};

const getProjectCategoryIcon = (category: string) => {
  switch (category) {
    case "intern":
      return <VscBriefcase size={14} />;
    case "freelance":
      return <VscRocket size={14} />;
    case "project-based-learning":
      return <VscMortarBoard size={14} />;
    default:
      return null;
  }
};

const getProjectTypeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "website":
      return <VscGlobe size={16} />;
    case "mobile":
      return <VscDeviceMobile size={16} />;
    default:
      return <VscGlobe size={16} />;
  }
};

// Helper function to get badge color based on project type
const getProjectTypeBadgeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "website":
      return "from-blue-500/20 to-cyan-500/20 text-cyan-400";
    case "mobile":
      return "from-purple-500/20 to-pink-500/20 text-pink-400";
    case "backend":
      return "from-green-500/20 to-emerald-500/20 text-emerald-400";
    default:
      return "from-gray-500/20 to-gray-600/20 text-gray-400";
  }
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Jumlah project awal yang ditampilkan
  const initialCount = 6;
  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialCount);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      {/* Tab Button Group with Animated Indicator */}
      <div className="relative flex justify-center gap-4 bg-gradient-to-r from-[#0a0c1f] via-[#10132F] to-[#0a0c1f] rounded-xl p-2 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative flex-1 py-3 rounded-lg text-sm font-semibold font-satoshi transition-all duration-300 z-10
              ${activeTab === tab
                ? "text-white"
                : "text-gray-400 hover:text-white hover:scale-105"
              }
            `}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] rounded-lg opacity-20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Tab Contents with Animations */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Projects Content */}
        {activeTab === "Projects" && (
          <>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {displayedProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-[#10132F] to-[#1A1D40] rounded-xl overflow-hidden drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 flex flex-col"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Project Image */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-[#40ffaa]/20 to-[#4079ff]/20 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10132F] to-transparent opacity-60" />
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col p-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-gradient-to-r from-[#40ffaa]/20 to-[#4079ff]/20 text-white rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="w-auto flex items-center gap-2 mb-4">
                      {/* Type Badge */}
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${getProjectTypeBadgeColor(project.type)} backdrop-blur-sm`}>
                        {getProjectTypeIcon(project.type)}
                        <span className="text-xs font-semibold capitalize">
                          {project.type}
                        </span>
                      </div>
                      {/* Category Badge */}
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${getProjectCategoryBadgeColor(project.category)} backdrop-blur-sm`}>
                        {getProjectCategoryIcon(project.category)}
                        <span className="text-xs font-semibold capitalize">
                          {project.category.replace(/-/g, " ")}
                        </span>
                      </div>
                    </div>

                    {/* Live Preview Button - Only show if liveUrl exists */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-semibold text-sm hover:scale-105 transition-transform duration-200"
                      >
                        <VscLinkExternal size={16} />
                        View Website
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            {/* Tombol Lihat Lebih Banyak */}
            {!showAllProjects && projects.length > initialCount && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllProjects(true)}
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-semibold hover:scale-105 transition-transform duration-200"
                >
                  See More
                </button>
              </div>
            )}
            {/* Tombol Lihat Lebih Sedikit */}
            {showAllProjects && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowAllProjects(false)}
                  className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#4079ff] to-[#40ffaa] text-white font-semibold hover:scale-105 transition-transform duration-200"
                >
                  See Less
                </button>
              </div>
            )}
          </>
        )}

        {/* Certificates Content */}
        {activeTab === "Certificates" && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {certificates.map((cert, i) => (
              <motion.a
                key={cert.id}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#40ffaa]/10 to-[#4079ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-white font-semibold text-sm">{cert.title}</h4>
                  <p className="text-gray-300 text-xs">{cert.issuer} • {cert.date}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Tech Stack Content */}
        {activeTab === "Tech Stack" && (
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className="group relative bg-gradient-to-br from-[#10132F] to-[#1A1D40] rounded-xl p-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#40ffaa]/10 to-[#4079ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-white font-semibold font-satoshi text-sm drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    {tech.name}
                  </span>
                  {/* Proficiency Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff]"
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.proficiency}%` }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
