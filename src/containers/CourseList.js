import React from 'react';
import CourseTable from './CourseTable';
import Navigation from '../components/Navigation';
import CourseTitle from '../components/CourseTitle';
import CourseService from "../services/CourseService";
import {BrowserRouter as Router, Route} from 'react-router-dom';
export default class CourseList extends React.Component {

    constructor() {
        super();
        this.state = {courses:[]}
        this.courseService = CourseService.instance;
        this.deleteCourse = this.deleteCourse.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }

    findAllCourses() {
        var courses = this.courseService.findAllCourse();
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
            <div>
                <Navigation createCourse={this.createCourse}/>
                <CourseTitle/>
                <Router>
                    <div>
                        <Route path="/courses" render={()=><CourseTable courses={this.state.courses} deleteCourse={this.deleteCourse}/>}/>
                        <Route path="/courses/courseGrid" render={()=><h1>Hello</h1>}/>
                    </div>
                </Router>
                <button className="btn btn_transparent float-right icon_low_right">
                    <i className="fa fa-plus-circle fa-4x red "></i>
                </button>
            </div>
        );
    }
}