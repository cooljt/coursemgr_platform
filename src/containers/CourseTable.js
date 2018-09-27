import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseTitle from '../components/CourseTitle';
export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        var module = this.props.courses.map((course,index) => {
            return <CourseRow title={course.title} id={course.id} key={index} deleteCourse={this.props.deleteCourse}/>
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