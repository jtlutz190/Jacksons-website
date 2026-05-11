import FourierDivider from "@/components/FourierDivider";

interface ProjectCard {
  title: string;
  status: "placeholder" | "active" | "ongoing";
  tags: string[];
  description: string;
  link?: string;
  linkLabel?: string;
}

const projects: ProjectCard[] = [
  {
    title: "Audio Localization System",
    status: "placeholder",
    tags: ["embedded systems", "signal processing", "C", "microphones"],
    description:
      "A flagship project-in-progress. The goal: use an array of microphones and embedded signal processing to localize audio sources in space. Involves time-difference-of-arrival estimation, real-time embedded C on a microcontroller, and a fair amount of linear algebra under the hood.",
    link: "#",
    linkLabel: "details coming",
  },
  {
    title: "Math Vault",
    status: "active",
    tags: ["math", "visualization", "notes", "analysis", "ODE", "discrete"],
    description:
      "An externally hosted collection of undergraduate mathematics — handwritten notes, formal proofs, theorems, and worked examples. Topics include Real Analysis, Differential Equations, and Discrete Mathematics. Built for personal reference, but shared for anyone who finds it useful.",
    link: "#",
    linkLabel: "view vault →",
  },
  {
    title: "1000 Differential Equations",
    status: "ongoing",
    tags: ["ODE", "PDE", "math", "long-term"],
    description:
      "A long-term project: solve, categorize, and understand one thousand differential equations. Less a stunt, more a meditation. Each equation is a small puzzle in dynamics, structure, or method. Somewhere between a mathematical journal and a training log.",
    link: "#",
    linkLabel: "view progress",
  },
  {
    title: "GitHub",
    status: "placeholder",
    tags: ["open source", "code"],
    description:
      "The rest of my work lives on GitHub — smaller experiments, utilities, course projects, and works in progress.",
    link: "#",
    linkLabel: "github.com/jtlutz →",
  },
];

const statusLabel: Record<ProjectCard["status"], string> = {
  placeholder: "coming soon",
  active: "active",
  ongoing: "ongoing",
};

const statusColor: Record<ProjectCard["status"], string> = {
  placeholder: "text-[#4a5568]",
  active: "text-[#7c9cbf]",
  ongoing: "text-[#9ca3af]",
};

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <SectionHeader title="Projects" />

      <div className="mt-8 grid gap-4">
        {projects.map((project) => (
          <article key={project.title} className="card rounded-lg p-5 bg-[#151618]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[#e8e9eb] font-medium text-base">{project.title}</h3>
              <span className={`shrink-0 font-mono text-xs mt-0.5 ${statusColor[project.status]}`}>
                {statusLabel[project.status]}
              </span>
            </div>

            <p className="mt-2 text-sm text-[#9ca3af] leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-[#1e2a38] text-[#7c9cbf] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="text-xs text-[#6b7280] hover:text-[#7c9cbf] transition-colors font-mono"
                >
                  {project.linkLabel}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <FourierDivider className="mt-14" />
    </section>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-lg font-semibold text-[#e8e9eb] tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-[#2a2b2f]" />
    </div>
  );
}
