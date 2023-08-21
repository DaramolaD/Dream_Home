import React, { useState } from "react";
import "./Navbar.css";
import { Logo, brand_logo, brand_logo_2 } from "../../assets/img";
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
        <Link to="/">
          <div className="logo">
            {/* <span className="a1">A</span>
          <span className="a2">A</span> */}
            <img src={brand_logo_2} alt="brand_logo" />
          </div>
        </Link>
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
              <Link to="/contact" className="btn_link" onClick={toggleNav}>
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
