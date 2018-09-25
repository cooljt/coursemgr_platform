var allCourses = [
    {
        "id": "123",
        "title": "CS5610",
        "modules": [
            {
                "title": "Week 1",
                "lessons": [
                    {
                        "title": "HTML",
                        "topics": [
                            {
                                "title": "DOM",
                                "widgets": [
                                    {
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
            },
        ]
    },
    {
        "id": "123",
        "title": "CS5200",
        "modules": [
            {
                "title": "Week 1",
                "lessons": [
                    {
                        "title": "HTML",
                        "topics": [
                            {
                                "title": "DOM",
                                "widgets": [
                                    {
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
            },
        ]
    }
];

let _singleton = Symbol();

class CourseService {

    constructor(singletonToken) {
            if (_singleton !== singletonToken)
                throw new Error('Cannot instantiate directly.');
        }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    createCourse(course) {
        allCourses.push(course);
    }
    findAllCourse() {
        return allCourses;
    }
    findCourseById(id) {
        for (var i = 0; i < allCourses.length; i++) {
            if (id == allCourses[i].id) {
                return allCourses[i];
            }
        }
    }
    updateCourse(id, course) {
        for (var i = 0; i < allCourses.length; i++) {
            if (id == allCourses[i].id) {
                allCourses[i] = course;
            }
        }
    }
    deleteCourse(id) {
        for (var i = 0; i < allCourses.length; i++) {
            if (id == allCourses[i].id) {
                allCourses.splice(allCourses.indexOf(allCourses[i]),1);
            }
        }
    }
}

export default CourseService

