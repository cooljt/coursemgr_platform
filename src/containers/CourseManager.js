import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import history from "../components/history";
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import CourseServiceSingleton from "../services/CourseServiceSingleton";
import UserServiceSingleton from "../services/UserServiceSingleton";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import Paper from "@material-ui/core/Paper";
import ChatBot from "../components/ChatBot";
export default class CourseManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user:{},courses:[],login:false};
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
                    this.setState({user:usr,login:true});
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
                        <Route path="/ChatBot" exact={true} render={()=><ChatBot/>}/>
                        <Route path="/" exact={true} render={()=><Login loginUser={this.loginUser}/>}/>
                        <Route path="/register" exact={true} render={()=><Register registerUser={this.registerUser}/>}/>
                        <Route path="/profile" exact={true} render={()=>{
                            if (this.state.login) {
                                return <Profile user={this.state.user} updateProfile={this.updateProfile}/>
                            }
                            else {
                                return  <div className="d-flex justify-content-center">
                                    <Paper className="text-center w-50 mt-5 pt-3 pb-3" elevation="20"><p>You must <Link to="/">login</Link> first!</p></Paper>
                                </div>
                            }
                        }}/>
                        <Route path="/courses" render={()=>{
                            if (this.state.login) {
                                return <CourseList logoutUser={this.logoutUser} user={this.state.user} courses={this.state.courses} deleteCourse={this.deleteCourse} createCourse={this.createCourse}/>
                            }
                            else {
                                return <div className="d-flex justify-content-center">
                                    <Paper className="text-center w-50 mt-5 pt-3" elevation="20"><p>You must <Link to="/">login</Link> first!</p></Paper>
                                </div>
                            }
                        }
                        }/>
                        <Route path="/courseEditor/:courseId/edit" render={(props) => {
                            if (this.state.login) {
                                return <CourseEditor {...props} courses={this.state.courses}/>
                            }
                            else {
                                return <div className="d-flex justify-content-center">
                                    <Paper className="text-center w-50 mt-5 pt-3" elevation="20"><p>You must <Link to="/">login</Link> first!</p></Paper>
                                </div>


                            }
                        }}/>
                </div>
            </Router>
        )


    }
}