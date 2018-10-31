import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => {
    return {
        widgets:state.widgets,
        selectedTopic:state.selectedTopic,
        preview:state.preview
    }
}

const dispatchToPropertyMapper = dispatch => ({
    init: (widgets,topic,preview) => dispatch({
        type:"INIT",
        widgets:widgets,
        topic:topic,
        preview:preview}),
    addWidget: (widgets,topic,preview) => dispatch({
        type:"ADD_WIDGET",
        widgets:widgets,
        topic:topic,
        preview:preview}),
    deleteWidget: (widget,topic,preview) => dispatch({
        type:"DELETE_WIDGET",
        widget:widget,
        topic:topic,
        preview:preview}),
    moveUpWidget: (widget,topic,preview) => dispatch({
        type:"MOVE_UP",
        widget:widget,
        topic:topic,
        preview:preview}),
    moveDownWidget:(widget,topic,preview) => dispatch({
        type:"MOVE_DOWN",
        widget:widget,
        topic:topic,
        preview:preview}),
    saveChange: (widgets,topic,preview) => dispatch({
        type:"SAVE",
        widgets:widgets,
        topic:topic,
        preview:preview}),
    changePreview:(preview) => dispatch({
        type:"CHANGE_PREVIEW",
        preview:preview,}),
    onTextChange:(widget,topic,preview,text) => dispatch({
        type:"TEXT_CHANGE",
        widget:widget,
        topic:topic,
        preview:preview,
        text:text,}),
    onURLChange:(widget,topic,preview,url) => dispatch({
        type:"URL_CHANGE",
        widget:widget,
        topic:topic,
        preview:preview,
        url:url,}),
    headingSizeChange:(widget,topic,preview,size) => dispatch({
        type:"SIZE_CHANGE",
        widget:widget,
        topic:topic,
        preview:preview,
        size:size,}),
    orderTypeChange:(widget,topic,preview,order) => dispatch({
        type:"ORDER_TYPE_CHANGE",
        widget:widget,
        topic:topic,
        preview:preview,
        order:order,}),
    changeWidgetType:(widget,topic,preview,widgetType) => dispatch({
        type:"CHANGE_WIDGET_TYPE",
        widget:widget,
        topic:topic,
        preview:preview,
        widgetType:widgetType}),
});

const WidgetListContainer = connect(stateToPropertyMapper,dispatchToPropertyMapper)(WidgetList);

export default WidgetListContainer