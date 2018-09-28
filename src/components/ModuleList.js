import React from 'react';
import ModuleListItem from "./ModuleListItem";
const ModuleList = ({modules, selectModule, selectedModule}) =>
    <ul className="list-group">
        {
            modules.map((module, index) => <ModuleListItem
                selected={selectedModule === module}
                selectModule={selectModule}
                key={index}
                module={module}/>)
        }
    </ul>

export default  ModuleList;