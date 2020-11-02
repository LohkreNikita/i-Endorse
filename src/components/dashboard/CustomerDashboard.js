import React ,{Component} from 'react';
import "./CustomerDashboard.css"
import { withRouter,Link } from 'react-router-dom'



 class Dashboard extends Component{
    render(){
        return(
            <div class="container"  >
                <div class="row justify-content-between">
                    <div class="col-md-4 col-8  align-self-start ">
                        <div class="endorse">i-ENDORSE</div></div>
                    <div class="col-md-2  col-4 ml-md-auto align-self-end" >
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
                           {/* <div class="sqaure"> */}
                               <div class="FivoLogo"></div>
                           {/* </div> */}
                           </div>
                           
                        </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-12 col-12 align-items-center" >
                    <div class=" Scrach" >

                        <div class=" col-5 QR align-self-center offset-3" > 
                        {/* <div class="col-md-5 offset-md-3 col-6 " > */}
                            <Link to="/login">
                            
                    <button type="submit" class="endorseButton">Endorse</button>
                    </Link>
                    {/* </div> */}
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div class="header">ENDORSEMENT</div>
            <div class="bootomSection">
            <div class="row justify-content-center">

                <div class="col-lg-3 col-md-6  col-10  ">
                    <div class="cardClass">
                    <div class="row no-gutters justify-content-between ">

                    <div class="col-3  c">
                        <div class="initCircle  ">
                        <div class="Initials" >
                            AS
                            </div>
                        </div>
                         </div>

                    <div class="col-8  ">
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
                    <div class="cardClass1">
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
                <div class="col-lg-3 col-md-6   col-10 align-self-center ">
                    <div class="cardClass2">
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
            </div>
            </div>
            </div>
        );
    }
}

export default withRouter(Dashboard);