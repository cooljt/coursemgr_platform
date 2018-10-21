import React from "react";
import "../login.style.client.css";
import {Link} from "react-router-dom"
import history from "./history";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
                {/*<BookIcon fontSize="large"/>*/}
            </div>
            {/*<h1 className="text-center">Sign In</h1>*/}
            <div className="alert alert-danger d-none" role="alert" id="alert">
                Username or Password is wrong! Please try again!
            </div>
            <div>
                <div className="form-group row">
                    <div className="col-sm">
                        <TextField type="text"
                                   label="Username"
                               id="login-username"
                                className="w-100"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <TextField type="password"
                               placeholder="Password"
                                   label="Password"
                               id="login-password"
                                   className="w-100"
                                />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <Button variant="contained" color="primary" className="w-100" onClick={()=>{
                            let username = document.getElementById("login-username").value.trim();
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
                        }}>Sign In</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/">
                            <span className="float-left">Forget Password?</span>
                        </Link>
                    </div>
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