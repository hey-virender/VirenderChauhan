'use client'
import {Link} from "react-scroll"
const menuItems = [
  {
    title: "Home",
    href: "home",
    offset: 0,
  },
  {
    title: "Projects",
    href: "projects",
    offset: 0,
  },
  {
    title: "About",
    href: "about",
    offset: 0,
  },
  {
    title: "Contact",
    href: "contact",
    offset:-100
  },
]
export const Header = () => {

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      {menuItems.map((item) => (
        <Link to={item.href} smooth spy key={item.title} offset={-500}  className="nav-item cursor-pointer" activeClass="bg-white text-gray-950">{item.title}</Link>
      ))}
      </nav>
    </div>
  );
};
