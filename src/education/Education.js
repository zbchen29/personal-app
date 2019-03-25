import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Education.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import ed from "./education_icon.png";

class Education extends Component {
    render()
    {
        return (
            <div>
                <div className="education-header">Welcome</div>
                <div className="container px-0 bg-white">
                    <div className="tab-band"></div>
                    <Feature format="image-left" image={ed}>
                        This is the Feature text.
                    </Feature>
                </div>
            </div>
        );
    }
}

export default Education;
