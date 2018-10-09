import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => {
    return {
        widgets:state.widgets,
        selectedTopic:state.selectedTopic
    }
}

const dispatchToPropertyMapper = dispatch => ({
    init: (widgets,topic) => dispatch({
        type:"INIT",
        widgets:widgets,
        topic:topic}),
    addWidget: (widgets,topic) => dispatch({
        type:"ADD_WIDGET",
        widgets:widgets,
        topic:topic}),
    deleteWidget: (widget,topic) => dispatch({
        type:"DELETE_WIDGET",
        widget:widget,
         topic:topic}),
    moveUpWidget: (widget, topic) => dispatch({
        type:"MOVE_UP",
        widget:widget,
        topic:topic,})
});

const WidgetListContainer = connect(stateToPropertyMapper,dispatchToPropertyMapper)(WidgetList);

export default WidgetListContainer