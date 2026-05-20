import Section from "@/components/Section";
import WritingCard from "@/components/WritingCard";

const posts = [
  {
    title: "An Introduction to Spectral Graph Theory",
    description:
      "A planned technical note focused on intuition, examples, and the bridge between graph structure and linear algebra.",
    accentClass: "card-violet",
  },
  {
    title: "How Smooth Waves Build Sharp Corners: Making Fourier Series Intuitive",
    description:
      "A square wave looks simple, but hidden inside is a carefully weighted stack of sine waves.",
    href: "/blog/making-fourier-intuitive",
    cta: "Click to see",
    status: "Active" as const,
    accentClass: "card-cyan",
  },
  {
    title:
      "Why Does Formal Logic Matter? An Introduction to Ignoring the Law of Excluded Middle",
    description:
      "A draft essay about constructive reasoning, foundations, and why precise assumptions matter outside a pure math classroom.",
    accentClass: "card-violet",
  },
];

export default function Blog() {
  return (
    <Section id="writing" title="Writing" eyebrow="Notes and drafts">
      <p className="mb-6 max-w-3xl text-sm leading-6 text-soft">
        Technical communication is part of the work. This section collects
        math and engineering notes aimed at making difficult ideas easier to
        inspect, explain, and reuse.
      </p>
      <div className="grid gap-4">
        {posts.map((post) => (
          <WritingCard key={post.title} {...post} />
        ))}
      </div>
    </Section>
  );
}
