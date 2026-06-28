"use client";

import { motion } from "framer-motion";
import { FileUser } from "lucide-react";

export default function ResumeHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-10 text-center"
    >
      {/* Main Title */}
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

      {/* Subtitle */}
      <div className="mt-6 flex flex-col items-center justify-center gap-4 text-base font-bold text-[#222] sm:text-xl md:flex-row md:text-2xl">
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
          <FileUser
            size={32}
            className="text-[#ff7a00]"
          />
        </motion.div>

        <span className="font-semibold">
          Evidence scattered • Reconstruct the profile • Archive the file
        </span>
      </div>
    </motion.div>
  );
}