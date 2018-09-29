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
                "title": "Week 2",
                "lessons": [
                    {
                        "title": "CSS",
                        "topics": [
                            {
                                "title": "Bootstrap",
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
        ]
    },
    {
        "id": "456",
        "title": "CS5200",
        "modules": [
            {
                "title": "Week 1",
                "lessons": [
                    {
                        "title": "SQL",
                        "topics": [
                            {
                                "title": "Mysql",
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
                    },
                    {
                        "title": "SQL-2",
                        "topics": [
                            {
                                "title": "Mysql-2",
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
                "title": "Week 2",
                "lessons": [
                    {
                        "title": "DB",
                        "topics": [
                            {
                                "title": "DB Service",
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
        ]
    }
];


class CourseService {

    createCourse(course) {
        allCourses.push(course);
    }
    findAllCourse() {
        return allCourses;
    }
    findCourseById(id) {
        return allCourses.find(course => course.id === id);
    }

    updateCourse(id, course) {
        for (var i = 0; i < allCourses.length; i++) {
            if (id === allCourses[i].id) {
                allCourses[i] = course;
            }
        }
    }
    deleteCourse(id) {
        allCourses = allCourses.filter(course => course.id !== id);
    }
}

export default CourseService

