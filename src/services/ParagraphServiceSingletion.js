const TOPIC_URL = "http://localhost:8080/api/topic";
const PARAGRAPHWIDGET_URL = "http://localhost:8080/api/paragraph/widget";

export default class ParagraphServiceSingleton {
    static createParagraphWidget(topicId, paragraphWidget) {
        return fetch(TOPIC_URL+"/"+topicId+"/paragraph/widget", {
                                                                  body: JSON.stringify(paragraphWidget),
                                                                  headers: {
                                                                      'Content-Type': 'application/json'
                                                                  },
                                                                  method: 'POST'
                                                              }).then(response => response.json())
    }


    static updateWidgetById(widgetId, paragraphWidget) {
        return fetch(PARAGRAPHWIDGET_URL + "/" + widgetId, {
                                                             body:JSON.stringify(paragraphWidget),
                                                             headers: {
                                                                 'Content-Type': 'application/json'
                                                             },
                                                             method: 'PUT'
                                                         }).then(response => response.json())
    }

    static deleteWidgetById(widgetId) {
        return fetch(PARAGRAPHWIDGET_URL + "/" + widgetId,{method:'DELETE'})
            .then(response => response.json());
    }
}