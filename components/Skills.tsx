import Section from "@/components/Section";
import SkillGroup from "@/components/SkillGroup";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "Embedded C", "MATLAB"],
  },
  {
    title: "Technical / math",
    skills: [
      "Linear Algebra",
      "Differential Equations",
      "Signal Processing - learning",
      "Embedded Systems - learning",
    ],
  },
  {
    title: "Tools",
    skills: ["GitHub", "LaTeX", "Obsidian", "VS Code", "PlatformIO"],
  },
  {
    title: "Engineering / hardware",
    skills: ["Microcontrollers / hardware tools", "Placeholder group"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="Beta portfolio">
      <p className="mb-6 max-w-2xl text-sm leading-6 text-text">
        This is a learning-oriented portfolio, so the language here is
        intentionally modest. Some areas are active study rather than claimed
        mastery.
      </p>
      <div className="space-y-3">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>
    </Section>
  );
}
