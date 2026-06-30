import Image from "next/image";

/**
 * "US Companies with a presence in Berlin" — heading, "examples" label,
 * and the full logo grid image.
 */
export default function CompanyLogos() {
  return (
    <div className="us-companies-section">
      <h2>US Companies with a presence in Berlin</h2>
      <p className="examples">examples</p>
      <figure className="logos-grid-figure">
        <Image
          src="/images/logos-grid.png"
          width={1920}
          height={923}
          alt=""
          sizes="(max-width: 1140px) 100vw, 1140px"
          style={{ width: "100%", height: "auto" }}
        />
      </figure>
    </div>
  );
}
