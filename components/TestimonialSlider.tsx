"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  name: string;
  role: string; // multi-line; \n is preserved via white-space: pre-line
  quote: string;
  image: string;
  imageSize: number;
  variant: "bg-blue-1" | "bg-green-1";
};

const SLIDES: Slide[] = [
  {
    name: "Noel Lorenz",
    role: "Founder at Mindverse\n(ICT Industry)",
    quote:
      "\"Berlin offers a unique mix of talent, energy, and startup culture. As founders from the city, we’ve benefited from its vibrant ecosystem, international reach, and the constant opportunities to connect with other innovators and industries.\"",
    image: "/images/testimonial-1.jpg",
    imageSize: 800,
    variant: "bg-blue-1",
  },
  {
    name: "Wenke Christoph",
    role: "CEO at Kiron Open Higher Education \n(EdTech Industry)",
    quote:
      "\"We chose Berlin as its base because of the city’s central role in education and innovation. As Germany’s capital, Berlin is home to key ministries, numerous NGOs, and a vibrant tech and edtech startup scene—an ideal ecosystem for Kiron as an EdTech NGO.\"",
    image: "/images/testimonial-2.jpg",
    imageSize: 693,
    variant: "bg-green-1",
  },
  {
    name: "Nishit Agrawal & Sid Koneti",
    role: "Co-Founders at SkoneLabs \n(FoodTech Industry)",
    quote:
      "\"We received great support from Berlin through the Berlin Startup stipendium, thanks to Impact Hub Berlin. They are doing a brilliant job and have supported us from the very beginning. We believe the startup ecosystem in Berlin is the most vibrant in Germany.\"",
    image: "/images/testimonial-3.jpg",
    imageSize: 408,
    variant: "bg-blue-1",
  },
  {
    name: "Marius Meiners, Tobias Siwonia & Daniel Drabo",
    role: "Co-Founders at Peec AI \n(ICT Industry)",
    quote:
      "\"The Berlin startup ecosystem has played a tremendous role in our journey so far. Daniel and Marius met during their time at Antler Berlin and have received incredible support and trust from Berlin VCs and are always in contact with startups...\"",
    image: "/images/testimonial-4.png",
    imageSize: 1400,
    variant: "bg-green-1",
  },
  {
    name: "Frederike Kugland",
    role: "Co-Founder at femote\n(HealthTech Industry)",
    quote:
      "\"Berlin is home and a powerhouse of ideas, talent, and funding. You’ve got startups, researchers, hospitals, and public funding all in one place. This combination unleashed a powerful creativity for us without breaking the bank.\"",
    image: "/images/testimonial-5.jpg",
    imageSize: 800,
    variant: "bg-blue-1",
  },
];

/**
 * "Why companies choose Berlin" testimonial slider.
 * Swiper config mirrors the live site (main.js `whySwiper`):
 *   slidesPerView 1, spaceBetween 10, loop; >=1024px -> slidesPerView 2.
 */
export default function TestimonialSlider() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current?.querySelector<HTMLElement>(".why-swiper");
    if (!el) return;

    const swiper = new Swiper(el, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      resizeObserver: true,
      loop: true,
      breakpoints: {
        1024: { slidesPerView: 2, slidesPerGroup: 1 },
      },
      pagination: {
        el: el.querySelector(".why-pagination") as HTMLElement,
        clickable: true,
      },
      navigation: {
        prevEl: el.querySelector(".why-prev") as HTMLElement,
        nextEl: el.querySelector(".why-next") as HTMLElement,
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <div ref={rootRef} className="why-berlin">
      <h2>Why companies choose Berlin</h2>
      <div className="sliderr-area wb-slider-element-holder swiper why-swiper">
        <div className="why-berline-slider swiper-wrapper">
          {SLIDES.map((slide) => (
            <div
              key={slide.name}
              className={`why-berlin-slide ${slide.variant} swiper-slide`}
            >
              <div className="why-berlin-s-inner">
                <div className="berlin-slide-left">
                  <div className="single-image-holder">
                    <Image
                      src={slide.image}
                      width={slide.imageSize}
                      height={slide.imageSize}
                      alt=""
                      sizes="250px"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <div className="berlin-slide-right">
                  <div className="bsr-top">
                    <h3>{slide.name}</h3>
                    <span>{slide.role}</span>
                  </div>
                  <div className="bsr-bottom">
                    <p>{slide.quote}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="swiperControls">
          <div className="sliderArrow why-prev">
            <Image
              src="/images/slider-arrow-left.svg"
              width={40}
              height={40}
              alt="Previous slide item"
            />
          </div>
          <div className="swiperPagination why-pagination" />
          <div className="sliderArrow why-next">
            <Image
              src="/images/slider-arrow-right.svg"
              width={40}
              height={40}
              alt="Next slide item"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
