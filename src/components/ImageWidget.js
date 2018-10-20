import React from "react";

let newURL = "";

const ImageWidget = ({widget,deleteWidget, moveUpWidget,moveDownWidget,onURLChange,changeWidgetType,preview,topic}) =>
    <div className="container border d-flex flex-column justify-content-around mt-2">
        {preview === 0 &&
            <div>
                <div className="row mt-3">
                    <div className="col-7">
                        <h3 className="text-justify">Image widget</h3>
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        <button className="btn btn-warning" onClick={() => moveUpWidget(widget,topic,preview)}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                        <button className="btn btn-warning ml-2" onClick={() => moveDownWidget(widget,topic,preview)}>
                            <i className="fa fa-arrow-down"></i>
                        </button>
                        <select className="form-control w-auto ml-2"
                                name="imagetype"
                                onChange={(event)=>changeWidgetType(widget,topic,preview,event.currentTarget.value)}
                                id="image">
                            <option value="image">Image</option>
                            <option value="heading">Heading</option>
                            <option value="list">List</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="link">Link</option>
                        </select>
                        <button className="btn btn-danger ml-2" onClick={() => deleteWidget(widget,topic,preview)}>
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="row pl-4 pr-4 mt-4">
                    <input type="link"
                           className="form-control"
                           onBlur={()=>onURLChange(widget,topic,preview,newURL)}
                           onChange={(event)=> newURL = event.target.value}
                           placeholder="Image URL" />
                </div>
                <div className="row pl-4 pr-4 mt-4">
                    <input type="text" className="form-control" placeholder="Widget name" />
                </div>
            </div>
        }
        <div className="row d-flex flex-column pl-4 pr-4 mt-4">
            {preview === 0 && <h3>Preview</h3>}
            <img src={widget.src} width="50%" height="50%" alt="" />
        </div>
    </div>;

export default ImageWidget;