import React, { Component } from 'react';
import './Register.css';
import { withRouter, Link } from 'react-router-dom'


class Register extends Component {
    render() {
        return (
            <div class="container-fluid " >
             <div class="row justify-content-between "  >
                    <div class="col-8 ">
                        <div class="endorse">i-ENDORSE</div>
                        </div>
                    <div class="col-4 d-lg-none d-md-block "  >
                        <div class="SignIn" >
                        <button type="submit" >SignIn</button>
                        </div>
                    </div>
                </div>            
                <div class="outerDiv " >
                    
                     {/* mobile View content */}
                     <div class="row">
                     <div class="details d-lg-none d-md-block justify-content-center ">
                         <div>
                         <p >You can choose the right website and services for your business based on 1,166,700+
                                    uthentic, timely reviews from real users.
                            </p>
                         </div>
                         </div>
                         </div>
                            

                            {/* end of mobile view content */}

            
            {/* hide on mobile view */}

                    <div class="row justify-content-center"  >   
                        <div class=" col-md-6 d-none d-lg-block ">
                            <div class="LeftSection">
                                <div class=" row ">
                                    <div class="col-md-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="WEllips1" >
                                            <circle id="Ellipse_3" data-name="Ellipse 3" cx="82" cy="72" r="42" fill="#fff" />
                                        </svg>
                                    </div>
                                    <div class="col-md-6">

                                        <svg xmlns="http://www.w3.org/2000/svg" class="WEllips4">
                                            <circle id="Ellipse_6" data-name="Ellipse 6" cx="120" cy="120" r="8" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="TextSection" >
                                    <h1 >i-ENDORSE </h1>
                                    <p >You can choose the right website and services for your business based on 1,166,700+
                                    uthentic, timely reviews from real users.
                            </p>
                                    <div class="InnerText ">
                                        <h6 >Already Register ? </h6>
                                        <button>SignIn</button>
                                    </div>

                                </div>

                                <div class="row ">
                                    <div class="col-md-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="WEllips3" >
                                            <circle id="Ellipse_3" data-name="Ellipse 3" cx="72" cy="80" r="20" fill="#fff" />
                                        </svg>
                                    </div>
                                    <div class="col-md-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="WEllips2">
                                            <circle id="Ellipse_6" data-name="Ellipse 6" cx="120" cy="62" r="35" fill="#fff" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section conatins form */}
                        <div class=" col-md-6 col-12 " >
                            <div class=" d-none d-lg-block">

                        {/* Top Blue Svg row */}

                            <div class="row  ">
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="BEllips1" >
                                        <circle id="Ellipse_3" data-name="Ellipse 3" cx="72" cy="120" r="8" fill="#01a0db" />
                                    </svg>
                                </div>
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="BEllips2">
                                        <circle id="Ellipse_6" data-name="Ellipse 6" cx="150" cy="80" r="35" fill="#01a0db" />
                                    </svg>
                                </div>
                            </div>
                            </div>
                                                   
                            {/*Registration  Form */}
                            <div class="row justify-content-center " >

                            <div class="col-lg-6 col-md-12 col-10 align-self-center "   >
                                <div class="registerForm">
                                <p >REGISTER BUSINESS</p>
                                <form  >
                                    <div class="form-group">
                                        <label for="Subject">Company Name</label>
                                        <input type="text" class="form-control form-control-sm" id="subject" aria-describedby="subject" />
                                    </div>

                                    <div class="form-row" >
                                        <div class="col-4 " >
                                            <label class="subject">Upload Logo </label>
                                            <div class="btn btn-sm  upload " >
                                                <span class="btn-sm text-justify "> Upload </span>
                                                <input class="form-control-sm" type="file" id="subject" />
                                            </div>
                                        </div>
                                        <div class="col-8" >
                                            <label for="phone">Phone number</label>

                                            <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control form-control-sm" />
                                        </div>
                                    </div>
                                    <div class="form-group">

                                        <label for="subject" class="">Address</label>
                                        <input type="text" id="subject" name="subject" class="form-control form-control-sm" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email Id<span class="optional">(Optional)</span></label>
                                        <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>

                                    <div class="form-group">

                                        <label for="subject" class="">Category<span class="optional">(Optional)</span></label>
                                        <input type="text" id="subject" name="subject" class="form-control form-control-sm" />
                                    </div>
                                    <div class="registerButton-div">
                                        <Link to="/dashboard">
                                            <button type="submit" class="registerButton" >Register</button>
                                        </Link>
                                    </div>
                                </form>
                                </div>
                                </div>
                                </div>
                                {/* End of Registration */}

                                <div class="d-none d-lg-block">
                            
                            <div class="row" >
                                <div class="col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="BEllips1" >
                                        <circle id="Ellipse_3" data-name="Ellipse 3" cx="72" cy="20" r="20" fill="#01a0db" />
                                    </svg>
                                </div>
                                <div class="col-md-6" >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="BEllips2">
                                        <circle id="Ellipse_6" data-name="Ellipse 6" cx="150" cy="80" r="35" fill="#01a0db" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);