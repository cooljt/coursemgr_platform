import React from 'react';


class LessonAdd extends React.Component {
    constructor(props){
        super(props);
        this.state ={title:"New Lesson",topics:[{title:"",widgets:[]}]};
    }

    onChange = (event) => {
        this.setState({title:event.target.value});
    }

    clear = () => {
        document.getElementById("lessonInput").value = "";
    }

    render() {
        return (
            <div className="d-flex flex-row ml-2 mt-2 mb-2">
                <input id="lessonInput" className="form-control mr-2" type="text" onChange={this.onChange} placeholder="New Lesson"/>
                <button onClick={()=>{this.props.addLesson(this.props.module, this.state);this.clear()}} className='btn btn-warning'>
                    <i  className="fa fa-plus float-right"></i>
                </button>
            </div>
        );
    }
}

export default LessonAdd;