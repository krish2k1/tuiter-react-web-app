import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faCompass,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = () => {
  const { pathname } = useLocation();

  const [ignore, tuiter, active] = pathname.split("/");

  const links = [
    { path: "home", label: "Home", icon: faHome },

    { path: "explore", label: "Explore", icon: faCompass },

    { path: "notifications", label: "Notifications", icon: faBell },

    { path: "messages", label: "Messages", icon: faEnvelope },

    { path: "bookmarks", label: "Bookmarks", icon: faBookmark },

    { path: "lists", label: "Lists", icon: faList },

    { path: "profile", label: "Profile", icon: faUser },

    { path: "more", label: "More", icon: faEllipsisH },
  ];

  const currentUser = useSelector((state) => state.user);

  const linkItems = [];

  links.forEach((link) => {
    linkItems.push(
      <Link
        key={link.path}
        to={`/tuiter/${link.path}`}
        className={`list-group-item text-capitalize ${
          active === link.path ? "active" : ""
        }`}
      >
        <FontAwesomeIcon icon={link.icon} className="me-2" />

        {link.label}
      </Link>
    );
  });

  return (
    <div className="list-group">
      {linkItems}
      {!currentUser && (
        <Link className="list-group" to="/tuiter/login">
          {" "}
          Login{" "}
        </Link>
      )}
      {!currentUser && (
        <Link className="list-group" to="/tuiter/register">
          Register
        </Link>
      )}
      {currentUser && (
        <Link className="list-group" to="/tuiter/profile">
          {" "}
          Profile{" "}
        </Link>
      )}

      <p className="text-white fs-6">{ignore}</p>

      <p className="text-white fs-6">{tuiter}</p>
    </div>
  );
};

export default NavigationSidebar;
