import React from "react";

const ListWidget = ({widget,deleteWidget}) =>

    <div className="container border d-flex flex-column justify-content-around mt-2">
        <div className="row mt-3">
            <div className="col-7">
                <h3 className="text-justify">List widget</h3>
            </div>
            <div className="col-5 d-flex justify-content-end">
                <button className="btn btn-warning">
                    <i className="fa fa-arrow-up"></i>
                </button>
                <button className="btn btn-warning ml-2">
                    <i className="fa fa-arrow-down"></i>
                </button>
                <select className="form-control w-auto ml-2" name="listtype" id="list">
                    <option value="list">List</option>
                    <option value="paragraph">Paragraph</option>
                    <option value="heading">Heading</option>
                    <option value="image">Image</option>
                    <option value="link">Link</option>
                </select>
                <button className="btn btn-danger ml-2" onClick={() => deleteWidget(widget)}>
                    <i className="fa fa-times"></i>
                </button>
            </div>
        </div>
        <div className="row pl-4 pr-4 mt-2">
            <textarea name="paragraph_input" id="paragraph_input" cols="30" rows="5" className="form-control">
                Separate each item use ","
            </textarea>
        </div>
        <div className="row pl-4 pr-4 mt-4">
            <select className="form-control" name="orderingtype" id="ordering">
                <option value="Unordered">Unordered list</option>
                <option value="Ordered">Ordered list</option>
            </select>
        </div>
        <div className="row pl-4 pr-4 mt-4">
            <input type="text" className="form-control" placeholder="Widget name"/>
        </div>
        <div className="row d-flex flex-column pl-4 pr-4 mt-4">
            <h3>Preview</h3>
            <ul>
                {widget.items.split(",").map(item => <li>{item}</li>)}
            </ul>
        </div>
    </div>

export default ListWidget;