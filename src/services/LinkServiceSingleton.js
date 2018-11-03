const TOPIC_URL = "https://course-server-2018fall.herokuapp.com/api/topic";
const LINKWIDGET_URL = "https://course-server-2018fall.herokuapp.com/api/link/widget";

export default class LinkServiceSingleton {
    static createLinkWidget(topicId, linkWidget) {
        return fetch(TOPIC_URL+"/"+topicId+"/link/widget", {
                                                                  body: JSON.stringify(linkWidget),
                                                                  headers: {
                                                                      'Content-Type': 'application/json'
                                                                  },
                                                                  method: 'POST'
                                                              }).then(response => response.json())
    }


    static updateWidgetById(widgetId, linkWidget) {
        return fetch(LINKWIDGET_URL + "/" + widgetId, {
                                                             body:JSON.stringify(linkWidget),
                                                             headers: {
                                                                 'Content-Type': 'application/json'
                                                             },
                                                             method: 'PUT'
                                                         }).then(response => response.json())
    }

    static deleteWidgetById(widgetId) {
        return fetch(LINKWIDGET_URL + "/" + widgetId,{method:'DELETE'})
            .then(response => response.json());
    }
}