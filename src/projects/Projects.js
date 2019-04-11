import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import einstein from "./projects_einstein.jpeg";
import cfg from "./projects_cfg.jpeg";
import fractoid from "./projects_fractoid.jpeg";
import ncaa from "./projects_ncaa.jpeg";
import catan from "./projects_catan.jpeg";

class Projects extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">PROJECTS</div>
                <PanelContainer>
                    <Feature format="image-left" image={einstein} link="https://www.behance.net/gallery/77836131/Einsteins-Playground">
                        <a href="https://www.behance.net/gallery/77836131/Einsteins-Playground" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Einstein's Playground</a>
                        <div className="feature-text">Developed at the MIT Game Lab, Einstein's Playground is a planetarium-based real-time simulation for visualizing special relativity in everyday environments.  It uses an greatly improved version of the <a href="http://gamelab.mit.edu/research/openrelativity/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">OpenRelativity</a> library.</div>
                    </Feature>
                    <Feature format="image-right" image={cfg} link="http://codeforgood.mit.edu/">
                        <a href="http://codeforgood.mit.edu/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">The Second Step Web App</a>
                        <div className="feature-text">As part of the MIT community service group Code for Good, I worked with a team of volunteers to develop a web app to guide site visitors to appropriate help/donor resources for <a href="https://thesecondstep.org/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">The Second Step</a>, a domestic violence prevention non-profit headquarted in Newton, MA.</div>
                    </Feature>
                    <Feature format="image-left" image={fractoid} link="https://github.com/zbchen29/fractoid-game">
                        <a href="https://github.com/zbchen29/fractoid-game" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Fractoid</a>
                        <div className="feature-text">A top-down shooting game written in Unity Engine.  All game code, animations, sprites, and other assets were built from the ground up.</div>
                    </Feature>
                    <Feature format="image-right" image={ncaa} link="https://github.com/zbchen29/ncaa-scores">
                        <a href="https://github.com/zbchen29/ncaa-scores" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">March Madness Score Disparities</a>
                        <div className="feature-text">Various detailed data visualizations of minute-by-minute score differences of each game in the March Madness basketball tournament.  Data mined from <a href="https://www.ncaa.com/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">NCAA</a> and covers 2017-2018.  (Hopefully 2019 soon! RIP my bracket rank...<a href="https://www.ncaa.com/game/basketball-men/d1/2019/03/31/michigan-st-duke" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">why Duke</a>...)</div>
                    </Feature>
                    <Feature format="image-left" image={catan} link="https://github.com/zbchen29/catan-gen">
                        <a href="https://github.com/zbchen29/catan-gen" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Catan Setup Generator</a>
                        <div className="feature-text">Generator for a more mathematically fair, randomized board setup for Settlers of Catan.  I used it to invalidate complaints of unbalanced boards in my own games.</div>
                    </Feature>
                </PanelContainer>
            </div>
        );
    }
}

export default Projects;
