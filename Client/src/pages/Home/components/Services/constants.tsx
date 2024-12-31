import Project_Management_Icon from "../../../../common/icons/project-management-icon.svg?react";
import Furniture_Installation_Icon from "../../../../common/icons/furniture-installation-icon.svg?react";
import Renovation_Icon from "../../../../common/icons/renovation-icon.svg?react";
import Wallpaper_Painting_Icon from "../../../../common/icons/wallpaper-painting-icon.svg?react";

export const heading = "From Vision To Reality Our Comprehensive Services";
export const text = "These are our featured services, designed to provide reliable solutions that meet the needs of every client.";
export const btn_text = "View More";

export const services = [
  {
    icon: <Project_Management_Icon />,
    title: "Project Management",
    description: "We manage projects from start to finish, ensuring everything is handled seamlessly",
    link: { 
      text: "Learn More",
      link: "#"
    }
  },
  {
    icon: <Furniture_Installation_Icon />,
    title: "Furniture Installation",
    description: "We install and remove furniture for hotels and other commercial buildings.",
    link: { 
      text: "Learn More",
      link: "#"
    }
  },
  {
    icon: <Renovation_Icon />,
    title: "Renovation",
    description: "We specialize in the renovation of spaces, creating refreshed and updated environments tailored to your needs.",
    link: { 
      text: "Learn More",
      link: "#"
    }
  },
  {
    icon: <Wallpaper_Painting_Icon />,
    title: "Wallpaper & Painting",
    description: "We provide expert wallpaper removal and installation, along with professional painting services, to transform any space.",
    link: { 
      text: "Learn More",
      link: "#"
    }
  }
]