import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../sass/main.scss"
import { c1, c2, c3 } from "./forExport"

const Carousel = () => {
    return ( 
        <section id="heroSection" class="carousel col-12 text-center slide pt-3 pb-5" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <Link to="/Artemis/about"><img src={c1} class="img-fluid w-100" alt="" /></Link>
            </div>
            <div class="carousel-item">
                <Link to="/Artemis/booking"><img src={c2} class="img-fluid w-100" alt="" /></Link>
            </div>
            <div class="carousel-item">
                <Link to="/Artemis/articles#articleOne"> <img src={c3} class="img-fluid w-100" alt="" /></Link>
            </div>        
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#heroSection" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        {/*End ofPrev Button*/}
        <button class="carousel-control-next" type="button" data-bs-target="#heroSection" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
        {/*End of Next Button*/}   
    </section>
     );
}
 
export default Carousel;