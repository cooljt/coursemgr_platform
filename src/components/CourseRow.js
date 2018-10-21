import React from 'react';
import {Link} from 'react-router-dom';
import Hidden from "@material-ui/core/Hidden";

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="row pt-3">
                    <div className="col-6 col-sm-6">
                        <Link to={`/courseEditor/${this.props.id}/edit`}>
                            <p>{this.props.title}</p>
                        </Link>
                    </div>
                    <div className="col-4 col-sm-2"><label>{this.props.user}</label></div>
                    <Hidden xsDown>
                        <div className="col-sm-2"><label>{new Date(this.props.createTime).toLocaleDateString("en-US")}</label></div>
                    </Hidden>
                    <div className="col-2 col-sm-2"><i
                        onClick={() => this.props.deleteCourse(this.props.id)}
                        className="fa fa-times"></i></div>
                </div>
            </li>
        );
    }
}



