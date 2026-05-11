interface FourierDividerProps {
  className?: string;
}

export default function FourierDivider({ className = "" }: FourierDividerProps) {
  return (
    <div className={`w-full flex flex-col gap-1 ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="20"
        viewBox="0 0 800 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fundamental */}
        <path
          d="M0 10 C33 2, 67 18, 100 10 C133 2, 167 18, 200 10 C233 2, 267 18, 300 10 C333 2, 367 18, 400 10 C433 2, 467 18, 500 10 C533 2, 567 18, 600 10 C633 2, 667 18, 700 10 C733 2, 767 18, 800 10"
          stroke="#2a2b2f"
          strokeWidth="1"
          fill="none"
        />
        {/* 3rd harmonic — quieter */}
        <path
          d="M0 10 C11 5, 22 15, 33 10 C44 5, 55 15, 67 10 C78 5, 89 15, 100 10 C111 5, 122 15, 133 10 C144 5, 155 15, 167 10 C178 5, 189 15, 200 10 C211 5, 222 15, 233 10 C244 5, 255 15, 267 10 C278 5, 289 15, 300 10 C311 5, 322 15, 333 10 C344 5, 355 15, 367 10 C378 5, 389 15, 400 10 C411 5, 422 15, 433 10 C444 5, 455 15, 467 10 C478 5, 489 15, 500 10 C511 5, 522 15, 533 10 C544 5, 555 15, 567 10 C578 5, 589 15, 600 10 C611 5, 622 15, 633 10 C644 5, 655 15, 667 10 C678 5, 689 15, 700 10 C711 5, 722 15, 733 10 C744 5, 755 15, 767 10 C778 5, 789 15, 800 10"
          stroke="#2a2b2f"
          strokeWidth="0.5"
          strokeOpacity="0.5"
          fill="none"
        />
      </svg>
      <p className="text-center font-mono text-[10px] text-[#2a2b2f] tracking-widest select-none">
        f(x) = Σ aₙ sin(nωx)
      </p>
    </div>
  );
}
