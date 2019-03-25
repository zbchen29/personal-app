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
                <div className="tab-header">Education</div>
                <PanelContainer>
                    <Feature format="image-left" image={mit}>
                        <div class="feature-text-b">Massachusetts Institute of Technology</div>
                        <div class="feature-text-i">Cambridge, MA</div>
                        <div class="feature-text-i">2017-2021</div>
                        <div class="feature-text">I am a second-year undergraduate student at MIT majoring in Computer Science and Engineering (Course 6-3).</div>
                    </Feature>
                    <Feature format="image-right" image={rmhs}>
                        <div class="feature-text-b">Rocky Mount High School</div>
                        <div class="feature-text-i">Rocky Mount, NC</div>
                        <div class="feature-text-i">2013-2017</div>
                        <div class="feature-text">I graduated from RMHS with an International Baccalaureate diploma in 2017.</div>
                    </Feature>
                </PanelContainer>
            </div>
        );
    }
}

export default Education;
