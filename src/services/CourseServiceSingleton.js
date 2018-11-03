
const COURSES_SERVICE_URL = "http://course-server-2018fall.herokuapp.com/api/courses";
const COURSE_SERVICE_URL = "http://course-server-2018fall.herokuapp.com/api/course";

export default class CourseServiceSingleton {

    static createCourse(course) {
            return fetch(COURSE_SERVICE_URL, {
                body: JSON.stringify(course),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(response => response.json())
    }
    static findAllCourse(userId) {
        return fetch(COURSES_SERVICE_URL).then(response => {return response.json()});
    }
    static findCourseById(id) {
        return fetch(COURSE_SERVICE_URL + "/" + id)
            .then(response => {return response.json()})
    }

    static updateCourse(id, course) {
        return fetch(COURSE_SERVICE_URL+"/"+id, {
            body:JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
             method: 'PUT'
             }).then(response => response.json())
    }
    static deleteCourse(id) {
        return fetch(COURSE_SERVICE_URL + "/" + id,{method:"DELETE"})
            .then(response => response.json());
    }
}


