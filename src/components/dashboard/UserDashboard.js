import React, { Component } from 'react';
import "./UserDashboard.css"
import { withRouter, Link } from 'react-router-dom'
import logo from "../../assets/image.png"




class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid" >
                <div className="row "  >
                    <div   >
                        <img src={logo} alt="endorse" className="endorse img-fluid" />
                    </div>
                    <div className=" ml-auto" >
                        <button type="submit" className="logout">Logout</button>
                    </div>
                </div>

                <div className="header">DASHBOARD</div>
                <div>
                    <div className="row  justify-content-center">
                        <div className="  col-lg-8 col-12 justify-content-around ">
                            <div className="FivoTech">
                                <div className='row '>
                                    <div className="col-md-7 col-12" >
                                        <div className="Cdetails" >
                                            <div className="CompanyDetails">Name of Company :
                               </div>
                                            <div className="subDetails">Panasonic</div>
                                        </div>
                                        <div className="Cdetails">

                                            <div className="CompanyDetails">Phone no :
                               </div>
                                            <div className="subDetails">976293473</div>
                                        </div>
                                        <div className="Cdetails">
                                            <div className="CompanyDetails">Address :
                               </div>
                                            <div className="subDetails"> 12th floor, Ambience Tower, Gurgaon-12202, Harayana </div>
                                        </div>
                                        <div className="Cdetails">
                                            <div className="CompanyDetails">Email ID :
                               </div>
                                            <div className="subDetails"> helpline@in.panasonic.com </div>
                                        </div>

                                        <div className="Cdetails">

                                            <div className="CompanyDetails">Category :
                               </div>
                                            <div className="subDetails">Electronics</div>
                                        </div>


                                    </div>
                                    <div className="col-md-4 offset-md-4 col-12 ml-md-auto sqaure"  >
                                        <div className="FivoLogo"></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 col-12 " >

                            <div className=" Scrach " >
                            <div className="row h-100 justify-content-center" > 

                                <div className=" QR  col-6 col-md-4 text-center" >
                                    <Link to="/login">

                                        <button type="submit" className="endorseButton">Endorse</button>
                                    </Link>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header">ENDORSEMENT</div>
                <div className="bootomSection">
                    <div className="row  justify-content-around"
                    >

                        <div className="col-lg-3 col-md-6  col-10  ">
                            <div className="cardClass">
                                <div className="row no-gutters justify-content-center ">

                                    <div className="col-4 " >
                                        <div className="initCircle  ">
                                            <div className="Initials" >
                                                AS
                            </div>
                                        </div>
                                    </div>

                                    <div className="col-8 " >
                                        <div className="personInfo">
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


                        <div className="col-lg-3 col-md-6  col-10  align-self-center ">
                            <div className="cardClass">
                                <div className="row no-gutters justify-content-between ">

                                    <div className="col-3  ">
                                        <div className="initCircle1  ">
                                            <div className="Initials" >
                                                AS
                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 ">
                                        <div className="personInfo">
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
                        <div className="col-lg-3 col-md-6   col-10 align-self-center ">
                            <div className="cardClass">
                                <div className="row no-gutters justify-content-between ">

                                    <div className="col-3  ">
                                        <div className="initCircle2  ">
                                            <div className="Initials" >
                                                AS
                            </div>
                                        </div>
                                    </div>

                                    <div className="col-8  ">
                                        <div className="personInfo">

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
                        <div className="col-lg-3 col-md-6  col-10 align-self-center ">
                            <div className="cardClass">
                                <div className="row no-gutters justify-content-between ">
                                    <div className="col-3  ">
                                        <div className="initCircle  ">
                                            <div className="Initials" >
                                                AS
                            </div>
                                        </div>
                                    </div>

                                    <div className="col-8 ">
                                        <div className="personInfo">

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