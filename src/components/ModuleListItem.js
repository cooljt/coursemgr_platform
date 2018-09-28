import React from 'react'

const ModuleListItem = ({module, selectModule, selected}) =>
    <li onClick={() => selectModule(module)}
        className={selected ? 'list-group-item active': 'list-group-item'}>
        {module.title}
        <i className="fa fa-times float-right"></i>
        <i className="fa fa-edit float-right mr-2"></i>
    </li>

export default ModuleListItem