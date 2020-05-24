import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import einstein from "./projects_einstein.jpeg";
import cfg from "./projects_cfg.jpeg";
import fractoid from "./projects_fractoid.jpeg";
import ncaa from "./projects_ncaa.jpeg";
import catan from "./projects_catan.jpeg";
import chat from "./projects_chat.jpeg";
import colors from "./projects_colors.jpeg";
import art from "./projects_art.jpeg";

class Projects extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">PROJECTS</div>
                <PanelContainer>
                    <Feature format="image-left" image={einstein} link="https://www.behance.net/gallery/77836131/Einsteins-Playground">
                        <a href="https://www.behance.net/gallery/77836131/Einsteins-Playground" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Einstein's Playground</a>
                        <div className="feature-text">Developed at the MIT Game Lab, Einstein's Playground is a planetarium-based real-time simulation for visualizing special relativity in everyday environments.  It uses a greatly improved version of the <a href="http://gamelab.mit.edu/research/openrelativity/" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">OpenRelativity</a> library.</div>
                    </Feature>
                    <Feature format="image-right" image={art} link="/zhenjia_chen_zhenbang_chen_art_culture_classification.pdf">
                        <a href="/zhenjia_chen_zhenbang_chen_art_culture_classification.pdf" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Art Cultural Classification with Deep Neural Networks</a>
                        <div className="feature-text">Investigates the use of machine learning with deep neural networks to determine a painting's geographic and cultural origins.  Using data from <a href="https://www.metmuseum.org/art/collection" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">The Met collection</a>, we experimented with various architectures and trainings methods to produce a classification separating European, American, and Asian art.</div>
                    </Feature>
                    <Feature format="image-left" image={catan} link="https://catan-setup.herokuapp.com/">
                        <a href="https://catan-setup.herokuapp.com/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Catan Setup Generator</a>
                        <div className="feature-text">Wep app serving my generator for a more mathematically fair, randomized board setup for Settlers of Catan.  I have used this to invalidate complaints of unbalanced boards in my own games (with varying degrees of success).  My actual <a href="https://github.com/zbchen29/catan-gen" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">generator code</a> can be found on <a href="https://github.com/zbchen29" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">GitHub</a>.</div>
                    </Feature>
                    <Feature format="image-right" image={colors} link="https://color-inference-app.web.app/">
                        <a href="https://color-inference-app.web.app/" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">Color Name Inference</a>
                        <div className="feature-text">Probabilistic model for predicting color names that outperforms an approach based strictly on term accuracy.  This was a <a href="/zhenjia_chen_zhenbang_chen_inferring_color_terms.pdf" className="feature-text-b feature-text-link" target="_blank" rel="noopener noreferrer">collaborative final project</a> for 9.660 (Computational Cognitive Science).</div>
                    </Feature>
                    <Feature format="image-left" image={chat} link="https://github.com/zbchen29/chat-analysis">
                        <a href="https://github.com/zbchen29/chat-analysis" className="feature-text-h feature-text-link" target="_blank" rel="noopener noreferrer">GroupMe Chat Analysis</a>
                        <div className="feature-text">Suite of functions for parsing and analyzing GroupMe group chat data though sentiment analysis, message aggregation, alias retrieval, etc.  The results turned out to be hilariously accurate in my case.</div>
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
                </PanelContainer>
            </div>
        );
    }
}

export default Projects;
