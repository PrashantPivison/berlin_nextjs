import Image from "next/image";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CardSwiper from "./CardSwiper";
import {
  news,
  newsletters,
  events,
  type NewsItem,
  type Newsletter,
  type EventItem,
} from "./pagesData";

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className={`news-events-card ${item.bg}`}>
      <div className="news-events-img">
        <Image src={item.image} width={250} height={141} alt="" sizes="250px" />
      </div>
      <div className="news-events-text">
        <h6>{item.date}</h6>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
      </div>
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        <div className="btn-arrow">
          <Image src="/images/arrow-right.svg" width={40} height={40} alt="View full post" />
        </div>
      </a>
    </div>
  );
}

function NewsletterRow({ item }: { item: Newsletter }) {
  return (
    <div className="events-right-text">
      <p>{item.label}</p>
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        <div className="btn-arrow">
          <Image
            src="/images/arrow-right.svg"
            width={40}
            height={40}
            alt="View full newsletter"
          />
        </div>
      </a>
    </div>
  );
}

function EventCard({ item }: { item: EventItem }) {
  return (
    <div className={`events-bttm-card ${item.bg}`}>
      <div className="events-bttm-text">
        <div className="events-top-text">
          <h6>{item.month}</h6>
          <h3>{item.day}</h3>
        </div>
        <div className="events-mld-text">
          <h6>{item.dateLine}</h6>
          <h3>{item.title}</h3>
          <p className="event-excerpt">{item.excerpt}</p>
          <a href={item.href}>
            <span>More Information</span>
            <div className="btn-arrow">
              <Image
                src="/images/arrow-right.svg"
                width={40}
                height={40}
                alt="More information"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="events-bttm-img">
        <Image src={item.image} width={250} height={141} alt="" sizes="250px" />
      </div>
    </div>
  );
}

function SectionTitle({ pattern, children, className }: { pattern: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`news-title flex items-center ${className ?? ""}`}>
      <Image src={pattern} width={80} height={80} alt="" className="pattern" />
      <h3>{children}</h3>
    </div>
  );
}

export default function NewsEventsPage() {
  // Latest news: 5 cards per slide. Newsletters: 8 per slide. Events: 3 per slide.
  const newsSlides = chunk(news, 5).map((group, i) => (
    <div key={i}>
      {group.map((item) => (
        <NewsCard key={item.title} item={item} />
      ))}
    </div>
  ));

  const newsletterSlides = chunk(newsletters, 4).map((group, i) => (
    <div key={i}>
      {group.map((item) => (
        <NewsletterRow key={item.label} item={item} />
      ))}
    </div>
  ));

  const eventSlides = chunk(events, 3).map((group, i) => (
    <div key={i}>
      {group.map((item) => (
        <EventCard key={item.title + item.day} item={item} />
      ))}
    </div>
  ));

  return (
    <>
      <Header />
      <main>
        <Hero
          title="News & Events"
          image="https://www.berlinoffice-usa.com/wp-content/uploads/2025/08/Berlin-Business-Office-USA-News-and-events-scaled.jpg"
          alt="News and events in Berlin"
          bannerClass="news-events-banner"
        />

        <div className="container actualcontent">
          <div className="wpb-content-wrapper">
            <section className="content-row">
              <div className="news-events">
                <div className="news-events-left">
                  <SectionTitle pattern="/images/Muster-Wellen-Schwarz.svg">
                    Latest news
                  </SectionTitle>
                  <CardSwiper
                    variant="events-swiper"
                    slides={newsSlides}
                    afterControls={
                      <a
                        className="past-news-btn"
                        href="https://www.berlinoffice-usa.com/news-events/past-news/"
                      >
                        Past news
                      </a>
                    }
                  />
                </div>

                <div className="news-events-right">
                  <SectionTitle pattern="/images/Muster-Punkte-Schwarz.svg">
                    Newsletters
                  </SectionTitle>
                  <CardSwiper variant="newsletter-swiper" slides={newsletterSlides} />
                </div>
              </div>
            </section>

            <section className="content-row">
              <div className="news-events-bottom">
                <SectionTitle pattern="/images/Muster-Wellen-Schwarz.svg">
                  Upcoming events
                </SectionTitle>
                <CardSwiper
                  variant="eventBottom-swiper"
                  slides={eventSlides}
                  afterControls={
                    <a
                      className="past-news-btn"
                      href="https://www.berlinoffice-usa.com/news-events/past-events/"
                    >
                      Past events
                    </a>
                  }
                />
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
