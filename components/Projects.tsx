import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

const projects = [
  {
    title: "Audio Localization System",
    status: "Work in progress",
    description:
      "A planned embedded systems and signal processing project involving microphones, time-delay estimation, and localization of sound sources.",
    tags: ["Embedded Systems", "Signal Processing", "Microphones", "Localization"],
    accentClass: "card-cobalt",
  },
  {
    title: "Math Vault",
    status: "Work in progress",
    description:
      "An externally hosted visualization of undergraduate mathematics, including handwritten notes, proofs, theorems, and examples. Topics include Analysis, Differential Equations, and Discrete Math.",
    tags: ["Analysis", "Differential Equations", "Discrete Math"],
    accentClass: "card-cobalt",
  },
  {
    title: "1000 Differential Equations",
    status: "Long-term mathematical archive",
    description:
      "A handwritten and computational archive of one thousand ordinary differential equations, organized by structure, method, and mathematical idea.",
    tags: [
      "Differential Equations",
      "ODEs",
      "Mathematical Writing",
      "Problem Solving",
    ],
    link: "/diffeq",
    linkLabel: "View archive",
    featuredLink: true,
    accentClass: "card-cobalt",
  },
  {
    title: "General Projects / GitHub",
    status: "Work in progress",
    description:
      "A growing collection of code, experiments, notes, and technical projects.",
    tags: ["Code", "Experiments", "Notes", "Technical Projects"],
    accentClass: "card-cobalt",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" eyebrow="Work in progress">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
