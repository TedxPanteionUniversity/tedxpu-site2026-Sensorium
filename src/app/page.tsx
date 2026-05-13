import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PageSections from "@/components/PageSections";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <Header />
      <Hero />
      <PageSections />
      <Footer />
    </main>
  );
}
