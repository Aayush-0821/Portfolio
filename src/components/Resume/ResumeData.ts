export type ResumeSection =
  | "header"
  | "contact"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "honors";

export type ResumeItemType = "title" | "heading" | "body" | "tag";

export interface ResumeItem {
  id: string;
  section: ResumeSection;
  type: ResumeItemType;
  text: string;
}

export const resumeData: ResumeItem[] = [
  {
    id: "name",
    section: "header",
    type: "title",
    text: "Aayush Vats",
  },
  //CONTACT
  {
    id: "phone",
    section: "contact",
    type: "body",
    text: "+91 8445184150",
  },
  {
    id: "email",
    section: "contact",
    type: "body",
    text: "vatsayush67@gmail.com",
  },
  {
    id: "github",
    section: "contact",
    type: "body",
    text: "github.com/Aayush-0821",
  },
  {
    id: "linkedIn",
    section: "contact",
    type: "body",
    text: "linkedin.com/in/theaayushvats",
  },
  //EDUCATION
  {
    id: "education-heading",
    section: "education",
    type: "heading",
    text: "Education",
  },
  {
    id: "education-degree",
    section: "education",
    type: "body",
    text: "B.E. Computer Science — Chitkara University",
  },
  {
    id: "education-gpa",
    section: "education",
    type: "tag",
    text: "CGPA 9.49",
  },
  {
    id: "education-date",
    section: "education",
    type: "tag",
    text: "Aug 2024 - June 2028",
  },
  //EXPERIENCE
  {
    id: "experience-heading",
    section: "experience",
    type: "heading",
    text: "Experience",
  },
  {
    id: "experience-role",
    section: "experience",
    type: "body",
    text: "Software Development Engineer Intern — BitwiseLearn",
  },
  {
    id: "experience-date",
    section: "experience",
    type: "tag",
    text: "Dec 2025 - Mar 2026",
  },
  {
    id: "experience-1",
    section: "experience",
    type: "body",
    text: "Built full-stack for a multi-tenant e-learning platform with role-based access across five user roles.",
  },
  {
    id: "experience-2",
    section: "experience",
    type: "body",
    text: "Developed 40+ REST APIs for courses, enrollment, assessments, and learning operations.",
  },
  {
    id: "experience-3",
    section: "experience",
    type: "body",
    text: "Integrated a sandboxed code execution engine supporting 17 programming languages.",
  },
  //PROJECTS
  {
    id: "projects-heading",
    section: "projects",
    type: "heading",
    text: "Projects",
  },
  {
    id: "project-epiphany",
    section: "projects",
    type: "body",
    text: "Epiphany — Learning & Institution Management Platform",
  },
  {
    id: "project-epiphany-stack",
    section: "projects",
    type: "tag",
    text: "Next.js • Express • MongoDB",
  },
  {
    id: "project-epiphany-1",
    section: "projects",
    type: "body",
    text: "Built a full-stack platform for institutes, students, vendors, batches, and administrators.",
  },
  {
    id: "project-epiphany-2",
    section: "projects",
    type: "body",
    text: "Implemented secure role-based authentication and modular backend architecture for scalability.",
  },
  {
    id: "project-epiphany-3",
    section: "projects",
    type: "body",
    text: "Unified academic and administrative workflows into a single management platform.",
  },
  {
    id: "project-commitai",
    section: "projects",
    type: "body",
    text: "Commit-AI — AI Git Workflow Assistant",
  },
  {
    id: "project-commitai-stack",
    section: "projects",
    type: "tag",
    text: "TypeScript • Octokit • OpenRouter",
  },
  {
    id: "project-commitai-1",
    section: "projects",
    type: "body",
    text: "CLI tool automating commits, branching and pull requests.",
  },
  {
    id: "project-commitai-2",
    section: "projects",
    type: "body",
    text: "Supports multiple AI providers for commit messages and PR descriptions.",
  },
  //SKILLS
  {
    id: "skills-heading",
    section: "skills",
    type: "heading",
    text: "Technical Skills",
  },
  {
    id: "skills",
    section: "skills",
    type: "tag",
    text: "Java • TypeScript • React • Next.js • Node.js • Express • MongoDB • MySQL • Redis • Docker • AWS • DSA",
  },
  //HONORS
  {
    id: "honors-heading",
    section: "honors",
    type: "heading",
    text: "Honors & Achievements",
  },
  {
    id: "honor-1",
    section: "honors",
    type: "body",
    text: "Head of DSA & Programming at Open Source Chandigarh.",
  },
  {
    id: "honor-2",
    section: "honors",
    type: "body",
    text: "Solved 500+ DSA problems across multiple platforms.",
  },
  {
    id: "honor-3",
    section: "honors",
    type: "body",
    text: "Open-source contributor to Hacktoberfest and GirlScript Summer of Code.",
  },
];