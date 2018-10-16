import React from "react";
import "../login.style.client.css";
import {Link} from "react-router-dom"

const Login = () =>
    <div className="login d-flex justify-content-center">
        <div className="container" id="login_section">
            <div className="d-flex flex-row justify-content-center">
                <i className="fa fa-book mb-2 fa-4x"></i>
            </div>
            <h1 className="text-center">Sign In</h1>
            <form>
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
                        <button className="btn btn-primary btn-block">Sign In</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6"><a href="#" className="float-left">Forget Password?</a></div>
                    <div className="col-6">
                        <Link to="/register">
                            <a href="#" className="float-right">Sign Up</a>
                        </Link>
                        </div>
                </div>
            </form>
        </div>
    </div>


export default Login;