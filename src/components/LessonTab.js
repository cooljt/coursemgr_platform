import React from 'react'

const LessonTab = ({lesson, selectLesson, selected}) =>
    <li className="nav-item ml-2 mt-2 mb-2">
        <a onClick={() => selectLesson(lesson)}
           className={selected ? "nav-link active" : "nav-link"}>
            {lesson.title}
        </a>
    </li>

export default LessonTab