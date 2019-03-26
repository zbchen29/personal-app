import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./BannerIcon.css"

class BannerIcon extends Component {
    render()
    {
        return (
            <Link to={this.props.routePath} className="p-2 col nav-item banner-link">
                <div className="banner-icon">
                    <img className="banner-img" src={this.props.imageIcon}/>
                </div>
                <div className="banner-text">{this.props.imageName}</div>
            </Link>
        );
    }
}

export default BannerIcon;
