import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ArtCarousel.css";

class ArtCarousel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeIndex : 0
        };

        this.goToIndex = this.goToIndex.bind(this);
        this.goToPrev = this.goToPrev.bind(this);
        this.goToNext = this.goToNext.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.changeSlide(),
            4000
        );
        this.count = React.Children.count(this.props.children)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    changeSlide() {
        this.setState({
            activeIndex: (this.state.activeIndex+1)%this.count
        });
    }

    goToIndex(newIndex) {
        this.setState({
            activeIndex: newIndex
        })
        clearInterval(this.timerID);
        this.timerID = setInterval(
            () => this.changeSlide(),
            4000
        );
    }

    goToPrev() {
        this.setState({
            activeIndex: (this.state.activeIndex+this.count-1)%this.count
        });
        clearInterval(this.timerID);
        this.timerID = setInterval(
            () => this.changeSlide(),
            4000
        );
    }

    goToNext() {
        this.setState({
            activeIndex: (this.state.activeIndex+1)%this.count
        });
        clearInterval(this.timerID);
        this.timerID = setInterval(
            () => this.changeSlide(),
            4000
        );
    }

    render () {

        let indicators = React.Children.map(this.props.children, (child, index) => {
            return (index===this.state.activeIndex) ? (
                <li data-target={"#" + this.props.carouselID} data-slide-to={index} className="active" onClick={(e) => this.goToIndex(index,e)}></li>
            ) : (
                <li data-target={"#" + this.props.carouselID} data-slide-to={index} className="" onClick={(e) => this.goToIndex(index,e)}></li>
            );
        });

        let slides = React.Children.map(this.props.children, (child, index) => {
            return (index===this.state.activeIndex) ? (
                <div className="carousel-item active fade-in">
                    {child}
                </div>
            ) : (
                <div className="carousel-item active fade-out">
                    {child}
                </div>
            )
        })

        return (
            <div id={this.props.carouselID} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators slide-index">
                    {indicators}
                </ol>
                <div className="carousel-inner">
                    {slides}
                </div>
                <a className="carousel-control-prev slide-button" href={"#" + this.props.carouselID} role="button" data-slide="prev" onClick={this.goToPrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next slide-button" href={"#" + this.props.carouselID} role="button" data-slide="next" onClick={this.goToNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default ArtCarousel;
