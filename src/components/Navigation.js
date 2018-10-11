import React from 'react';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
        this.state = {title: ""}

    }
    inputChanged(event) {
        this.setState({title:event.target.value});
    }

    createNewCourse() {
         let newCourse = {
            "id":(new Date()).getTime().toString(),
            "title":this.state.title,
            "modules":[]
        }
        this.props.createCourse(newCourse);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                    <div className="row" id="nav_panel_upper">
                        <div className="col-sm-1 home_center">
                            <button className="btn btn-outline-primary" type="button">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="col-sm-2 home_center" id="title">
                            <label>Course Manager</label>
                        </div>
                        <div className="col-sm-8 home_center">
                            <input onChange={this.inputChanged} type="text" placeholder="New Course" className="form-control" />
                        </div>
                        <div className="col-sm-1 home_center">
                            <button onClick={() => this.createNewCourse()} className="btn btn_transparent">
                                <i className="fa fa-plus-circle fa-2x red"></i>
                            </button>
                        </div>
                    </div>
            </nav>
        );
    }
}