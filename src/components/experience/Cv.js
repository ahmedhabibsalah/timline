import React from 'react';
import "./styles.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import timelineContent from './dataContentsExp';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Cv = () => {

    let workIconStyles = {background:"#03b989"}
    return (

    <div className="App">
      
      <VerticalTimeline>
        {
          timelineContent.map( (element) => {
            return (
              <VerticalTimelineElement
               key={element.id}
               date={element.date}
               dateClassName="date"
               iconStyle={workIconStyles}
               icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
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

export default Cv;
