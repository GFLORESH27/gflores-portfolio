import React from "react";
import "../../assets/css/main.css";

import { Grid2, Box, Typography } from '@mui/material';
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import Zoom from 'react-reveal/Zoom';


const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <TimelineContent>
      {link ? (<Typography className="timelineItem_text">
        <span>{title}: </span>
        <a href={link} target="blank">{text}</a>
      </Typography>)
        : (<Typography className="timelineItem_text">
          <span>{title}: </span>{text}
        </Typography>
        )}
    </TimelineContent>
  </TimelineItem>
);

function BoldText(textItem) {
  var parts = textItem.split(":");

  return (
    <CustomTimelineItem title={parts[0]} text={parts[1]} />
  );
}

const Resume = () => {

  return (
    <div className="container resume-section" id="resume">
      <div className="resume-title">
        <Zoom>
          <h5>Resumen</h5>
          <span className="line"></span>
        </Zoom>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Grid2 container spacing={2} columns={16} className="resume-section">

          <Grid2 size={8}>
            {/* resumen */}
            <CustomTimeline title="Resumen" icon={<PersonIcon />}>
              {resumeData.sumaryAboutMe.map((sumaryAboutMe) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">{resumeData.name}</Typography>
                    <Typography variant="body2" className="timeline_description">{sumaryAboutMe.descriptionsAboutMe}</Typography>
                    {
                      sumaryAboutMe.skillsAboutMe != null
                        ? sumaryAboutMe.skillsAboutMe.map(item => <ul><li><Typography variant="body2" className="timeline_description_point">{item}</Typography></li></ul>)
                        : ""
                    }
                    <Typography variant="body2" className="timeline_description">{sumaryAboutMe.endAboutMe}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>

            {/* Educación */}
            <CustomTimeline title="Educación" icon={<SchoolIcon />}>
              {resumeData.education.map((education) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">{education.title}</Typography>
                    <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                    <Typography variant="body2" className="timeline_description">{education.school}</Typography>
                    <Typography variant="body" className="timeline_description">{education.place}</Typography>

                    <CustomTimelineItem title="Proyecto final" text={education.final_project.description} />
                    <CustomTimelineItem title="Función" text={education.final_project.function} />
                    <CustomTimelineItem title="Lenguaje de programación" text={education.final_project.programmingLanguage} />
                    <CustomTimelineItem title="Bases de Datos" text={education.final_project.dataBase} />

                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid2>

          {/* Experiences */}
          <Grid2 size={8}>
            <CustomTimeline title="Experiencia Profesional" icon={<WorkIcon />}>
              {resumeData.experiences.map((experience) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">{experience.title}</Typography>
                    <Typography className="subtimeline_title">{experience.Company}</Typography>
                    <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                    <Typography variant="body2" className="timeline_description">{experience.descriptions}</Typography>
                    {
                      experience.points != null
                        ? experience.points.map(item =>
                          item.includes(":")
                            ? BoldText(item)
                            : <ul><li><Typography variant="body2" className="timeline_description_point">{item}</Typography></li></ul>)
                        : ""
                    }
                    <div className="sub-section">
                      <Typography variant="body2" className="skill_description">{experience.habilidades_tecnicas != null ? "Habilidades Técnicas" : ""}</Typography>
                      {
                        experience.habilidades_tecnicas != null
                          ? experience.habilidades_tecnicas.map(item =>
                            item.includes(":")
                              ? BoldText(item)
                              : <ul><li><Typography variant="body2" className="timeline_description_point">{item}</Typography></li></ul>)
                          : ""
                      }
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid2>
        </Grid2>
      </div>

    </div>


  );
};

export default Resume;
