import React from 'react'
import LessonTab from "./LessonTab";
import LessonAdd from "./LessonAdd";

const LessonTabs = ({lessons, module, selectLesson, addLesson, deleteLesson, selectedLesson,changeLessonTitle}) =>
        <ul className="nav nav-tabs w-100 d-flex flex-row">
            <LessonAdd module={module} addLesson={addLesson}/>
            {
                lessons.map((lesson, index) =>
                                <LessonTab
                                    selected={selectedLesson === lesson}
                                    selectLesson={selectLesson}
                                    lesson={lesson}
                                    module={module}
                                    changeLessonTitle={changeLessonTitle}
                                    deleteLesson={deleteLesson}
                                    key={index}/>
                )
            }
        </ul>;
export default LessonTabs