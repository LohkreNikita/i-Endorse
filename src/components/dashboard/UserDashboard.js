import React ,{Component} from 'react';
import "./CustomerDashboard.css"
import { withRouter,Link } from 'react-router-dom'


 class Dashboard extends Component{
    render(){
        return(
            <div class="container"  >
                <div class="row justify-content-between">
                    <div class="col-md-4  align-self-start ">
                        <div class="endorse">i-ENDORSE</div></div>
                    <div class="col-md-2  col-4 ml-md-auto align-self-end" >
                        <button type="submit" class="logout">Logout</button>
                    </div>
                </div>
                <div class="header">DASHBOARD</div>
            <div>
                <div class="row ">
                    <div class="col-md-8   justify-content-around ">
                        <div class="FivoTech">
                        <div class='row '>
                           <div class="col-sm-7">

                                    <table class="table borderless">
                                     
                                        <tbody>
                                            <tr>
                                                <td class="Name"  >Name of Company:</td>
                                                <td class="Details">FivoTech</td>
                                            </tr>
                                            <tr>
                                                <td class="Name"  >Phone No:</td>

                                                <td class="Details">9762837465</td>
                                            </tr>
                                            <tr>
                                                <td class="Name" >Address:</td>
                                                <td class="Details">123, Main Street, New York, NY 2020 </td>
                                            </tr>
                                            <tr>
                                                <td class="Name" >Email ID:</td>
                                                <td class="Details">FivoTechlip@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td class="Name" >Category:</td>
                                                <td class="Details">Finance</td>
                                            </tr>

                                        </tbody>
                                    </table>
                           </div>
                           <div class="col-sm-4  ">
                           <div class="sqaure">
                               <div class="FivoLogo"></div>
                           </div>
                           </div>
                           
                        </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4  ">
                        <div class=" Scrach">
                        <div class="QR"> </div>
                        <div class="col-md-5 offset-md-3 col-6 align-items-center" >
                            <Link to="/login">
                            
                    <button type="submit" class="endorseButton">Download</button>
                    </Link>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div class="header">ENDORSEMENT</div>
            <div class="bootomSection">
            <div class="row ">

                <div class="col-md-3  col-6 ">
                    <div class="cardClass">
                    <div class="row no-gutters justify-content-between ">

                    <div class="col-3  ">
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


                <div class="col-md-3  col-6  align-self-center ">
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
                <div class="col-md-3  col-8 ">
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
                <div class="col-md-3  col-8 ">
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