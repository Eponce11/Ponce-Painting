import Calender_Icon from "../../common/icons/calender-icon.svg?react";
import Construction_Icon from "../../common/icons/construction-icon.svg?react";
import Project_1 from "../../common/imgs/project-1.png";

export const heading = "Project Achievements That Speak for Themselves";
export const text =
  "Explore our recent featured projects to see how we’ve brought exceptional painting and wallpaper solutions to life for our clients.";

export const projects = [
  {
    name: "Malibu1",
    img: {
      img: Project_1,
      alt: "Project 1",
    },
    title: "Home Construction In Malibu Beach",
    description:
      "Skyline offers a full spectrum of construction services, providing tailored solutions",
    type: {
      icon: <Construction_Icon />,
      text: "Construction",
    },
    date: {
      icon: <Calender_Icon />,
      text: "Aug 2024",
    },
  },
  {
    name: "Malibu2",
    img: {
      img: Project_1,
      alt: "Project 1",
    },
    title: "Building construction in Los Angeles",
    description:
      "Skyline offers a full spectrum of construction services, providing tailored solutions",
    type: {
      icon: <Construction_Icon />,
      text: "Construction",
    },
    date: {
      icon: <Calender_Icon />,
      text: "Aug 2024",
    },
  },
  {
    name: "Malibu3",
    img: {
      img: Project_1,
      alt: "Project 1",
    },
    title: "House extension in Los Angeles",
    description:
      "Skyline offers a full spectrum of construction services, providing tailored solutions",
    type: {
      icon: <Construction_Icon />,
      text: "Construction",
    },
    date: {
      icon: <Calender_Icon />,
      text: "Aug 2024",
    },
  },
];

export const btn = {
  text: "View More",
  link: `${projects[0].name}`,
};
