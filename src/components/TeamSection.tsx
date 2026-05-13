import { teamGroups } from "@/data/team";
import Image from "next/image";
import type { CSSProperties } from "react";

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

export default function TeamSection() {
  return (
    <section id="team" className="cover-section teams-cover" aria-labelledby="team-title">
      <CoverTitle id="team-title" label="TEAMS" className="teams-title" />

      <div className="teams-content" aria-label="TEDx Panteion University teams">
        {teamGroups.map((team) => {
          const style = { "--team-accent": team.accent } as CSSProperties;

          return (
            <article key={team.name} className="team-group" style={style}>
              <div className="team-card-collage" aria-label={`${team.name} member photos`}>
                {team.members.map((member, memberIndex) => (
                  <figure
                    key={member.name}
                    className="team-member-card"
                    style={{ "--member-index": memberIndex } as CSSProperties}
                  >
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${team.name}`}
                      width={900}
                      height={1120}
                      sizes="(max-width: 720px) 72vw, (max-width: 1100px) 32vw, 23vw"
                      className="team-member-image"
                    />
                  </figure>
                ))}
              </div>

              <div className="team-copy">
                <h3>{team.name.toLowerCase()}</h3>
                <ul aria-label={`${team.name} members`}>
                  {team.members.map((member) => (
                    <li key={member.name}>
                      {member.director ? "(D) " : ""}
                      {member.name}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
