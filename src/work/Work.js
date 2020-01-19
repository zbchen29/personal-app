import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import abinitio from "./work_abinitio.jpeg";
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
                    <Feature format="image-left" image={abinitio} link="https://www.abinitio.com/">
                        <a href="https://www.abinitio.com/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Ab Initio</a>
                        <div className="feature-text-i feature-text-b">Software Engineer Intern</div>
                        <div className="feature-text-i feature-text-light">Lexington, MA</div>
                        <div className="feature-text-i feature-text-light">June 2020 - August 2020</div>
                        <div className="feature-text">I will be working as a software engineer intern at Ab Initio.</div>
                    </Feature>
                    <Feature format="image-right" image={microsoft} link="https://www.microsoft.com/">
                        <a href="https://www.microsoft.com/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Microsoft</a>
                        <div className="feature-text-i feature-text-b">Software Engineer Intern</div>
                        <div className="feature-text-i feature-text-light">Cambridge, MA</div>
                        <div className="feature-text-i feature-text-light">January 2020 - February 2020</div>
                        <div className="feature-text">I work on a machine learning project that finds connections between artworks across cultures and mediums in collaboration with the <a href="https://www.metmuseum.org/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">Met</a> and the <a href="https://www.rijksmuseum.nl/en" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">Rijksmuseum</a>.  The web application incorporates Azure Machine Learning and UI Fabric in React.</div>
                    </Feature>
                    <Feature format="image-left" image={openeye} link="https://www.eyesopen.com/">
                        <a href="https://www.eyesopen.com/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">OpenEye Scientific Software</a>
                        <div className="feature-text-i feature-text-b">Software Engineer Intern</div>
                        <div className="feature-text-i feature-text-light">Boston, MA</div>
                        <div className="feature-text-i feature-text-light">June 2019 - August 2019</div>
                        <div className="feature-text">I implemented submodules of the cloud native platform <a href="https://www.eyesopen.com/orion" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">Orion</a> for computer-aided drug discovery and design.  Over the summer, I contributed to backend services, visualization toolkits, and a cloud-backed mixed reality molecular structure viewer application.</div>
                    </Feature>
                    <Feature format="image-right" image={gamelab} link="http://gamelab.mit.edu/">
                        <a href="http://gamelab.mit.edu/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">MIT Game Lab</a>
                        <div className="feature-text-i feature-text-b">Undergraduate Researcher</div>
                        <div className="feature-text-i feature-text-light">Cambridge, MA</div>
                        <div className="feature-text-i feature-text-light">May 2018 - February 2019</div>
                        <div className="feature-text">Working on a team of researchers, I developed new shaders, backend, models, and UI for Einstein's Playground, a planetarium-based real-time simulation of special relativity.  I also contributed to extending the <a href="http://gamelab.mit.edu/research/openrelativity/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">OpenRelativity</a> project.</div>
                    </Feature>
                    <Feature format="image-left" image={ncvps} link="https://ncvps.org/peer-tutoring-center">
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
