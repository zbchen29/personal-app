import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feature.css";

class Feature extends Component {
    render() {
        let order;
        if (this.props.format === "image-left") {
            order = "col-md overflow-hidden p-0 image-left";
        }
        else if (this.props.format === "image-right") {
            order = "col-md overflow-hidden p-0 image-right";
        }

        return (
            <div className="row overflow-hidden feature-box">
                <a href={this.props.link} className={order} target="_blank" rel="noopener noreferrer">
                    <img className="col-content w-100 not-selectable" draggable="false" src={this.props.image} alt="feature"/>
                </a>
                <div className="col-md overflow-hidden mx-0 p-0">
                    <div className="p-4">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default Feature;
