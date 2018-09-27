import React from 'react';
import CourseTable from './CourseTable';
import Navigation from '../components/Navigation';
import CourseService from "../services/CourseService";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CourseGrid from './CourseGrid';
export default class CourseList extends React.Component {

    constructor() {
        super();
        this.state = {courses:[]}
        this.courseService = new CourseService();
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
                <Router>
                    <div>
                        <Route path="/courses/courseTable" render={() => <CourseTable courses={this.state.courses} deleteCourse={this.deleteCourse}/>}/>
                        <Route path="/courses/courseGrid" render={() => <CourseGrid courses={this.state.courses}/>}/>
                    </div>
                </Router>
            </div>
        );
    }
}