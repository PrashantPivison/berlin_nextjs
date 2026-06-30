import Image from "next/image";

type Feature = {
  title: string;
  body: React.ReactNode;
  href: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  pattern: string;
  variant: "bg-green-2-feature" | "bg-blue-2-feature";
  newTab?: boolean;
};

const FEATURES: Feature[] = [
  {
    title: "Strategic Location",
    body: "Located in the heart of Europe, Berlin offers the ideal base for your business: excellent infrastructure, convenient transport routes, and direct market access not only to Germany but also to the European Union. Berlin connects you quickly and efficiently – by road, rail, air, and water.",
    href: "https://www.businesslocationcenter.de/en/infrastructure",
    image: "/images/feat-1.jpg",
    imageWidth: 1171,
    imageHeight: 1561,
    pattern: "/images/Muster-Streifen-Weiss.svg",
    variant: "bg-green-2-feature",
  },
  {
    title: "Innovation & Research",
    body: "Berlin offers the most tightly woven network of university and non-university research institutions in all of Germany – an excellent basis for interdisciplinary work. You gain access to over 35 centers for higher education and 70 non-university research centers.",
    href: "https://www.businesslocationcenter.de/en/science",
    image: "/images/feat-2.jpg",
    imageWidth: 250,
    imageHeight: 333,
    pattern: "/images/Muster-Punkte-Weiss.svg",
    variant: "bg-blue-2-feature",
  },
  {
    title: "Startup Hub",
    body: "As Europe’s Startup Capital, Berlin is home to numerous accelerators, incubators, and innovation labs. The city boasts one of the highest concentration of startups and is a magnet for venture capital.",
    href: "https://startup-map.berlin/dashboard",
    image: "/images/feat-3.jpg",
    imageWidth: 250,
    imageHeight: 355,
    pattern: "/images/Muster-Wellen-Weiss.svg",
    variant: "bg-blue-2-feature",
  },
  {
    title: "International Talent",
    body: "Hiring well-qualified, multilingual specialists is the foundation for a successful business in Berlin. The city maintains a high-caliber workforce, with almost a quarter of university students coming from abroad. In fact, foreign residents from over 170 countries live and work in Berlin.",
    href: "https://www.businesslocationcenter.de/en/our-services/talent-service",
    image: "/images/feat-4.jpg",
    imageWidth: 250,
    imageHeight: 333,
    pattern: "/images/Muster-Streifen-Weiss.svg",
    variant: "bg-green-2-feature",
  },
  {
    title: "Innovation Districts",
    body: (
      <>
        The City of Berlin has officially designated twelve Innovation
        Districts, <i>Zukunftsorte </i>in German. At these Innovation Districts,
        tomorrow&rsquo;s future is being created today in healthcare, mobility,
        cleantech, and quantum. The twelve districts already represent 2,200
        companies and 85,000 jobs.
      </>
    ),
    href: "https://zukunftsorte.berlin/en/",
    image: "/images/feat-5.png",
    imageWidth: 1728,
    imageHeight: 2304,
    pattern: "/images/Muster-Punkte-Weiss.svg",
    variant: "bg-green-2-feature",
    newTab: true,
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <a
      href={feature.href}
      target="_blank"
      rel="noopener noreferrer"
      title={feature.newTab ? "Open an external link in a new tab" : ""}
      className={`feature ${feature.variant}`}
    >
      <div className="feature-left">
        <Image
          src={feature.pattern}
          width={140}
          height={140}
          alt=""
          className="pattern"
        />
        <div className="feat-img">
          <div className="single-image-holder">
            <Image
              src={feature.image}
              width={feature.imageWidth}
              height={feature.imageHeight}
              alt=""
              sizes="250px"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="feature-right">
        <h3>{feature.title}</h3>
        <div className="feat-text">
          <p>{feature.body}</p>
          <span className="btn-arrow">
            <Image
              src="/images/arrow-right.svg"
              width={24}
              height={24}
              alt="Read more"
            />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function FeatureCards() {
  return (
    <div className="features-grid">
      {FEATURES.map((feature) => (
        <div className="feature-col" key={feature.title}>
          <FeatureCard feature={feature} />
        </div>
      ))}
    </div>
  );
}
