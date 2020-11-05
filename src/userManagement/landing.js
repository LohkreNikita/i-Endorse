import React, { Component } from 'react';
import './landing.css';
import { withRouter, Link } from 'react-router-dom';
import bgImage from "../assets/landing/bgImage.png"
import Wlog from "../assets/landing/Wlogo.png";
import appStore from "../assets/landing/appStore.png"
import playStore from "../assets/landing/playStore.png";
import copyright from "../assets/landing/copyright.png";





class Landing extends Component {
    render(){
        return(
            <div className="container-fluid ">
                <div className="row ">
                    <div className="col-md-8 col">
                        <img src={bgImage} class="bgimage" alt={bgImage}></img>
                    </div>
                    <div className="col-md-4 col " >
                        <div className="SocialSide ">
                         <div class="p-4">
                            <img src={Wlog} className="wlogo center-block" alt="wlogo"/>
                            <p>You can choose the right website and services for your business based on 1,166,700+
                                Authentic timely reviews from real users.
                            </p>
                            <div class="col text-center">
                            <button class=" align-self-center ">Continue as Individuals </button>
                            </div>
                            <h1 >Or</h1>
                            <div class="col text-center">
                            <button>Continue as Business</button>
                            </div>
                            </div>
                            <div className="row m-2">
                                    <div className="col-md-6 col  app">
                                        <img src={appStore} alt="appStore" className="appstore"/>
                                    </div>
                                    <div className="col-md-6 col play" >
                                    <img src={playStore} alt="playStore" className="appstore"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="row text-center d-flex justify-content-center pt-5 mb-3">
                    <div class="col-md-1 mb-2 offset-md-2 col-12 footerText">About</div>
                    <div class="col-md-1 mb-2 col-12 footerText">Help</div>
                    <div class="col-md-1 mb-2 col-12 footerText">Privacy</div>
                    <div class="col-md-1 mb-2 col-12 footerText">Term</div>
                    <div class="col-md-1 mb-2 col-12 footerText">languages</div>
                    <div class="col-md-4 col-12">

                    <div class=" row  footerClass ">
                        <img src={copyright} alt="copyright" class="copyrightLogo"></img>
                        <div class="copyText" > Copyrights 2020 by Endorse</div>
                    </div>
                    </div>
                    </div>
            </div>
        );
    }
    
}
export default withRouter(Landing);