import HeadingServiceSingleton from "../services/HeadingServiceSingleton";
import WidgetServiceSingleton from "../services/WidgetServiceSingleton";

const defaultWidget = {
    "heading":{
        "rank":-1,
        "type": "HEADING",
        "size": 1,
        "text": "Input your Heading Text"
    },
    "paragraph":{
        "rank":-2,
        "type": "PARAGRAPH",
        "text": "Input your Paragraph Text"
    },
    "list":{
        "rank":-3,
        "type": "LIST",
        "orderType":"unorder",
        "items": "Nodes"
    },
    "image":{
        "rank":-4,
        "type": "IMAGE",
        "src": "https://picsum.photos/200"
    },
    "link":{
        "rank":-5,
        "type": "LINK",
        "title": "Google",
        "href": "https://www.google.com"
    }
};

    const addWidget = (widgets,topic) => {
    let newWidget = JSON.parse(JSON.stringify(defaultWidget["heading"]));
    newWidget.rank = widgets.length;
    HeadingServiceSingleton.createHeadingWidget(topic.id, newWidget)
        .then(widget => newWidget.id = widget.id);
    widgets.push(newWidget);
};

const deleteWidget = (widgets,widget) => {
    WidgetServiceSingleton.deleteWidgetById(widget.id);
    for (let index in widgets) {
        if (widgets[index].id === widget.id) {
            widgets.splice(index,1)
        }
    }
};

const moveUpWidget = (widgets, widget) => {
    for (let index in widgets) {
        if (index > 0 && widgets[index].id === widget.id) {
            let rankPrevious = widgets[index-1].rank;
            let rankCur = widgets[index].rank;
            let temp = widgets[index-1];
            widgets[index-1] = widgets[index];
            widgets[index] = temp;
            widgets[index-1].rank = rankPrevious;
            widgets[index].rank = rankCur;
            return;
        }
    }
};

const moveDownWidget = (widgets, widget) => {
    let end = widgets.length-1;
    for (let index in widgets) {
        if (index < end && widgets[index].id === widget.id) {
            let rankNext = widgets[parseInt(index)+1].rank;
            let rankCur = widgets[index].rank;
            let temp = widgets[parseInt(index)+1];
            widgets[parseInt(index)+1] = widgets[index];
            widgets[index] = temp;
            widgets[parseInt(index)+1].rank = rankNext;
            widgets[index].rank = rankCur;
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

const updateHeadingSize = (widgets,widget,size) => {
  for (let index in widgets) {
      if (widgets[index].id === widget.id) {
          widgets[index].size = parseInt(size);
          return;
      }
  }
};

const updateOrderType = (widgets,widget,order) => {
    for (let index in widgets) {
        if (widgets[index].id === widget.id) {
            widgets[index].orderType = order;
            return;
        }
    }
};

const changeWidgetType = (widgets,widget,type) => {
    for (let index in widgets) {
        if (widgets[index].id === widget.id) {
            let newWidget = JSON.parse(JSON.stringify(defaultWidget[type]));
            widgets[index] = newWidget;
            widgets[index].id = widget.id;
            return;
        }
    }
};


const saveWidgets = (widgets) => {
    
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
            addWidget(state.widgets,action.topic);
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
            console.log(state.widgets);
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
            saveWidgets(action.widgets);
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
        case "SIZE_CHANGE":
            updateHeadingSize(state.widgets,action.widget,action.size);
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:state.preview
            };
        case "ORDER_TYPE_CHANGE":
            updateOrderType(state.widgets,action.widget,action.order);
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:state.preview
            };
        case "CHANGE_WIDGET_TYPE":
            changeWidgetType(state.widgets,action.widget,action.widgetType);
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:state.preview
            };
        case "FIND_WIDGET":
            return {
                widgets:[],
                selectedTopic:action.topic,
                preview:state.preview
            };
        case "FIND_ALL_WIDGETS":
            return {
                widgets:state.widgets,
                selectedTopic:action.topic,
                preview:state.preview
            };
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
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