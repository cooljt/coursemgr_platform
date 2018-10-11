import React from "react";

let newText = "";

const HeadingWdiget = ({widget,deleteWidget,moveUpWidget,moveDownWidget,onTextChange,headingSizeChange,changeWidgetType,preview,topic}) =>
    <div className="container border d-flex flex-column justify-content-around mt-2">
        {preview === 0 &&
        <div>
            <div className="row mt-3">
                <div className="col-7">
                    <h3 className="text-justify">Heading widget</h3>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <button className="btn btn-warning" onClick={() => moveUpWidget(widget,topic,preview)}>
                        <i className="fa fa-arrow-up"></i>
                    </button>
                    <button className="btn btn-warning ml-2" onClick={() => moveDownWidget(widget,topic,preview)}>
                        <i className="fa fa-arrow-down"></i>
                    </button>
                    <select className="form-control w-auto ml-2"
                            name="headingtype"
                            onChange={(event)=>changeWidgetType(widget,topic,preview,event.currentTarget.value)}
                            id="heading">
                        <option value="heading">Heading</option>
                        <option value="paragraph">Paragraph</option>
                        <option value="list">List</option>
                        <option value="image">Image</option>
                        <option value="link">Link</option>
                    </select>
                    <button className="btn btn-danger ml-2" onClick={() => deleteWidget(widget,topic,preview)}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </div>
            <div className="row mt-2 pl-4 pr-4">
                <input type="text"
                       className="form-control wt-auto"
                       placeholder="Heading Text"
                       onBlur={()=>onTextChange(widget,topic,preview,newText)}
                       onChange={(event)=> newText = event.target.value}/>
            </div>
            <div className="row mt-4 pl-4 pr-4">
                {widget.size === 1 &&
                 <select className="form-control"
                         onChange={(event)=>headingSizeChange(widget,topic,preview,event.currentTarget.value)}>
                     <option value="1">Heading 1</option>
                     <option value="2">Heading 2</option>
                     <option value="3">Heading 3</option>
                 </select>
                }
                {widget.size === 2 &&
                 <select className="form-control"
                         onChange={(event)=>headingSizeChange(widget,topic,preview,event.currentTarget.value)}>
                     <option value="2">Heading 2</option>
                     <option value="1">Heading 1</option>
                     <option value="3">Heading 3</option>
                 </select>
                }
                {widget.size === 3 &&
                 <select className="form-control"
                         onChange={(event)=>headingSizeChange(widget,topic,preview,event.currentTarget.value)}>
                     <option value="3">Heading 3</option>
                     <option value="1">Heading 1</option>
                     <option value="2">Heading 2</option>
                 </select>
                }
            </div>
            <div className="row mt-4 pl-4 pr-4">
                <input type="text" className="form-control" placeholder="Widget name" />
            </div>
        </div>
        }
        <div className="row mt-4 d-flex flex-column pl-4 pr-4">
            {preview===0 && <h3>Preview</h3>}
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
        </div>
    </div>;
export default HeadingWdiget;
