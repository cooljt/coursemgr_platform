import React from "react"

const  ParagraphWidget = ({widget,deleteWidget,moveUpWidget,moveDownWidget,preview,topic}) =>
    <div className="container border d-flex flex-column justify-content-around mt-2">
        {preview === 0 &&
            <div>
                <div className="row mt-3 ">
                    <div className="col-7">
                        <h3 className="text-justify">Paragraph widget</h3>
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        <button className="btn btn-warning" onClick={() => moveUpWidget(widget,topic,preview)}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                        <button className="btn btn-warning ml-2" onClick={() => moveDownWidget(widget,topic,preview)}>
                            <i className="fa fa-arrow-down"></i>
                        </button>
                        <select className="form-control w-auto ml-2" name="paragraphtype" id="paragraph">
                            <option value="paragraph">Paragraph</option>
                            <option value="heading">Heading</option>
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
                    <textarea name="paragraph_input" id="paragraph_input" cols="30" rows="3" className="form-control">{widget.text}</textarea>
                </div>
                <div className="row mt-4 pl-4 pr-4">
                    <input type="text" className="form-control" placeholder="Widget name" />
                </div>
            </div>
        }
        <div className="row mt-4 d-flex flex-column pl-4 pr-4">
            {preview === 0 && <h3>Preview</h3>}
            <p>{widget.text}</p>
        </div>
    </div>;

export default ParagraphWidget