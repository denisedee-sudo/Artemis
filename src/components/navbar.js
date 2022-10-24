import React from 'react';
// import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg  fixed-top text-play bg-diamond">
                <a className="navbar-brand p-3 text-jindigo hover-big" href="index.html">
                    {/* <img src="ARTEMISFinal.png" alt="logo" height="60px"> */}
                </a>
                <div className="collapse navbar-collapse" id="bar-toggle">
                    <ul className="navbar-nav text-center">
                        <li className="nav-item ">
                            <NavLink to="/Artemis" className="nav-link active text-jindigo hover-carmine hover-big">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Artemis/about" className="nav-link active text-jindigo hover-carmine hover-big" >About US</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Artemis/articles" className="nav-link active text-jindigo hover-carmine hover-big" >Articles</NavLink>
                        </li>
                        <li className="/Artemis/nav-item">
                            <NavLink to="/Artemis/booking" className="nav-link active text-jindigo hover-carmine hover-big">Book an Appointment</NavLink>
                        </li>
                        <li className="nav-item mx-auto d-block d-sm-none">
                            <button className="btn btn-lg btn-maxy text-jindigo hover-carmine hover-big m-2 p-2 pe-5 ps-5"  data-bs-toggle="modal" data-bs-target="#Donate">
                                <h5>Donate Now!</h5>
                            </button>
                        </li>
                        <li className="nav-item mx-auto d-block d-sm-none">
                            <div className="row align-items-center ms-4 me-4">
                                <div className="col-6">
                                    <h5  data-bs-toggle="modal" data-bs-target="#SignIn" className="text-jindigo text-center hover-carmine hover-big">Sign In</h5>
                                </div>
                                <div className="col-6">
                                    <i className="fa-solid fa-circle-user fa-3x m-1 me-2 ms-2 text-jindigo"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;