import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import ArtCarousel from "../components/ArtCarousel";
import PanelContainer from "../components/PanelContainer";

import abstract from "./artwork_abstract.jpeg";
import bench from "./artwork_bench.jpeg";
import clock from "./artwork_clock.jpeg";
import cup from "./artwork_cup.jpeg";
import dining from "./artwork_dining.jpeg";
import home from "./artwork_home.jpeg";
import rayovac from "./artwork_rayovac.jpeg";
import school from "./artwork_school.jpeg";

class Artwork extends Component {
    render()
    {
        return(
            <div>
                <div className="tab-header">ARTWORK</div>
                <PanelContainer>
                    <ArtCarousel carouselID="main-carousel">
                        <img src={abstract} className="d-block w-100" alt="abstract"/>
                        <img src={dining} className="d-block w-100" alt="dining"/>
                        <img src={bench} className="d-block w-100" alt="bench"/>
                        <img src={school} className="d-block w-100" alt="school"/>
                        <img src={home} className="d-block w-100" alt="home"/>
                        <img src={clock} className="d-block w-100" alt="clock"/>
                        <img src={cup} className="d-block w-100" alt="cup"/>
                        <img src={rayovac} className="d-block w-100" alt="rayovac"/>
                    </ArtCarousel>
                </PanelContainer>
            </div>
        );
    }
}

export default Artwork;
