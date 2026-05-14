import Section from "@/components/Section";
import WritingCard from "@/components/WritingCard";

const posts = [
  {
    title: "An Introduction to Spectral Graph Theory",
    description:
      "A placeholder for intuition-heavy mathematical writing that stays understandable to curious people while still giving mathematically knowledgeable readers something real to chew on.",
    accentClass: "card-cobalt",
  },
  {
    title: "Making Fourier Transforms Intuitive",
    description:
      "A future note connecting signals, frequency, and visual explanation, written for readers who may not remember every detail of undergraduate math.",
    accentClass: "card-mint",
  },
  {
    title:
      "Why Does Formal Logic Matter? An Introduction to Ignoring the Law of Excluded Middle",
    description:
      "A placeholder essay on formal logic, constructive thinking, and why foundations can matter even outside a pure math classroom.",
    accentClass: "card-coral",
  },
];

export default function Blog() {
  return (
    <Section id="writing" title="Writing" eyebrow="Notes and drafts">
      <p className="mb-6 max-w-3xl text-sm leading-6 text-soft">
        Placeholder space for intuition-heavy mathematical writing: clear
        enough for curious readers, useful to employers who may not remember
        every undergraduate math detail, and still interesting to mathematically
        knowledgeable readers. Some pieces may connect to visual math or TikTok
        content.
      </p>
      <div className="grid gap-4">
        {posts.map((post) => (
          <WritingCard key={post.title} {...post} />
        ))}
      </div>
    </Section>
  );
}
