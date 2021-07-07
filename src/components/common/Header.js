import React from "react";
import { NavLink } from "react-router-dom";
import AboutPage from "../about/AboutPage";
import CoursesPage from "../courses/CoursesPage";
import HomePage from "../home/HomePage";

const Header = () => {
  const activeStyle = { color: "#f15b21" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact={HomePage}>
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle} exact={AboutPage}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle} exact={CoursesPage}>
        Courses
      </NavLink>
    </nav>
  );
};

export default Header;
