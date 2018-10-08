import React from "react";

const LinkWidget = ({widget}) =>
    <div className="container border d-flex flex-column justify-content-around widget_height mt-2">
        <div className="row">
            <div className="col-7">
                <h3 className="text-justify">Link widget</h3>
            </div>
            <div className="col-5 d-flex justify-content-end">
                <button className="btn btn-warning">
                    <i className="fa fa-arrow-up"></i>
                </button>
                <button className="btn btn-warning">
                    <i className="fa fa-arrow-down"></i>
                </button>
                <select className="form-control w-auto" name="linktype" id="link">
                    <option value="link">Link</option>
                    <option value="heading">Heading</option>
                    <option value="list">List</option>
                    <option value="image">Image</option>
                    <option value="image">Image</option>
                </select>
                <button className="btn btn-danger">
                    <i className="fa fa-times"></i>
                </button>
            </div>
        </div>
        <div className="row pl-4 pr-4">
            <input type="text" className="form-control" placeholder={widget.href} />
        </div>
        <div className="row pl-4 pr-4">
            <input type="text" className="form-control" placeholder={widget.title} />
        </div>
        <div className="row pl-4 pr-4">
            <input type="text" className="form-control" placeholder="Widget name" />
        </div>
        <div className="row d-flex flex-column pl-4 pr-4">
            <h3>Preview</h3>
            <a href={widget.title}>{widget.title}</a>
        </div>
    </div>

export default LinkWidget;