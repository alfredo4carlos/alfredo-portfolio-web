import {
  cryptocurrency,
  css,
  express,
  html,
  javascript,
  mongoDB,
  nextjs,
  node,
  promptEngineering,
  python,
  react,
  redux,
  tailwind,
  typescript,
  fullstack,
  vue,
  reactnative,
  angular,
  next,
  postgresql,
  aws,
} from "./techstack";

import img1 from "../projects/web/Gaby-T/1.png";
import img2 from "../projects/web/Hostpoint/2.png";
import img3 from "../projects/web/IFLAIR/2.png";

export const ProjectList = [
  {
    heading: "Gaby-T",
    img: img1,
    title: "",
    description:
      "This is a project built using Vue.js and Node.js to help people in the field of AI, including Prompt Engineering, Fine Tuning, ChatBot, and other related areas.",
    techStack: [fullstack, javascript, vue, node, postgresql],
  },
  {
    heading: "HostPoint",
    img: img2,
    title: "",
    description:
      "Started off with a simple and convincing idea and have developed into the leading Swiss web hosting provider and domain registrar. This is built using Angular and MongoDB.",
    techStack: [typescript, angular, node, mongoDB],
  },
  {
    heading: "iFlair",
    img: img3,
    title: "",
    description:
      "iFlair is established in the year 2004, is a leading and pioneer Web Development Company. iFlair is one of the fastest-growing Web Development Company with vast knowledge, experience, and expertise.",
    techStack: [reactnative, redux, next, aws, mongoDB],
  },
];
