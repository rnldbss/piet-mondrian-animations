"use client";
import Link from "next/link";
import { useEffect } from "react";
import { motion, useCycle, useAnimate, stagger } from "framer-motion";
import zIndex from "@mui/material/styles/zIndex";

//framer-motion nav background stagger
const staggerNavTabs = stagger(0.3, { startDelay: 0.15 });
//framer-motion nav links stagger
const staggerNavLinks = stagger(0.1, { startDelay: 0.3 });

//framer-motion stagger function
function useNavAnimation(navOpen) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate("#navTabs", navOpen ? { x: 0, y: 0 } : { x: "100%", y: "-100%" }, {
      duration: 0.5,
      delay: navOpen ? staggerNavTabs : 0,
    });
    animate(
      "#navLinks",
      navOpen
        ? { x: 0, opacity: 1, filter: "blur(0px)" }
        : { x: "500%", opacity: 0, filter: "blur(5px)" },
      {
        duration: 0.8,
        delay: navOpen ? staggerNavLinks : 0,
      }
    );
  }, [navOpen]);

  return scope;
}

export function Navbar() {
  //state hook for the nav open and closed
  const [navOpen, cycleNavOpen] = useCycle(false, true);
  //ref to scope the stagger animation
  const scope = useNavAnimation(navOpen);

  return (
    <motion.nav
      animate={navOpen ? { zIndex: 50 } : { zIndex: 10 }}
      ref={scope}
      className="absolute grid grid-cols-1 justify-items-end grid-rows-1 right-0 top-0 w-full h-full"
    >
      <motion.div
        initial={{ x: "100%", y: "-100%" }}
        id="navTabs"
        className="h-[100%] sm:h-[50vh] w-full sm:w-[50vh] col-start-1 col-end-1 row-start-1 row-end-1 bg-orange-400 flex  items-end sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-3 lg:py-3 text-white font-normal border-l-2 border-b-2 border-slate-300 text-3xl"
      >
        <motion.div id="navLinks" onClick={() => cycleNavOpen(false)}>
          <Link href="/">contact</Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "100%", y: "-100%" }}
        id="navTabs"
        className="h-[75%] sm:h-[calc(50vh/1.2)] col-start-1 col-end-1 row-start-1 row-end-1 w-full sm:w-[calc(50vh/1.2)] flex  items-end sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-3 lg:py-3 bg-red-400 border-l-2 border-b-2 border-slate-300 text-white font-normal text-3xl"
      >
        <motion.div id="navLinks" onClick={() => cycleNavOpen(false)}>
          <Link href="/servicos">services</Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "100%", y: "-100%" }}
        id="navTabs"
        className="h-[50%] sm:h-[calc(50vh/1.5)] col-start-1 col-end-1 row-start-1 row-end-1 bg-purple-400 w-full sm:w-[calc(50vh/1.5)] flex  items-end sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-3 lg:py-3 border-l-2 border-b-2 border-slate-300 text-white font-normal text-3xl"
      >
        <motion.div id="navLinks" onClick={() => cycleNavOpen(false)}>
          <Link href="/">about</Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "100%", y: "-100%" }}
        id="navTabs"
        className="h-[25%] sm:h-[calc(50vh/2)] col-start-1 col-end-1 row-start-1 row-end-1 bg-sky-400 w-full sm:w-[calc(50vh/2)] flex  items-end sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-3 lg:py-3 text-white border-l-2 border-b-2 border-slate-300 font-normal text-3xl"
      >
        <motion.div id="navLinks" onClick={() => cycleNavOpen(false)}>
          <Link href="/">home</Link>
        </motion.div>
      </motion.div>
      <motion.div
        aria-label="navigation"
        animate={navOpen ? "opened" : "closed"}
        onClick={() => cycleNavOpen()}
        className=" absolute top-6 flex flex-col gap-2 right-6  justify-center items-center cursor-pointer"
      >
        <motion.span
          variants={
            ({ closed: { rotate: 0, y: 0 } }, { opened: { rotate: 20, y: 5 } })
          }
          className="w-14 h-0.5 bg-slate-600"
        ></motion.span>

        <motion.span
          variants={
            ({ closed: { rotate: 0, y: 0 } },
            { opened: { rotate: -20, y: -5 } })
          }
          className="w-14 h-0.5 bg-slate-600"
        ></motion.span>
      </motion.div>
    </motion.nav>
  );
}
