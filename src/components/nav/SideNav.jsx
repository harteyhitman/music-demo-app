import { HiHome } from "react-icons/hi";
import { MdLibraryMusic } from "react-icons/md";

import { ReactComponent as Logout } from "../../assets/img/logout.svg";
import { ReactComponent as Radio } from "../../assets/img/radio.svg";
import { ReactComponent as Profile } from "../../assets/img/profile.svg";
import { ReactComponent as Video } from "../../assets/img/videos.svg";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const location = useLocation();

  return (
    <div className="hidden lg:block absolute top-24 left-2 z-10">
      <ul className="side-nav flex flex-col gap-8 py-6 px-4 rounded-full">
        <li>
          <Link to="/">
            <HiHome
              className="w-[30px] h-[30px]"
              fill={
                location.pathname !== "/collections"
                  ? "#FACD66"
                  : "#525552"
              }
            />
          </Link>
        </li>

        <li>
          <Link to="/collections">
            <MdLibraryMusic
              className="w-[30px] h-[30px]"
              fill={
                location.pathname === "/collections" ? "#FACD66" : "#525552"
              }
            />
          </Link>
        </li>

        <li>
          <Radio />
        </li>
        <li>
          <Video />
        </li>
      </ul>
      <ul className="side-nav flex flex-col gap-8 py-6 px-4 rounded-full mt-2">
        <li>
          <Profile />
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
