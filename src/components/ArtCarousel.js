import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class ArtCarousel extends Component {
    render () {

        // Array of correct number of div elements for carousel indicators
        let indicators = React.Children.map(this.props.children, (child, index) => {
            return (index==0) ? (
                <li data-target={"#" + this.props.carouselID} data-slide-to={index} className="active"></li>
            ) : (
                <li data-target={"#" + this.props.carouselID} data-slide-to={index}></li>
            );
        });

        let slides = React.Children.map(this.props.children, (child, index) => {
            return (index==0) ? (
                <div className="carousel-item active">
                    {child}
                </div>
            ) : (
                <div className="carousel-item">
                    {child}
                </div>
            )
        })

        return (
            <div id={this.props.carouselID} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {indicators}
                </ol>
                <div className="carousel-inner">
                    {slides}
                </div>
                <a className="carousel-control-prev" href={"#" + this.props.carouselID} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={"#" + this.props.carouselID} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default ArtCarousel;

// <div id={this.props.carouselID} className="carousel slide" data-ride="carousel">
//     <ol className="carousel-indicators">
//         {indicators}
//     </ol>
//     <div className="carousel-inner">
//         <div className="carousel-item active">
//
//         </div>
//     </div>
// </div>

// <div id={this.props.carouselID} className="carousel slide" data-ride="carousel">
//     <ol className="carousel-indicators">
//         <li data-target={this.props.carouselID} data-slide-to="0" className="active"></li>
//         <li data-target={this.props.carouselID} data-slide-to="0" className="active"></li>
//     </ol>
//     <div className="carousel-inner">
//         <div className="carousel-item active">
//
//         </div>
//     </div>
// </div>
