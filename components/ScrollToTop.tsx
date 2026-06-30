"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Decorative scroll-to-top control (angle-top.svg), shown after scrolling. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`angle-top${visible ? " visible" : ""}`}
      role="button"
      aria-label="Scroll to top"
      tabIndex={0}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ")
          window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <Image src="/images/angle-top.svg" width={46} height={46} alt="angle top" />
    </div>
  );
}
