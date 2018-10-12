import React from 'react'

const LessonTab = ({lesson, module, selectLesson, deleteLesson, changeLessonTitle, selected}) =>
    {
        if (lesson.title !== "") {
            return (<li className="nav-item ml-2 mt-2 mb-2">
                <div className="d-flex flex-row">
                    <a onClick={() => selectLesson(lesson)}
                       className={selected ? "nav-link active" : "nav-link"}>
                        {lesson.title}
                    </a>
                    <div className="d-flex flex-column justify-content-around">
                        <i onClick={()=>{
                            let newTitle = prompt("Input New Lesson Title: ", lesson.title);
                            changeLessonTitle(module, lesson, newTitle);
                        }}className="fa fa-edit ml-2"></i>
                        <i onClick={()=>deleteLesson(module, lesson)} className="fa fa-times ml-2"></i>
                    </div>
                </div>
            </li>);
        }
        return (<li></li>);
    }


export default LessonTab