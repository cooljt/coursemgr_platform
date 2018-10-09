import React from 'react';
import "../courseEditor.style.client.css";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";

export default class WidgetList extends React.Component {

    constructor(props) {
        super(props);
    }

    renderWidgets() {
        return this.props.initWidgets.map(widget => {
            switch (widget.type) {
                case "HEADING":
                    return <HeadingWidget widget={widget}/>;
                case "PARAGRAPH":
                    return <ParagraphWidget widget={widget}/>;
                case "LIST":
                    return <ListWidget widget={widget}/>;
                case "IMAGE":
                    return <ImageWidget widget={widget}/>;
                case "LINK":
                    return <LinkWidget widget={widget}/>;
                default:
                    return <h1>{widget.type}</h1>;
            }
        })
    }

    render() {
        return (
            <div>
                <div className="row mt-2">
                    <div className="col-md-9 col-sm-10"></div>
                    <div className="col-md-3 col-sm-2 d-flex flex-row">
                        <button className="btn btn-success">Save</button>
                        <label className="text-justify ml-2">Preview</label>
                        <i className="fa fa-toggle-off fa-3x ml-2"></i>
                    </div>
                </div>
                {this.renderWidgets()}
                    <button className="btn btn-danger float-right icon-low-right mt-3 mb-3">
                        <i className="fa fa-plus"></i>
                    </button>
            </div>
        );
    }
}