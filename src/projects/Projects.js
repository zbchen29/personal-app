import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import einstein from "./projects_einstein.jpeg";
import cfg from "./projects_cfg.jpeg";
import fractoid from "./projects_fractoid.jpeg";
import ncaa from "./projects_ncaa.jpeg";

class Projects extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">PROJECTS</div>
                <PanelContainer>
                    <Feature format="image-left" image={einstein}>
                        <div className="feature-text-h">Einstein's Playground</div>
                        <div className="feature-text">Developed at the MIT Game Lab, Einstein's Playground is a planetarium-based real-time simulation for visualizing special relativity in everyday environments.  It uses an improved version of the OpenRelativity library.</div>
                    </Feature>
                    <Feature format="image-right" image={cfg}>
                        <div className="feature-text-h">The Second Step Web App</div>
                        <div className="feature-text">As part of the MIT community service group Code for Good, I worked with a team of volunteers to develop a web app to guide site visitors to appropriate help/donor resources for The Second Step.  The Second Step is a domestic violence prevention non-profit headquarted in Newton, MA.</div>
                    </Feature>
                    <Feature format="image-left" image={fractoid}>
                        <div className="feature-text-h">Fractoid</div>
                        <div className="feature-text">A top-down shooting game written in Unity Engine.  All game code, animations, sprites, and other assets were built from the ground up.</div>
                    </Feature>
                    <Feature format="image-right" image={ncaa}>
                        <div className="feature-text-h">March Madness Score Disparities</div>
                        <div className="feature-text">Various detailed data visualizations of minute-by-minute score differences of each game in the NCAA basketball tournament.  Data covers 2017, 2018, and 2019.</div>
                    </Feature>
                </PanelContainer>
            </div>
        );
    }
}

export default Projects;
