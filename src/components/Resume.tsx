"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  FileUser,
  Square,
  Download,
  Shuffle,
  Mail,
  Phone,
  Pin,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect, useMemo, useRef } from "react";
import { playClickSound } from "../utils/sound";

type Chunk = {
  id: string;
  text: string;
  section:
    | "header"
    | "contact"
    | "education"
    | "experience"
    | "projects"
    | "skills"
    | "honors";
  weight: "title" | "heading" | "body" | "tag";
};

const chunks: Chunk[] = [
  // Header
  { id: "name", text: "Aayush Vats", section: "header", weight: "title" },

  // Contact
  { id: "phone", text: "+91 8445184150", section: "contact", weight: "body" },
  {
    id: "email",
    text: "vatsayush67@gmail.com",
    section: "contact",
    weight: "body",
  },
  {
    id: "github",
    text: "github.com/Aayush-0821",
    section: "contact",
    weight: "body",
  },
  {
    id: "linkedin",
    text: "linkedin.com/in/theaayushvats",
    section: "contact",
    weight: "body",
  },

  // Education
  { id: "edu-h", text: "Education", section: "education", weight: "heading" },
  {
    id: "edu-1",
    text: "B.E. Computer Science — Chitkara University, Punjab",
    section: "education",
    weight: "body",
  },
  { id: "edu-2", text: "GPA 9.49", section: "education", weight: "tag" },
  {
    id: "edu-3",
    text: "Aug 2024 – May 2028",
    section: "education",
    weight: "tag",
  },

  // Experience
  { id: "exp-h", text: "Experience", section: "experience", weight: "heading" },
  {
    id: "exp-1-role",
    text: "Software Development Engineer Intern — BitwiseLearn",
    section: "experience",
    weight: "body",
  },
  {
    id: "exp-1-date",
    text: "Dec 2025 – Mar 2026",
    section: "experience",
    weight: "tag",
  },
  {
    id: "exp-1-d1",
    text: "Built backend for a multi-tenant e-learning platform with role-based access across five user roles.",
    section: "experience",
    weight: "body",
  },
  {
    id: "exp-1-d2",
    text: "Developed 40+ REST APIs for courses, enrollment, assessments, and learning operations.",
    section: "experience",
    weight: "body",
  },
  {
    id: "exp-1-d3",
    text: "Integrated a sandboxed code execution engine supporting 17 programming languages.",
    section: "experience",
    weight: "body",
  },

  // Projects
  { id: "proj-h", text: "Projects", section: "projects", weight: "heading" },
  {
    id: "proj-1-name",
    text: "Persephone — Technical Interview Platform",
    section: "projects",
    weight: "body",
  },
  {
    id: "proj-1-stack",
    text: "Next.js · Socket.IO · Redis",
    section: "projects",
    weight: "tag",
  },
  {
    id: "proj-1-d1",
    text: "Full-stack interview platform with video, collaborative coding, and live chat across 50+ sessions.",
    section: "projects",
    weight: "body",
  },
  {
    id: "proj-1-d2",
    text: "Real-time sync via Socket.IO and Redis with sub-100ms state updates.",
    section: "projects",
    weight: "body",
  },
  {
    id: "proj-1-d3",
    text: "AI resume parser and ATS scoring system for technical screening.",
    section: "projects",
    weight: "body",
  },
  {
    id: "proj-2-name",
    text: "Commit-AI — AI Git Workflow Assistant",
    section: "projects",
    weight: "body",
  },
  {
    id: "proj-2-stack",
    text: "TypeScript · Octokit · OpenRouter",
    section: "projects",
    weight: "tag",
  },
  {
    id: "proj-2-d1",
    text: "npm CLI with 100+ downloads automating commits, branching, and PR creation.",
    section: "projects",
    weight: "body",
  },
  {
    id: "proj-2-d2",
    text: "Multi-model AI support (OpenAI, Gemini, OpenRouter) for commit messages and PR descriptions.",
    section: "projects",
    weight: "body",
  },

  // Skills
  {
    id: "skl-h",
    text: "Technical Skills",
    section: "skills",
    weight: "heading",
  },
  { id: "skl-1", text: "Java", section: "skills", weight: "tag" },
  { id: "skl-2", text: "TypeScript", section: "skills", weight: "tag" },
  { id: "skl-3", text: "Node.js", section: "skills", weight: "tag" },
  { id: "skl-4", text: "Next.js", section: "skills", weight: "tag" },
  { id: "skl-5", text: "React.js", section: "skills", weight: "tag" },
  { id: "skl-6", text: "MongoDB", section: "skills", weight: "tag" },
  { id: "skl-7", text: "MySQL", section: "skills", weight: "tag" },
  { id: "skl-8", text: "Redis", section: "skills", weight: "tag" },
  { id: "skl-9", text: "Docker", section: "skills", weight: "tag" },
  { id: "skl-10", text: "AWS", section: "skills", weight: "tag" },
  { id: "skl-11", text: "DSA", section: "skills", weight: "tag" },
  { id: "skl-12", text: "DBMS", section: "skills", weight: "tag" },

  // Honors
  {
    id: "hon-h",
    text: "Honors & Achievements",
    section: "honors",
    weight: "heading",
  },
  {
    id: "hon-1",
    text: "Head of DSA & Programming at Open Source Chandigarh, mentoring 10+ students.",
    section: "honors",
    weight: "body",
  },
  {
    id: "hon-2",
    text: "Solved 700+ DSA problems across LeetCode, CodeChef, GeeksforGeeks.",
    section: "honors",
    weight: "body",
  },
  {
    id: "hon-3",
    text: "Open-source contributor to Hacktoberfest and GirlScript Summer of Code.",
    section: "honors",
    weight: "body",
  },
];

