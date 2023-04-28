import { Link, Outlet } from "react-router-dom";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

const Navbar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div className="flex h-full">
      <Sidebar className="bg-brick">
        <div className="flex justify-between">
          <span className="py-3">NavBar</span>
          <button onClick={() => collapseSidebar()}>X</button>
        </div>
        <Menu>
          <MenuItem component={<Link to="/contact" />}>Contact</MenuItem>
          <MenuItem component={<Link to="/charts" />}>Charts & Maps</MenuItem>
        </Menu>
      </Sidebar>
      <Outlet />
    </div>
  );
};

export default Navbar;
