import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import img1 from "./home_icon.png";

class Home extends Component {
    render()
    {
        return (
            <div>
                <div className="home-header">Welcome</div>
                <PanelContainer>
                    <div className="theme-text">Hello.</div>
                    <div className="theme-text">Welcome to my site.</div>
                </PanelContainer>
            </div>
        );
    }
}

export default Home;
