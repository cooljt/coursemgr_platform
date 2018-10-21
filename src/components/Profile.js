import React from "react";
import {Link} from "react-router-dom";
import "../profile.style.client.css";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLable from  "@material-ui/core/InputLabel";


const Profile = ({user,updateProfile}) =>
    <div className="profile d-flex justify-content-center">
        <div className="container" id="profile_section">
            <div className="d-flex flex-row mb-5 justify-content-center">
                <i className="fa fa-user-circle fa-4x"></i>
            </div>
            <div>
                <div className="form-group row">
                    <div className="alert alert-success d-none w-100" role="alert" id="alert">
                            Profile successfully saved!
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm">
                        <TextField type="text"
                                   label="Username"
                                   variant="filled"
                                   value={user.username}
                                   id="profile-username"
                                   readOnly={true}
                                   className="w-100" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <TextField type="number"
                                   label="Phone"
                                   variant="filled"
                                   defaultValue={user.phone}
                                   id="profile_phone"
                                   className="w-100" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <TextField type="email"
                                   label="Email"
                                   variant="filled"
                                   defaultValue={user.email}
                                   id="profile_email"
                                   className="w-100" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm">
                        <TextField type="date"
                                   variant="filled"
                                   defaultValue={user.birth}
                                   id="profile_date"
                                   className="w-100" />
                    </div>
                </div>


                <div className="form-group row">
                    <FormControl className="w-100">
                        <InputLable>Role</InputLable>
                        <Select native value={user.userType} variant="outlined" id="profile_role" className="w-100">
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                            <option value="ADMIN">Admin</option>
                        </Select>
                    </FormControl>

                </div>

                <div className="form-group row">
                        <Button className="w-100" variant="contained" color="primary" onClick={()=>{
                            let phone = document.getElementById("profile_phone").value;
                            let email = document.getElementById("profile_email").value;
                            let birth = document.getElementById("profile_date").value;
                            user["phone"] = phone;
                            user["email"] = email;
                            user["birth"] = birth;
                            updateProfile(user).then(result => {
                               if (result) {
                                   document.getElementById("alert").className = "alert alert-success w-100";
                               }
                            });
                        }}>Update</Button>
                </div>
                <div className="form-group row">
                    <Link to="/courses/courseTable" className="w-100">
                        <Button className="w-100" variant="contained" color="secondary">Back</Button>
                    </Link>

                </div>
            </div>
        </div>
    </div>;
export default Profile;