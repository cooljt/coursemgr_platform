import React from 'react';
import {Link} from 'react-router-dom';
import Hidden from "@material-ui/core/Hidden";

export default class CourseTitle extends React.Component {
    render () {
        return (
            <div className="container-flush border-bottom">
                <div className="row bg-light sticky-top home_vertical_center" id="status_bar">
                    <div className="col-sm-6 col-6 home_vertical_center pl-5">
                        <label>Title</label>
                    </div>
                    <div className="col-sm-2 col-2 home_vertical_center">
                        <label className="small_font_size">Owner</label>
                    </div>
                    <Hidden xsDown>
                        <div className="col-sm-2 home_vertical_center">
                            <label className="small_font_size">Last modified</label>
                        </div>
                    </Hidden>
                    <div className="col-sm-1 col-2 home_vertical_center">
                        <Link to='/courses/courseGrid'>
                            <button className="btn btn_transparent">
                                <i className="fa fa-th-large"></i>
                            </button>
                        </Link>
                    </div>
                    <div className="col-sm-1 col-2 home_vertical_center">
                        <button className="btn btn_transparent">
                            <i className="fa fa-sort-alpha-asc home_vertical_center"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}