import React from 'react';
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Resume from "../Components/Resume/Resume";
import Skill from "../Components/Skill/Skill";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";

const MyRoutes = () => {
    return (
        <div className='contenedor'>
            <Home />
            <About />
            <Resume />
            <Skill />
            <Projects />
            <Contact />
        </div>
    )
}

export default MyRoutes;