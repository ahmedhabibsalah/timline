import React, { useState } from 'react';
import Education from '../components/education/Education';
import Cv from '../components/experience/Cv';
import './styles.css'

const Experience = () => {
    const [showComponent, setShowComponent] = useState(true)
 
    return (
        <div>
            <h1 className="title" >
                <span id="expTxt">Experience </span> 
                <span id="slash" attribute="/ ">/ </span>
                <span id="eduTxt"> Education</span>
            </h1>
            <div className="btnwrap">
                <button id="exp" onClick={()=> setShowComponent(true)}>Experience</button>
                <button id="edu" onClick={()=> setShowComponent(false)}>Education</button>
                
            </div>
            {showComponent ?  <Cv /> : <Education />  }
        </div>
    );
}

export default Experience;
