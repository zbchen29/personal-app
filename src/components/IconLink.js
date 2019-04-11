import React, { Component } from 'react';
import './IconLink.css';
class IconLink extends Component {
    render() {
        return (
            <a className="px-2 icon-link" href={this.props.linkPath} target="_blank" rel="noopener noreferrer">
                <img className="icon-img" src={this.props.imageIcon} alt="link icon"/>
            </a>
        )
    }
}

export default IconLink;
