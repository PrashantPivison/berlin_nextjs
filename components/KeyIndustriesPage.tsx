import Image from "next/image";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { keyIndustries, type KeyCard } from "./pagesData";

const PATTERNS = [
  "/images/Muster-Punkte-Rot-Hell.svg",
  "/images/Muster-Streifen-Schwarz.svg",
];

function KeyCardLink({ card }: { card: KeyCard }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`key ${card.bg}`}
    >
      <h3>{card.title}</h3>
      <div className="single-image-holder">
        <Image src={card.image} alt="" fill sizes="(max-width: 767px) 100vw, 360px" />
      </div>
      <span className="btn-arrow">
        <Image src="/images/arrow-right.svg" width={40} height={40} alt="Read more" />
      </span>
    </a>
  );
}

export default function KeyIndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title={["explore our", "key industry clusters"]}
          image="https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/Berlin-Business-Office-USA-Explore-our-key-industry-clusters-scaled.jpg"
          alt="A view of Zoologischer Garten Berlin, near Bikini Berlin"
          bannerClass="key-industries-banner"
          imgSource="Bikini Berlin"
        />

        <div className="container actualcontent ki-content">
          <div className="wpb-content-wrapper">
            {keyIndustries.sections.map((section, i) => (
              <section className="content-row" key={i}>
                <div className="wb-custom-title not-bold-title">
                  <span className="single-image-holder">
                    <Image
                      src={PATTERNS[i] ?? PATTERNS[0]}
                      width={80}
                      height={80}
                      alt=""
                      className="pattern"
                    />
                  </span>
                  <h2>{section.heading}</h2>
                </div>
                <div className="keys-grid">
                  {section.cards.map((card) => (
                    <div className="key-col" key={card.title}>
                      <KeyCardLink card={card} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
