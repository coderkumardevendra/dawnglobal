import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem  from "./NavItem";
import logo from '../public/logo.svg'

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Our Etfs", href: "/etf" },
  { text: "Research", href: "/research" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <header className="sticky z-30 top-0">
      <nav
        className={`nav flex max-w-full md:max-w-none  relative overflow-hidden items-center container ${ navActive ? "active" : "" }`}>
        <Link href={"/"}>
          <a className="logo" onClick={() => setActiveIdx(-1)}>
          <Image
          src={logo}
          alt="Dawn Global"
          width={166}
          height={24}
        />
          </a>
        </Link>
        <div
          className={`menu__icon menu__icon lg:hidden cursor-pointer ${
            navActive ? "active" : "inactive"
          }`}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`right-nav ${ navActive ? "active" : ""}`}>
        <div className="menu">
        <Link href={"/"}>
          <a className="slider-logo" onClick={() => setActiveIdx(-1)}>
          <Image
          src={logo}
          alt="Dawn Global"
          width={166}
          height={24}
        />
          </a>
        </Link>
          <div className="nav-items">
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.href}
            >
              <NavItem {...menu} active={idx === activeIdx} />
            </div>
          ))}
          </div>
          <div className="cta-btn">
          <Link href={"/"}>
            <a className="btn primary-btn">
            Invest
            </a>
          </Link>
          <Link href={"/"}>
            <a className="btn secondary-btn">
            Subscribe
            </a>
          </Link>
        </div>
        </div>
        
        </div>
      </nav>
    </header>
  );
};

export default Navbar;