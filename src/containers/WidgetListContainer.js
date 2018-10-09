import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => {
    return {
        widgets:state.widgets
    }
}

const dispatchToPropertyMapper = dispatch => ({
    init: (widgets,topic) => dispatch({
        type:"INIT",
        widgets:widgets,
        topic:topic}),
    addWidget: (widgets) => dispatch({
        type:"ADD_WIDGET",
        widgets:widgets}),
});

const WidgetListContainer = connect(stateToPropertyMapper,dispatchToPropertyMapper)(WidgetList);

export default WidgetListContainer