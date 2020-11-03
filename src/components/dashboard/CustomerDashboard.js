import React, { Component } from 'react';
import "./CustomerDashboard.css"
import { withRouter, Link } from 'react-router-dom'
import logo from "../../assets/dashboard/ENDORSE-LOGO-b&w.png"
// import logo from "../../assets/dashboard/ENDORSE-LOGO.png"




class Dashboard extends Component {
    render() {
        return (
            <div class="container-fluid" >
                <div class="row "  >
                    <div   >
                        <img src={logo} alt="endorse" className="endorse img-fluid" />
                    </div>
                    <div class=" ml-auto" >
                        <button type="submit" class="logout">Logout</button>
                    </div>
                </div>

                <div class="header">DASHBOARD</div>
                <div>
                    <div class="row  justify-content-center">
                        <div class="  col-lg-8 col-12 justify-content-around ">
                            <div class="FivoTech">
                                <div class='row '>
                                    <div class="col-md-7 col-12" >
                                        <div class="Cdetails" >
                                            <div class="CompanyDetails">Name of Company :
                               </div>
                                            <div class="subDetails">FivoTech</div>
                                        </div>
                                        <div class="Cdetails">

                                            <div class="CompanyDetails">Phone no :
                               </div>
                                            <div class="subDetails">976293473</div>
                                        </div>
                                        <div class="Cdetails">
                                            <div class="CompanyDetails">Address :
                               </div>
                                            <div class="subDetails"> 123, Main Street, New York, NY 2020hii </div>
                                        </div>
                                        <div class="Cdetails">
                                            <div class="CompanyDetails">Email ID :
                               </div>
                                            <div class="subDetails"> FivoTechlip@gmail.com </div>
                                        </div>

                                        <div class="Cdetails">

                                            <div class="CompanyDetails">Category :
                               </div>
                                            <div class="subDetails">Finance</div>
                                        </div>


                                    </div>
                                    <div class="col-md-4 offset-md-4 col-12 ml-md-auto sqaure"  >
                                        <div class="FivoLogo"></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12 col-12 align-items-center" >
                            <div class=" Scrach" >

                                <div class=" col-md-4 col-6 QR align-self-center " >
                                    <Link to="/login">

                                        <button type="submit" class="endorseButton">Endorse</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="header">ENDORSEMENT</div>
                <div class="bootomSection">
                    <div class="row  justify-content-around"
                    >

                        <div class="col-lg-3 col-md-6  col-10  ">
                            <div class="cardClass">
                                <div class="row no-gutters justify-content-start ">

                                    <div class="col-4 " >
                                        <div class="initCircle  ">
                                            <div class="Initials" >
                                                AS
                            </div>
                                        </div>
                                    </div>

                                    <div class="col-8 " >
                                        <div class="personInfo">
                                            <p> Person : <span>Abishekh Sahu
                                 </span> </p>
                                            <p> Contact : <span>9762384678
                                 </span> </p>
                                            <p> Date : <span>22-10-2020
                                 </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3 col-md-6  col-10  align-self-center ">
                            <div class="cardClass">
                                <div class="row no-gutters justify-content-between ">

                                    <div class="col-3  ">
                                        <div class="initCircle1  ">
                                            <div class="Initials" >
                                                AS
                            </div>
                                        </div>
                                    </div>
                                    <div class="col-8  ">
                                        <div class="personInfo">
                                            <p> Person : <span>Suraj More
                         </span> </p>
                                            <p> Contact : <span>7086284678
                         </span> </p>
                                            <p> Date : <span>05-03-2020
                         </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6   col-10 align-self-center ">
                            <div class="cardClass">
                                <div class="row no-gutters justify-content-between ">

                                    <div class="col-3  ">
                                        <div class="initCircle2  ">
                                            <div class="Initials" >
                                                AS
                            </div>
                                        </div>
                                    </div>

                                    <div class="col-8  ">
                                        <div class="personInfo">

                                            <p> Person : <span>Amith pandey
                         </span> </p>
                                            <p> Contact : <span>9762384678
                         </span> </p>
                                            <p> Date : <span>15-01-2020
                         </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-3 col-md-6  col-10 align-self-center ">
                            <div class="cardClass">
                                <div class="row no-gutters justify-content-between ">
                                    <div class="col-3  ">
                                        <div class="initCircle  ">
                                            <div class="Initials" >
                                                AS
                            </div>
                                        </div>
                                    </div>

                                    <div class="col-8 ">
                                        <div class="personInfo">

                                            <p> Person : <span>Rohit Kumar
                         </span> </p>
                                            <p> Contact : <span>9763479678
                         </span> </p>
                                            <p> Date : <span>20-06-2020
                         </span> </p>
                                        </div>
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

export default withRouter(Dashboard);