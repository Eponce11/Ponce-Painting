import Logo from "../../common/imgs/ponce-painting-logo.png";
import { projects } from "../Projects/constants";

export const logo = Logo;
export const text = `Ponce's Painting & Wallcovering specializes in painting and wallpaper services. We bring flexibility and precision to every project, ensuring outstanding results.`;
export const list_1 = {
  title: "Navigation",
  links: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
      link: "/about-us",
    },
    {
      label: "Projects",
      link: `/project/${projects[0].name}`,
    },
  ],
};
export const list_2 = {
  title: "Contact",
  links: [
    {
      label: "info@poncepainting.com",
      link: "#",
    },
    {
      label: "(916)-111-1111",
      link: "#",
    },
  ],
};

export const list_3 = {
  title: "Support",
  links: [
    {
      label: "Privacy Policy",
      link: "#",
    },
    {
      label: "Terms & Conditions",
      link: "#",
    },
  ],
};

export const company_name = "Ponces Painting & Wallcovering";
