import React from 'react'

const ModuleListItem = ({module, selectModule, selected, deleteModule}) =>
    <li className={selected ? 'list-group-item active': 'list-group-item'}>
        <span onClick={() => selectModule(module)}>{module.title}</span>
        <i onClick={()=>deleteModule(module)} className="fa fa-times float-right"></i>
        <i className="fa fa-edit float-right mr-2"></i>
    </li>

export default ModuleListItem