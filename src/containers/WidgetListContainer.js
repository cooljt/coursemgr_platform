import React from 'react'
import { connect } from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => {
    return {
        widgets:state.widgets
    }
}

const dispatchToPropertyMapper = dispatch => {
    return {

    }
}

const WidgetListContainer = connect(stateToPropertyMapper)(WidgetList)

export default WidgetListContainer