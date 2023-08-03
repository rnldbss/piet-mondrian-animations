"use client";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import myPic from "../images/me.jpg";

gsap.registerPlugin(TextPlugin);

export function Hero() {
  //defining the scope for GSAP animations.
  const heroRef = useRef();
  //ref to store GSAP timeline.
  const tl = useRef();

  //GSAP animation.
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //animation cursor blinking.
      gsap.fromTo(
        "#cursor",
        { autoAlpha: 0, x: 5 },
        { autoAlpha: 1, duration: 0.7, repeat: -1 }
      );

      //creating the timeline.
      tl.current = gsap
        .timeline()
        //animation typing.
        .to("#text", {
          text: { value: "Your fucking awesome Headline." }, //change the headline text here.
          duration: 6.2,
          delay: 0.5,
        })
        .from(
          "#link",
          {
            autoAlpha: 0,
            y: 10,
            stagger: 0.5,
            duration: 0.9,
          },
          "-=0.4"
        );
    }, heroRef);
    return () => ctx.revert(); //cleanup.
  }, []); //empty array so it doesn't re-run every render.

  return (
    <div ref={heroRef} className="flex relative z-20 flex-col gap-6 w-full">
      <div className="flex gap-3">
        <div className="text-4xl md:text-5xl mt-auto mb-auto">
          <h1 id="text" className="inline"></h1>
          <span id="cursor" className="inline">
            |
          </span>{" "}
          <div className="flex gap-4">
            <Link
              href="/servicos"
              id="link"
              className="underline sm:text-lg md:text-xl "
            >
              services
            </Link>
            <Link
              href="/"
              id="link"
              className="underline sm:text-lg md:text-xl "
            >
              about
            </Link>
          </div>
        </div>

        <div className="ml-auto hidden sm:block shrink-0 rounded-full overflow-hidden">
          <Image src={myPic} style={{ backdropFilter: "grayscale(100%)" }} />
        </div>
      </div>
    </div>
  );
}
