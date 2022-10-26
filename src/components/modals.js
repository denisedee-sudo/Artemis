import { bdo,
    artemisLogoPNG,
    gcash,
    paypal,
    robinson } from "../components/forExport";

const Modals = () => {
    return ( 
    <div>
            <div class="modal" id="Donate">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen">
                    <div class="modal-content text-play">
                        <div class="modal-header bg-jindigo text-bubbles">
                            <h2>Donate Now!</h2>
                            <button class="btn btn-outline-carmine" data-bs-dismiss="modal">
                                X
                            </button>
                        </div>
                        <div class="modal-body">
                        
                            <div class="row text-jindigo">
                                <div class="col-4 col-md-2 col-lg-1">
                                    <img class="img-fluid " src={ artemisLogoPNG } alt="" />
                                </div>
                                <div class="col-8 col-md-10">
                                    <div class="row">
                                        <p class="text-start col-12 text-jindigo"> A nonprofit oraganization working with women and youth in the poorest communities to achieve sexual and reproductive health and rights.
                                        </p>
                                    </div>

                                    <div class="row">
                                    <p class="text-start col-12 text-jindigo"> 
                                        We do community organizing, primary care clinics for women and youth, policy advocacy.
                                    </p>
                                    </div>
                                </div>
                                <hr />
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="row">
                                        <div class="col-6 col-lg-6">
                                            <img class="img-fluid w-100" src={bdo} alt="" />
                                        </div>
                                        <div class="col-6 col-lg-6">
                                            <h4 > Banco De Oro</h4>
                                            <h6>Account Name:</h6>
                                            <h5 class="font-weight-bold">Artemis Organization</h5>
                                            <h6>Account Number:</h6>
                                            <h5 class="font-weight-bold">00 123 456 7890</h5>

                                        </div>
                                        
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-6 col-lg-6">
                                            <img class="img-fluid w-100" src={robinson} alt="" />
                                        </div>
                                        <div class="col-6 col-lg-6">
                                            <h4 >Robinsons Bank</h4>
                                            <h6>Account Name:</h6>
                                            <h5 class="font-weight-bold">Artemis Organization</h5>
                                            <h6>Account Number:</h6>
                                            <h5 class="font-weight-bold">00 123 456 7890</h5>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    
                                    <div class="row">
                                        <div class="col-6 col-lg-6">
                                            <img class="img-fluid w-100" src={gcash} alt="" />
                                        </div>
                                        <div class="col-6 col-lg-6">
                                            <h4 >Gcash</h4>
                                            <h6>Account Name:</h6>
                                            <h5 class="font-weight-bold">Artemis Organization</h5>
                                            <h6>Gcash Number:</h6>
                                            <h5 class="font-weight-bold">09 99 123 4567</h5>

                                        </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-6 col-lg-6">
                                            <img class="img-fluid w-100" src={paypal} alt="" />
                                        </div>
                                        <div class="col-6 col-lg-6">
                                            <h4 >Paypal</h4>
                                            <h6>Paypal Email:</h6>
                                            <h5 class="font-weight-bold">office@artemis.org</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="modal" id="SignIn">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down modal-xl">
                    <div class="modal-content text-play">
                        <div class="modal-header bg-jindigo text-bubbles">
                            <h2>Login/Sign Up</h2>
                            <button class="btn btn-outline-carmine" data-bs-dismiss="modal">
                                X
                            </button>
                        </div>
                        <div class="modal-body px-3">
                            <div class="row text-center text-jsan">
                                <div class="col-12 col-lg-6 text-center text-play">
                                    <div class="d-grid">
                                        <button class="btn btn-facebook my-1 text-bubbles"><i class="mx-3 fa-brands fa-facebook-f"></i>Login with Facebook</button>
                                        <button class="btn btn-twitter my-1 text-bubbles"><i class="mx-2 me-4 fa-brands fa-twitter"></i>Login with Twitter</button>
                                        <button class="btn btn-google my-1 text-bubbles"><i class="mx-3 fa-brands fa-google-plus-g"></i>Login with Google+</button>
                                    </div>
                                </div>
                                <hr class="invisible-lg-up my-3" />
                                <div class="col-12 col-lg-6 text-center">
                                    <div class="d-grid">
                                        <input type="text" class="rounded my-1 form-control" placeholder="Username" />
                                        <input type="text" class="rounded my-1 form-control" placeholder="Password" /> 
                                        <button class="btn btn-maxy my-1">Login</button>
                                    </div>
                                </div>

                                <hr class="my-3" />
                            
                                <div class="col-6">
                                    <h5 class="py-2 hover-carmine pointer">
                                        Sign Up
                                    </h5>
                                </div>
                                <div class="col-6">
                                    <h5 class="py-2 hover-carmine pointer">
                                        Forgot password?
                                    </h5>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div> 
    );
}
 
export default Modals;