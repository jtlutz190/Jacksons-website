import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

const projects = [
  {
    title: "Audio Localization System",
    status: "Prototype planned",
    description:
      "Embedded systems project concept using microphone arrays, time-delay estimation, and signal processing to estimate sound-source direction.",
    tags: ["Embedded Systems", "Signal Processing", "C", "Localization"],
    accentClass: "card-coral",
  },
  {
    title: "Math Vault",
    status: "In development",
    description:
      "A structured visual notebook for undergraduate mathematics, designed to connect handwritten notes, proofs, examples, and topic maps.",
    tags: ["Analysis", "Differential Equations", "Discrete Math", "Writing"],
    accentClass: "card-gold",
  },
  {
    title: "1000 Differential Equations",
    status: "Active archive",
    description:
      "A long-term handwritten and computational archive of ordinary differential equations, organized by structure, method, and mathematical idea.",
    tags: [
      "Differential Equations",
      "ODEs",
      "Mathematical Writing",
      "Problem Solving",
    ],
    link: "/diffeq",
    linkLabel: "View archive",
    featuredLink: true,
    accentClass: "card-cyan",
  },
  {
    title: "Portfolio Repository",
    status: "Public code",
    description:
      "The source for this site, maintained as a public Next.js portfolio and a place to continue improving design, accessibility, and technical presentation.",
    tags: ["Next.js", "React", "TypeScript", "Technical Portfolio"],
    link: "https://github.com/jtlutz190/Jacksons-website",
    linkLabel: "View repository",
    accentClass: "card-violet",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Selected technical work">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
