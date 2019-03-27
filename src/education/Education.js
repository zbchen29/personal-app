import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Education.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import mit from "./education_mit.jpeg";
import rmhs from "./education_rmhs.jpeg";

class Education extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">EDUCATION</div>
                <PanelContainer>
                    <Feature format="image-left" image={mit}>
                        <div className="feature-text-h">Massachusetts Institute of Technology</div>
                        <div className="feature-text-i feature-text-light">Cambridge, MA</div>
                        <div className="feature-text-i feature-text-light">2017-2021</div>
                        <div className="feature-text">I am a second-year undergraduate student at MIT majoring in Computer Science and Engineering (Course 6-3).</div>
                        <div className="feature-text">GPA: 4.8/5.0</div>
                    </Feature>
                    <Feature format="image-right" image={rmhs}>
                        <div className="feature-text-h">Rocky Mount High School</div>
                        <div className="feature-text-i feature-text-light">Rocky Mount, NC</div>
                        <div className="feature-text-i feature-text-light">2013-2017</div>
                        <div className="feature-text">I graduated in the top 3% of the RMHS class of 2017 with an International Baccalaureate diploma.</div>
                    </Feature>
                </PanelContainer>
            </div>
        );
    }
}

export default Education;
