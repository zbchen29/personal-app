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
                    <Feature format="image-left" image={mit} link="http://www.mit.edu/">
                        <a href="http://www.mit.edu/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Massachusetts Institute of Technology</a>
                        <div className="feature-text-i feature-text-light">Cambridge, MA</div>
                        <div className="feature-text-i feature-text-light">2017-2021</div>
                        <div className="feature-text">I am a rising third-year undergraduate student at MIT majoring in Computer Science and Engineering (Course 6-3).</div>
                        <div className="feature-text">GPA: 4.9/5.0</div>
                    </Feature>
                    <Feature format="image-right" image={rmhs} link="https://www.nrms.k12.nc.us/domain/32">
                        <a href="https://www.nrms.k12.nc.us/domain/32" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Rocky Mount High School</a>
                        <div className="feature-text-i feature-text-light">Rocky Mount, NC</div>
                        <div className="feature-text-i feature-text-light">2013-2017</div>
                        <div className="feature-text">I graduated in the top 3% of the RMHS class of 2017 with an <a href="https://www.ibo.org/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">International Baccalaureate</a> diploma.</div>
                    </Feature>
                </PanelContainer>
            </div>
        );
    }
}

export default Education;
