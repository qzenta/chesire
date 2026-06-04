interface WordmarkProps {
  inverted?: boolean; // true = on dark background
}

export default function Wordmark({ inverted = false }: WordmarkProps) {
  return (
    <div className="flex flex-col leading-none select-none">
      <span
        className="font-[var(--font-playfair)] font-bold tracking-wide text-xl"
        style={{ color: inverted ? "#C9A84C" : "#1A2E52" }}
      >
        CHESIRE
      </span>
      <span
        className="text-[10px] font-semibold tracking-[0.25em] uppercase mt-0.5"
        style={{ color: inverted ? "#ffffff99" : "#C9A84C" }}
      >
        ATTORNEYS
      </span>
    </div>
  );
}
