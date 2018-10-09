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
}

const deleteWidget = (widgets,widget) => {
    for (let index in widgets) {
        if (widgets[index].id === widget.id) {
            widgets.splice(widgets[index],1)
        }
    }
}


const WidgetReducer = (state={widgets:[]}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                widgets: action.widgets,
                selectedTopic: action.topic
            };
        case "ADD_WIDGET":
            addWidget(state.widgets)
            return {
                widgets:[],
                selectedTopic:action.topic
            };
        case "DELETE_WIDGET":
            deleteWidget(state.widgets, action.widget)
            return {
              widgets:[],
              selectedTopic:action.topic
            };
        default:
            return state;
    }
}

export default WidgetReducer