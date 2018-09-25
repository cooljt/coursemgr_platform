import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService'
export default class CourseTable extends React.Component {

    constructor() {
        super();
        this.state = {courses:[]}
        this.courseService = CourseService.instance;
    }


    findAllCourses() {
        var courses = this.courseService.findAllCourse();
        this.setState({courses:courses});
    }

    componentDidMount() {
        this.findAllCourses();
    }

    renderList() {
        var module = this.state.courses.map((course,index) => {
            return <CourseRow title={course.title} key={index}/>
        });
        return module;
    }

    render() {
        return (
            <div className="container">
                <ul className="list-group">
                    {
                        this.renderList()
                    }
                </ul>
            </div>
        );
    }
}