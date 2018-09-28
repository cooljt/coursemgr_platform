import React from 'react'

const ModuleListItem = ({module, selectModule, selected}) =>
    <li className={selected ? 'list-group-item active': 'list-group-item'}>
        {module.title}
        <button
            onClick={() => selectModule(module)}>
            Edit
        </button>
    </li>

export default ModuleListItem