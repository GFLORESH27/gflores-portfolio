import React, { useState } from "react";
import "../../assets/css/main.css";
import resumeData from "../../utils/resumeData";
import ProgressBar from "@ramonak/react-progress-bar";
import Zoom from 'react-reveal/Zoom';

const Skill = () => {

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container skill-section" id="skill">
      <div className="skill-title">
        <Zoom>
          <h5>Habilidades</h5>
          <span className="line"></span>
        </Zoom>
        <div className="skill-content-section">


          <div className="row skill-content1">
            {resumeData.skills.slice(0, showMoreTechStack).map((item, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                <div
                  className={
                    index === 0
                      ? "skill-content"
                      : "skill-content"
                  }>
                  <p>{item.name}</p>
                  <ProgressBar completed={item.percentage != null ? item.percentage : 0} maxCompleted={100} bgColor="#ffc500" />
                </div>
              </div>
            ))}
          </div>

          {showMoreTechStack >= resumeData.skills.length ? null : (

            <span className="load-more-skills" onClick={loadMore}>
              Cargas más
            </span>

          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
