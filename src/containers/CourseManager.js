import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from "../components/history";
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import CourseServiceSingleton from "../services/CourseServiceSingleton";
import UserServiceSingleton from "../services/UserServiceSingleton";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
export default class CourseManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user:{},courses:[]};
        this.deleteCourse = this.deleteCourse.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    findAllCourses(username) {
        CourseServiceSingleton.findAllCourse(username)
            .then(courses => this.setState({courses:courses}));
    }

    /*componentDidMount() {
        this.findAllCourses();
    }*/

    deleteCourse(id) {
        CourseServiceSingleton.deleteCourse(id)
            .then(courses => this.setState({courses:courses}));
    }

    createCourse(newCourse) {
        CourseServiceSingleton.createCourse(newCourse)
            .then(courses => this.setState({courses:courses}));
    }

    registerUser = (user) => {
        return UserServiceSingleton.register(user)
            .then(usr => {
                if (usr.id !== -10) {
                    this.setState({user:usr});
                    this.findAllCourses(this.state.user.username);
                    return true;
                }
                else {
                    return false;
                }
            });
    };

    loginUser = (user) => {
        return UserServiceSingleton.login(user)
            .then(usr => {
                if (usr.id !== -10 ) {
                    this.setState({user:usr});
                    this.findAllCourses(this.state.user.username);
                    return true;
                }
                else {
                    return false;
                }
            });
    };

    updateProfile = (user) => {
        return UserServiceSingleton.updateProfile(user)
            .then(usr => {
                this.setState({user:usr});
                return true;
            })
    };

    logoutUser = () => {
        UserServiceSingleton.logoutUser();
        this.setState({user:{},courses:[]});
    };

    render() {
        return (
            <Router history={history}>
                <div className="container-flush">
                    <Route path="/" exact={true} render={()=><Login loginUser={this.loginUser}/>}/>
                    <Route path="/register" exact={true} render={()=><Register registerUser={this.registerUser}/>}/>
                    <Route path="/profile" exact={true} render={()=><Profile user={this.state.user} updateProfile={this.updateProfile}/>}/>
                    <Route path="/courses" render={()=><CourseList logoutUser={this.logoutUser} user={this.state.user} courses={this.state.courses} deleteCourse={this.deleteCourse} createCourse={this.createCourse}/>}/>
                    <Route path="/courseEditor/:courseId/edit" render={(props) => <CourseEditor {...props} courses={this.state.courses}/>}/>
                </div>
            </Router>
        );
    }
}