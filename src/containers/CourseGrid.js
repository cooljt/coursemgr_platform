import React from 'react';
import CourseCard from '../components/CourseCard'
import CourseGridTitle from '../components/CourseGridTitle';
import CourseTitle from "../components/CourseTitle";


export default class CourseGrid extends React.Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        var courses = this.props.courses.map((course,index) => {
            return <CourseCard title={course.title} user={this.props.user.username} createTime={course.created} key={index} id={course.id} deleteCourse={this.props.deleteCourse}/>
        });
        return courses;
    }

    render() {
        return (
            <div className="container-fluid">
                <CourseGridTitle/>
                <div className>
                    {this.renderList()}
                </div>
            </div>
        );
    }

}