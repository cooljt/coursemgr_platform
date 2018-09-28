import React from 'react';


class ModuleAdd extends React.Component {
    constructor(props){
        super(props);
        this.state ={title:"New Module",lessons:[{title:"",topics:[{title:"",widgets:[]}]}]}
    }

    onChange = (event) => {
        this.setState({title:event.target.value});
    }

    clear = () => {
        document.getElementById("moduleInput").value = "";
    }

    render() {
        return (
            <div className="d-flex flex-row mt-2 mb-2">
                <input id="moduleInput" className="form-control mr-2" type="text" onChange={this.onChange} placeholder="New Module"/>
                <button onClick={()=>{this.props.addModule(this.state);this.clear()}} className='btn btn-warning'>
                    <i  className="fa fa-plus float-right"></i>
                </button>
            </div>
        );
    }
}

export default ModuleAdd;