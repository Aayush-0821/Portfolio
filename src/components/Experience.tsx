"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  MapPin,
  Calendar,
  Trophy,
  CheckCircle2,
  Cpu,
  Activity,
} from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    company: "Company One",
    role: "Frontend Developer",
  },
  {
    company: "Company Two",
    role: "Backend Developer",
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="min-h-screen px-4 py-21">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-8xl
              font-black
              uppercase
              tracking-[0.08em]
              text-transparent
              bg-clip-text
              bg-linear-to-r
              from-[#111]
              via-[#444]
              to-[#111]
              drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)]
            "
          >
            EXPERIENCE
          </h1>

          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-base sm:text-xl md:text-2xl font-bold text-[#222]">
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [-8, 8, -8],
                filter: [
                  "drop-shadow(0 0 4px rgba(255,122,0,0.25))",
                  "drop-shadow(0 0 12px rgba(255,122,0,0.6))",
                  "drop-shadow(0 0 4px rgba(255,122,0,0.25))",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BriefcaseBusiness size={32} className="text-[#ff7a00]" />
            </motion.div>

            <span className="font-semibold">
              Explore my journey • Open experience log • View milestones
            </span>
          </div>
        </motion.div>
        <div className="relative mt-10 h-140">
          {experiences.map((exp, index) => {
            const isActive = active === index;
            const isLeft = index === 0;

            return (
              <motion.div
                key={exp.company}
                layout
                onClick={() => setActive(index)}
                transition={{
                  layout: {
                    duration: 0.65,
                    type: "spring",
                    stiffness: 120,
                    damping: 22,
                  },
                }}
                className={`absolute overflow-hidden rounded-[28px] border-4 border-[#222] bg-[#f7f7f7] shadow-[8px_8px_0_#111] cursor-pointer

        ${
          isActive
            ? isLeft
              ? "left-0 top-0 h-full w-[74%] z-20"
              : "right-0 top-0 h-full w-[74%] z-20"
            : isLeft
              ? "left-0 bottom-0 h-55 w-[22%] z-10"
              : "right-0 bottom-0 h-55 w-[22%] z-10"
        }`}
                animate={{
                  scale: isActive ? 1 : 0.9,
                  rotate: isActive ? 0 : isLeft ? -3 : 3,
                  opacity: 1,
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b-4 border-[#222] bg-[#efe9b5] px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full border-2 border-[#222] bg-red-400" />
                    <div className="h-4 w-4 rounded-full border-2 border-[#222] bg-yellow-400" />
                    <div className="h-4 w-4 rounded-full border-2 border-[#222] bg-green-400" />

                    <span className="font-black tracking-wide text-[#111]">
                      {exp.company}
                    </span>
                  </div>

                  {isActive && (
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className="hidden md:block text-[10px] text-gray-500 font-mono"
                    >
                      EXPERIENCE TERMINAL
                    </motion.span>
                  )}
                </div>

                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex h-[calc(100%-72px)] flex-col gap-4 p-5"
                  >
                    {/* ===================== TOP ===================== */}

                    <div className="grid grid-cols-[1fr_150px] gap-4">
                      {/* Left Info Card */}

                      <div className="p-1">
                        <h2 className="text-3xl font-black uppercase text-[#ff7a00]">
                          {exp.role}
                        </h2>

                        <div className="mt-1 space-y-2 text-black">
                          <div className="flex items-center gap-3">
                            <Calendar size={18} />
                            <span className="font-semibold">
                              Dec 2025 - Mar 2026
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <MapPin size={18} />
                            <span className="font-semibold">Remote</span>
                          </div>
                        </div>
                      </div>

                      {/* Company Logo */}
                        <div className="flex h-24 w-27 items-center justify-center rounded-xl border-2 border-dashed border-gray-400 text-sm text-gray-400">
                          LOGO
                        </div> 
                    </div>

                    {/* ===================== OBJECTIVES ===================== */}

                    <div className="rounded-2xl border-4 border-[#222] bg-[#efe9b5] p-5 shadow-[4px_4px_0_#222]">
                      <h3 className="font-black uppercase text-[#ff7a00]">
                        Mission Objectives
                      </h3>

                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-3">
                          <CheckCircle2 size={18} />
                          Built scalable APIs
                        </li>

                        <li className="flex items-center gap-3">
                          <CheckCircle2 size={18} />
                          Implemented authentication
                        </li>

                        <li className="flex items-center gap-3">
                          <CheckCircle2 size={18} />
                          Optimized database queries
                        </li>
                      </ul>
                    </div>

                    {/* ===================== BOTTOM ===================== */}

                    <div className="grid flex-1 grid-cols-2 gap-4">
                      {/* Tech Stack */}

                      <div className="rounded-2xl border-4 border-[#222] bg-white p-5 shadow-[4px_4px_0_#222]">
                        <div className="flex items-center gap-2">
                          <Cpu size={18} />

                          <h3 className="font-black uppercase">Tech Stack</h3>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {["Node", "Express", "Mongo", "Docker", "Redis"].map(
                            (tech) => (
                              <div
                                key={tech}
                                className="rounded-full border-2 border-[#222] bg-[#ffd100] px-3 py-1 text-xs font-black"
                              >
                                {tech}
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Achievement */}

                      <div className="rounded-2xl border-4 border-[#222] bg-[#fff7cf] p-5 shadow-[4px_4px_0_#222]">
                        <div className="flex items-center gap-2">
                          <Trophy size={20} className="text-[#ff7a00]" />

                          <h3 className="font-black uppercase">
                            Achievement Unlocked
                          </h3>
                        </div>

                        <p className="mt-4 text-[15px] leading-7 text-[#555]">
                          Explain what you learned during this experience.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex h-full flex-col items-center justify-center">
                    <motion.h3
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className="text-2xl font-black uppercase"
                    >
                      {exp.company}
                    </motion.h3>

                    <p className="mt-2 text-sm text-gray-500">{exp.role}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
