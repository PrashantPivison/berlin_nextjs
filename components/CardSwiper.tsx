"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  /** Distinguishing class for the swiper root (e.g. "events-swiper"). */
  variant: string;
  slides: React.ReactNode[];
  options?: SwiperOptions;
  /** Optional node rendered next to the controls (e.g. a "Past news" button). */
  afterControls?: React.ReactNode;
};

/**
 * Generic Swiper used by News & Events (Latest news, Newsletters, Upcoming
 * events). Mirrors the live site's per-slider configs from main.js
 * (slidesPerView 1, spaceBetween 0, autoHeight, loop when >1 slide).
 */
export default function CardSwiper({ variant, slides, options, afterControls }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current?.querySelector<HTMLElement>(`.swiper.${variant}`);
    const holder = rootRef.current;
    if (!el || !holder) return;

    const swiper = new Swiper(el, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      // Recalculate slide widths when the container/viewport changes so slides
      // never end up wider than their (e.g. resized) container.
      observer: true,
      observeParents: true,
      resizeObserver: true,
      loop: slides.length > 1,
      pagination: {
        el: holder.querySelector(".swiperPagination") as HTMLElement,
        clickable: true,
      },
      navigation: {
        prevEl: holder.querySelector(".sliderArrow.is-prev") as HTMLElement,
        nextEl: holder.querySelector(".sliderArrow.is-next") as HTMLElement,
      },
      ...options,
    });
    return () => swiper.destroy(true, true);
  }, [variant, slides.length, options]);

  return (
    <div className="wb-slider-element-holder" ref={rootRef}>
      <div className={`sliderr-area swiper ${variant}`}>
        <div className="swiper-wrapper">
          {slides.map((slide, i) => (
            <div className="swiper-slide" key={i}>
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className="swiperControls-holder">
        <div className="swiperControls">
          <div className="sliderArrow is-prev">
            <Image
              src="/images/slider-arrow-left.svg"
              width={40}
              height={40}
              alt="Previous item"
            />
          </div>
          <div className="swiperPagination" />
          <div className="sliderArrow is-next">
            <Image
              src="/images/slider-arrow-right.svg"
              width={40}
              height={40}
              alt="Next item"
            />
          </div>
        </div>
        {afterControls}
      </div>
    </div>
  );
}
