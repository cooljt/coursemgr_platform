import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import CourseService from "../services/CourseService";
export default class CourseManager extends React.Component {

    constructor() {
        super();
        this.state = {courses:[]}
        this.courseService = new CourseService();
        this.deleteCourse = this.deleteCourse.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    findAllCourses() {
        let courses = this.courseService.findAllCourse();
        this.setState({courses:courses});
    }

    componentDidMount() {
        this.findAllCourses();
    }

    deleteCourse(id) {
        this.courseService.deleteCourse(id);
        this.findAllCourses();
    }

    createCourse(newCourse) {
        this.courseService.createCourse(newCourse);
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