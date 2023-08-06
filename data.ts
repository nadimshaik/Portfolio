import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>ReactJS</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>ExpressJS </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust REST API using <b>-rest-api</b>  & <b>NodeJS API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "When I am not coding",
    about:
      "I love to Doing Exercise Gym Swimming Playing Cricket and FootBall",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "70",
  },
  
  {
    Icon: BsCircleFill,
    name: "TailwindCSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MaterialUI",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "NodeJS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "ExpressJS",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },

];

export const projects: IProject[] = [
  { 
    name: "Code Pen Clone",
    description:
      "This app you can use for HTML CSS JAVASCRIPT for Front-End Coding Practice for Developers,",
    image_path: "/images/codepenlog.jpg",
    deployed_url: "https://nadimshaik.github.io/codepenclone/",
    github_url: "https://github.com/nadimshaik/codepenclone",
    category: ["react"],
    key_techs: ["React", "ReactJSCodemirror"],
  },
 
];
