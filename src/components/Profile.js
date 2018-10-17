import React from "react";
import {Link} from "react-router-dom";
import "../profile.style.client.css";

const Profile = ({user,updateProfile}) =>
    <div className="profile d-flex justify-content-center">
        <div className="container" id="profile_section">
            <div className="d-flex flex-row justify-content-center">
                <i className="fa fa-users mb-2 fa-4x"></i>
            </div>
            <h1 className="text-center">Profile</h1>
            <div>
                <div className="form-group row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <div className="alert alert-success d-none" role="alert" id="alert">
                            Profile successfully saved!
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="profile-username" className="col-sm-2">Username</label>
                    <div className="col-sm-10">
                        <input type="text"
                               placeholder="Username"
                               value={user.username}
                               id="profile-username"
                               readOnly={true}
                               className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="profile_phone" className="col-sm-2">Phone</label>
                    <div className="col-sm-10">
                        <input type="number"
                               placeholder="(111)1111111"
                               defaultValue={user.phone}
                               id="profile_phone"
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="profile_email" className="col-sm-2">Email</label>
                    <div className="col-sm-10">
                        <input type="email"
                               placeholder="abc@gmail.com"
                               defaultValue={user.email}
                               id="profile_email"
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="profile_role" className="col-sm-2">Role</label>
                    <div className="col-sm-10">
                        <select name="role" id="profile_role" className="form-control">
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="profile_date" className="col-sm-2">Date of Birth</label>
                    <div className="col-sm-10">
                        <input type="date"
                               placeholder="mm/dd/yy"
                               defaultValue={user.birth}
                               id="profile_date"
                               className="form-control"/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <button className="btn btn-success btn-block" onClick={()=>{
                            let phone = document.getElementById("profile_phone").value;
                            let email = document.getElementById("profile_email").value;
                            let birth = document.getElementById("profile_date").value;
                            user["phone"] = phone;
                            user["email"] = email;
                            user["birth"] = birth;
                            updateProfile(user).then(result => {
                               if (result) {
                                   document.getElementById("alert").className = "alert alert-success";
                               }
                            });
                        }}>Update</button>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10">
                        <a href="#" className="btn btn-danger btn-block">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>;
export default Profile;