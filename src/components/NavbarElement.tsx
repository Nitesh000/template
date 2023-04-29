import { NavLink } from "react-router-dom";
import { SidebarInfoTypes } from "./Navbar";

const NavbarElement = ({ icon, name, path }: SidebarInfoTypes) => {
  const normalStyle =
    "flex justify-center items-center  my-7 py-2 w-full hover:bg-pale/40 hover:cursor-pointer";

  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending
          ? normalStyle
          : isActive
          ? normalStyle + " bg-pale"
          : normalStyle
      }
      to={"/" + path}
    >
      {icon}
      <span className="hidden md:inline pl-2 text-darkBrown">{name}</span>
    </NavLink>
  );
};

export default NavbarElement;
