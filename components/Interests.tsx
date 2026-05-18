import InterestCard from "@/components/InterestCard";
import Section from "@/components/Section";

const interests = [
  {
    title: "Reading",
    description:
      "Books are part of the notebook too: math, ideas, and whatever helps the world feel more legible.",
    link: "https://hardcover.app/@Jlutz/stats",
    accentClass: "card-mint",
  },
  {
    title: "Bodybuilding",
    description:
      "A steady practice in patience, consistency, and measurable progress.",
    accentClass: "card-mint",
  },
  {
    title: "Music",
    description:
      "Listening, patterns, structure, texture. Signals show up everywhere once you start noticing.",
    accentClass: "card-mint",
  },
  {
    title: "Visual math content",
    description:
      "Short visual explanations that make mathematical ideas easier to see, test, and remember.",
    link: "https://www.tiktok.com/@fish.maths",
    accentClass: "card-mint",
  },
];

export default function Interests() {
  return (
    <Section id="interests" title="Interests" eyebrow="Human layer">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {interests.map((interest) => (
          <InterestCard key={interest.title} {...interest} />
        ))}
      </div>
    </Section>
  );
}
