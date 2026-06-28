"use client";

import CorkBoard from "./CorkBoard";
import ResumeHeading from "./ResumeHeading";

const Resume = ({
    musicEnabled=false
}:{
    musicEnabled?:boolean
}) => {
  return (
    <section id="resume" className="min-h-screen px-4 pt-21 pb-5">
      <div className="mx-auto max-w-6xl">
        <ResumeHeading />
        <CorkBoard musicEnabled={musicEnabled}/>
      </div>
    </section>
  );
};

export default Resume;
