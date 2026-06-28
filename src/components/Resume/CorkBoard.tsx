"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Pin, Square, Download, Shuffle } from "lucide-react";
import { resumeData } from "./ResumeData";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { playClickSound } from "@/src/utils/sound";

export default function CorkBoard({musicEnabled=false}:{musicEnabled?:boolean}) {
  const header = resumeData.filter((item) => item.section === "header");
  const contact = resumeData.filter((item) => item.section === "contact");

  const education = resumeData.filter((item) => item.section === "education");
  const educationDegree = education.find((i) => i.id === "education-degree");
  const educationGpa = education.find((i) => i.id === "education-gpa");
  const educationDate = education.find((i) => i.id === "education-date");

  const experience = resumeData.filter((item) => item.section === "experience");
  const experienceRole = experience.find((i) => i.id === "experience-role");
  const experienceDate = experience.find((i) => i.id === "experience-date");
  const experienceBullets = experience.filter(
    (i) =>
      i.id.startsWith("experience-") &&
      /\d/.test(i.id.replace("experience-", "")),
  );

  const honors = resumeData.filter(
    (item) => item.section === "honors" && item.type === "body",
  );

  const projects = resumeData.filter((item) => item.section === "projects");
  const epiphany = projects.filter((p) => p.id.startsWith("project-epiphany"));
  const epiphanyTitle = epiphany.find((p) => p.id === "project-epiphany");
  const epiphanyStack = epiphany.find((p) => p.id === "project-epiphany-stack");
  const epiphanyBullets = epiphany.filter((p) => /epiphany-\d/.test(p.id));

  const commitAi = projects.filter((p) => p.id.startsWith("project-commitai"));
  const commitAiTitle = commitAi.find((p) => p.id === "project-commitai");
  const commitAiStack = commitAi.find((p) => p.id === "project-commitai-stack");
  const commitAiBullets = commitAi.filter((p) => /commitai-\d/.test(p.id));

  const skills = resumeData.filter(
    (item) => item.section === "skills" && item.type === "tag",
  );

  // Group the tech-stack tags into the labelled rows the card displays.
  const techGroups: { label: string; ids: string[] }[] = [
    { label: "Languages", ids: ["skill-java", "skill-typescript"] },
    {
      label: "Frontend",
      ids: ["skill-react", "skill-nextjs", "skill-tailwindcss"],
    },
    { label: "Backend", ids: ["skill-nodejs", "skill-express"] },
    { label: "Database", ids: ["skill-mongodb", "skill-mysql", "skill-redis"] },
    { label: "DevOps", ids: ["skill-docker", "skill-aws"] },
    {
      label: "Core",
      ids: [
        "skill-dbms",
        "skill-cn",
        "skill-os",
        "skill-linux",
        "skill-dsa",
        "skill-oop",
      ],
    },
  ];

  const skillById = (id: string) => skills.find((s) => s.id === id)?.text;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="
        overflow-hidden
        rounded-[28px]
        border-4
        border-[#222]
        bg-[#e8d9a8]
        shadow-[8px_8px_0_#111]
      "
    >
      {/* ------------------ HEADER ----------------- */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b-4
          border-[#222]
          bg-[#ffeca1]
          px-6
          py-4
        "
      >
        <div className="flex items-center gap-3">
          <Pin size={18} className="rotate-[-20deg] text-[#7a3b1f]" />

          <span className="font-black tracking-[0.08em] text-[#3a2a14]">
            PERSONNEL DOSSIER
          </span>
        </div>

        <motion.span
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hidden text-[12px] font-mono text-gray-600 md:block"
        >
          UNSORTED
        </motion.span>
      </div>

      {/* ------------------ BODY ----------------- */}

      <div
        className="relative h-140 overflow-hidden bg-[#fff8d6] px-8 py-4 text-[#222]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,.08) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      >
        {/* ================= HEADER ================= */}

        <div className="border-b-2 border-[#222] pb-3">
          <div className="flex items-center justify-between">
            {/* NAME */}

            <div>
              {header.map((item) => (
                <h1
                  key={item.id}
                  className="text-4xl font-black tracking-tight text-[#222]"
                >
                  {item.text}
                </h1>
              ))}
            </div>

            {/* CONTACT */}

            <div className="flex gap-x-5 text-sm items-center">
              {contact.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 font-medium text-neutral-700"
                >
                  {item.id === "phone" && (
                    <Phone size={14} className="text-[#d97706]" />
                  )}

                  {item.id === "email" && (
                    <Mail size={14} className="text-[#d97706]" />
                  )}

                  {item.id === "github" && (
                    <FaGithub className="text-[#d97706]" />
                  )}

                  {item.id === "linkedIn" && (
                    <FaLinkedin className="text-[#d97706]" />
                  )}

                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MAIN ================= */}

        <div className="mt-5 grid h-[calc(100%-110px)] grid-cols-[1.3fr_1fr] gap-8">
          {/* LEFT */}

          <div className="flex flex-col justify-between">
            <div className="mb-1">
              <div className="mb-2 border-b border-[#555] pb-1">
                <h2 className="text-base font-black tracking-wider text-[#222]">
                  EDUCATION
                </h2>
              </div>

              <div className="flex items-center justify-between text-[15px] text-[#333]">
                <span className="font-semibold">
                  {educationDegree?.text.split(" — ")[0]}{" "}
                  <span className="font-normal text-neutral-600">
                    • {educationDegree?.text.split(" — ")[1]}
                  </span>
                </span>

                <span className="font-bold">{educationGpa?.text}</span>
              </div>

              <div className="mt-0.5 text-xs font-medium text-neutral-500">
                {educationDate?.text}
              </div>
            </div>

            <div className="mb-5">
              <div className="mb-2 border-b border-[#555] pb-1">
                <h2 className="text-base font-black tracking-wider text-[#222]">
                  EXPERIENCE
                </h2>
              </div>

              {/* Position + Duration */}
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[15px] font-bold">
                  {experienceRole?.text.split(" — ")[0]}
                </span>

                <span className="text-sm font-semibold text-neutral-600">
                  {experienceDate?.text}
                </span>
              </div>

              {/* Company */}
              <div className="mb-2 text-sm text-neutral-600">
                {experienceRole?.text.split(" — ")[1]}
              </div>

              {/* Highlights */}
              <ul className="space-y-1 pl-5 text-[13px] text-[#333]">
                {experienceBullets.map((bullet) => (
                  <li key={bullet.id} className="list-disc">
                    {bullet.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5">
              <div className="mb-2 border-b border-[#555] pb-1">
                <h2 className="text-base font-black tracking-wider text-[#222]">
                  HONORS
                </h2>
              </div>

              <div className="space-y-1 text-[13px] text-[#333]">
                {honors.map((honor) => (
                  <div key={honor.id} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#d97706]" />
                    <span>{honor.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex h-full flex-col justify-between">
            <div className="mb-5">
              <div className="mb-2 border-b border-[#555] pb-1">
                <h2 className="text-base font-black tracking-wider text-[#222]">
                  PROJECTS
                </h2>
              </div>

              {/* Project 1 — Epiphany */}

              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-bold">
                    {epiphanyTitle?.text.split(" — ")[0]}
                  </h3>

                  <span className="text-xs text-neutral-600">Full Stack</span>
                </div>

                <p className="mb-1 text-xs italic text-neutral-600">
                  {epiphanyStack?.text}
                </p>

                <ul className="space-y-1 pl-5 text-[13px] text-[#333]">
                  {epiphanyBullets.map((bullet) => (
                    <li key={bullet.id} className="list-disc">
                      {bullet.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project 2 — Commit-AI */}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] font-bold">
                    {commitAiTitle?.text.split(" — ")[0]}
                  </h3>

                  <span className="text-xs text-neutral-600">CLI</span>
                </div>

                <p className="mb-1 text-xs italic text-neutral-600">
                  {commitAiStack?.text}
                </p>

                <ul className="space-y-1 pl-5 text-[13px] text-[#333]">
                  {commitAiBullets.map((bullet) => (
                    <li key={bullet.id} className="list-disc">
                      {bullet.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* TECH STACK */}
            <div>
              <div className="mb-2 border-b border-[#555] pb-1">
                <h2 className="text-base font-black tracking-wider text-[#222]">
                  TECH STACK
                </h2>
              </div>

              <div className="space-y-1 text-[13px] text-[#333]">
                {techGroups.map((group) => (
                  <div key={group.label}>
                    <span className="font-semibold">{group.label}:</span>{" "}
                    {group.ids
                      .map((id) => skillById(id))
                      .filter(Boolean)
                      .join(", ")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- FOOTER --------------------- */}

      <div
        className="
          flex
          flex-col
          gap-4
          border-t-4
          border-[#222]
          bg-[#ffeca1]
          px-6
          py-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div className="flex flex-wrap gap-3">
          <button
          onClick={()=>{
            if(musicEnabled) playClickSound(); 
          }}
            className="
              flex
              cursor-pointer
              items-center
              gap-2
              rounded-lg
              border-4
              border-[#333]
              bg-linear-to-r
              from-[#60a5fa]
              via-[#3b82f6]
              to-[#2563eb]
              px-5
              py-3
              font-black
              text-white
              shadow-[0_5px_0_#222]
              transition-all
              duration-200
              hover:-translate-y-1
              active:translate-y-1
              active:shadow-none
            "
          >
            <Square size={16} />
            STOP
          </button>

          <button
          onClick={()=>{
            if(musicEnabled) playClickSound();
          }}
            className="
              flex
              cursor-pointer
              items-center
              gap-2
              rounded-lg
              border-4
              border-[#333]
              bg-[#ff6b6b]
              px-5
              py-3
              font-black
              text-white
              shadow-[0_5px_0_#222]
              transition-all
              duration-200
              hover:-translate-y-1
              active:translate-y-1
              active:shadow-none
            "
          >
            <Download size={16} />
            DOWNLOAD
          </button>

          <button
          onClick={()=>{
            if(musicEnabled) playClickSound();
          }}
            className="
              flex
              cursor-pointer
              items-center
              gap-2
              rounded-lg
              border-4
              border-[#333]
              bg-white
              px-5
              py-3
              font-black
              text-black
              shadow-[0_5px_0_#222]
              transition-all
              duration-200
              hover:-translate-y-1
              active:translate-y-1
              active:shadow-none
            "
          >
            <Shuffle size={16} />
            SCATTER
          </button>
        </div>

        <motion.span
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hidden text-[10px] font-mono text-gray-600 md:block"
        >
          Stop reconstructs • Download archives • Scatter restarts
        </motion.span>
      </div>
    </motion.div>
  );
}
