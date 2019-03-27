import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./PanelContainer.css";

class PanelContainer extends Component {
    render() {
        return (
            <div className="panel-background">
                <div className="container bg-white panel-container">
                    {this.props.children}
                </div>
                <div className="theme-text-light copyright-text">© Zhenbang Chen</div>
            </div>
        );
    }
}

export default PanelContainer;
