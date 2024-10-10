import React from "react";
import "../../assets/css/main.css";
import profilepic from "../../assets/img/contact/a.jpg";
import { MdOutlinePortrait } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { GrProjects, GrContactInfo } from "react-icons/gr";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepic} alt="profile" />
          </div>

          <ul>
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true} duration={100} offset={-100}>
                <GoHome size={25} color="orange" />Inicio
              </Link></li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
                <MdOutlinePortrait size={25} color="orange" />Acerca de mi
              </Link></li>
            <li className="nav-item">
              <Link to="resume" spy={true} smooth={true} duration={100} offset={-100}>
                <FaRegFileAlt size={25} color="orange" />Resumen
              </Link></li>
            <li className="nav-item">
              <Link to="skill" spy={true} smooth={true} duration={100} offset={-100}>
                <SiHyperskill size={25} color="orange" />Habilidades
              </Link></li>
            <li className="nav-item">
              <Link to="project" spy={true} smooth={true} duration={100} offset={-100}>
                <GrProjects size={25} color="orange" />Proyectos
              </Link></li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
                <GrContactInfo size={25} color="orange" />Contacto
              </Link></li>
          </ul>


        </div>
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true} duration={100} offset={-100}>
                <GoHome size={25} color="orange" />
              </Link></li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
                <MdOutlinePortrait size={25} color="orange" />
              </Link></li>
            <li className="nav-item">
              <Link to="resume" spy={true} smooth={true} duration={100} offset={-100}>
                <FaRegFileAlt size={25} color="orange" />
              </Link></li>
            <li className="nav-item">
              <Link to="skill" spy={true} smooth={true} duration={100} offset={-100}>
                <SiHyperskill size={25} color="orange" />
              </Link></li>
            <li className="nav-item">
              <Link to="project" spy={true} smooth={true} duration={100} offset={-100}>
                <GrProjects size={25} color="orange" />
              </Link></li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
                <GrContactInfo size={25} color="orange" />
              </Link></li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;