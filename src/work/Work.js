import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import gamelab from "./work_gamelab.jpeg";
import ncvps from "./work_ncvps.jpeg";

class Work extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">WORK</div>
                <PanelContainer>
                    <Feature format="image-left" image={gamelab}>
                        <div className="feature-text-h">MIT Game Lab</div>
                        <div className="feature-text-i feature-text-b">Software Developer</div>
                        <div className="feature-text-i feature-text-light">Cambridge, MA</div>
                        <div className="feature-text-i feature-text-light">May 2018 - February 2019</div>
                        <div className="feature-text">Working with a team of undergrads and researchers, I developed new shaders, backend, models, and UI for Einstein's Playground, a planetarium-based real-time simulation of special relativity.  I also contributed to extending the existing OpenRelativity project.</div>
                    </Feature>
                    <Feature format="image-right" image={ncvps}>
                        <div className="feature-text-h">North Carolina Virtual Public Schools - Peer Tutoring Center</div>
                        <div className="feature-text-i feature-text-b">Senior CS/Math/French Tutor</div>
                        <div className="feature-text-i feature-text-light">Raleigh, NC</div>
                        <div className="feature-text-i feature-text-light">January 2015 - August 2018</div>
                        <div className="feature-text">I worked as an online tutor for the Peer Tutoring Center at NCVPS.  I guided distance learning students through Computer Science, Math, French, and Chemistry courses.</div>
                    </Feature>
                </PanelContainer>
            </div>
        );
    }
}

export default Work;
