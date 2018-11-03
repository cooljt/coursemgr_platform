const TOPIC_SERVICE_URL = "http://course-server-2018fall/api";

export default class TopicServiceSingleton {
    static createTopic(lid,topic) {
        return fetch(TOPIC_SERVICE_URL+"/lesson"+"/"+lid+"/topic", {
                 body: JSON.stringify(topic),
             headers: {
                       'Content-Type': 'application/json'
                      },
                 method: 'POST'
            }).then(response => response.json())
    }

    static findAllTopics(lid) {
        return fetch(TOPIC_SERVICE_URL+"/lesson"+"/"+lid+"/topic")
            .then(response => response.json());
    }

    static findTopicById(tid) {
        return fetch(TOPIC_SERVICE_URL + "/topic/" + tid)
            .then(response => {return response.json()})
    }

    static updateTopicById(tid,topic) {
        return fetch(TOPIC_SERVICE_URL + "/topic/" + tid, {
            body:JSON.stringify(topic),
              headers: {
                  'Content-Type': 'application/json'
                  },
            method: 'PUT'
            }).then(response => response.json())
    }

    static deleteTopic(tid) {
        return fetch(TOPIC_SERVICE_URL + "/topic/" + tid,{method:"DELETE"})
            .then(response => {return response.json()});
    }
}