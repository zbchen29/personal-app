import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ArtCarousel from "../components/ArtCarousel";

import abstract from "./artwork_abstract.jpeg";
import dining from "./artwork_dining.jpeg";
import clock from "./artwork_clock.jpeg";

class Artwork extends Component {
    render()
    {
        return(
            <div>
                <div className="tab-header">Artwork</div>
                <ArtCarousel carouselID="main-carousel">
                    <img src={abstract} className="d-block w-100"/>
                    <img src={dining} className="d-block w-100"/>
                    <img src={clock} className="d-block w-100"/>
                </ArtCarousel>
            </div>
        );
    }
}

export default Artwork;
