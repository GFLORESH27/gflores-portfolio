import React from 'react'
import "../../assets/css/main.css";
import resumeData from "../../utils/resumeData";
import { Typography } from '@mui/material';
import imgproject1 from "../../assets/img/portfolio/check-app.JPG"
import imgproject2 from "../../assets/img/portfolio/TM-BO.png"
import Zoom from 'react-reveal/Zoom';

const Projects = () => {
  return (
    <div className="container project-section" id="project">
      <div className="project-title">
        <Zoom>
          <h5>Proyectos</h5>
          <span className="line"></span>
        </Zoom>
        <div className="container project-section" >
          {resumeData.projects.map((project) => (
            <Typography variant="body" className="project_description">{project.description}</Typography>
          )
          )}
          <Zoom>
            <div className="container project-section-global">
              <img src={imgproject1} alt=''/>
              <img src={imgproject2} alt=''/>
            </div>
          </Zoom>

        </div>
      </div>
    </div>
  )
}

export default Projects