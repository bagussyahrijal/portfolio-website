import { useState } from "react";

const tabs = ["Projects", "Certificates", "Tech Stack"];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Certificates");

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      {/* Tab Button Group */}
      <div className="flex justify-center gap-4 bg-[#10132F] rounded-xl p-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              flex-1 py-3 rounded-lg text-sm font-semibold transition-all duration-300
              ${activeTab === tab ? "bg-[#1A1D40] text-white shadow-lg" : "text-gray-400 hover:text-white"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="mt-8">
        {/* Projects Content */}
        {activeTab === "Projects" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4  border border-[#1A1D40] rounded-xl shadow">
              <img src="" alt="" />
              <h3 className="text-lg font-semibold">Netflix</h3>
              <p className="text-sm text-gray-300">Deskripsi singkat project.</p>
            </div>
            <div className="p-4  border border-[#1A1D40] rounded-xl shadow">
              <h3 className="text-lg font-semibold">Netflix</h3>
              <p className="text-sm text-gray-300">Deskripsi singkat project.</p>
            </div>
            <div className="p-4  border border-[#1A1D40] rounded-xl shadow">
              <h3 className="text-lg font-semibold">Netflix</h3>
              <p className="text-sm text-gray-300">Deskripsi singkat project.</p>
            </div>
          </div>
        )}

        {/* Certificates Content */}
        {activeTab === "Certificates" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src="/certificates/sample-certificate.png"
                alt="Certificate"
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        )}

        {/* Tech Stack Content */}
        {activeTab === "Tech Stack" && (
          <div className="flex flex-wrap gap-4 justify-center">
            {["React", "Next.js", "Tailwind", "TypeScript"].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-[#1A1D40] text-white rounded-full shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
