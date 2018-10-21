import React from "react";
import "../login.style.client.css";
import {Link} from "react-router-dom"
import history from "./history";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Login = ({loginUser}) =>
    <div className="login d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-center mb-5">
            <Paper elevation="10" className="w-50 p-5 text-center">
                <Typography variant="h4">
                    Course Management Platform
                </Typography>
            </Paper>
        </div>
        <div className="container" id="login_section">
            <div className="d-flex flex-row justify-content-center">
                <i className="fa fa-book mb-2 fa-4x"></i>
            </div>
            <h1 className="text-center">Sign In</h1>
            <div className="alert alert-danger d-none" role="alert" id="alert">
                Username or Password is wrong! Please try again!
            </div>
            <div>
                <div className="form-group row">
                    <div className="col-sm">
                        <input type="text"
                               placeholder="Username"
                               id="login-username"
                               className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <input type="password"
                               placeholder="Password"
                               id="login-password"
                               className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <button className="btn btn-primary btn-block" onClick={()=>{
                            let username = document.getElementById("login-username").value;
                            let password = document.getElementById("login-password").value;
                            let user = {
                                "username":username,
                                "password":password
                            };
                            loginUser(user).then(result => {
                                if(result){
                                    history.push("/courses/courseTable");
                                }
                                else {
                                    document.getElementById("alert").className = "alert alert-danger";
                                }
                            })
                        }}>Sign In</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6"><a href="#" className="float-left">Forget Password?</a></div>
                    <div className="col-6">
                        <Link to="/register">
                            <span className="float-right">Register Account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;

export default Login;