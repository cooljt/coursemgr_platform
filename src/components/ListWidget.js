import React from "react";

let newText = "";

const ListWidget = ({widget,deleteWidget,moveUpWidget,moveDownWidget,onTextChange,orderTypeChange,changeWidgetType,preview,topic}) =>
    <div className="container border d-flex flex-column justify-content-around mt-2">
        {preview === 0 &&
            <div>
                <div className="row mt-3">
                    <div className="col-7">
                        <h3 className="text-justify">List widget</h3>
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        <button className="btn btn-warning" onClick={() => moveUpWidget(widget,topic,preview)}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                        <button className="btn btn-warning ml-2" onClick={() => moveDownWidget(widget,topic,preview)}>
                            <i className="fa fa-arrow-down"></i>
                        </button>
                        <select className="form-control w-auto ml-2"
                                name="listtype"
                                onChange={(event)=>changeWidgetType(widget,topic,preview,event.currentTarget.value)}
                                id="list">
                            <option value="list">List</option>
                            <option value="paragraph">Paragraph</option>
                            <option value="heading">Heading</option>
                            <option value="image">Image</option>
                            <option value="link">Link</option>
                        </select>
                        <button className="btn btn-danger ml-2" onClick={() => deleteWidget(widget,topic,preview)}>
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="row pl-4 pr-4 mt-2">
            <textarea name="paragraph_input"
                      id="paragraph_input"
                      cols="30"
                      rows="5"
                      placeholder="Enter your items and separate each item using ','"
                      onBlur={()=>onTextChange(widget,topic,preview,newText)}
                      onChange={(event)=> newText = event.target.value}
                      className="form-control">
                {widget.items}
            </textarea>
                </div>
                <div className="row pl-4 pr-4 mt-4">
                    {widget.orderType === "unorder" &&
                     <select className="form-control"
                             name="orderingtype"
                             onChange={(event)=>orderTypeChange(widget,topic,preview,event.currentTarget.value)}
                             id="ordering">
                         <option value="unorder">Unordered list</option>
                         <option value="order">Ordered list</option>
                     </select>
                    }
                    {widget.orderType === "order" &&
                     <select className="form-control"
                             name="orderingtype"
                             onChange={(event)=>orderTypeChange(widget,topic,preview,event.currentTarget.value)}
                             id="ordering">
                         <option value="order">Ordered list</option>
                         <option value="unorder">Unordered list</option>
                     </select>
                    }
                </div>
                <div className="row pl-4 pr-4 mt-4">
                    <input type="text" className="form-control" placeholder="Widget name"/>
                </div>
            </div>
        }
        <div className="row d-flex flex-column pl-4 pr-4 mt-4">
            {preview === 0 && <h3>Preview</h3>}
            {widget.orderType === "unorder" &&
             <ul>
                 {widget.items.split(",").map(item => <li>{item}</li>)}
             </ul>
            }
            {widget.orderType === "order" &&
             <ol>
                 {widget.items.split(",").map(item => <li>{item}</li>)}
             </ol>
            }
        </div>
    </div>;

export default ListWidget;