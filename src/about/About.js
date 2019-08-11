import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

import PanelContainer from "../components/PanelContainer";

import github_mark from "../misc/github_mark.png";
import resume_icon from "../misc/resume_icon.png";
import behance_icon from "../misc/behance_icon.png";
import email_icon from "../misc/email_icon.png";
import phone_icon from "../misc/phone_icon.png";
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
                        courses in 6.046 (Design and Analysis of Algorithms), 6.033 (Computer Systems Engineering), 6.08 (Interconnected Embedded Systems), 8.02 (Physics II), and 21H.241 (France: Enlightenment and Revolution).
                    </div>
                    <div className="p-3 theme-text-sm">
                        Beyond my courses, I am deeply interested in astronomy/space exploration, education, history, and energy sustainability.
                    </div>
                    <div className="p-3 theme-text-sm">
                        Although my family is from China, I grew up in the great state of North Carolina along with my twin brother.  I currently reside in the equally amazing (albeit much colder!) state of New York. In my free time, I love running, playing badminton, making digital art, coding, solving chess puzzles, and reading historical fiction novels.
                    </div>

                    <div className="p-3 theme-text-md">Information and Contact</div>
                    <div className="p-3">
                        <div><a target="_blank" rel="noopener noreferrer" href="/Resume.pdf" className="theme-text-sm text-link">
                            <img className="info-icon" src={resume_icon} alt="resume icon"/>
                            Resume
                        </a></div>
                        <div><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zbchen/" className="theme-text-sm text-link">
                            <img className="info-icon" src={linkedin_icon} alt="linkedin icon"/>
                            LinkedIn
                        </a></div>
                        <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/zbchen29" className="theme-text-sm text-link">
                            <img className="info-icon" src={github_mark} alt="github icon"/>
                            GitHub
                        </a></div>
                        <div><a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/rigelb8ia7cd80" className="theme-text-sm text-link">
                            <img className="info-icon" src={behance_icon} alt="behance icon"/>
                            Behance Portfolio
                        </a></div>
                        <div className="theme-text-sm">
                            <img className="info-icon" src={phone_icon} alt="phone icon"/>
                            +1 (252) 458-3935
                        </div>
                        <div className="theme-text-sm">
                            <a href="mailto:zhenbang@mit.edu">
                                <img className="info-icon" src={email_icon} alt="email icon"/>
                            </a>
                            zhenbang@mit.edu
                        </div>
                    </div>
                </PanelContainer>
            </div>
        );
    }
}

export default About;
