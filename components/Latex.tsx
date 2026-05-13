import katex from "katex";

interface LatexProps {
  math: string;
  display?: boolean;
  className?: string;
}

export default function Latex({ math, display = false, className = "" }: LatexProps) {
  const html = katex.renderToString(math, {
    displayMode: display,
    throwOnError: false,
    strict: false,
  });

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
