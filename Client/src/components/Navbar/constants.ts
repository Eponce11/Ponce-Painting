import Logo from "../../common/imgs/ponce-painting-logo.png";
import { projects } from "../Projects/constants";

export const logo = Logo;
export const links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About Us",
    link: "/about-us",
  },
  {
    text: "Projects",
    link: `/project/${projects[0].name}`,
  },
];
export const btn = {
  text: "Contact",
  link: "#contact"
};
