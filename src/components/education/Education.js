import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as SchoolIcon } from "./school.svg";
import educationContent from './dataContentEdu';
import './styles.css'

const Education = () => {
    let schoolIconStyles = { background: "#f9c74f" };

    return (
        <div className="App">
      
      <VerticalTimeline>
        {
          educationContent.map( (element) => {
            return (
              <VerticalTimelineElement
               key={element.id}
               date={element.date}
               dateClassName="dateEdu"
               iconStyle={schoolIconStyles}
               icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title ">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle edu">
                  {element.location}
                </h5>
                <p id="description">
                  {element.description}
                </p>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </div>
    );
}

export default Education;
