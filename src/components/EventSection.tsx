import { eventYearRows } from "@/data/eventData";

function CoverTitle({ id, label, className = "" }: { id: string; label: string; className?: string }) {
  return (
    <h2 id={id} className={`cover-title ${className}`} aria-label={label}>
      <svg className="cover-title-svg" viewBox="0 0 1000 185" aria-hidden="true" focusable="false">
        <text x="0" y="179" textLength="1000" lengthAdjust="spacingAndGlyphs">
          {label}
        </text>
      </svg>
    </h2>
  );
}

export default function EventSection() {
  return (
    <section id="events" className="cover-section events-cover" aria-labelledby="events-title">
      <CoverTitle id="events-title" label="EVENTS" />

      <div className="section-inner year-stack" aria-label="Event years">
        {eventYearRows.map((row, rowIndex) => (
          <div key={rowIndex} className="year-row">
            {row.map((year, itemIndex) => {
              const isOverflowYear =
                rowIndex === 1 && year === "2020" && (itemIndex === 0 || itemIndex === row.length - 1);

              return (
                <span
                  key={`${rowIndex}-${itemIndex}-${year}`}
                  className={isOverflowYear ? "year-item year-item-overflow" : "year-item year-item-interactive"}
                >
                  {year}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
