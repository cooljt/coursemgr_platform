import React from 'react'

const TopicPill = ({topic, selectTopic, selected}) =>
    <li className="nav-item ml-2 mt-2 mb-2">
        <a onClick={() => selectTopic(topic)}
           className={selected ? "nav-link active" : "nav-link"}>
            {topic.title}
        </a>
    </li>

export default TopicPill;