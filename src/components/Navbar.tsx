import { Outlet } from "react-router-dom";
import { AiFillContacts, AiFillPieChart, AiOutlineMenu } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import NavbarElement from "./NavbarElement";

export type SidebarInfoTypes = {
  name: string;
  path: string;
  icon: JSX.Element;
};

const sidebarInfo: SidebarInfoTypes[] = [
  {
    name: "Contact",
    path: "contact",
    icon: <AiFillContacts />,
  },
  {
    name: "Charts",
    path: "charts",
    icon: <AiFillPieChart />,
  },
  {
    name: "Maps",
    path: "maps",
    icon: <FaMapMarkedAlt />,
  },
];

const Navbar = () => {
  return (
    <div className="flex h-screen">
      <div className="lg:w-[200px] sm:w-14 md:w-[100px] bg-brick roundex-xl h-full flex flex-col items-center">
        <span className="mt-7 px-3 py-2 md:hidden">
          <AiOutlineMenu />
        </span>
        <span className="hidden text-darkBrown lg:tracking-[10px] md:inline  md:tracking-widest md:visible md:mt-7">
          NAVBAR
        </span>
        <div className="w-full">
          {/* here are the nav elements */}
          {sidebarInfo.map((item, i) => (
            <NavbarElement
              icon={item?.icon}
              name={item?.name}
              path={item?.path}
              key={i}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
