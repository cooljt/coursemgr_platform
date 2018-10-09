import CourseServiceSingleton from "../services/CourseServiceSingleton"

const defaultWidget = {
    "id":"777",
    "type": "HEADING",
    "size": 1,
    "text": "Input your Heading Text"
}

const addWidget = (widgets) => {
    let id = (new Date()).getTime().toString();
    let newWidget = defaultWidget;
    newWidget.id = id;
    widgets.push(newWidget);
    return widgets;
}


const WidgetReducer = (state={widgets:[]}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                widgets: action.widgets,
                selectedTopic: action.topic
            };
        case "ADD_WIDGET":
            return {
                widgets:[addWidget(action.widgets)]
            };
        default:
            return state;
    }
}

export default WidgetReducer