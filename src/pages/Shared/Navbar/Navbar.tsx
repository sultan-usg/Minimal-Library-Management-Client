
import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link, NavLink } from "react-router";
import AddBook from "../MyButton/MyButton";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navData = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/books",
      title: "All Books"
    },


    {
      path: "/create-book",
      title: "Create Book"
    },
    {
      path: "/borrow-summary",
      title: "Borrow Summary"
    },
    {
      path: "/contact",
      title: "Contact Us",
    },
  ];

  return (
    <div className={`"}`}>
     <nav className={`z-40  fixed top-0 left-0 right-0 bg-white shadow w-full py-4 lg:py-0 `}>
        <div className={`main_container flex justify-between items-center`}>
          {/* Logo side here >>>>>>>>>>>>>>>> */}
          <div className="nav_logo_side">
            <Link className="" to="/">
              <img
                src={logo}
                alt="logo"
                width={200}
                height={100}
                className="w-16"
              />
            </Link>
          </div>
          {/* NAv manu side here >>>>>>>>>>>>>>>> */}
          <div className={`absolute ${navToggle ? "left-0" : "left-[-120%] w-1/2 "
            } top-[4.5rem] flex w-full flex-col pb-3 pt-2 transition-all duration-300  lg:static lg:w-[unset] lg:flex-row  lg:bg-transparent lg:pb-0 lg:pt-0 `}
          >
            <ul className="nav_manu capitalize bg-white flex pl-10 md:pl-0 flex-col lg:flex-row items-start md:items-center justify-center gap-5 md:gap-3 px-1">
              {navData.map(({ path, title }) => (
                <li key={path} className=" md:mx-2 py-2 lg:py-6 relative">
                  <NavLink
                    onClick={() => setNavToggle(false)}
                    to={path}
                    className={`flex items-center gap-2 text-[#2E343E]`}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* Right side here >>>>>>>>>>>>>>>> */}
          <div className="nav_right_side hidden lg:block ">
            <div className="flex justify-end items-center mt-2">
              <AddBook></AddBook>
            </div>
          </div>
          {/* Right toggle bar for mobile  */}
          <label className="swap-rotate swap rounded-full h-7 w-7 text-primary  lg:hidden">
            <input
              checked={navToggle}
              onChange={() => setNavToggle((pre) => !pre)}
              type="checkbox"
            />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
