const TOPIC_URL = "http://localhost:8080/api/topic";
const LISTWIDGET_URL = "http://localhost:8080/api/list/widget";

export default class ListServiceSingleton {
    static createListWidget(topicId, listWidget) {
        return fetch(TOPIC_URL+"/"+topicId+"/list/widget", {
                                                                  body: JSON.stringify(listWidget),
                                                                  headers: {
                                                                      'Content-Type': 'application/json'
                                                                  },
                                                                  method: 'POST'
                                                              }).then(response => response.json())
    }


    static updateWidgetById(widgetId, listWidget) {
        return fetch(LISTWIDGET_URL + "/" + widgetId, {
                                                             body:JSON.stringify(listWidget),
                                                             headers: {
                                                                 'Content-Type': 'application/json'
                                                             },
                                                             method: 'PUT'
                                                         }).then(response => response.json())
    }

    static deleteWidgetById(widgetId) {
        return fetch(LISTWIDGET_URL + "/" + widgetId,{method:'DELETE'})
            .then(response => response.json());
    }
}