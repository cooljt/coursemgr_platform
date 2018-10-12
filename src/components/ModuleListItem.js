import React from 'react'

const ModuleListItem = ({module, selectModule, selected, deleteModule, changeModuleTitle}) =>
    <div className="d-flex flex-row mb-2">
        <li onClick={() => selectModule(module)}
            className={selected ? 'list-group-item active mt-2 w-100': 'list-group-item bg-secondary text-white mt-2 w-100'}>
            {module.title}
        </li>
        <div className="d-flex flex-column justify-content-around mt-2">
            <i onClick={()=>deleteModule(module)} className="fa fa-times text-white ml-2"></i>
            <i onClick={()=>{
                let newTitle = prompt("Input New Module Title: ", module.title);
                changeModuleTitle(module, newTitle);
            }}className="fa fa-edit text-white ml-2"></i>
        </div>
    </div>


export default ModuleListItem