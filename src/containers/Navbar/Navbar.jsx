import React, { useState } from "react";
import "./Navbar.css";
import { Logo } from "../../assets/img";
import navLink from "../../assets/data/navLink";
import { Link } from "react-router-dom";
import { closeMenu, menu } from "../../assets/icons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };
  return (
    <header className="header bg1">
      <div className="container flex_center p20">
        <div className="logo">
          <span>Dreamy</span>
        </div>
        <ul className="nav_list flex_center lg_nav_link">
          {navLink.map((item) => (
            <Link to={`/${item.navLink}`} key={item.id}>
              <li className="nav_link">{item.navName}</li>
            </Link>
          ))}
        </ul>
        <div className="nav_btn lg_nav_link">
          <Link to="/contact" className="btn_link btn2">
            Let's Talk Now
          </Link>
        </div>

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
              <Link to="/contact" className="btn_link">
                Let's Talk Now
              </Link>
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
