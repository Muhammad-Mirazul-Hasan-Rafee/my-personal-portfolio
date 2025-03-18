import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const githublink = "https://github.com/Muhammad-Mirazul-Hasan-Rafee";
  const linkedin = "https://www.linkedin.com/in/muhammad-mirazul-hasan-rafee-177463217/";
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[rgb(5,8,22)]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Image and heading title */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); //page er kothay achi ekhn amra ,  seta track korbe
            window.scrollTo(0, 0); // eta page er ekdom top e scroll kore  jabe
          }}
        >
          <img
            className="w-9 h-9 object-contain rounded-full"
            src={logo}
            alt="logo"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Rafee &nbsp;
            <span className="sm:block hidden"> | React Development</span>
          </p>

          <p className="ml-8 text-white text-[12px] font-bold cursor-pointer flex">
          <aside className="underline" onClick={() => window.open(githublink, "_blank")}>Github</aside> &nbsp; | &nbsp;
          <aside className="underline" onClick={() => window.open(linkedin, "_blank")}>LinkedIn</aside>
          </p>
        </Link>

        {/*  */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* onClick korle title ta white thakbe and browser o name ta dekhabe== active dekhabe name ta */}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
              hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile navigation bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-7 h-7 object-contain cursor-pointer"
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          {/* Actual Menu */}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* right side e  About , Work , Contact dekhanor jnno */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* onClick korle title ta white thakbe and browser o name ta dekhabe== active dekhabe name ta */}
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-base`}
                  onClick={() => {
                    setToggle(!toggle); //close kore dibe div k jokhn specific link e click kora hbe
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
