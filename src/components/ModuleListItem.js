import React from 'react'

const ModuleListItem = ({module, selectModule, selected, deleteModule, changeModuleTitle}) =>
    <li className={selected ? 'list-group-item active': 'list-group-item'}>
        <span onClick={() => selectModule(module)}>{module.title}</span>
        <i onClick={()=>deleteModule(module)} className="fa fa-times float-right"></i>
        <i onClick={()=>{
            let newTitle = prompt("Input New Module Title: ", module.title);
            changeModuleTitle(module, newTitle);
        }}className="fa fa-edit float-right mr-2"></i>
    </li>

export default ModuleListItem