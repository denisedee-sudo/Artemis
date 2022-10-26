import { artemisLogoPNG, 
    artemisLogoSVG, 
    artemisFinalPNG, 
    artemisLogoDark, 
    artemisLogoDarkPNG, 
    bdo, 
    emrgncyC,
    gcash, 
    paymaya, 
    paypal, 
    perf,
    robinson,
    sample } from "../components/forExport";

const Footer = () => {
    return ( 
    <footer className="row bg-jindigo text-bubbles p-1 text-play">
        <div className="container-fluid bg-jindigo text-bubbles">
            <div className="row">
                <div className="col-12 col-lg-1"></div>
                <div className="col-12 col-lg-3">
                    <br/><br/>
                    <h3 className="text-maxy">JOIN US</h3>
                    <p className="text-justify">Artemis Organization currently has over 6,000 members, from over 180 countries. Our members are part of a powerful base of feminist, women’s rights and gender justice defenders, activists and allies, connecting, exchanging, learning and acting together for transformative change.</p>
                    <button className="btn btn-carmine hover-maxy btn-lg">BE A SPONSOR NOW</button>
                </div>
                <div className="col-12 col-lg-3">
                    <br/><br/>
                    <h3 className="text-carmine">DONATE</h3>
                    <p className="text-justify">You can also show your support for transformative change by making a donation to Artemis Organization. Your valuable contribution will help sustain the work we do across the globe to support women and youth in the poorest communities to achieve sexual and reproductive health and rights.

                    </p>
                    <button className="btn btn-lg btn-maxy text-jindigo hover-carmine hover-big"  data-bs-toggle="modal" data-bs-target="#Donate">DONATE NOW</button>
                </div>
                <div className="col-12 col-lg-4">
                    <br/><br/>
                    <h3 className="text-bubbles">Connect with us</h3>
                    <a className="col-1 text-decoration-none" href="index.html">
                        <i className="hover-gradient text-bubbles hover-big p-2 rounded-circle bg-jindigo fa-brands fa-facebook fa-2x"></i>
                    </a>
                    <a className="col-1 text-decoration-none" href="index.html">
                        <i className="hover-gradient text-bubbles hover-big p-2 rounded-circle bg-jindigo fa-brands fa-instagram fa-2x"></i>
                    </a>
                    <a className="col-1 text-decoration-none" href="index.html">
                        <i className="hover-gradient text-bubbles hover-big p-2 rounded-circle bg-jindigo fa-brands fa-twitter fa-2x"></i>
                    </a>
                    <p>Join the conversation and stay connected with the community. Receive a regular selection of feminist analysis, resources and ways to get involved with the movements.</p>
                    
                    <form action="" className="input-group">
                        <input type="email" className="form-control" placeholder="Enter Email Address"/>
                        <button className="btn btn-lg btn-outline-bubbles text-bubbles hover-jindigo hover-big">SIGN ME UP</button>
                     </form>
                </div>
                
            </div>
            <br/><br/>
        </div>
        <hr />

        <div className="col-12 col-md-3 pt-2 pb-2 text-center">
            <img src={{artemisLogoDarkPNG}} alt="logo" />
            <h5 className="hover-big hover-maxy" >Address:  27 Ofelia St., Ofelia Village, Bgy, Project 8, Quezon City, 1106 Metro Manila</h5>
            <h5 className="hover-big hover-maxy" >Phone: (02) 3454 3854</h5>
            <h5 className="hover-big hover-maxy" >Email: office@artemis.org</h5>
        </div>
        <div className="col-12 col-md-3  text-center">
            <div className="invisible-xs py-5">
                <br/><br/>
            </div>
            <h3 className="pt-2 text-play" >About Us</h3>
            <ul className="list-unstyled mb-0 ">
                <li className=" hover-big">
                    <a href="About.html" className=" text-play hover-big pt-1 hover-maxy pointer text-bubbles text-decoration-none ">Who We Are</a>
                </li>
                <li className="hover-big">
                    <a href="About.html#whatwedo" className=" text-play hover-big pt-1 hover-maxy pointer text-bubbles text-decoration-none ">What We Do</a>
                </li>
                <li className="hover-big">
                    <a href="About.html#FAQ" className=" pt-1  text-play hover-maxy pointer text-bubbles text-decoration-none ">FAQ's</a>
                </li> 
            </ul>
            
        </div>
        <div className="col-12 col-md-3 text-center">
            <div className="invisible-xs py-5">
                <br/><br/>
            </div>
            <h3 className="pt-2 text-play" >Stay Informed</h3>
            <ul className="list-unstyled mb-0 ">
                <li className="hover-big">
                    <a href="Articles.html#articles" className=" text-play hover-big pt-1 hover-maxy pointer text-bubbles text-decoration-none ">Articles</a>
                </li>
                <li className="hover-big"   >
                    <a href="Articles.html" className=" text-play hover-big pt-1 hover-maxy pointer text-bubbles text-decoration-none ">Project Highlights</a>
                </li>
            </ul>
        </div>
        <div className="col-12 col-md-3 text-center">
            <div className="invisible-xs py-5">
                <br/><br/>
            </div>
            <h3 className="pt-2 text-play" >Get Involved</h3>
            <ul className="list-unstyled mb-0 ">
                <li className=" hover-big hover-maxy pointer text-bubbles">
                    Donate
                </li>
                <li className="hover-big hover-maxy pointer text-bubbles">
                    Become a Sponsor
                </li>
                <li className="hover-big hover-maxy pointer text-bubbles">
                    Events
                </li> 
            </ul>
        </div>
        <hr />
        <div className="col-12 text-center">
            © 2022 Copyright
        </div>
    </footer>
 );
}
 
export default Footer;