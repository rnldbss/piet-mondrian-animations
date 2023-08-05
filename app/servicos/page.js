"use client";
import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  {
    id: "strategy",
    label: "strategy",
    subtitle: "What is Lorem Ipsum?",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "branding",
    label: "branding",
    subtitle: "Where does it come from?",
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
  },
  {
    id: "campaing",
    label: "campaing",
    subtitle: "Why do we use it?",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

let contents = [
  {
    id: "strategy",
    subtitle: "What is Lorem Ipsum?",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "branding",
    subtitle: "Where does it come from?",
    body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
  },
  {
    id: "campaing",
    subtitle: "Why do we use it?",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex justify-center items-center h-full w-full  px-3">
      <div className="flex flex-col gap-7 sm:gap-11 max-w-[600px]">
        <ul className="flex sm:text-lg justify-around">
          {tabs.map((tab) => (
            <motion.li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="cursor-pointer px-2 sm:w-32 w-24 text-center relative z-40 h-8"
            >
              <span className="absolute border-2 border-slate-400 z-30 top-0 left-0 w-full h-full bg-slate-50">
                {tab.label}
              </span>
              <motion.span
                animate={activeTab === tab.id ? { top: 4, left: -4 } : ""}
                className="absolute border-2 border-slate-400 z-20 top-0 left-0 w-full h-full bg-orange-300"
              ></motion.span>
              <motion.span
                animate={activeTab === tab.id ? { top: 8, left: -8 } : ""}
                className="absolute border-2 border-slate-400 z-10 top-0 left-0 w-full h-full bg-purple-300"
              ></motion.span>
              <motion.span
                animate={activeTab === tab.id ? { top: 12, left: -12 } : ""}
                className="absolute border-2 border-slate-400 z-0 top-0 left-0 w-full h-full bg-red-300"
              ></motion.span>
            </motion.li>
          ))}
        </ul>
        <div className="grid grid-rows-1 grid-cols-1">
          {tabs.map((tab) => (
            <motion.div
              animate={activeTab === tab.id ? { opacity: 1 } : ""}
              className="col-span-full row-span-full opacity-0"
              key={tab.id}
            >
              <h2 className="text-xl">{tab.subtitle}</h2>
              <p>{tab.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
