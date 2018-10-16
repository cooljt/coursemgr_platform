import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import CourseServiceSingleton from "../services/CourseServiceSingleton";
import UserServiceSingleton from "../services/UserServiceSingleton";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
export default class CourseManager extends React.Component {

    constructor() {
        super();
        this.state = {user:{},courses:[]};
        this.deleteCourse = this.deleteCourse.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    findAllCourses() {
        CourseServiceSingleton.findAllCourse()
            .then(courses => this.setState({courses:courses}));
    }

    componentDidMount() {
        this.findAllCourses();
    }

    deleteCourse(id) {
        CourseServiceSingleton.deleteCourse(id)
            .then(courses => this.setState({courses:courses}));
    }

    createCourse(newCourse) {
        CourseServiceSingleton.createCourse(newCourse)
            .then(courses => this.setState({courses:courses}));
    }

    registerUser = (user) => {
        UserServiceSingleton.register(user)
            .then(usr => this.setState({user:usr}));
    };



    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>{this.state.user.username}</h1>
                    <Route path="/" exact={true} render={()=><Login/>}/>
                    <Route path="/register" exact={true} render={()=><Register registerUser={this.registerUser}/>}/>
                    <Route path="/profile" exact={true} render={()=><Profile user={this.state.user}/>}/>
                    <Route path="/courses" render={()=><CourseList courses={this.state.courses} deleteCourse={this.deleteCourse} createCourse={this.createCourse}/>}/>
                    <Route path="/courseEditor/:courseId/edit" render={(props) => <CourseEditor {...props} courses={this.state.courses}/>}/>
                </div>
            </Router>
        );
    }
}