const weightClass: Record<Chunk["weight"], string> = {
  title: "text-2xl sm:text-4xl font-black uppercase tracking-wide text-[#222]",
  heading:
    "text-sm sm:text-lg font-black uppercase tracking-[0.08em] text-[#ff7a00]",
  body: "text-[11px] sm:text-sm font-semibold text-[#2a2a2a] leading-snug",
  tag: "text-[10px] sm:text-xs font-black uppercase tracking-wide text-[#7a4a1f] bg-[#fff3c4] border-2 border-[#222] rounded-full px-2.5 py-0.5 shadow-[2px_2px_0_#222]",
};

function cardChrome(weight: Chunk["weight"]) {
  if (weight === "tag") return ""; // tag already has its own pill chrome
  if (weight === "title") return "";
  if (weight === "heading")
    return "bg-[#ffe9a8] border-3 border-[#222] rounded-lg px-3 py-1.5 shadow-[3px_3px_0_#222]";
  return "bg-white border-2 border-[#222] rounded-lg px-3 py-2 shadow-[2px_2px_0_#222]";
}

const contactIconMap: Record<string, "mail" | "phone" | "github" | "linkedin"> =
  {
    email: "mail",
    phone: "phone",
    github: "github",
    linkedin: "linkedin",
  };

type Rect = { x: number; y: number; w: number };

function useHomeLayout(fieldWidth: number) {
  return useMemo(() => {
    const isNarrow = fieldWidth > 0 && fieldWidth < 640;
    const pad = 16;
    const colW = isNarrow ? fieldWidth - pad * 2 : (fieldWidth - pad * 3) / 2;
    const leftX = pad;
    const rightX = isNarrow ? pad : colW + pad * 2;

    const positions: Record<string, Rect> = {};
    const fullW = fieldWidth - pad * 2;

    positions["name"] = { x: pad, y: pad, w: fullW };

    let topY = pad + 50;

    // contact row
    if (isNarrow) {
      positions["phone"] = { x: pad, y: topY, w: fullW / 2 - 4 };
      positions["email"] = {
        x: pad + fullW / 2 + 4,
        y: topY,
        w: fullW / 2 - 4,
      };
      positions["github"] = { x: pad, y: topY + 26, w: fullW / 2 - 4 };
      positions["linkedin"] = {
        x: pad + fullW / 2 + 4,
        y: topY + 26,
        w: fullW / 2 - 4,
      };
      topY += 26 + 26 + 14;
    } else {
      positions["phone"] = { x: leftX, y: topY, w: colW / 2 - 4 };
      positions["email"] = {
        x: leftX + colW / 2 + 4,
        y: topY,
        w: colW / 2 - 4,
      };
      positions["github"] = { x: rightX, y: topY, w: colW / 2 - 4 };
      positions["linkedin"] = {
        x: rightX + colW / 2 + 4,
        y: topY,
        w: colW / 2 - 4,
      };
      topY += 26 + 14;
    }

    let leftY = topY;
    let rightY = topY;

    const heightFor = (c: Chunk) => {
      if (c.weight === "heading") return 30;
      if (c.weight === "tag") return 24;
      // body cards wrap; give long ones more room
      return c.text.length > 60 ? 46 : 34;
    };

    if (isNarrow) {
      const order = chunks.filter(
        (c) => c.section !== "header" && c.section !== "contact",
      );
      order.forEach((c) => {
        positions[c.id] = { x: leftX, y: leftY, w: colW };
        leftY += heightFor(c) + 8;
      });
    } else {
      // left column: education, experience, honors
      const leftSections = chunks.filter(
        (c) =>
          c.section === "education" ||
          c.section === "experience" ||
          c.section === "honors",
      );
      leftSections.forEach((c) => {
        positions[c.id] = { x: leftX, y: leftY, w: colW };
        leftY += heightFor(c) + 8;
      });

      // right column: projects, skills
      const rightSections = chunks.filter(
        (c) => c.section === "projects" || c.section === "skills",
      );
      rightSections.forEach((c) => {
        positions[c.id] = { x: rightX, y: rightY, w: colW };
        rightY += heightFor(c) + 8;
      });
    }

    const totalHeight = Math.max(leftY, rightY) + pad;
    return { positions, totalHeight };
  }, [fieldWidth]);
}

