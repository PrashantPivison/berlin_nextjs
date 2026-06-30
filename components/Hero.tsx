import Image from "next/image";
import { Fragment } from "react";

type HeroProps = {
  /** Heading text; pass an array for multiple lines (rendered with <br/>). */
  title: React.ReactNode | string[];
  image: string;
  alt: string;
  /** Banner modifier class from the live site (e.g. "why-berlin-banner"). */
  bannerClass?: string;
  /** Optional image-credit shown bottom-right (e.g. "Bikini Berlin"). */
  imgSource?: string;
  priority?: boolean;
};

/**
 * Shared hero band — full-bleed darkened background image with a large
 * uppercase headline. Matches the live site's hero-area across all pages.
 */
export default function Hero({
  title,
  image,
  alt,
  bannerClass,
  imgSource,
  priority = true,
}: HeroProps) {
  // Render multi-line titles as plain text separated by <br/> (no wrapper
  // spans) so the line-height matches the live site exactly.
  const heading = Array.isArray(title)
    ? title.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))
    : title;

  return (
    <section className={`hero-area container ${bannerClass ?? ""}`}>
      <div className="hero-bg-wrapper">
        <div className="single-image-holder">
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
          {imgSource && (
            <div className="img-source">
              <i className="fa fa-copyright" aria-hidden="true" />
              <span>{imgSource}</span>
            </div>
          )}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ width: "100%" }}>
            <div className="hero">
              <h1>{heading}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
