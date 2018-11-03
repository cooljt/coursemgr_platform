const LESSON_SERVIVE_URL = "https://course-server-2018fall.herokuapp.com/api";

export default class LessonServiceSingleton {
    static createLesson(mid,lesson) {
        return fetch(LESSON_SERVIVE_URL+"/module"+"/"+mid+"/lesson", {
                  body: JSON.stringify(lesson),
                   headers: {
                         'Content-Type': 'application/json'
                        },
                     method: 'POST'
              }).then(response => response.json())
    }

    static findAllLessons(mid) {
        return fetch(LESSON_SERVIVE_URL+"/module"+"/"+mid+"/lesson")
            .then(response => response.json());
    }

    static findLessonById(lid) {
        return fetch(LESSON_SERVIVE_URL + "/lesson/" + lid)
            .then(response => {return response.json()})
    }

    static updateLessonById(lid,lesson) {
        return fetch(LESSON_SERVIVE_URL + "/lesson/" + lid, {
            body:JSON.stringify(lesson),
                  headers: {
                           'Content-Type': 'application/json'
                           },
                     method: 'PUT'
            }).then(response => response.json())
    }

    static deleteLesson(lid) {
        return fetch(LESSON_SERVIVE_URL + "/lesson/" + lid,{method:"DELETE"})
            .then(response => {return response.json()});
    }
}