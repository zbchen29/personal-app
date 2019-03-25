import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./PanelContainer.css";

class PanelContainer extends Component {
    render() {
        return (
            <div className="container px-0 bg-white">
                <div className="tab-band"></div>
                {this.props.children}
            </div>
        )
    }
}

export default PanelContainer;
