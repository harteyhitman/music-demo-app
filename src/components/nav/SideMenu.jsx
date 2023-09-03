import React from "react";
import { HiHome } from "react-icons/hi";

import { ReactComponent as Menu } from "../../assets/img/menu.svg";
import { ReactComponent as Logout } from "../../assets/img/logout.svg";
import { ReactComponent as Playlist } from "../../assets/img/playlist.svg";
import { ReactComponent as Radio } from "../../assets/img/radio.svg";
import { ReactComponent as Profile } from "../../assets/img/profile.svg";
import { ReactComponent as Video } from "../../assets/img/videos.svg";
import { Link, useLocation } from "react-router-dom";

function SideMenu({ handleNav }) {
  const location = useLocation();

  return (
    <div className="side_menu absolute z-20 top--3 bottom-0 left-0 right-0 w-screen h-screen">
      <ul className="flex flex-col gap-8 py-6 px-4">
        <li onClick={handleNav}>
          <Menu />
        </li>
        <Link to="/">
          <li onClick={handleNav}>
            <HiHome
              className="w-[30px] h-[30px]"
              fill={
                location.pathname === "/" || "/viewChart"
                  ? "#FACD66"
                  : "#525552"
              }
            />
            <i>Home</i>
          </li>
        </Link>
        <Link to="/collections">
          <li onClick={handleNav}>
            <Playlist
              fill={
                location.pathname === "/collections" ? "#FACD66" : "#525552"
              }
            />
            <i>My collections</i>
          </li>
        </Link>
        <li>
          <Radio />
          <i>Radio</i>
        </li>
        <li>
          <Video />
          <i>Music videos</i>
        </li>
        <li>
          <Profile />
          <i>Profile</i>
        </li>
        <li>
          <Logout />
          <i>Log out</i>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
