import React from "react";

let newText = "";
let newURL = "";

const LinkWidget = ({widget,deleteWidget, moveUpWidget,moveDownWidget,onTextChange,onURLChange, preview,topic}) =>
    <div className="container border d-flex flex-column justify-content-around widget_height mt-2">
        {preview === 0 &&
            <div>
                <div className="row mt-3">
                    <div className="col-7">
                        <h3 className="text-justify">Link widget</h3>
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        <button className="btn btn-warning" onClick={() => moveUpWidget(widget,topic,preview)}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                        <button className="btn btn-warning ml-2" onClick={() => moveDownWidget(widget,topic,preview)}>
                            <i className="fa fa-arrow-down"></i>
                        </button>
                        <select className="form-control w-auto ml-2" name="linktype" id="link">
                            <option value="link">Link</option>
                            <option value="heading">Heading</option>
                            <option value="list">List</option>
                            <option value="image">Image</option>
                            <option value="image">Image</option>
                        </select>
                        <button className="btn btn-danger ml-2" onClick={() => deleteWidget(widget,topic,preview)}>
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="row pl-4 pr-4 mt-2">
                    <input type="text"
                           className="form-control"
                           onBlur={()=>onTextChange(widget,topic,preview,newText)}
                           onChange={(event)=> newText = event.target.value}
                           placeholder="Input your Link Title" />
                </div>
                <div className="row pl-4 pr-4 mt-4">
                    <input type="text"
                           className="form-control"
                           onBlur={()=>onURLChange(widget,topic,preview,newURL)}
                           onChange={(event)=> newURL = event.target.value}
                           placeholder="Input Your Link URL Here" />
                </div>
                <div className="row pl-4 pr-4 mt-4">
                    <input type="text" className="form-control" placeholder="Widget name" />
                </div>
            </div>
        }
        <div className="row d-flex flex-column pl-4 pr-4 mt-4 mb-2">
            {preview === 0 && <h3>Preview</h3>}
            <a href={widget.href} target="_blank">{widget.title}</a>
        </div>
    </div>;

export default LinkWidget;