function randomScatter(fieldWidth: number, fieldHeight: number) {
  const w = Math.max(fieldWidth, 320);
  const h = Math.max(fieldHeight, 420);
  return {
    x: 8 + Math.random() * (w - 160),
    y: 8 + Math.random() * (h - 44),
    rotate: Math.random() * 28 - 14,
  };
}

type Mode = "scattered" | "typing" | "aligned-typing" | "aligned-scared";

export default function Resume({
  musicEnabled = false,
}: {
  musicEnabled?: boolean;
}) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [fieldSize, setFieldSize] = useState({ w: 0 });
  const [mode, setMode] = useState<Mode>("scattered");
  const [scrambleSeed, setScrambleSeed] = useState(0);
  const [pinnedCount, setPinnedCount] = useState(0);

  const { positions, totalHeight } = useHomeLayout(fieldSize.w);

  useEffect(() => {
    const measure = () => {
      if (fieldRef.current) {
        setFieldSize({ w: fieldRef.current.offsetWidth });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scatter = useMemo(() => {
    const map: Record<string, { x: number; y: number; rotate: number }> = {};
    chunks.forEach((c) => {
      map[c.id] = randomScatter(fieldSize.w, totalHeight);
    });
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrambleSeed, fieldSize.w, totalHeight]);

  // pin sequencing for STOP button
  useEffect(() => {
    if (mode !== "typing") return;
    setPinnedCount(0);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setPinnedCount(i);
      if (i >= chunks.length) {
        clearInterval(interval);
        setMode("aligned-typing");
      }
    }, 45);
    return () => clearInterval(interval);
  }, [mode]);

  const isAligned = mode === "aligned-typing" || mode === "aligned-scared";
  const isTyping = mode === "typing";

  const handleStop = () => {
    if (isAligned) return;
    if (musicEnabled) playClickSound();
    setMode("typing");
  };

  const handleScramble = () => {
    if (musicEnabled) playClickSound();
    setScrambleSeed((s) => s + 1);
    setMode("scattered");
  };

  const handleDownload = () => {
    if (musicEnabled) playClickSound();
    setMode("aligned-scared");
    window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/AayushVats_Resume.pdf";
      link.download = "AayushVats_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 260);
  };

  return (
    <section id="resume" className="min-h-screen px-4 py-21">
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
            RESUME
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
              <FileUser size={32} className="text-[#ff7a00]" />
            </motion.div>

            <span className="font-semibold">
              Scattered case file • Pin it together • Take the file with you
            </span>
          </div>
        </motion.div>

        {/* CORKBOARD CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-[28px] border-4 border-[#222] bg-[#e8d9a8] shadow-[8px_8px_0_#111]"
        >
          {/* Header — corkboard frame label, not a terminal bar */}
          <div className="flex items-center justify-between border-b-4 border-[#222] bg-[#d8c389] px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Pin size={18} className="text-[#7a3b1f] rotate-[-25deg]" />
              <span className="font-black tracking-wide text-[#3a2a14] text-sm sm:text-base">
                CASE FILE: AAYUSH VATS
              </span>
            </div>

            <span className="hidden sm:block rounded-full border-2 border-[#222] bg-[#fff7e0] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#7a4a1f]">
              {isAligned ? "Pinned" : isTyping ? "Pinning..." : "Scattered"}
            </span>
          </div>

          {/* BOARD */}
          <div
            ref={fieldRef}
            className="relative overflow-hidden p-2"
            style={{
              height: Math.max(totalHeight, 460),
              backgroundColor: "#c9a86b",
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 1px, transparent 0)",
              backgroundSize: "14px 14px",
            }}
          >
            {chunks.map((chunk, index) => {
              const home = positions[chunk.id];
              const scat = scatter[chunk.id];
              if (!home || !scat) return null;

              const hasPinned = index < pinnedCount;
              const showAtHome =
                mode === "aligned-scared" ||
                (mode !== "scattered" && (isAligned || hasPinned));

              const iconKind =
                chunk.section === "contact" ? contactIconMap[chunk.id] : null;

              return (
                <motion.div
                  key={chunk.id}
                  className="absolute select-none"
                  style={{ width: home.w }}
                  initial={false}
                  animate={
                    showAtHome
                      ? {
                          left: home.x,
                          top: home.y,
                          rotate: chunk.weight === "tag" ? 0 : 0,
                          opacity: 1,
                          scale:
                            mode === "aligned-scared" ? [1.18, 0.94, 1] : 1,
                        }
                      : {
                          left: scat.x,
                          top: scat.y,
                          rotate: scat.rotate,
                          opacity: 0.92,
                          scale: 1,
                        }
                  }
                  transition={
                    mode === "aligned-scared"
                      ? {
                          duration: 0.22,
                          delay: index * 0.004,
                          ease: [0.34, 1.56, 0.64, 1],
                        }
                      : showAtHome
                        ? {
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          }
                        : {
                            duration: 6 + (index % 5),
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          }
                  }
                >
                  <div
                    className={`flex items-center gap-1.5 ${cardChrome(chunk.weight)}`}
                  >
                    {iconKind === "mail" && (
                      <Mail size={12} className="shrink-0 text-[#ff7a00]" />
                    )}
                    {iconKind === "phone" && (
                      <Phone size={12} className="shrink-0 text-[#ff7a00]" />
                    )}
                    {iconKind === "github" && (
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="h-3 w-3 shrink-0 text-[#ff7a00]"
                      />
                    )}
                    {iconKind === "linkedin" && (
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="h-3 w-3 shrink-0 text-[#ff7a00]"
                      />
                    )}
                    <span className={weightClass[chunk.weight]}>
                      {chunk.text}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* ambient scramble hint */}
            <AnimatePresence>
              {mode === "scattered" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border-2 border-[#222] bg-[#fff7e0] px-3 py-1 text-[10px] sm:text-xs font-bold text-[#7a4a1f]"
                >
                  every scrap is real — just not pinned down yet
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* FOOTER / CONTROLS */}
          <div className="flex flex-col gap-4 border-t-4 border-[#222] bg-[#d8c389] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleStop}
                disabled={isAligned || isTyping}
                className={`flex items-center gap-2 rounded-lg border-4 border-[#333] px-5 py-3 font-black text-white shadow-[0_5px_0_#222] transition-all duration-200
                  ${
                    isAligned || isTyping
                      ? "cursor-not-allowed opacity-50 bg-[#9aa1a6]"
                      : "cursor-pointer bg-linear-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] hover:-translate-y-1 active:translate-y-1 active:shadow-none"
                  }`}
              >
                <Square size={16} />
                STOP
              </button>

              <button
                onClick={handleDownload}
                className="flex items-center gap-2 rounded-lg border-4 border-[#333] bg-[#ff6b6b] px-5 py-3 font-black text-white shadow-[0_5px_0_#222] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all duration-200 cursor-pointer"
              >
                <Download size={16} />
                DOWNLOAD CV
              </button>

              <button
                onClick={handleScramble}
                className="flex items-center gap-2 rounded-lg border-4 border-[#333] bg-white px-5 py-3 font-black text-black shadow-[0_5px_0_#222] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all duration-200 cursor-pointer"
              >
                <Shuffle size={16} />
                SCATTER AGAIN
              </button>
            </div>

            <span className="text-[10px] font-bold text-[#5a4a2a]">
              Stop pins it slowly • Download grabs it fast
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
