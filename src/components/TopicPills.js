import React from 'react'
import TopicPill from "./TopicPill";
import TopicAdd from "./TopicAdd";

const TopicPills = ({topics, module, lesson, addTopic, selectTopic, changeTopicTitle, deleteTopic, selectedTopic}) =>
    <ul className="nav nav-pills">
        <TopicAdd addTopic={addTopic} module={module} lesson={lesson}/>
        {
            topics.map((topic, index) =>
                            <TopicPill
                                selected={selectedTopic === topic}
                                selectTopic={selectTopic}
                                topic={topic}
                                module={module}
                                lesson={lesson}
                                changeTopicTitle={changeTopicTitle}
                                deleteTopic={deleteTopic}
                                key={index}/>
            )
        }
    </ul>

export default TopicPills