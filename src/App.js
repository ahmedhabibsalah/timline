import './App.css';
import { ReactComponent as WorkIcon } from "./work.svg";
import timelineContent from './dataContents';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function App() {

  let workIconStyles = {background:"#03b989"}

  return (
    <div className="App">
      <h1 className="title">Work Experience</h1>
      <VerticalTimeline>
        {
          timelineContent.map( (element) => {
            return (
              <VerticalTimelineElement
               key={element.key}
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

export default App;
