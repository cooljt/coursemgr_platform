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
                {this.renderWidgets()}
            </div>
        );
    }
}