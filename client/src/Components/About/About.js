import React from "react";
import "../../assets/css/main.css";
import ProfilePic from "../../assets/img/contact/img_a.jpg";
import resumeData from "../../utils/resumeData";
import Zoom from 'react-reveal/Zoom';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const icon_rigth = <ChevronRightIcon sx={{ color: "#ffc500" }} />;

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-lg-4">
          <Zoom>
            <div className="about-title">
              <h5>Acerca de mi</h5>
              <span className="line"></span>
            </div>
          </Zoom>
          <Zoom>
            <div className="about-image">
              <img src={ProfilePic} alt="Profile img" />
            </div>
          </Zoom>
        </div>

        <div className="col-lg-8">

          <div className="about-details">

            <p>{resumeData.about}</p>
            <div className="row about-section-information">
              <div class="col-lg-6">
                <ul>{icon_rigth}<strong>Fecha de Nacimiento:</strong> <span>{resumeData.birthday}</span></ul>
                <ul>{icon_rigth}<strong>Website:</strong> <span>www.example.com</span></ul>
                <ul>{icon_rigth}<strong>Telefono:</strong> <span>{resumeData.phone}</span></ul>
                <ul>{icon_rigth}<strong>Ciudad:</strong> <span>{resumeData.city}</span></ul>
              </div>

              <div class="col-lg-6">
                <ul>{icon_rigth}<strong>Máximo Grado Académico:</strong> <span>{resumeData.last_degree_studies}</span></ul>
                <ul>{icon_rigth}<strong>Edad:</strong> <span>{resumeData.age}</span></ul>
                <ul>{icon_rigth}<strong>Correo:</strong> <span>{resumeData.email}</span></ul>
                <ul>{icon_rigth}<strong>Situación Laboral Actual:</strong> <span>{resumeData.current_employment_situation}</span></ul>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;