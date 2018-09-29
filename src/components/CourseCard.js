import React from 'react';
import {Link} from 'react-router-dom';

export default class CourseCard extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="card in_block">
                    <img className="card-img-top"
                        src="https://picsum.photos/300/200"/>
                    <div className="card-body">
                        <Link to={`/courseEditor/${this.props.id}/edit`}>
                            <p className="card-title">{this.props.title}</p>
                        </Link>
                        <div className="row">
                            <div className="col-3">
                                <Link to={`/courseEditor/${this.props.id}/edit`}>
                                    <i className="fa fa-sticky-note"></i>
                                </Link>
                            </div>
                            <div className="col-3"><label>me</label></div>
                            <div className="col-3"><label>6:45PM</label></div>
                            <div className="col-3"><i onClick={() => this.props.deleteCourse(this.props.id)} className="fa fa-times"></i></div>
                        </div>
                    </div>
                </div>
        );
    }
}
