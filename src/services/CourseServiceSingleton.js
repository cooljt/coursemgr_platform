var allCourses = [
    {
        "id": "123",
        "title": "CS5610",
        "modules": [
            {
                "id":"333",
                "title": "Week 1",
                "lessons": [
                    {
                        "id":"555",
                        "title": "HTML",
                        "topics": [
                            {
                                "id":"666",
                                "title": "DOM",
                                "widgets": [
                                    {
                                        "id":"777",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "id":"7777",
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "id":"99090",
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag,names,IDs,Styles,Classes"
                                    },
                                    {
                                        "id":"09923",
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "id":"32134",
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
                "id":"88237",
                "title": "Week 2",
                "lessons": [
                    {
                        "id":"7823",
                        "title": "CSS",
                        "topics": [
                            {
                                "id":"90012",
                                "title": "Bootstrap",
                                "widgets": [
                                    {
                                        "id":"201010",
                                        "type": "HEADING",
                                        "size": 2,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "id":"99123",
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "id":"93923",
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        "id":"8101023",
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "id":"182921",
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
                "id":"1231231",
                "title": "Week 1",
                "lessons": [
                    {
                        "id":"9010283",
                        "title": "SQL",
                        "topics": [
                            {
                                "id":"12321238",
                                "title": "Mysql",
                                "widgets": [
                                    {
                                        "id":"12312312",
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "id":"12312312212",
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "id":"1231231221146",
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        "id":"123123120987",
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "id":"12312312225743",
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id":"12312312000",
                        "title": "SQL-2",
                        "topics": [
                            {
                                "id":"1231231209875",
                                "title": "Mysql-2",
                                "widgets": [
                                    {
                                        "id":"123123120167482",
                                        "type": "HEADING",
                                        "size": 3,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "id":"123123127272622",
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "id":"123123122123764",
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        "id":"123123121262522",
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "id":"1231231221232",
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
                "id":"12312312212231",
                "title": "Week 2",
                "lessons": [
                    {
                        "id":"1231231222227272",
                        "title": "DB",
                        "topics": [
                            {
                                "id":"12312312222211",
                                "title": "DB Service",
                                "widgets": [
                                    {
                                        "id":"123123122583922",
                                        "type": "HEADING",
                                        "size": 2,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "id":"12312312282726123",
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "id":"1231231282828282",
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        "id":"123123122827215273",
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "id":"12312312292819192",
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


export default class CourseServiceSingleton {

    static createCourse(course) {
        allCourses.push(course);
    }
    static findAllCourse() {
        return allCourses;
    }
    static findCourseById(id) {
        return allCourses.find(course => course.id === id);
    }

    static updateCourse(id, course) {
        for (var i = 0; i < allCourses.length; i++) {
            if (id === allCourses[i].id) {
                allCourses[i] = course;
            }
        }
    }
    static deleteCourse(id) {
        allCourses = allCourses.filter(course => course.id !== id);
    }

    static createWidget(topicId, widget) {
        for (let c in allCourses) {
            for (let m in allCourses[c].modules) {
                for (let l in allCourses[c].modules[m].lessons) {
                    for (let t in allCourses[c].modules[m].lessons[l].topics) {
                        if (allCourses[c].modules[m].lessons[l].topics[t].id === topicId) {
                            allCourses[c].modules[m].lessons[l].topics[t].widgets.push(widget);
                            return;
                        }
                    }
                }
            }
        }
     }

     static findWidgets(topicId) {
         for (let c in allCourses) {
             for (let m in allCourses[c].modules) {
                 for (let l in allCourses[c].modules[m].lessons) {
                     for (let t in allCourses[c].modules[m].lessons[l].topics) {
                         if ( allCourses[c].modules[m].lessons[l].topics[t].id === topicId) {
                             return allCourses[c].modules[m].lessons[l].topics[t].widgets;
                         }
                     }
                 }
             }
         }
     }

    static findWidget(widgetId) {
        for (let c in allCourses) {
            for (let m in allCourses[c].modules) {
                for (let l in allCourses[c].modules[m].lessons) {
                    for (let t in allCourses[c].modules[m].lessons[l].topics) {
                        for (let w in allCourses[c].modules[m].lessons[l].topics[t].widgets) {
                            if (allCourses[c].modules[m].lessons[l].topics[t].widgets[w].id === widgetId) {
                                return allCourses[c].modules[m].lessons[l].topics[t].widgets[w];
                            }
                        }
                    }
                }
            }
        }
    }

    static updateWidget(widgetId, widget) {
        for (let c in allCourses) {
            for (let m in allCourses[c].modules) {
                for (let l in allCourses[c].modules[m].lessons) {
                    for (let t in allCourses[c].modules[m].lessons[l].topics) {
                        for (let w in allCourses[c].modules[m].lessons[l].topics[t].widgets) {
                            if (allCourses[c].modules[m].lessons[l].topics[t].widgets[w].id === widgetId) {
                                allCourses[c].modules[m].lessons[l].topics[t].widgets[w] = widget;
                                return;
                            }
                        }
                    }
                }
            }
        }
    }

    static deleteWidget(widgetId) {
        for (let c in allCourses) {
            for (let m in allCourses[c].modules) {
                for (let l in allCourses[c].modules[m].lessons) {
                    for (let t in allCourses[c].modules[m].lessons[l].topics) {
                        for (let w in allCourses[c].modules[m].lessons[l].topics[t].widgets) {
                            if (allCourses[c].modules[m].lessons[l].topics[t].widgets[w].id === widgetId) {
                                allCourses[c].modules[m].lessons[l].topics[t].widgets.splice(w,1);
                            }
                        }
                    }
                }
            }
        }
    }
}


