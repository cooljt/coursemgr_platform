import React from 'react';
import {Collapse} from "react-collapse";
import history from "./history";

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
        this.state = {title: "",isOpened:false}

    }
    inputChanged(event) {
        this.setState({title:event.target.value});
    }

    createNewCourse() {
         let newCourse = {
            "id":(new Date()).getTime(),
             "author":this.props.user.username,
            "title":this.state.title,
            "modules":[]
        };
        this.props.createCourse(newCourse);
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                    <div className="row" id="nav_panel_upper">
                        <div className="col-sm-1 home_center">
                            <button className="btn btn-primary" type="button" onClick={()=>{
                                this.state.isOpened?this.setState({isOpened:false}):this.setState({isOpened:true});
                            }}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-sm-2 home_center" id="title">
                            <label>Course Manager</label>
                        </div>
                        <div className="col-sm-8 home_center">
                            <input onChange={this.inputChanged} type="text" placeholder="New Course" className="form-control" />
                        </div>
                        <div className="col-sm-1 home_center">
                            <button onClick={() => this.createNewCourse()} className="btn btn-primary">
                                <i className="fa fa-plus-circle fa-2x red"></i>
                            </button>
                        </div>
                    </div>
                </nav>
                <Collapse className="container-fluid" isOpened={this.state.isOpened}>
                    <div className="row bg-primary">
                        <button className="btn btn-primary btn-block" onClick={()=>{
                            this.props.logoutUser();
                            history.push("/");
                        }}>
                            Logout
                        </button>
                    </div>
                    <div className="row btn-primary">
                        <button className="btn btn-primary btn-block" onClick={()=>history.push("/profile")}>Profile</button>
                    </div>
                </Collapse>
            </div>
        );
    }
}