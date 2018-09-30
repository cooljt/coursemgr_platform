import React from 'react'
import TopicPill from "./TopicPill";
import TopicAdd from "./TopicAdd";

const TopicPills = ({topics, module, lesson, addTopic, selectTopic, changeTopicTitle, selectedTopic}) =>
    <ul className="nav nav-pills">
        {
            topics.map((topic, index) =>
                            <TopicPill
                                selected={selectedTopic === topic}
                                selectTopic={selectTopic}
                                topic={topic}
                                module={module}
                                lesson={lesson}
                                changeTopicTitle={changeTopicTitle}
                                key={index}/>
            )
        }
        <TopicAdd addTopic={addTopic} module={module} lesson={lesson}/>
    </ul>

export default TopicPills