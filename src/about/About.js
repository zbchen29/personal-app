import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import PanelContainer from "../components/PanelContainer";

class About extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">ABOUT</div>
                <PanelContainer>
                    <div className="p-3 theme-text-md">Zhenbang Chen</div>
                    <div className="p-3 theme-text-sm">
                        I am a student at MIT pursuing a degree in Computer Science and Engineering.  I am currently taking
                        courses in 6.046 (Design and Analysis of Algorithms), 6.033 (Computer Systems Engineering), 6.08 (Interconnected Embedded Systems), 8.02 (Physics II), and 21H.241 (France: Englightenment and Revolution).
                    </div>
                    <div className="p-3 theme-text-sm">
                        Beyond my courses, I am deeply interested in astronomy/space exploration, history, and energy sustainability.
                    </div>
                    <div className="p-3 theme-text-sm">
                        Although my family is from China, I grew up in the great state of North Carolina along with my twin brother.  I currently reside in the equally amazing, albeit substantially colder, state of New York. In my free time, I love running, playing badminton, making digital art, coding, and reading historical fiction novels.
                    </div>

                    <div className="p-3 theme-text-md">Information</div>
                    <div className="p-3">
                        <ul>
                            <li><a target="_blank" href="/Resume.pdf" className="theme-text-sm">Resume</a></li>
                            <li><a target="_blank" href="https://github.com/zbchen29" className="theme-text-sm">GitHub</a></li>
                            <li><a target="_blank" href="https://www.behance.net/rigelb8ia7cd80" className="theme-text-sm">Behance Portfolio</a></li>
                        </ul>
                    </div>
                </PanelContainer>
            </div>
        );
    }
}

export default About;
