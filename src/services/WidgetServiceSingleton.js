
const TOPIC_URL = "http://course-server-2018fall.herokuapp.com/api/topic/";
const WIDGET_URL = "http://course-server-2018fall.herokuapp.com/api/widget";

export default class WidgetServiceSingleton {

    static findAllWidgets(topicId) {
        return fetch(TOPIC_URL+"/"+topicId+"/widget").then(response => response.json());
    }

    static findWidgetById(widgetId) {
        return fetch(WIDGET_URL+"/"+widgetId).then(response => response.json());
    }

    static deleteWidgetById(widgetId) {
        return fetch(WIDGET_URL+"/"+widgetId,{method:'DELETE'})
    }

}