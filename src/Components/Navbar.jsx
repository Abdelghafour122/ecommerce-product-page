import React from "react";
import menu from "../Pictures/icon-menu.svg";
import logo from "../Pictures/logo.svg";
import cart from "../Pictures/icon-cart.svg";
import avatar from "../Pictures/image-avatar.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <section className="left">
          <img src={menu} alt="icon-menu" />
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <button>Collections</button>
            </li>
            <li>
              <button>Men</button>
            </li>
            <li>
              <button>Women</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </section>
        <div className="right">
          <img src={cart} alt="icon-cart" />
          <img src={avatar} alt="img-avatar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
