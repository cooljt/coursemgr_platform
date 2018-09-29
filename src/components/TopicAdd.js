import React from 'react';


class TopicAdd extends React.Component {
    constructor(props){
        super(props);
        this.state ={title:"New Topic"};
    }

    onChange = (event) => {
        this.setState({title:event.target.value});
    }

    createNewTopic() {
        let newTopic = {title:this.state.title,widgets:[]};
        this.props.addTopic(this.props.module, this.props.lesson, newTopic);
        this.clear();
    }

    clear = () => {
        document.getElementById("topicInput").value = "";
    }
    render() {
        return (
            <div className="d-flex flex-row ml-2 mt-2 mb-2">
                <input id="topicInput" className="form-control mr-2" type="text" onChange={this.onChange} placeholder="New Topic"/>
                <button onClick={()=>this.createNewTopic()} className='btn btn-warning'>
                    <i  className="fa fa-plus float-right"></i>
                </button>
            </div>
        );
    }
}

export default TopicAdd;