const eventItems = [
  {
    number: "01",
    title: "Main Stage",
    copy: "Talks, performances, and sensory interruptions shaped around this year's theme.",
  },
  {
    number: "02",
    title: "Installations",
    copy: "Interactive moments around the venue before and between sessions.",
  },
  {
    number: "03",
    title: "After Hours",
    copy: "A closing gathering for the TEDx Panteion University community.",
  },
];

const teamItems = ["Curation", "Production", "Experience", "Partnerships"];

export default function PageSections() {
  return (
    <div className="site-sections">
      <section id="events" className="cover-section events-cover" aria-labelledby="events-title">
        <h2 id="events-title" className="cover-title">
          EVENTS
        </h2>

        <div className="section-inner event-list" aria-label="Event highlights">
          {eventItems.map((event) => (
            <article key={event.number} className="event-row">
              <span className="event-number">{event.number}</span>
              <div>
                <h3>{event.title}</h3>
                <p>{event.copy}</p>
              </div>
              <span className="event-arrow" aria-hidden="true">
                /
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="team" className="content-section" aria-labelledby="team-title">
        <div className="section-inner">
          <p className="section-eyebrow">Behind the event</p>
          <h2 id="team-title" className="section-title">
            Team
          </h2>
          <div className="team-grid" aria-label="Team groups">
            {teamItems.map((item) => (
              <article key={item} className="team-tile">
                <span className="event-number">{item.slice(0, 2).toUpperCase()}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="content-section" aria-labelledby="about-title">
        <div className="section-inner">
          <p className="section-eyebrow">About Sensorium</p>
          <div className="about-panel">
            <h2 id="about-title" className="sr-only">
              About
            </h2>
            <p>
              Sensorium is a one-day TEDx Panteion University experience about
              perception, memory, and the ways ideas move through the senses.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
