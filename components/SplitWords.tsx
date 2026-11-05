/** Splits text into masked words that rise in one after another (see .words in globals.css). */
export default function SplitWords({ text, start = 0 }: { text: string; start?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="w">
            <span style={{ "--i": start + i } as React.CSSProperties}>{word}</span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}
