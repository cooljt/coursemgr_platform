import React from "react";
import "../register.style.client.css";
import {Link} from "react-router-dom";
const Register = () => 
    <div className="register d-flex justify-content-center">
        <div className="container" id="register_section">
            <div className="d-flex flex-row justify-content-center">
                <i className="fa fa-book mb-2 fa-4x"></i>
            </div>
            <h1 className="text-center">Register</h1>
            <form>
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
                        <a href="#" className="btn btn-primary btn-block">Sign Up</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/">
                            <a href="#" className="float-left" >Cancel</a>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to="/">
                            <a href="#" className="float-right">Login Up</a>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </div>

export default Register;