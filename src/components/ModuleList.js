import React from 'react';
import ModuleListItem from "./ModuleListItem";
import ModuleAdd from './ModuleAdd';
const ModuleList = ({modules, selectModule, selectedModule, deleteModule, addModule, changeModuleTitle}) =>
    <ul className="list-group">
        <ModuleAdd addModule={addModule}/>
        {

            modules.map((module, index) => <ModuleListItem
                selected={selectedModule === module}
                selectModule={selectModule}
                deleteModule={deleteModule}
                addModule={addModule}
                changeModuleTitle={changeModuleTitle}
                key={index}
                module={module}/>)
        }
    </ul>

export default  ModuleList;