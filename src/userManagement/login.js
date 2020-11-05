import React, { Component } from 'react';
import './login.css';
import logo from "../assets/image.png";

export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid" >
                <div className="row " >
                    <img src={logo} alt="endorse" className="endorse img-fluid" />
                </div>
                <div class="row">
                    <div className="backImage   ">
                        <div className="col-12 col-lg-4 col-md-8 offset-md-2 offset-lg-4">
                            <form className="form ">
                                <div className="form-group">
                                    <label for="Subject">Name</label>
                                    <input type="text" className="form-control form-control-sm" id="subject" aria-describedby="subject" />
                                </div>
                                <div className="form-group" >
                                    <label for="phone">Phone number</label>
                                    <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control form-control-sm" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email ID<span className="optional">(Optional)</span></label>
                                    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <button type="submit" className="cancelButton">Cancel</button>
                                    </div>
                                    <div className="col-6 text-right" >
                                        <button type="submit" className="btn loginButton">Endorse</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
         </div>
        );
    }
}
