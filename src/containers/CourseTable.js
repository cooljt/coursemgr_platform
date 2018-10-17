import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseTitle from '../components/CourseTitle';
import {Link} from "react-router-dom";
export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        let module = this.props.courses.map((course,index) => {
            return <CourseRow user={this.props.user.username} createTime={course.created} title={course.title} id={course.id} key={index} deleteCourse={this.props.deleteCourse}/>
        });
        return module;
    }

    render() {
        return (
            <div className="container-fluid">
                <CourseTitle/>
                <ul className="list-group">
                    {
                        this.renderList()
                    }
                </ul>
            </div>
        );
    }
}