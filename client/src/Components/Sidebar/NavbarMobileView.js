import React, { useState } from 'react'
import "../../assets/css/main.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlinePortrait } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";
import { GrProjects, GrContactInfo } from "react-icons/gr";
import { Link } from "react-scroll";

const NavbarMobileView = ({ theme, changeTheme }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className='mobile-view-navbar'>
            <div className='navbar-header'>
                <p><GiHamburgerMenu size={25} onClick={handleClick} /></p>
            </div>
            {
                open ? (
                    <div className='mobile-nav'>
                        <ul>
                            <li className="nav-item-mobileview">
                                <Link to="home" spy={true} smooth={true} duration={100} offset={-100}>
                                    <GoHome size={25} color="orange" />Inicio
                                </Link></li>
                            <li className="nav-item-mobileview">
                                <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
                                    <MdOutlinePortrait size={25} color="orange" />Acerca de mi
                                </Link></li>
                            <li className="nav-item-mobileview">
                                <Link to="resume" spy={true} smooth={true} duration={100} offset={-100}>
                                    <FaRegFileAlt size={25} color="orange" />Resumen
                                </Link></li>
                            <li className="nav-item-mobileview">
                                <Link to="skill" spy={true} smooth={true} duration={100} offset={-100}>
                                    <SiHyperskill size={25} color="orange" />Habilidades
                                </Link></li>
                            <li className="nav-item-mobileview">
                                <Link to="project" spy={true} smooth={true} duration={100} offset={-100}>
                                    <GrProjects size={25} color="orange" />Proyectos
                                </Link></li>
                            <li className="nav-item-mobileview">
                                <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
                                    <GrContactInfo size={25} color="orange" />Contacto
                                </Link></li>
                        </ul>
                    </div>
                ) : null
            }
        </div>
    );
};

export default NavbarMobileView