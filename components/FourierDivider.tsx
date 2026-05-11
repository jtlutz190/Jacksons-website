interface FourierDividerProps {
  className?: string;
}

export default function FourierDivider({ className = "" }: FourierDividerProps) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="28"
        viewBox="0 0 900 28"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 14 C38 4, 75 24, 112 14 C150 4, 188 24, 225 14 C263 4, 300 24, 338 14 C375 4, 413 24, 450 14 C488 4, 525 24, 563 14 C600 4, 638 24, 675 14 C713 4, 750 24, 788 14 C825 4, 863 24, 900 14"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-border"
        />
        <path
          d="M0 14 C13 9, 25 19, 38 14 C50 9, 63 19, 75 14 C88 9, 100 19, 112 14 C125 9, 138 19, 150 14 C163 9, 175 19, 188 14 C200 9, 213 19, 225 14 C238 9, 250 19, 263 14 C275 9, 288 19, 300 14 C313 9, 325 19, 338 14 C350 9, 363 19, 375 14 C388 9, 400 19, 413 14 C425 9, 438 19, 450 14 C463 9, 475 19, 488 14 C500 9, 513 19, 525 14 C538 9, 550 19, 563 14 C575 9, 588 19, 600 14 C613 9, 625 19, 638 14 C650 9, 663 19, 675 14 C688 9, 700 19, 713 14 C725 9, 738 19, 750 14 C763 9, 775 19, 788 14 C800 9, 813 19, 825 14 C838 9, 850 19, 863 14 C875 9, 888 19, 900 14"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
          className="text-accent-dim"
          opacity="0.45"
        />
      </svg>
      <p className="mt-1 text-center font-mono text-[10px] tracking-[0.28em] text-border">
        Fourier notes
      </p>
    </div>
  );
}
