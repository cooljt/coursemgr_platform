import React from 'react'

const TopicPill = ({module, lesson, topic, selectTopic, changeTopicTitle, deleteTopic, selected}) => {
    if (topic.title !== "") {
        return (<li className="nav-item ml-2 mt-2 mb-2">
            <div className="d-flex flex-row">
                <a onClick={() => selectTopic(topic)}
                   className={selected ? "nav-link active" : "nav-link"}>
                    {topic.title}
                </a>
                <div className="d-flex flex-column justify-content-around">
                    <i onClick={()=>{
                        let newTitle = prompt("Input New Topic Title: ", topic.title);
                        changeTopicTitle(module, lesson, topic, newTitle);
                    }} className="fa fa-edit ml-2"></i>
                    <i onClick={()=>deleteTopic(module,lesson,topic)} className="fa fa-times ml-2"></i>
                </div>
            </div>

        </li>);
    }
    return (<li></li>);
}


export default TopicPill;