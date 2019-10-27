import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import microsoft from "./work_microsoft.jpeg";
import openeye from "./work_openeye.jpeg";
import gamelab from "./work_gamelab.jpeg";
import ncvps from "./work_ncvps.jpeg";

class Work extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">WORK</div>
                <PanelContainer>
                    <Feature format="image-left" image={microsoft} link="https://www.microsoft.com/">
                        <a href="https://www.microsoft.com/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Microsoft</a>
                        <div className="feature-text-i feature-text-b">Incoming Software Engineering Intern</div>
                        <div className="feature-text-i feature-text-light">Cambridge, MA</div>
                        <div className="feature-text-i feature-text-light">January 2020 - February 2020</div>
                        <div className="feature-text">I will be working as an software engineering intern in the <a href="https://www.microsoft.com/garage/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">Microsoft Garage</a> at the New England Research and Development (<a href="http://www.microsoftnewengland.com/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">NERD</a>) Lab.</div>
                    </Feature>
                    <Feature format="image-right" image={openeye} link="https://www.eyesopen.com/">
                        <a href="https://www.eyesopen.com/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">OpenEye Scientific Software</a>
                        <div className="feature-text-i feature-text-b">Software Engineering Intern</div>
                        <div className="feature-text-i feature-text-light">Boston, MA</div>
                        <div className="feature-text-i feature-text-light">June 2019 - August 2019</div>
                        <div className="feature-text">I worked on submodules of the cloud native platform <a href="https://www.eyesopen.com/orion" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">Orion</a> for computer-aided drug discovery and design.  Over the summer, I contributed to backend development and new visualization toolkits.</div>
                    </Feature>
                    <Feature format="image-left" image={gamelab} link="http://gamelab.mit.edu/">
                        <a href="http://gamelab.mit.edu/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">MIT Game Lab</a>
                        <div className="feature-text-i feature-text-b">Software Engineering Intern</div>
                        <div className="feature-text-i feature-text-light">Cambridge, MA</div>
                        <div className="feature-text-i feature-text-light">May 2018 - February 2019</div>
                        <div className="feature-text">Working with a team of undergrads and researchers, I developed new shaders, backend, models, and UI for Einstein's Playground, a planetarium-based real-time simulation of special relativity.  I also contributed to extending the <a href="http://gamelab.mit.edu/research/openrelativity/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">OpenRelativity</a> project.</div>
                    </Feature>
                    <Feature format="image-right" image={ncvps} link="https://ncvps.org/peer-tutoring-center">
                        <a href="https://ncvps.org/peer-tutoring-center" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">North Carolina Virtual Public Schools - Peer Tutoring Center</a>
                        <div className="feature-text-i feature-text-b">Senior CS/Math/French Tutor</div>
                        <div className="feature-text-i feature-text-light">Raleigh, NC</div>
                        <div className="feature-text-i feature-text-light">January 2015 - August 2018</div>
                        <div className="feature-text">I worked as an online tutor for the Peer Tutoring Center at <a href="https://ncvps.org/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">NCVPS</a>.  I guided distance learning students through Computer Science, Math, French, and Chemistry courses in over 70 separate sessions.</div>
                    </Feature>
                </PanelContainer>
            </div>
        );
    }
}

export default Work;
