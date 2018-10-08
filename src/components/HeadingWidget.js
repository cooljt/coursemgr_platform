import React from "react";

const HeadingWdiget = ({widget}) =>

    <div className="container border d-flex flex-column justify-content-around mt-2">
        <div className="row">
            <div className="col-7">
                <h3 className="text-justify">Heading widget</h3>
            </div>
            <div className="col-5 d-flex justify-content-end">
                <button className="btn btn-warning">
                    <i className="fa fa-arrow-up"></i>
                </button>
                <button className="btn btn-warning">
                    <i className="fa fa-arrow-down"></i>
                </button>
                <select className="form-control w-auto" name="headingtype" id="heading">
                    <option value="heading">Heading</option>
                    <option value="paragraph">Paragraph</option>
                    <option value="list">List</option>
                    <option value="image">Image</option>
                    <option value="link">Link</option>
                </select>
                <button className="btn btn-danger">
                    <i className="fa fa-times"></i>
                </button>
            </div>
        </div>
        <div className="row pl-4 pr-4">
            <input type="text" className="form-control wt-auto" placeholder="Heading Text" />
        </div>
        <div className="row pl-4 pr-4">
            <select className="form-control" name="headingtype" id="heading">
                <option value="h1">Heading 1</option>
                <option value="h2">Heading 2</option>
                <option value="h3">Heading 3</option>
            </select>
        </div>
        <div className="row pl-4 pr-4">
            <input type="text" className="form-control" placeholder="Widget name" />
        </div>
        <div className="row d-flex flex-column pl-4 pr-4">
            <h3>Preview</h3>
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
        </div>
    </div>
export default HeadingWdiget;
