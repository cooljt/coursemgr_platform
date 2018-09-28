import React from 'react';
import WidgetList from '../components/WidgetList';
import ModuleList from '../components/ModuleList';
import LessonTabs from '../components/LessonTabs';

export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props);

        const courseId = this.props.match.params.courseId;

        const course = this.props.courses.find(
            course => course.id === courseId
        );

        const selectedModule = course.modules[0];
        const selectedLesson = selectedModule.lessons[0];

        this.state = {
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson
        }
    }

    selectModule = (module) => {
        this.setState({selectedModule:module,
                      selectedLesson:module[0]});
    }

    selectLesson = (lesson) => {
        this.setState({selectedLesson:lesson});
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                    <button className="btn btn_transparent"><i class="fa fa-times"></i></button>
                    <p className="navbar-brand">{this.state.course.title} Course Editor</p>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            modules={this.state.course.modules}
                        />
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons={this.state.selectedModule.lessons}/>
                    </div>
                </div>
            </div>
        );
    }
}