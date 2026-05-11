interface Interest {
  title: string;
  description: string;
}

const interests: Interest[] = [
  {
    title: "Reading",
    description:
      "Heavy rotation of math, philosophy, and history of science. Currently working through Spivak's Calculus and rereading some Camus on the side.",
  },
  {
    title: "Bodybuilding",
    description:
      "Consistent training, mostly hypertrophy-focused. I find the discipline of it useful — the overlap with studying is real.",
  },
  {
    title: "Music",
    description:
      "Listener more than player. Wide taste, strong opinions. The connection between music and signal processing is something I think about more than I probably should.",
  },
  {
    title: "Visual Math",
    description:
      "I make short-form video content explaining mathematical ideas visually. The constraint of making something understandable in 60 seconds forces clarity I can't get from writing alone.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="py-12">
      <SectionHeader title="Interests" />

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        {interests.map((item) => (
          <div key={item.title} className="card rounded-lg p-5 bg-[#151618]">
            <h3 className="text-sm font-medium text-[#e8e9eb]">{item.title}</h3>
            <p className="mt-2 text-sm text-[#9ca3af] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
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
