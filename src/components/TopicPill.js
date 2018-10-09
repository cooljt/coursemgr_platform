import React from 'react'

const TopicPill = ({module, lesson, topic, selectTopic, changeTopicTitle, deleteTopic, selected}) => {
    if (topic.title !== "") {
        return (<li className="nav-item ml-2 mt-2 mb-2">
            <a onClick={() => selectTopic(topic)}
               className={selected ? "nav-link active" : "nav-link"}>
                {topic.title}
                <i onClick={()=>{
                    let newTitle = prompt("Input New Topic Title: ", topic.title);
                    changeTopicTitle(module, lesson, topic, newTitle);
                }} className="fa fa-edit float-right ml-2"></i>
                <i onClick={()=>deleteTopic(module,lesson,topic)} className="fa fa-times float-right"></i>
            </a>
        </li>);
    }
    return (<li></li>);
}


export default TopicPill;