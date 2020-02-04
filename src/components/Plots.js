import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Plots.css';
import curve from "../misc/curve.png";

class Plots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width : 250,
            height : 250,
            pointsCircle : [],
            pointsCurve : [],
            estimatedPI : 1,
            estimatedE : 1,
            estimatedIdentityReal : 1,
            estimatedIdentityImaginary : 1,
            underPoints : Array.apply(null, Array(251)).map(Number.prototype.valueOf,0),
            withinCount : 0,
            withinIndex : 0,
        }
        this.drawpoints = this.drawPoints.bind(this);
        this.addRandomPoint = this.addRandomPoint.bind(this);
        this.estimatePI = this.estimatePI.bind(this);
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
        if (this.state.pointsCircle.length < 1000 || this.state.pointsCurve.length < 1000) {
            let pointsCircle = this.state.pointsCircle;
            pointsCircle.push([Math.floor(Math.random() * (this.state.width+1)), Math.floor(Math.random() * (this.state.height+1))]);
            let pointsCurve = this.state.pointsCurve;
            let newPointCurve = [Math.floor(Math.random() * (this.state.width+1)), Math.floor(Math.random() * (this.state.height+1))]
            pointsCurve.push(newPointCurve);

            this.setState({
                pointsCircle:pointsCircle,
                pointsCurve:pointsCurve
            });

            // Add to underPoints if under curve
            if ((newPointCurve[1]/this.state.height) < 1/(newPointCurve[0]/this.state.width*2+1)) {
                let underPoints = this.state.underPoints;
                underPoints[newPointCurve[0]] += 1;
                this.setState({underPoints:underPoints});
            }

            this.estimatePI();
            this.estimateE();
            this.estimateIdentity();
        }
        else {
            clearInterval(this.timerID);
        }
    }

    estimatePI() {
        let withinCount = 0.0;
        for (let p of this.state.pointsCircle) {
            if (Math.pow(p[0]-this.state.width/2, 2) + Math.pow(p[1]-this.state.height/2, 2) <= this.state.width*this.state.height/4) {
                withinCount += 1.0;
            }
        }
        this.setState({estimatedPI : 4 * withinCount/this.state.pointsCircle.length});
    }

    estimateE() {
        let currentCount = 0;
        for (let i=0; i<this.state.underPoints.length; i++) {
            currentCount += this.state.underPoints[i];
            if (currentCount > this.state.pointsCurve.length/2) {
                this.setState({estimatedE : i/this.state.width*2.0+1});
                break;
            }
        }
    }

    estimateIdentity() {
        this.setState({
            estimatedIdentityReal:Math.cos(this.state.estimatedPI * Math.log(this.state.estimatedE)) + 1,
            estimatedIdentityImaginary:Math.sin(this.state.estimatedPI * Math.log(this.state.estimatedE))
        });
    }

    drawPoints(pts) {
        let points = [];
        for (let p=0; p<pts.length; p++) {
            points.push(
                <div className="plot-point rounded-circle" key={p} style={{left:pts[p][0]+1+'px', bottom:pts[p][1]+1+'px'}}></div>
            )
        }

        return points;
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="m-3">
                        <div className="plot-area text-center mx-auto">
                            <div className="plot-circle rounded-circle"></div>
                            { this.drawPoints(this.state.pointsCircle) }
                        </div>
                        <div className="text-center robotomono-font pt-3">
                            π ≈ { this.state.estimatedPI.toFixed(3) }
                        </div>
                    </div>
                    <div className="m-3">
                        <div className="plot-area text-center mx-auto">
                            <img className="w-100 not-selectable" draggable="false" src={curve} alt="curve"/>
                            { this.drawPoints(this.state.pointsCurve) }
                        </div>
                        <div className="text-center robotomono-font pt-3">
                            e ≈ { this.state.estimatedE.toFixed(3) }
                        </div>
                    </div>
                </div>
                <div className="text-center robotomono-font pb-3">
                    e<sup>iπ</sup> + 1 ≈ { this.state.estimatedIdentityReal.toFixed(4) }{ this.state.estimatedIdentityImaginary < 0 ? " - " + Math.abs(this.state.estimatedIdentityImaginary).toFixed(4) : " + " + this.state.estimatedIdentityImaginary.toFixed(4)}i
                </div>
            </div>
        )
    }
}

export default Plots;
