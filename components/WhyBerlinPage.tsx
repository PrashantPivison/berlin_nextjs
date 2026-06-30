import Header from "./Header";
import Hero from "./Hero";
import FeatureCards from "./FeatureCards";
import TestimonialSlider from "./TestimonialSlider";
import CompanyLogos from "./CompanyLogos";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

/**
 * The full "Why Berlin" page, mirroring the live site's top-to-bottom order:
 * Header → Hero → Feature cards → Testimonial slider → US companies → Footer.
 */
export default function WhyBerlinPage() {
  return (
    <>
      <Header />
      <main>
        <Hero
          title="Why Berlin"
          image="/images/hero.jpg"
          alt="Aerial view of Berlin skyline with famous TV tower and Spree river in beautiful evening light at sunset, Germany."
          bannerClass="why-berlin-banner"
        />

        <div className="container actualcontent">
          <div className="wpb-content-wrapper">
            <section className="content-row">
              <FeatureCards />
            </section>

            <section className="content-row slider-row">
              <TestimonialSlider />
            </section>

            <section className="content-row">
              <CompanyLogos />
            </section>
          </div>
        </div>

        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
