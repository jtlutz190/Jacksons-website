import Section from "@/components/Section";
import SkillGroup from "@/components/SkillGroup";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "Embedded C", "MATLAB", "TypeScript"],
    accentClass: "card-cyan",
  },
  {
    title: "Math / engineering",
    skills: [
      "Linear Algebra",
      "Differential Equations",
      "Numerical Methods",
      "Signal Processing",
      "Embedded Systems",
    ],
    accentClass: "card-cyan",
  },
  {
    title: "Tools",
    skills: ["GitHub", "LaTeX", "Obsidian", "VS Code", "PlatformIO"],
    accentClass: "card-cyan",
  },
  {
    title: "Hardware / lab",
    skills: ["Microcontrollers", "Circuit Fundamentals", "Technical Documentation"],
    accentClass: "card-cyan",
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="Tools and foundations">
      <p className="mb-6 max-w-2xl text-sm leading-6 text-text">
        A focused snapshot of the technical areas I&apos;m building through
        coursework, independent projects, and written problem solving.
      </p>
      <div className="space-y-3">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>
    </Section>
  );
}
