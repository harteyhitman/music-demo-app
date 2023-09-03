import React, { useEffect, useState } from "react";

import logo from "../../assets/img/logo.svg";

import { ReactComponent as Menu } from "../../assets/img/menu.svg";
import { ReactComponent as Search } from "../../assets/img/search.svg";

import SideMenu from "./SideMenu";

function NavBar() {
  const [sideMenu, setSideMenu] = useState(false);
  const handleNav = () => {
    setSideMenu(!sideMenu);
  };

  useEffect(() => {
    const scroll = () => {
      if (window.scroll) {
        setSideMenu(sideMenu);
      }
    };

    window.addEventListener("scroll", scroll);
  }, []);

  const screen = window.screen.width;

  window.addEventListener("resize", () => {
      setSideMenu(false);
  });

  return (
    <nav className="relative">
      <div className="nav-bar m-auto flex items-center p-5">
        <div className="flex items-center gap-4 md:gap-10">
          <Menu className="menu md:hidden" onClick={handleNav} />
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <form className="relative w-full">
            <Search className="absolute w-4 h-4 top-3 left-3" />
            <input
              className="p-2 px-8 w-full bg-transparent text-sm"
              type="text"
              placeholder="Search artist"
            />
          </form>
        </div>
      </div>

      {sideMenu && <SideMenu handleNav={handleNav} />}
    </nav>
  );
}

export default NavBar;
