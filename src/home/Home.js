import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css";

import Feature from "../components/Feature";
import PanelContainer from "../components/PanelContainer";

import img1 from "./home_icon.png";

class Home extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">Welcome</div>
                <PanelContainer>
                    <div className="p-3 theme-text">Hello, I am Zhenbang Chen.</div>
                    <div className="p-3 theme-text">Welcome to my site.</div>
                </PanelContainer>
            </div>
        );
    }
}

export default Home;
