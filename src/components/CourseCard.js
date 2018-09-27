import React from 'react';

export default class CourseCard extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="card card_width">
                    <img className="card-img-top"
                        src="https://picsum.photos/300/200"/>
                    <div className="card-body">
                        <p className="card-title">{this.props.title}</p>
                        <div className="row">
                            <div className="col-3"><i className="fa fa-sticky-note"></i></div>
                            <div className="col-3"><label>me</label></div>
                            <div className="col-3"><label>6:45PM</label></div>
                            <div className="col-3"><i className="fa fa-times"></i></div>
                        </div>
                    </div>
                </div>
        );
    }
}
