import React from 'react';
import CourseTable from './CourseTable';
import Navigation from '../components/Navigation';
import CourseTitle from '../components/CourseTitle';
export default class CourseManager extends React.Component {
    render() {
        return (
                <div>
                    <Navigation/>
                    <CourseTitle/>
                    <CourseTable/>
                    <button className="btn btn_transparent float-right icon_low_right">
                        <i className="fa fa-plus-circle fa-4x red "></i>
                    </button>
                </div>
        );
    }
}