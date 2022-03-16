import React from "react";
import HomeIcon from "../../assets/HomeIcon.svg";
import MessageIcon from "../../assets/MessageIcon.svg";
import ProfileIcon from "../../assets/ProfileIcon.svg";
import SettingIcon from "../../assets/SettingIcon.svg";
import ShopIcon from "../../assets/ShopIcon.svg";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div>
        <IconButton sx={{ ml: 1.5 }}>
          <Link to="home">
            <img src={HomeIcon} alt="home" title="home" />
          </Link>
        </IconButton>
      </div>
      <div>
        <IconButton sx={{ ml: 1.5 }}>
          <Link to="subscriptions">
            <img src={ShopIcon} alt="cart" title="cart" />
          </Link>
        </IconButton>
      </div>
      <div>
        <IconButton sx={{ ml: 1.5 }}>
          <Link to="support">
            <img src={MessageIcon} alt="support" title="support" />
          </Link>
        </IconButton>
      </div>
      <div>
        <IconButton sx={{ ml: 1.5 }}>
          <Link to="setting">
            <img src={SettingIcon} alt="account" title="account" />
          </Link>
        </IconButton>
      </div>
      <div>
        <IconButton sx={{ ml: 1.5 }}>
          <Link to="profile">
            <img
              src={ProfileIcon}
              className="profile-icon"
              alt="Profile"
              title="profile"
            />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
