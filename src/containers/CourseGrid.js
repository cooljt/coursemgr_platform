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
            return <CourseCard title={course.title} key={index} id={course.id}/>
        });
        return courses;
    }

    render() {
        return (
            <div className="container-fluid">
                <CourseGridTitle/>
                <div className="card-deck">
                    {this.renderList()}
                </div>
            </div>
        );
    }

}