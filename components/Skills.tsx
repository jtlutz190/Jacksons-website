import FourierDivider from "@/components/FourierDivider";

interface Skill {
  name: string;
  note?: string;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python" },
      { name: "Embedded C", note: "learning" },
      { name: "MATLAB", note: "learning" },
    ],
  },
  {
    category: "Math & Technical",
    skills: [
      { name: "Linear Algebra" },
      { name: "Differential Equations" },
      { name: "Signal Processing", note: "learning" },
      { name: "Embedded Systems", note: "learning" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub" },
      { name: "LaTeX" },
      { name: "Obsidian" },
      { name: "VS Code" },
      { name: "PlatformIO" },
    ],
  },
  {
    category: "Hardware",
    skills: [
      { name: "Microcontrollers", note: "placeholder — details coming" },
      { name: "Hardware tools", note: "placeholder — details coming" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <SectionHeader title="Skills" />

      <p className="mt-4 text-sm text-[#6b7280]">
        This is a learning-oriented portfolio. Skills marked{" "}
        <span className="font-mono text-[#4a6a8a]">learning</span> are actively
        in progress.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="card rounded-lg p-5 bg-[#151618]">
            <h3 className="text-xs font-mono text-[#6b7280] uppercase tracking-widest mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between">
                  <span className="text-sm text-[#d1d5db]">{skill.name}</span>
                  {skill.note && (
                    <span className="font-mono text-xs text-[#4a6a8a]">
                      {skill.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
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
