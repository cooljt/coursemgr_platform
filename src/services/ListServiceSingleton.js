const TOPIC_URL = "http://course-server-2018fall/api/topic";
const LISTWIDGET_URL = "http://course-server-2018fall/api/list/widget";

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