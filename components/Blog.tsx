import FourierDivider from "@/components/FourierDivider";

interface BlogPost {
  title: string;
  blurb: string;
  tags: string[];
  tiktok?: boolean;
}

const posts: BlogPost[] = [
  {
    title: "Making Fourier Transforms Intuitive",
    blurb:
      "The Fourier transform is one of the most useful things in all of mathematics — and one of the most poorly explained. This post builds intuition from scratch: what decomposing a signal into frequencies actually means, and why it works. No prerequisites beyond curiosity.",
    tags: ["fourier", "signal processing", "intuition"],
    tiktok: true,
  },
  {
    title: "An Introduction to Spectral Graph Theory",
    blurb:
      "What does a matrix have to do with a network? Quite a lot, it turns out. Spectral graph theory is the study of graphs through the lens of linear algebra — eigenvalues, eigenvectors, and structure. A gentle on-ramp for the curious reader.",
    tags: ["graph theory", "linear algebra", "spectral methods"],
    tiktok: false,
  },
  {
    title: "Why Does Formal Logic Matter? An Introduction to Ignoring the Law of Excluded Middle",
    blurb:
      "Classical logic says every statement is either true or false. Intuitionistic logic says: not so fast. This post is an introduction to what happens when you remove the law of excluded middle — and why constructive mathematicians think that's actually the right move.",
    tags: ["logic", "foundations", "constructive math"],
    tiktok: false,
  },
];

export default function Blog() {
  return (
    <section id="writing" className="py-12">
      <SectionHeader title="Writing" />

      <p className="mt-4 text-sm text-[#9ca3af] leading-relaxed max-w-xl">
        Intuition-heavy writing on math and technical topics. Written to be
        accessible to curious readers and people who've forgotten most of their
        undergraduate math — while still being interesting to those who haven't.
        Some posts connect to visual content on TikTok.
      </p>

      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <article key={post.title} className="card rounded-lg p-5 bg-[#151618]">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[#e8e9eb] font-medium text-sm leading-snug">
                    {post.title}
                  </h3>
                  {post.tiktok && (
                    <span className="font-mono text-[10px] text-[#4a6a8a] border border-[#2a3a4a] rounded px-1.5 py-0.5 shrink-0">
                      + visual
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-[#9ca3af] leading-relaxed">
                  {post.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs bg-[#1e2a38] text-[#7c9cbf] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="shrink-0 text-xs font-mono text-[#4a5568] hover:text-[#7c9cbf] transition-colors mt-0.5"
                aria-label={`Read ${post.title} (coming soon)`}
              >
                coming soon
              </a>
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
