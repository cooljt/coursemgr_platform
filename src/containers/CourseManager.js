import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import CourseServiceSingleton from "../services/CourseServiceSingleton";
export default class CourseManager extends React.Component {

    constructor() {
        super();
        this.state = {courses:[]};
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
        CourseServiceSingleton.deleteCourse(id);
        this.findAllCourses();
    }

    createCourse(newCourse) {
        CourseServiceSingleton.createCourse(newCourse);
        this.findAllCourses();
    }



    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Route path="/courses" render={()=><CourseList courses={this.state.courses} deleteCourse={this.deleteCourse} createCourse={this.createCourse}/>}/>
                    <Route path="/courseEditor/:courseId/edit" render={(props) => <CourseEditor {...props} courses={this.state.courses}/>}/>
                </div>
            </Router>
        );
    }
}