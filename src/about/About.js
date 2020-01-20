import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

import PanelContainer from "../components/PanelContainer";

import github_mark from "../misc/github_mark.png";
import resume_icon from "../misc/resume_icon.png";
import behance_icon from "../misc/behance_icon.png";
import email_icon from "../misc/email_icon.png";
import linkedin_icon from "../misc/linkedin_icon.png";

class About extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">ABOUT</div>
                <PanelContainer>
                    <div className="p-3 theme-text-md">Zhenbang "Ben" Chen</div>
                    <div className="p-3 theme-text-sm">
                        I am a student at MIT pursuing a degree in Computer Science and Engineering.  Among my friends, I go by the substantially simpler nickname Ben.  Currently, I am taking
                        courses in 6.869 (Advances in Computer Vision), 9.660 (Computational Cognitive Science), 6.031 (Elements of Software Construction), and 14.02 (Principles of Macroeconomics).
                    </div>
                    <div className="p-3 theme-text-sm">
                        Beyond my courses, I am deeply interested in astronomy/space exploration, education, history, and energy sustainability.
                    </div>
                    <div className="p-3 theme-text-sm">
                        Although my family is from China, I grew up in the great state of North Carolina along with my twin brother.  I currently reside in the equally amazing (albeit much colder!) state of New York. In my free time, I love running, playing badminton, making digital art, coding, solving chess puzzles, and reading historical fiction novels.
                    </div>

                    <div className="p-3 theme-text-md">Information and Contact</div>
                    <div className="d-flex flex-row flex-wrap justify-content-around p-3">
                        <a target="_blank" rel="noopener noreferrer" href="/Resumepdf" className="theme-text-sm group-link p-2"><div className="d-flex flex-column align-items-center">
                            <img className="info-icon" src={resume_icon} alt="resume icon"/>
                            <div className="text-link">Resume</div>
                        </div></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zbchen/" className="theme-text-sm group-link p-2"><div className="d-flex flex-column align-items-center">
                            <img className="info-icon" src={linkedin_icon} alt="linkedin icon"/>
                            <div className="text-link">LinkedIn</div>
                        </div></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/zbchen29" className="theme-text-sm group-link p-2"><div className="d-flex flex-column align-items-center">
                            <img className="info-icon" src={github_mark} alt="github icon"/>
                            <div className="text-link">GitHub</div>
                        </div></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/rigelb8ia7cd80" className="theme-text-sm group-link p-2"><div className="d-flex flex-column align-items-center">
                            <img className="info-icon" src={behance_icon} alt="behance icon"/>
                            <div className="text-link">Behance</div>
                        </div></a>
                        <div className="d-flex flex-column align-items-center theme-text-sm p-2">
                            <a className="group-link" href="mailto:zhenbang@mit.edu">
                                <img className="info-icon" src={email_icon} alt="email icon"/>
                            </a>
                            <div className="align-self-center text-link">zhenbang@mit.edu</div>
                        </div>
                    </div>
                </PanelContainer>
            </div>
        );
    }
}

export default About;
