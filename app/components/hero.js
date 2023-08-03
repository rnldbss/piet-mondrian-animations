"use client";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(TextPlugin);

export function Hero() {
  //defining the scope for GSAP animations
  const heroRef = useRef();
  //ref to store GSAP timeline
  const tl = useRef();

  //GSAP animation
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //animation cursor blinking
      gsap.fromTo(
        "#cursor",
        { autoAlpha: 0, x: 5 },
        { autoAlpha: 1, duration: 0.7, repeat: -1 }
      );

      //creating the timeline
      tl.current = gsap
        .timeline()
        //animation typing
        .to("#text", {
          text: { value: "Your fucking awesome Headline." }, //change the headline text here.
          duration: 6.2,
          delay: 0.7,
        })
        .from("#link", {
          autoAlpha: 0,
          y: 10, //fdfd
          stagger: 0.5,
          duration: 0.7,
        });
    }, heroRef);
    return () => ctx.revert(); //cleanup
  }, []); //empty array so it doesn't re-run every render

  return (
    <div ref={heroRef} className="flex flex-col gap-6">
      <div className="text-4xl md:text-5xl">
        <h1 id="text" className="inline"></h1>
        <span id="cursor" className="inline">
          |
        </span>
      </div>
      <div className="flex gap-4">
        <Link href="/" id="link" className="underline sm:text-lg md:text-xl ">
          work
        </Link>
        <Link href="/" id="link" className="underline sm:text-lg md:text-xl ">
          about
        </Link>
      </div>
    </div>
  );
}
