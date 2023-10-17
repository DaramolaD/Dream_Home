import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Logo, brand_logo, brand_logo_2 } from "../../assets/img";
import navLink from "../../assets/data/navLink";
import { Link } from "react-router-dom";
import { asleep, closeMenu, menu, sun } from "../../assets/icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("dark-theme");
  const [themeValue, setThemeValue] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  const themeToggle = () => {
    setThemeValue(!themeValue);
    {
      themeValue == true ? setTheme("dark-theme") : setTheme("light-theme");
    }
  };

  return (
    <header className="header bg1">
      <div className="container flex_center p20">
        <Link to="/">
          <motion.div
            className="logo"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={brand_logo_2} alt="brand_logo" />
          </motion.div>
        </Link>
        <motion.ul
          className="nav_list flex_center lg_nav_link"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {navLink.map((item) => (
            <Link to={`/${item.navLink}`} key={item.id}>
              <li className="nav_link">{item.navName}</li>
            </Link>
          ))}
        </motion.ul>
        <motion.div
          className="nav_btn lg_nav_link"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="theme">
            <img
              src={themeValue ? asleep : sun}
              alt="theme_icon"
              onClick={themeToggle}
            />
          </div>
          <Link to="/contact" className="btn_link btn2">
            Let's Talk Now
          </Link>
        </motion.div>

        {toggle ? (
          <div className="nav_list_sm">
            <ul className="nav_list flex_center">
              {navLink.map((item) => (
                <Link to={`/${item.navLink}`} key={item.id} onClick={toggleNav}>
                  <li className="nav_link">{item.navName}</li>
                </Link>
              ))}
            </ul>
            <div className="nav_btn">
              <Link to="/contact" className="btn_link" onClick={toggleNav}>
                Let's Talk Now
              </Link>
            </div>
            <div className="theme_cont">
              <div className="theme">
                <img
                  src={themeValue ? asleep : sun}
                  alt="theme_icon"
                  onClick={themeToggle}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {toggle ? (
          <div className="closeMenu">
            <img src={closeMenu} alt="closeMenu_icon" onClick={toggleNav} />
          </div>
        ) : (
          <div className="menu">
            <img src={menu} alt="menu_icon" onClick={toggleNav} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
