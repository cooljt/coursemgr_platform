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
            <div className="container-flush">
                <Navigation logoutUser={this.props.logoutUser} user={this.props.user} createCourse={this.props.createCourse}/>
                <Route path="/courses/courseTable" render={() => <CourseTable user={this.props.user} courses={this.props.courses} deleteCourse={this.props.deleteCourse}/>}/>
                <Route path="/courses/courseGrid" render={() => <CourseGrid user={this.props.user} courses={this.props.courses} deleteCourse={this.props.deleteCourse}/>}/>
            </div>
        );
    }
}