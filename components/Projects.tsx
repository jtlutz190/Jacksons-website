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
      "A long-term archive of ordinary differential equations with analytical solutions, computational visualization, and selected Model Lab entries for interactive ODE interpretation. Hosted on this site!",
    tags: [
      "Differential Equations",
      "ODEs",
      "Model Lab",
      "Mathematical Writing",
    ],
    link: "/diffeq",
    linkLabel: "View archive",
    featuredLink: true,
    accentClass: "card-cyan",
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
    <Section id="projects" title="Projects" eyebrow="Selected technical work">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
