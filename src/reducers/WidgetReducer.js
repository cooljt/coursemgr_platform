import CourseServiceSingleton from "../services/CourseServiceSingleton"

const WidgetReducer = (state={widgets:[]}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                widgets: CourseServiceSingleton.findWidgets(action.topic.id),
                selectedTopic: action.topic
            }
        default:
            return state;
    }
}

export default WidgetReducer