"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      className="space-y-12 px-6 md:px-12 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Name / Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-yellow-400"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Awadhooth S K
      </motion.h1>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">Education</h2>
        <div className="space-y-6 pl-4 border-l-4 border-yellow-400">
          <div>
            <h3 className="font-bold text-white">Sri Sathya Sai Loka Seva Vidyakendra,Alike</h3>
            <p className="text-gray-400">Batch - 2018 (10th)</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Sri Satya Sai loka Seva PU College, Alike</h3>
            <p className="text-gray-400">Batch - 2020 (PU)</p>
          </div>
          <div>
            <h3 className="font-bold text-white">Siddaganga Institute of Technology</h3>
            <p className="text-gray-400">Batch 2025</p>
            <p className="text-gray-400">Bachelor of Technology in Computer Science & Engineering</p>
          </div>
        </div>
      </motion.div>

      {/* Work Experience Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-white">Work Experience</h2>
        <div className="space-y-6 pl-4 border-l-4 border-yellow-400">
          <div>
            <h3 className="font-bold text-white">Fullstack Developer Intern – Stacklane</h3>
            <p className="text-gray-400">March 2025 – Present</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-400">
              <li>Working across the stack to build and maintain scalable web applications.</li>
              <li>Developing frontend components with React and TypeScript.</li>
              <li>Integrating backend APIs and optimizing performance.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
