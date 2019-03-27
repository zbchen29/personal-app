import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Home.css";

import PanelContainer from "../components/PanelContainer";

class Home extends Component {
    render()
    {
        return (
            <div>
                <div className="tab-header">ZHENBANG CHEN</div>
                <PanelContainer>
                    <div className="p-3 theme-text-md">"You'll never regret the chances you took and the mistakes you made as you sought out life well-lived"</div>
                    <div className="p-3 theme-text-md">- T. Proctor</div>
                </PanelContainer>
            </div>
        );
    }
}

export default Home;
