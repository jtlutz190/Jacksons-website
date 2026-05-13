import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

const projects = [
  {
    title: "Audio Localization System",
    status: "Future flagship project",
    description:
      "A planned embedded systems and signal processing project involving microphones, time-delay estimation, and localization of sound sources.",
    tags: ["Embedded Systems", "Signal Processing", "Microphones", "Localization"],
    link: "#",
    linkLabel: "Placeholder details",
  },
  {
    title: "Math Vault",
    status: "External / in progress",
    description:
      "An externally hosted visualization of undergraduate mathematics, including handwritten notes, proofs, theorems, and examples. Topics include Analysis, Differential Equations, and Discrete Math.",
    tags: ["Analysis", "Differential Equations", "Discrete Math"],
    link: "#",
    linkLabel: "Placeholder external link",
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
    linkLabel: "Browse archive",
  },
  {
    title: "General Projects / GitHub",
    status: "Ongoing",
    description:
      "A growing collection of code, experiments, notes, and technical projects.",
    tags: ["Code", "Experiments", "Notes", "Technical Projects"],
    link: "https://github.com/placeholder",
    linkLabel: "Placeholder GitHub",
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
