import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./PanelContainer.css";

import IconLink from './IconLink';

import github_mark from "../misc/github_mark.png";
import resume_icon from "../misc/resume_icon.png";
import behance_icon from "../misc/behance_icon.png";
import email_icon from "../misc/email_icon.png";
import linkedin_icon from "../misc/linkedin_icon.png";

class PanelContainer extends Component {
    render() {
        return (
            <div className="panel-background">
                <div className="container bg-white panel-container">
                    {this.props.children}
                </div>
                <div className="d-flex justify-content-center">
                    <IconLink linkPath="/Resume.pdf" imageIcon={resume_icon} newTab={true}/>
                    <IconLink linkPath="https://www.linkedin.com/in/zbchen/" imageIcon={linkedin_icon} newTab={true}/>
                    <IconLink linkPath="https://github.com/zbchen29" imageIcon={github_mark} newTab={true}/>
                    <IconLink linkPath="https://www.behance.net/rigelb8ia7cd80" imageIcon={behance_icon} newTab={true}/>
                    <IconLink linkPath="mailto:zhenbang@mit.edu" imageIcon={email_icon} newTab={false}/>
                </div>
                <div className="theme-text-light copyright-text">© 2020 Zhenbang Chen</div>
            </div>
        );
    }
}

export default PanelContainer;
