import React from 'react';


class ModuleAdd extends React.Component {

    constructor(props){
        super(props);
        this.state = {title:"New Module"}
    }

    onChange = (event) => {
        this.setState({title:event.target.value});
    }

    createNewModule() {
        let newModule = {title:this.state.title,lessons:[{title:"",topics:[{title:"",widgets:[]}]}]}
        this.props.addModule(newModule);
        this.clear();
    }

    clear = () => {
        document.getElementById("moduleInput").value = "";
        this.setState({title:"New Module"});
    }

    render() {
        return (
            <div className="d-flex flex-row mt-2 mb-2">
                <input id="moduleInput" className="form-control mr-2" type="text" onChange={this.onChange} placeholder="New Module"/>
                <button onClick={()=>this.createNewModule()} className='btn btn-warning'>
                    <i  className="fa fa-plus float-right"></i>
                </button>
            </div>
        );
    }
}

export default ModuleAdd;