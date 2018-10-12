import React from 'react';


class LessonAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {title:"New Lesson"}
    }


    onChange = (event) => {
        this.setState({title:event.target.value});
    }

    clear = () => {
        document.getElementById("lessonInput").value = "";
        this.setState({title:"New Lesson"});
    }

    createNewLesson() {
        let newLesson = {id:(new Date()).getTime().toString(),title:this.state.title,topics:[{title:"",widgets:[]}]};
        this.props.addLesson(this.props.module, newLesson);
        this.clear();
    }

    render() {
        return (
            <div className="d-flex flex-row mr-2 mt-2 mb-2">
                <input id="lessonInput" className="form-control mr-2" type="text" onChange={this.onChange} placeholder="New Lesson"/>
                <button onClick={()=>this.createNewLesson()} className='btn btn-warning'>
                    <i  className="fa fa-plus float-right"></i>
                </button>
            </div>
        );
    }
}

export default LessonAdd;