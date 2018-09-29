import React from 'react';
import {Link} from 'react-router-dom';

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-1">
                        <Link to={`/courseEditor/${this.props.id}/edit`}>
                            <i className="fa fa-sticky-note"></i>
                        </Link>
                    </div>
                    <div className="col-sm-6">
                        <Link to={`/courseEditor/${this.props.id}/edit`}>
                            <p>{this.props.title}</p>
                        </Link>
                    </div>
                    <div className="col-sm-2"><label>me</label></div>
                    <div className="col-sm-2"><label>6:45PM</label></div>
                    <div className="col-sm-1"><i
                        onClick={() => this.props.deleteCourse(this.props.id)}
                        className="fa fa-times"></i></div>
                </div>
            </li>
        );
    }
}



