"use client";

import React from "react";
import { Star, Heart } from "lucide-react";

const interests = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I enjoy building modern, responsive web applications using React, Next.js, and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Motorcycles",
    description:
      "Enthusiastic about motorcycle engineering, performance, and evolving two-wheeler technology.",
  },
  {
    id: 3,
    title: "Cars",
    description:
      "Passionate about automotive innovation, design, and high-performance engineering.",
  },
  {
    id: 4,
    title: "Coding",
    description:
      "I love solving real-world problems with efficient, scalable code and modern technologies.",
  },
  {
    id: 5,
    title: "Chess & Reading",
    description:
      "Chess sharpens my thinking; fiction books inspire creativity and help me explore new ideas.",
  },
];

export default function MyInterests() {
  return (
    <section className="px-6 py-12 md:px-16 lg:px-24 bg-[#1a1a1a] min-h-screen text-white">
      <h2 className="text-4xl font-bold mb-8">My Interests</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {interests.map((interest) => (
          <div
            key={interest.id}
            className="bg-[#262626] p-5 rounded-2xlshadow  hover:shadow-xl transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Star size={16} />
              <span>Interest</span>
              <span className="flex items-center gap-1 ml-auto">
                <Heart size={16} />
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
            <p className="text-sm text-gray-300">{interest.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
