"use client";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.jpg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiFirebaseFill,
} from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiSocketdotio,
  SiTypescript,
  SiPython,
  SiShadcnui,
  SiPostman,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";

const hobbies = [
  {
    title: "Travelling",
    emoji: "✈️",
    left: "8%",
    top: "3%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "55%",
    top: "12%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "3%",
    top: "30%",
  },
  {
    title: "Podcast Listening",
    emoji: "🎙️",
    left: "30%",
    top: "40%",
  },
  {
    title: "Guitar",
    emoji: "🎸",
    left: "10%",
    top: "70%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "50%",
    top: "65%",
  },
];

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "NextJS",
    iconType: RiNextjsFill,
  },
  {
    title: "TailwindCSS",
    iconType: RiTailwindCssFill,
  },
  {
    title: "MongoDB",
    iconType: DiMongodb,
  },
  {
    title: "ExpressJS",
    iconType: SiExpress,
  },
  {
    title: "SocketIO",
    iconType: SiSocketdotio,
  },
  {
    title: "Typescript",
    iconType: SiTypescript,
  },
  {
    title: "Python",
    iconType: SiPython,
  },
  {
    title: "PostgreSQL",
    iconType: BiLogoPostgresql,
  },
  {
    title: "Git",
    iconType: FaGitAlt,
  },
  {
    title: ".NET",
    iconType: AiOutlineDotNet,
  },
  {
    title: "Shadcn UI",
    iconType: SiShadcnui,
  },
  {
    title: "Postman",
    iconType: SiPostman,
  },
  {
    title: "Firebase",
    iconType: RiFirebaseFill,
  },
  {
    title: "NodeJS",
    iconType: FaNodeJs,
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A bit about me"
          description="Learn more about me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technologies and tools i use to used to craft exceptional digital experiences"
              />

              <ToolboxItems
                items={toolboxItems}
                className=""
                itemWrapperClassName="animate-move-left [animation-duration:60s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-4 "
                itemWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:60s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Hobbies"
                description="Explore my interest and hobbies beyond the code"
                className="px-6 py-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 ">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] relative p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  after:content-[''] after:absolute after:inset-0 after:z-10 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={SmileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
