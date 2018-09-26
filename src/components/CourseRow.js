import React from 'react';

export default class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                    <div className="row">
                        <div onClick={this.show} className="col-sm-1"><i className="fa fa-sticky-note"></i></div>
                        <div className="col-sm-6"><p>{this.props.title}</p></div>
                        <div className="col-sm-2"><label>me</label></div>
                        <div className="col-sm-2"><label>6:45PM</label></div>
                        <div className="col-sm-1"><i onClick={() => this.props.deleteCourse(this.props.id)} className="fa fa-times"></i></div>
                    </div>
            </li>
        );
    }
}