"use client";

import CorkBoard from "./CorkBoard";
import ResumeHeading from "./ResumeHeading";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen px-4 pt-21 pb-5">
      <div className="mx-auto max-w-6xl">
        <ResumeHeading />
        <CorkBoard />
      </div>
    </section>
  );
};

export default Resume;
