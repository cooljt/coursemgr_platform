import CourseServiceSingleton from "../services/CourseServiceSingleton"

const defaultWidget = {
    "id":"777",
    "type": "HEADING",
    "size": 1,
    "text": "Input your Heading Text"
};

const addWidget = (widgets) => {
    let id = (new Date()).getTime().toString();
    let newWidget = defaultWidget;
    newWidget.id = id;
    widgets.push(newWidget);
};

const deleteWidget = (widgets,widget) => {
    for (let index in widgets) {
        if (widgets[index].id === widget.id) {
            widgets.splice(widgets[index],1)
        }
    }
};

const moveUpWidget = (widgets, widget) => {
    for (let index in widgets) {
        if (index > 0 && widgets[index].id === widget.id) {
            let temp = widgets[index-1];
            widgets[index-1] = widgets[index];
            widgets[index] = temp;
            return;
        }
    }
};

const moveDownWidget = (widgets, widget) => {
    let end = widgets.length-1;
    for (let index in widgets) {
        if (index < end && widgets[index].id === widget.id) {
            let temp = widgets[parseInt(index)+1];
            widgets[parseInt(index)+1] = widgets[index];
            widgets[index] = temp;
            return;
        }
    }
};

const updateWidgetText = (widgets, widget, text) => {
  for (let index in widgets) {
      if (widgets[index].id === widget.id) {
          if (widgets[index].hasOwnProperty("text")) {
              widgets[index].text = text;
          }
          else if (widgets[index].hasOwnProperty("items")) {
              widgets[index].items = text;
          }
          else if (widgets[index].hasOwnProperty("title")){
              widgets[index].title = text;
          }
          else {

          }
          return;
      }
  }
};

const updateWidgetURL = (widgets, widget, url) => {
  for (let index in widgets) {
      if (widgets[index].id === widget.id) {
          if (widgets[index].hasOwnProperty("src")) {
              widgets[index].src = url;
          }
          else if (widgets[index].hasOwnProperty("href")) {
              widgets[index].href = url;
          }
          else {

          }
          return;
      }
  }
};

const WidgetReducer = (state={widgets:[]}, action) => {
    switch (action.type) {
        case "INIT":
            return {
                widgets: action.widgets,
                selectedTopic: action.topic,
                preview:action.preview
            };
        case "ADD_WIDGET":
            addWidget(state.widgets);
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:action.preview
            };
        case "DELETE_WIDGET":
            deleteWidget(state.widgets, action.widget);
            return {
              widgets:[],
              selectedTopic:action.topic,
              preview:action.preview
            };
        case "MOVE_UP":
            moveUpWidget(state.widgets,action.widget);
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:action.preview
            };
        case "MOVE_DOWN":
            moveDownWidget(state.widgets,action.widget);
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:action.preview
            };
        case "SAVE":
            CourseServiceSingleton.updateWiidgets(action.topic.id, state.widgets);
            alert("Save Successfully!");
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:action.preview,
            };
        case "CHANGE_PREVIEW":
            return {
                preview:action.preview === 1?0:1,
                widgets:[]
            };
        case "TEXT_CHANGE":
            updateWidgetText(state.widgets, action.widget, action.text);
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:state.preview
            };
        case "URL_CHANGE":
            updateWidgetURL(state.widgets,action.widget, action.url);
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:state.preview
            };
        default:
            return state;
    }
}

export default WidgetReducer