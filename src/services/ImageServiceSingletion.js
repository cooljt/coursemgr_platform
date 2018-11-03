const TOPIC_URL = "https://course-server-2018fall.herokuapp.com/api/topic";
const IMAGEWIDGET_URL = "https://course-server-2018fall.herokuapp.com/api/image/widget";

export default class ImageServiceSingleton {
    static createImageWidget(topicId, imageWidget) {
        return fetch(TOPIC_URL+"/"+topicId+"/image/widget", {
                                                                  body: JSON.stringify(imageWidget),
                                                                  headers: {
                                                                      'Content-Type': 'application/json'
                                                                  },
                                                                  method: 'POST'
                                                              }).then(response => response.json())
    }


    static updateWidgetById(widgetId, imageWidget) {
        return fetch(IMAGEWIDGET_URL + "/" + widgetId, {
                                                             body:JSON.stringify(imageWidget),
                                                             headers: {
                                                                 'Content-Type': 'application/json'
                                                             },
                                                             method: 'PUT'
                                                         }).then(response => response.json())
    }

    static deleteWidgetById(widgetId) {
        return fetch(IMAGEWIDGET_URL + "/" + widgetId,{method:'DELETE'})
            .then(response => response);
    }
}