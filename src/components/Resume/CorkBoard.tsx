"use client";

import { motion } from "framer-motion";
import { Pin, Square, Download, Shuffle } from "lucide-react";

export default function CorkBoard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
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
      {/* ================= HEADER ================= */}

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

      {/* ================= BODY ================= */}

      <div
        className="relative min-h-140 overflow-hidden bg-[#fff7cf]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,.12) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      >
        {/* Resume cards go here later */}
      </div>

      {/* ================= FOOTER ================= */}

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
