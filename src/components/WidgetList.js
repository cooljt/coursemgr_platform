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
        this.props.init(this.props.initWidgets, props.topic, 0);
    }

    componentDidUpdate() {
        this.props.init(this.props.initWidgets, this.props.topic, this.props.preview);
    }

    renderWidgets() {
        return this.props.widgets.map(widget => {
            switch (widget.type) {
                case "HEADING":
                    return <HeadingWidget widget={widget}
                                          preview={this.props.preview}
                                          topic={this.props.selectedTopic}
                                          changeWidgetType={this.props.changeWidgetType}
                                          onTextChange={this.props.onTextChange}
                                          headingSizeChange={this.props.headingSizeChange}
                                          moveDownWidget={this.props.moveDownWidget}
                                          moveUpWidget={this.props.moveUpWidget}
                                          deleteWidget={this.props.deleteWidget}/>;
                case "PARAGRAPH":
                    return <ParagraphWidget widget={widget}
                                            preview={this.props.preview}
                                            topic={this.props.selectedTopic}
                                            changeWidgetType={this.props.changeWidgetType}
                                            onTextChange={this.props.onTextChange}
                                            moveDownWidget={this.props.moveDownWidget}
                                            moveUpWidget={this.props.moveUpWidget}
                                            deleteWidget={this.props.deleteWidget}/>;
                case "LIST":
                    return <ListWidget widget={widget}
                                       preview={this.props.preview}
                                       topic={this.props.selectedTopic}
                                       changeWidgetType={this.props.changeWidgetType}
                                       onTextChange={this.props.onTextChange}
                                       orderTypeChange={this.props.orderTypeChange}
                                       moveDownWidget={this.props.moveDownWidget}
                                       moveUpWidget={this.props.moveUpWidget}
                                       deleteWidget={this.props.deleteWidget}/>;
                case "IMAGE":
                    return <ImageWidget widget={widget}
                                        preview={this.props.preview}
                                        topic={this.props.selectedTopic}
                                        changeWidgetType={this.props.changeWidgetType}
                                        onURLChange={this.props.onURLChange}
                                        moveDownWidget={this.props.moveDownWidget}
                                        moveUpWidget={this.props.moveUpWidget}
                                        deleteWidget={this.props.deleteWidget}/>;
                case "LINK":
                    return <LinkWidget widget={widget}
                                       preview={this.props.preview}
                                       topic={this.props.selectedTopic}
                                       changeWidgetType={this.props.changeWidgetType}
                                       onURLChange={this.props.onURLChange}
                                       onTextChange={this.props.onTextChange}
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
                    <div className="col-md-3 col-sm-2 d-flex flex-row justify-content-end">
                        <button className="btn btn-success" onClick={()=>{this.props.saveChange(this.props.topic,this.props.preview);}}>Save</button>
                        <label className="text-justify ml-2">Preview</label>
                        {this.props.preview === 0 && <i className="fa fa-toggle-off fa-3x ml-2" onClick={()=>{this.props.changePreview(this.props.preview)}}></i>}
                        {this.props.preview === 1 && <i className="fa fa-toggle-on fa-3x ml-2" onClick={()=>{this.props.changePreview(this.props.preview)}}></i>}
                    </div>
                </div>
                {this.renderWidgets()}
                <button onClick={()=>{
                        this.props.addWidget(this.props.widgets,this.props.topic,this.props.preview);}} className="btn btn-danger float-right icon-low-right mt-3 mb-3">
                        <i className="fa fa-plus-circle"></i>
                </button>
            </div>
        );
    }
}