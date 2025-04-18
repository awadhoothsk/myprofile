import { FaCode, FaServer, FaPaintBrush, FaPlug } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full bg-[#2a2a2a] p-6 rounded-xl shadow">
      <h3 className="text-2xl font-bold mb-4 text-yellow-400">About Me</h3>
      <p className="mb-4">
        I am Awadhooth Shrinivas Kulkarni, a passionate Fullstack Developer currently pursuing a B.Tech in AI & Data Science at Siddaganga Institute of Technology. I specialize in building scalable web applications and have strong expertise in both frontend and backend technologies.
      </p>
      <p className="mb-4 ">
        I enjoy developing clean, responsive user interfaces using React, Next.js, and Tailwind CSS, while ensuring solid backend infrastructure with Node.js, Express, and MongoDB. My goal is to build innovative solutions that enhance user experiences and meet real-world needs.
      </p>
      {/* <p className="mb-6">
        I am always eager to learn and improve, and I thrive in collaborative environments where I can contribute ideas and build something impactful together.
      </p> */}

      <h4 className="text-xl font-semibold mb-4 text-white">What I’m Doing</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3 hover:scale-105">
          <FaCode className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">Frontend Development</h5>
            <p>Building interactive and visually appealing UIs with React, Next.js, and Tailwind CSS to create seamless user experiences.</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3 hover:scale-105">
          <FaServer className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">Backend Development</h5>
            <p>Developing efficient, scalable server-side logic and APIs with Node.js and Express to power modern web applications.</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3 hover:scale-105">
          <FaPaintBrush className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">UI/UX Design</h5>
            <p>Designing clean and modern user interfaces that are intuitive and responsive, with a focus on usability and aesthetics.</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] p-4 rounded-lg shadow flex items-start gap-3 hover:scale-105">
          <FaPlug className="text-yellow-400 text-xl mt-1" />
          <div>
            <h5 className="font-semibold mb-1 text-yellow-400">API Integration</h5>
            <p>Connecting external services and APIs to enhance functionality and provide data-driven solutions for web applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
