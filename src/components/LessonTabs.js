import React from 'react'
import LessonTab from "./LessonTab";
import LessonAdd from "./LessonAdd";

const LessonTabs = ({lessons, module, selectLesson, addLesson, selectedLesson,changeLessonTitle}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map((lesson, index) =>
                            <LessonTab
                                selected={selectedLesson === lesson}
                                selectLesson={selectLesson}
                                lesson={lesson}
                                module={module}
                                changeLessonTitle={changeLessonTitle}
                                key={index}/>
            )
        }
        <LessonAdd module={module} addLesson={addLesson}/>
    </ul>

export default LessonTabs