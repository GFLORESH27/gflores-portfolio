import React from 'react';
import "../../assets/css/main.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="container-fluid home" id="home">
      <div className="container home-content">
      <Fade bottom>
        <h1>Gabriel Flores Hernández</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Full Stack Software Developer"
              ],
              autoStart: true,
              loop: true,
              delay: 5,
            }}
          />
        </h3>
        </Fade>

        <Fade bottom>
        <div className="button-for-action">
          <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
            <div className="hire-me-button">Contacto</div>
          </Link>

          <div className="get-resume-button">
            <a href={MyCv} download="CV Gabriel Flores Hernandez.pdf">
              Descargar CV
            </a>
          </div>
        </div>
        </Fade>


      </div>
    </div>
  )
}

export default Home