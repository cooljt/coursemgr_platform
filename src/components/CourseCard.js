import React from 'react';
import {Link} from 'react-router-dom';
import Hidden from "@material-ui/core/Hidden";

export default class CourseCard extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="card in_block col-12 col-sm-4 col-md-2">
                    <img className="card-img-top mt-2"
                        src="https://picsum.photos/300/200"/>
                    <div className="card-body">
                        <Link to={`/courseEditor/${this.props.id}/edit`}>
                            <p className="card-title">{this.props.title}</p>
                        </Link>
                        <div className="row">
                            <div className="col-sm-8 col-4"><label>{this.props.user}</label></div>
                            <Hidden smUp>
                                <div className="col-4"><label>{new Date(this.props.createTime).toLocaleDateString("en-US")}</label></div>
                            </Hidden>
                            <div className="col-sm-2 col-4"><i onClick={() => this.props.deleteCourse(this.props.id)} className="fa fa-times"></i></div>
                        </div>
                    </div>
                </div>
        );
    }
}
