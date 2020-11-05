import React, { Component } from 'react';
import "./CustomerDashboard.css"
import { withRouter, Link } from 'react-router-dom'
import logo from "../../assets/image.png"
import group1 from "../../assets/dashboard/Icons/Group1.png";
import group2 from "../../assets/dashboard/Icons/Group2.png";
import group4 from "../../assets/dashboard/Icons/Group4.png";
import group5 from "../../assets/dashboard/Icons/Group5.png";
import logoF2 from "../../assets/dashboard/Icons/logoF2.png"
import logoF3 from "../../assets/dashboard/Icons/logoF3.png"
import logoF4 from "../../assets/dashboard/Icons/logoF4.png";
import search from "../../assets/dashboard/Icons/serchIcon.png"




class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid"  >
                <div className="row "  >
                    <div   >
                        <img src={logo} alt="endorse" className="endorse img-fluid" />
                    </div>
                    <div className=" ml-auto" >
                        <button type="submit" className="logout">Logout</button>
                    </div>
                </div>
                <div className="row m-5" >
                    {/* <div className="frame"  style={{backgroundColor:'grey'}}> */}
                    <div className="col-8">

                        <div className="history">History of Endorsement</div>
                        <table className="table table-borderless .w-auto"   >
                            <thead>

                                <tr >
                                    <th >Logo</th>
                                    <th colspan={2} >Company Name</th>
                                    <th >Date</th>
                                    <th >View Company</th>
                                    <th >Link</th>
                                </tr>

                            </thead>
                            <tbody class="gfg">
                                    <tr >
                                        <td >
                                            <img src={group1} alt="logo" className="logoClass"></img>
                                        </td>
                                        <td colspan={2}>Nexus Limited</td>
                                        <td>10/10/20</td>
                                        <td className="colored">View</td>
                                        <td className="colored">Share</td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <img  src={group2} alt="logo" className="logoClass"></img>
                                        </td>
                                        <td colspan={2}>Healthcare Limited</td>
                                        <td>10/10/20</td>
                                        <td className="colored">View</td>
                                        <td className="colored">Share</td>
                                    </tr>

                                    <tr>
                                        {/* <th scope="row">1</th> */}
                                        <td>
                                            <img src={group4} alt="logo" className="logoClass"></img>
                                        </td>
                                        <td colspan={2}>Nexus Limited</td>
                                        <td>10/10/20</td>
                                        <td className="colored">View</td>
                                        <td className="colored">Share</td>
                                    </tr>
                                    <tr>
                                        {/* <th scope="row">1</th> */}
                                        <td>
                                            <img src={group5} alt="logo" className="logoClass"></img>
                                        </td>
                                        <td colspan={2}>Nexus Limited</td>
                                        <td>10/10/20</td>
                                        <td className="colored">View</td>
                                        <td className="colored">Share</td>
                                    </tr>

                                    <tr>
                                        {/* <th scope="row">1</th> */}
                                        <td>
                                            <img src={group1} alt="logo" className="logoClass"></img>
                                        </td>
                                        <td colspan={2}>Nexus Limited</td>
                                        <td>10/10/20</td>
                                        <td className="colored">View</td>
                                        <td className="colored">Share</td>
                                    </tr>

                            </tbody>
                        </table>
     
                    </div>
                    <div className="col-4" >
                        <div class="SearchSection">
                        <div class="input-group ">
            <input class="form-control py-2 border-0 searchBar  " type="search" value="search companies" id="example-search-input"/>
            <span class="input-group-append">
                <div class="input-group-text bg-white border-0 searchBar"><img src={search} class="searchIcon"></img></div>
            </span>
        </div>
                        <div class="Stext">Companies Near You</div>

                        <div className=" align-self-center ">
                            <div className="frameClass card shadow   rounded">
                                <div className="row no-gutters justify-content-between ">
                                    <div className="col-3 justify-content-between ">
                                        <img src={logoF2} className=" flogo  " >
                                        </img>

                                    </div>

                                    <div className="col-9 ">
                                        <div className="personInfo">

                                            <p> Company : <span> Nexus Private Limited
                         </span> </p>
                                            <p> Contact : <span> 9763479678
                         </span> </p>
                                            <p> Email ID : <span> Nexus@gmail.com
                         </span> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="align-self-center ">
                            <div className="frameClass card  p-3 bg-white rounded shadow">
                                <div className="row no-gutters justify-content-between ">

                                    <div className="col-3  ">
                                        <img src={logoF2} className=" flogo  " >
                                        </img>
                                    </div>

                                    <div className="col-9  ">
                                        <div className="personInfo">

                                            <p> Company : <span> Nexus Private Limited
</span> </p>
                                            <p> Contact : <span> 9763479678
</span> </p>
                                            <p> Email ID : <span> Nexus@gmail.com
</span> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=" align-self-center ">
                            <div className="frameClass card  p-3 bg-white rounded shadow">
                                <div className="row no-gutters justify-content-between ">

                                    <div className="col-3  ">
                                        <img src={logoF3} className=" flogo  " >
                                        </img>
                                    </div>
                                    <div className="col-9  ">
                                        <div className="personInfo">

                                            <p> Company : <span> Nexus Private Limited
</span> </p>
                                            <p> Contact : <span> 9763479678
</span> </p>
                                            <p> Email ID : <span> Nexus@gmail.com
</span> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className=" align-self-center ">
                            <div className="frameClass card  p-3 bg-white rounded shadow">
                                <div className="row no-gutters justify-content-center ">

                                    <div className="col-3 " >
                                        <img src={logoF4} className=" flogo  " >
                                        </img>
                                    </div>

                                    <div className="col-9 " >
                                        <div className="personInfo">

                                            <p> Company : <span> Nexus Private Limited
</span> </p>
                                            <p> Contact : <span> 9763479678
</span> </p>
                                            <p> Email ID : <span> Nexus@gmail.com
</span> </p>
                                        </div>
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