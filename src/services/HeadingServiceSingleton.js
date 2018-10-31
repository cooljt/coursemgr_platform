const TOPIC_URL = "http://localhost:8080/api/topic";
const HEADINGWIDGET_URL = "http://localhost:8080/api/heading/widget";

export default class HeadingServiceSingleton {
    static createHeadingWidget(topicId, headingWidget) {
        return fetch(TOPIC_URL+"/"+topicId+"/heading/widget", {
            body: JSON.stringify(headingWidget),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json())
    }


    static updateWidgetById(widgetId, headingWidget) {
        return fetch(HEADINGWIDGET_URL + "/" + widgetId, {
            body:JSON.stringify(headingWidget),
            headers: {
                      'Content-Type': 'application/json'
                     },
             method: 'PUT'
           }).then(response => response.json())
    }

    static deleteWidgetById(widgetId) {
        return fetch(HEADINGWIDGET_URL + "/" + widgetId,{method:'DELETE'})
            .then(response => response.json());
    }
}