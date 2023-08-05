"use client";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import myPic from "../images/me.jpg";

const imageStyle = {
  filter: "grayscale(100%)",
};

gsap.registerPlugin(TextPlugin);

export function Hero() {
  //defining the scope for GSAP animations.
  const heroRef = useRef();
  //ref to store GSAP timeline.
  const tl = useRef();

  //GSAP animation.
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //animation Piet Mondrian
      gsap.to("#mondrian", {
        opacity: 0,
        stagger: {
          grid: [7, 15],
          from: "center",
          amount: 1.5,
        },
        duration: 1,
        delay: 6,
      });
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
          duration: 5,
          delay: 0.2,
        })
        .to(
          "#link",
          {
            opacity: 1,
            y: -10,
            stagger: 0.5,
            duration: 0.9,
          },
          "-=0.4"
        );
    }, heroRef);
    return () => ctx.revert(); //cleanup.
  }, []); //empty array so it doesn't re-run every render.

  return (
    <div ref={heroRef} className="flex relative z-10 flex-col gap-6 w-full">
      <div className="flex gap-2 ">
        <div className="text-4xl md:text-4xl xl:text-5xl md:ml-3 mt-auto mb-auto">
          <h1 id="text" className="inline"></h1>
          <span id="cursor" className="inline">
            |
          </span>{" "}
          <div className="flex gap-4 mt-3 text-base">
            <Link
              href="/servicos"
              id="link"
              className="underline sm:text-lg opacity-0 md:text-xl "
            >
              services
            </Link>
            <Link
              href="/"
              id="link"
              className="underline sm:text-lg md:text-xl opacity-0 "
            >
              about
            </Link>
          </div>
        </div>

        <div className="ml-auto max-h-full hidden sm:grid grid-cols-6 grid-rows-8 max-w-[300px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[35%] shrink-0 overflow-hidden">
          <div
            id="mondrian"
            className="col-start-1 col-end-4 row-start-1 row-end-2 relative z-40 bg-orange-300 border-r border-t-2 border-l-2 border-b border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-4 col-end-6 border-t-2 row-start-1 row-end-3 relative z-40 bg-violet-300 border-r border-l border-b border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-6 col-end-7 row-start-1 border-t-2  row-end-7 relative z-40 bg-green-300 border-l border-b border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-1 col-end-3 row-start-2 row-end-4 relative z-40 bg-blue-300 border-l-2 border-r border-b border-t border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-3 col-end-4 row-start-2 row-end-4 relative z-40 bg-yellow-300 border-r border-l border-b border-t border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-4 col-end-6 row-start-3 row-end-6 relative z-40 bg-orange-300 border border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-1 col-end-4 row-start-4 row-end-5 relative z-40 bg-purple-300 border-l-2 border-b border-t border-r border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-1 col-end-4 row-start-5 row-end-6 bg-yellow-300 border-l-2  border-b border-t border-r border-slate-400 relative z-40"
          ></div>
          <div
            id="mondrian"
            className="col-start-3 col-end-6 row-start-6 row-end-8 relative z-40 bg-blue-300 border border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-6 col-end-7 row-start- row-end- relative z-40"
          ></div>
          <div
            id="mondrian"
            className="col-start-6 col-end-7 row-start-7 row-end-9  relative z-40 bg-yellow-300 border-l border-t  border-slate-400 border-b-2"
          ></div>
          <div
            id="mondrian"
            className="col-start-1 col-end-2 row-start-6 row-end-9 relative z-40 bg-red-300 border-l-2 border-b-2 border-r border-t  border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-2 col-end-3 row-start-6 row-end-9 relative z-40 bg-orange-300 border-r border-t border-b-2 border-l  border-slate-400"
          ></div>
          <div
            id="mondrian"
            className="col-start-3 col-end-6 row-start-8 row-end-9 border-b-2 relative z-40 bg-purple-300 border-r border-t border-l  border-slate-400"
          ></div>
          <Image
            src={myPic}
            alt="me"
            id="image"
            className="col-span-full border-slate-400 border-t-2 border-b-2 row-span-full border-l-2 "
          />
        </div>
      </div>
    </div>
  );
}
