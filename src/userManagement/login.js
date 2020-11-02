import React ,{Component} from 'react';
import './login.css';

export default class Login extends Component {
    render(){
        return(
            <div class="container-fluid">
                 <div class="endorse">i-Endorse</div>
                 <div class="row ">                
                    {/* <div class="col-md-12 "> */}
                        <div class="backImage">
                        <div class=" col-lg-4 col-md-8 offset-md-2  offset-lg-4   "> 
                            <form class="form ">
                            <div class="form-group">
                                    <label for="Subject">Name</label>
                                    <input  type="text" class="form-control form-control-sm" id="subject" aria-describedby="subject" />
                                </div>
                                <div class="form-group" >
                                        <label for="phone">Phone number</label>
                                        <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control form-control-sm" />
                                    </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email ID<span class="optional">(Optional)</span></label>
                                    <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="row justify-content-between">
                                        <div class="col-4" >
                                            <button type="submit" class="cancelButton">Cancel</button>
                                        </div>
                                        <div class="col-4 " >
                                            <button type="submit" class="loginButton">Login</button>
                                         </div>
                                    </div>                              
                            </form>
                        {/* </div> */}
                        </div>
                    </div>                    
                 </div>
            </div>
        );
    }
}
