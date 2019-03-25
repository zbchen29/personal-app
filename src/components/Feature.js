import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Feature.css";

class Feature extends Component {
    render() {
        if (this.props.format == "image-left") {
            return (
                <div className="row">
                    <div className="col">
                        <img class="w-100" src={this.props.image}/>
                    </div>
                    <div className="col">
                        <div className="feature-text">{this.props.children}</div>
                    </div>
                </div>
            )
        }
        else if (this.props.format == "image-right") {
            return (
                <div className="row">
                    <div className="col">
                        <div className="feature-text">{this.props.children}</div>
                    </div>
                    <div className="col">
                        <img class="w-100" src={this.props.image}/>
                    </div>
                </div>
            )
        }
    }
}

export default Feature;
