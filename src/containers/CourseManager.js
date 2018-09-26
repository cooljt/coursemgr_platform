import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
export default class CourseManager extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Route path="/courses" component={CourseList}/>
                    <Route path="/courseEditor/:course_id" component={CourseEditor}/>
                </div>
            </Router>
        );
    }
}