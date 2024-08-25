
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import akLogo from "../assets/aklogo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const burger = {
    open: { rotate: 90, color: "red", scale: 0.9 },
    closed: { rotate: 0, color: "black", scale: 1 },
  };

  const variants = {
    open: { opacity: 1, x: 0, rotate: 0, y: 25 },
    closed: { opacity: 0.5, x: "100vw", rotate: 180 },
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={akLogo} alt="logo" className="object-contain logo" />
          <p className="text-white font-bold cursor-pointer">Career Support</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                if (link.id === "register") {
                  navigate("/register"); // Navigate to /register route
                } else {
                  setActive(link.title);
                }
              }}
            >
              {link.id === "register" ? (
                <span>{link.title}</span>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            animate={toggle ? "open" : "closed"}
            whileHover={{ scale: 1.3, color: "green" }}
            transition={{
              duration: 2,
              delay: 0.1,
              type: "spring",
              stiffness: 350,
            }}
            variants={burger}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </motion.div>
          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 text-white rounded-xl`}
            style={{ background: "rgb(9, 0, 69)" }}
            animate={toggle ? "open" : "closed"}
            transition={{
              duration: 1,
              delay: 0.1,
              type: "spring",
              stiffness: 50,
            }}
            variants={variants}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ scale: 1.3, originX: 0, color: "#FFF5A1" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${
                    active === link.title ? "text-white" : "text-white"
                  } hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    if (link.id === "register") {
                      navigate("/register"); // Navigate to /register route
                    } else {
                      setToggle(!toggle);
                      setActive(link.title);
                    }
                  }}
                >
                  {link.id === "register" ? (
                    <span>{link.title}</span>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
