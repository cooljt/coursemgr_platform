import React from 'react'

const LessonTab = ({lesson, module, selectLesson, deleteLesson, changeLessonTitle, selected}) =>
    {
        if (lesson.title !== "") {
            return (<li className="nav-item ml-2 mt-2 mb-2">
                <a onClick={() => selectLesson(lesson)}
                   className={selected ? "nav-link active" : "nav-link"}>
                    {lesson.title}
                    <i onClick={()=>{
                        let newTitle = prompt("Input New Lesson Title: ", lesson.title);
                        changeLessonTitle(module, lesson, newTitle);
                    }}className="fa fa-edit float-right ml-2"></i>
                    <i onClick={()=>deleteLesson(module, lesson)} className="fa fa-times float-right"></i>
                </a>
            </li>);
        }
        return (<li></li>);
    }


export default LessonTab