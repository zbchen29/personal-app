import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlotGenCircle.css";

class PlotGenCircle extends Component {
    constructor (props) {
        super(props);
        this.state = {
            width : 250,
            height : 250,
            points : [],
            estimatedPI : 0
        };
        this.drawpoints = this.drawPoints.bind(this);
        this.addRandomPoint = this.addRandomPoint.bind(this);
        this.estimatePI = this.estimatePI.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.addRandomPoint(),
            50
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    addRandomPoint() {
        if (this.state.points.length < 1000) {
            let points = this.state.points;
            points.push([Math.floor(Math.random() * (this.state.width+1)), Math.floor(Math.random() * (this.state.height+1))]);
            this.setState({points:points});

            this.estimatePI();
        }
        else {
            clearInterval(this.timerID);
        }
    }

    estimatePI() {
        let withinCount = 0.0;
        for (let p of this.state.points) {
            if (Math.pow(p[0]-this.state.width/2, 2) + Math.pow(p[1]-this.state.height/2, 2) <= this.state.width*this.state.height/4) {
                withinCount += 1.0;
            }
        }
        this.setState({estimatedPI : 4 * withinCount/this.state.points.length});
    }

    drawPoints() {
        let points = [];

        // for (var p = 0; p < this.state.points.length; p++) {
        for (let p=0; p<this.state.points.length; p++) {
            // points.push(
            //     <div className="plot-point noselect" key={p} style={{left:this.state.points[p][0]-12 + 'px', bottom:this.state.points[p][1]-12 + 'px'}}>•</div>
            // )
            points.push(
                <div className="plot-point rounded-circle" key={p} style={{left:this.state.points[p][0]+1+'px', bottom:this.state.points[p][1]+1+'px'}}></div>
            )
        }

        return points;
    }

    render () {
        return (
            <div className="m-3">
                <div className="plot-area text-center mx-auto">
                    <div className="plot-circle rounded-circle"></div>
                    { this.drawPoints() }
                </div>
                <div className="text-center robotomono-font p-3">
                    π ≈ { this.state.estimatedPI.toFixed(3) }
                </div>
            </div>
        )
    }
}

export default PlotGenCircle;
