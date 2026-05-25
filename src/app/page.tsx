import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventSection from "@/components/EventSection";
import TeamSection from "@/components/TeamSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ConsoleSignature from "@/components/misc/ConsoleSignature";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tedxpanteionuniversity.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "TEDxPanteion University",
      alternateName: "TEDxPU",
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: "Sensorium - TEDxPanteion University 2026",
      description:
        "TEDxPanteion University 2026 presents Sensorium, an event exploring perception, the senses, technology, society, science, and culture.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      inLanguage: "en",
    },
    {
      "@type": "Event",
      "@id": `${siteUrl}/#event`,
      name: "Sensorium",
      organizer: {
        "@type": "Organization",
        name: "TEDxPanteion University",
        url: `${siteUrl}/`,
      },
      url: `${siteUrl}/`,
      image: `${siteUrl}/assets/events/2026.avif`,
      description:
        "Sensorium is the 2026 TEDxPanteion University event about perception, the senses, technology, society, science, and culture.",
      startDate: "2026-05-23T11:00:00+03:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Panteion University",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Athens",
          addressCountry: "GR",
        },
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#site-navigation`,
      name: "Primary navigation",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Events",
          url: `${siteUrl}/#events`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Team",
          url: `${siteUrl}/#team`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "About",
          url: `${siteUrl}/#about`,
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      {/*
          Built by Λιν Χονγκ Τσε (Κιτ) — TEDxPanteion University Sensorium Website
          Github: https://github.com/Kit432
      */}
      <h1 className="sr-only">Sensorium - TEDxPanteion University 2026</h1>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConsoleSignature />
      <Header />
      <Hero />
      <div className="site-sections">
        <EventSection />
        <TeamSection />
        <div className="about-section">
          <AboutSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
