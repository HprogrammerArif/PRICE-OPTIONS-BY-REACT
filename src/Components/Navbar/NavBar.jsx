import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <div>
      <nav>
        <div className="md:hidden text-3xl " onClick={() => setOpen(!open)}>
          {open === true ? (
            <MdOutlineClose></MdOutlineClose>
          ) : (
            <RiMenu2Line className=""></RiMenu2Line>
          )}
        </div>
        <ul className="md:flex">
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
