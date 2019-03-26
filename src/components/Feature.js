import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feature.css";

class Feature extends Component {
    render() {
        let order;
        if (this.props.format == "image-left") {
            order = "col-md overflow-hidden p-0 image-left";
        }
        else if (this.props.format == "image-right") {
            order = "col-md overflow-hidden p-0 image-right";
        }

        return (
            <div className="row overflow-hidden">
                <div className={order}>
                    <img className="col-content w-100" src={this.props.image}/>
                </div>
                <div className="col-md overflow-hidden mx-0 p-0">
                    <div className="p-4">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default Feature;
