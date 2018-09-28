import React from 'react';
import CourseTable from './CourseTable';
import Navigation from '../components/Navigation';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CourseGrid from './CourseGrid';
export default class CourseList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navigation createCourse={this.props.createCourse}/>
                <Route path="/courses/courseTable" render={() => <CourseTable courses={this.props.courses} deleteCourse={this.props.deleteCourse}/>}/>
                <Route path="/courses/courseGrid" render={() => <CourseGrid courses={this.props.courses} deleteCourse={this.props.deleteCourse}/>}/>
            </div>
        );
    }
}