import React from "react";
import {Link} from "react-router-dom";
import "../profile.style.client.css";

const Profile = () => 
    <div className="profile d-flex justify-content-center">
        <div className="container" id="profile_section">
            <div className="d-flex flex-row justify-content-center">
                <i className="fa fa-users mb-2 fa-4x"></i>
            </div>
            <h1 className="text-center">Profile</h1>
            <form>
                <div className="form-group row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <div className="alert alert-success" role="alert">
                            Profile successfully saved!
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="profile-username" className="col-sm-2">Username</label>
                    <div className="col-sm-10">
                        <input type="text"
                               placeholder="Ti"
                               id="profile-username"
                               className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="profile_phone" className="col-sm-2">Phone</label>
                    <div className="col-sm-10">
                        <input type="number"
                               placeholder="(111)1111111"
                               id="profile_phone"
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="profile_email" className="col-sm-2">Phone</label>
                    <div className="col-sm-10">
                        <input type="email"
                               placeholder="abv@gmail.com"
                               id="profile_email"
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="profile_role" className="col-sm-2">Role</label>
                    <div className="col-sm-10">
                        <select name="role" id="profile_role" className="form-control">
                            <option value="FACUTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="profile_date" className="col-sm-2">Date of Birth</label>
                    <div className="col-sm-10">
                        <input type="date"
                               placeholder="mm/dd/yy"
                               id="profile_date"
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <button className="btn btn-success btn-block">Update</button>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <a href="#" className="btn btn-danger btn-block">Logout</a>
                    </div>
                </div>
            </form>
        </div>
    </div>;
export default Profile;