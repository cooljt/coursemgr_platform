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
        this.props.init(props.initWidgets, props.topic);
    }

    componentDidUpdate() {
        this.props.init(this.props.initWidgets, this.props.topic);
    }

    renderWidgets() {
        return this.props.widgets.map(widget => {
            switch (widget.type) {
                case "HEADING":
                    return <HeadingWidget widget={widget}
                                          moveDownWidget={this.props.moveDownWidget}
                                          moveUpWidget={this.props.moveUpWidget}
                                          deleteWidget={this.props.deleteWidget}/>;
                case "PARAGRAPH":
                    return <ParagraphWidget widget={widget}
                                            moveDownWidget={this.props.moveDownWidget}
                                            moveUpWidget={this.props.moveUpWidget}
                                            deleteWidget={this.props.deleteWidget}/>;
                case "LIST":
                    return <ListWidget widget={widget}
                                       moveDownWidget={this.props.moveDownWidget}
                                       moveUpWidget={this.props.moveUpWidget}
                                       deleteWidget={this.props.deleteWidget}/>;
                case "IMAGE":
                    return <ImageWidget widget={widget}
                                        moveDownWidget={this.props.moveDownWidget}
                                        moveUpWidget={this.props.moveUpWidget}
                                        deleteWidget={this.props.deleteWidget}/>;
                case "LINK":
                    return <LinkWidget widget={widget}
                                       moveDownWidget={this.props.moveDownWidget}
                                       moveUpWidget={this.props.moveUpWidget}
                                       deleteWidget={this.props.deleteWidget}/>;
                default:
                    return <h1>Undefine Widget Type</h1>;
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
                    <button onClick={()=>{
                        this.props.addWidget(this.props.widgets);}} className="btn btn-danger float-right icon-low-right mt-3 mb-3">
                        <i className="fa fa-plus"></i>
                    </button>
            </div>
        );
    }
}