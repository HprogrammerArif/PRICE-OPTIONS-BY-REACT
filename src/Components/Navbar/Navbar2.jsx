import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar2 = () => {
  const [navDisplay, setNavDisplay] = useState(true);
  const NavItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/">Service</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </>
  );
  return (
    <div className="flex">
      <h1
        className="text-3xl block md:hidden m-2"
        onClick={() => setNavDisplay(!navDisplay)}
      >
        <GiHamburgerMenu />
      </h1>
      <div>
        <ul
          className={`w-fit mx-auto my-5 ${
            navDisplay ? "absolute" : "hidden"
          } left-10 bg-gray-300 rounded p-3 md:hidden  gap-5`}
        >
          {NavItems}
        </ul>
        <ul className=" hidden md:flex mx-auto gap-5">{NavItems}</ul>
      </div>
      <div className="navbar bg-base-100">
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-start">
          <div className="dropdown absolute right-0">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm absolute right-5 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
