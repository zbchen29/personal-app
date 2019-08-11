import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlotGenCurve.css";

import curve from "../misc/curve.png";

class PlotGenCurve extends Component {
    constructor (props) {
        super(props);
        this.state = {
            width : 250,
            height : 250,
            points : [],
            underPoints : Array.apply(null, Array(251)).map(Number.prototype.valueOf,0),
            withinCount : 0,
            withinIndex : 0,
            estimatedE : 0
        };
        this.drawpoints = this.drawPoints.bind(this);
        this.addRandomPoint = this.addRandomPoint.bind(this);
        this.estimateE = this.estimateE.bind(this);
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
            let newPoint = [Math.floor(Math.random() * (this.state.width+1)), Math.floor(Math.random() * (this.state.height+1))];
            // let newPoint = [Math.random() * 2 + 1, Math.random() + 1];
            points.push(newPoint);
            this.setState({points:points});

            // Add to underPoints if under curve
            if ((newPoint[1]/250) < 1/(newPoint[0]/250*2+1)) {
                let underPoints = this.state.underPoints;
                underPoints[newPoint[0]] += 1;
                this.setState({underPoints:underPoints});
            }

            this.estimateE();
        }
        else {
            clearInterval(this.timerID);
        }
    }

    estimateE() {
        let currentCount = 0;
        for (let i=0; i<this.state.underPoints.length; i++) {
            currentCount += this.state.underPoints[i];
            if (currentCount > this.state.points.length/2) {
                this.setState({estimatedE : i/250.0*2.0+1});
                break;
            }
        }

        // let withinCount = 0.0;
        // for (let p of this.state.points) {
        //     if (Math.pow(p[0]-this.state.width/2, 2) + Math.pow(p[1]-this.state.height/2, 2) <= this.state.width*this.state.height/4) {
        //         withinCount += 1.0;
        //     }
        // }
        // this.setState({estimatedE : 4 * withinCount/this.state.points.length});
    }

    drawPoints() {
        let points = [];

        for (let p=0; p<this.state.points.length; p++) {
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
                    <img className="w-100" src={curve} alt="curve"/>
                    { this.drawPoints() }
                </div>
                <div className="text-center robotomono-font p-3">
                    e ≈ { this.state.estimatedE.toFixed(3) }
                </div>
            </div>
        )
    }
}

export default PlotGenCurve;
