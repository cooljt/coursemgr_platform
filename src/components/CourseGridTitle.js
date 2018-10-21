import React from 'react';
import {Link} from 'react-router-dom';

export default class CourseGridTitle extends React.Component {
    render () {
        return (
            <div className="container-flush border-bottom">
                <div className="row bg-light sticky-top home_vertical_center" id="status_bar">
                    <div className="col-8 home_vertical_center extra_padding_left">
                        <label>Recent Document</label>
                    </div>
                    <div className="col-2 home_vertical_center">
                        <Link to="/courses/courseTable">
                            <button className="btn btn_transparent">
                                <i className="fa fa-list-ul"></i>
                            </button>
                        </Link>
                    </div>
                    <div className="col-2 home_vertical_center">
                        <button className="btn btn_transparent">
                            <i className="fa fa-sort-alpha-asc home_vertical_center"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}