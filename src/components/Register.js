import React from "react";
import "../register.style.client.css";
import {Link} from "react-router-dom";
import history from "./history";


const Register = ({registerUser}) =>
    <div className="register d-flex justify-content-center">
        <div className="container" id="register_section">
            <div className="d-flex flex-row justify-content-center">
                <i className="fa fa-book mb-2 fa-4x"></i>
            </div>
            <h1 className="text-center">Register</h1>
            <div className="alert alert-danger d-none" role="alert" id="alert">
                Username is existed! Please choose another username!
            </div>
            <div>
                <div className="form-group row">
                    <div className="col-sm">
                        <input type="text"
                               placeholder="Username"
                               id="register-username"
                               className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <input type="password"
                               placeholder="Password"
                               id="register-password"
                               className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <input type="password"
                               placeholder="Verify Password"
                               id="verify-password"
                               className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <button className="btn btn-primary btn-block" onClick={
                            () => {
                                let password = document.getElementById("register-password").value;
                                let verifyPassword = document.getElementById("verify-password").value;
                                if (password !== verifyPassword) {
                                    alert("Input passwords do not match please re-enter!");
                                }
                                else{
                                    let username = document.getElementById("register-username").value;
                                    let user = {
                                        "username":username,
                                        "password":password
                                    };
                                    registerUser(user).then(result => {
                                        if (result) {
                                            history.push("/profile");
                                        }
                                        else {
                                            document.getElementById("alert").className = "alert alert-danger";
                                        }
                                    });
                                }
                            }
                        }>Sign Up</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/">
                            <span className="float-left" >Cancel</span>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to="/">
                            <span className="float-right">Login Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Register;