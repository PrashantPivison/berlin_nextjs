import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col--12" style={{ width: "100%" }}>
            <div className="footer-inner">
              {/* Column 1 — logo, address, social */}
              <div className="footer-single footer-single-1">
                <div className="footer-logo">
                  <a href="https://www.berlinoffice-usa.com">
                    <span className="single-image-holder">
                      <Image
                        src="/images/berlin-business-office-usa-logo-footer.svg"
                        width={150}
                        height={78}
                        alt="Berlin Business Office, USA"
                      />
                    </span>
                  </a>
                </div>

                <div className="address">
                  <span className="single-image-holder">
                    <Image
                      src="/images/globe.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </span>
                  <address>
                    120 Wall Street, 20th Floor,
                    <br />
                    New York, NY 10005
                  </address>
                </div>

                <div className="social-media-holder">
                  <div className="single-social-media">
                    <a
                      href="https://www.linkedin.com/company/berlin-business-office-usa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/linkedin.svg"
                        width={40}
                        height={40}
                        alt="LinkedIn"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2 — newsletter */}
              <div className="footer-single footer-single-2">
                <h3>Subscribe to our newsletter</h3>
                <NewsletterForm />
              </div>

              {/* Column 3 — "An office of the" */}
              <div className="footer-single footer-single-right">
                <h3>An office of the</h3>
                <a
                  href="https://www.berlin.de/sen/web/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="single-image-holder">
                    <Image
                      src="/images/logo-sdeepe.svg"
                      width={150}
                      height={101}
                      alt="Senate of Berlin"
                    />
                  </span>
                </a>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bttm">
              <div className="menu-footer-meta-menu-container">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <p>© 2026 Berlin Business Office, USA, All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
