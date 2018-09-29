import React from 'react';
import {Link} from 'react-router-dom';
import WidgetList from '../components/WidgetList';
import ModuleList from '../components/ModuleList';
import LessonTabs from '../components/LessonTabs';
import TopicPills from '../components/TopicPills';

export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props);

        const courseId = this.props.match.params.courseId;

        const course = this.props.courses.find(
            course => course.id == courseId
        );

        let selectedModule = {title:"",lessons:[]};
        let selectedLesson = {title:"",topics:[]};
        let selectedTopic = {title:"",widgets:[]};
        if (course.modules.length !== 0) {
            selectedModule = course.modules[0];
            if (selectedModule.lessons.length !== 0) {
                selectedLesson = selectedModule.lessons[0];
                if (selectedLesson.topics.length !== 0) {
                    selectedTopic = selectedLesson.topics[0];
                }
            }
        }



        this.state = {
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedTopic: selectedTopic
        }
    }

    selectModule = (module) => {
        this.setState({selectedModule:module,selectedLesson:module.lessons[0],selectedTopic:module.lessons[0].topics[0]});
    }

    selectLesson = (lesson) => {
        this.setState({selectedLesson:lesson,selectedTopic:lesson.topics[0]});
    }

    selectTopic = (topic) => {
        this.setState({selectedTopic:topic});
    }

    deleteModule = (module) => {
        let modules = this.state.course.modules.filter((m) => module !== m );
        let course = this.state.course;
        course.modules = modules;
        this.setState({course:course});
        if (this.state.course.modules.length !== 0) {
            this.selectModule(this.state.course.modules[0]);
        }
        else {
            this.setState({selectedModule:{title:"",lessons:[]}})
            this.setState({selectedLesson:{title:"",topics:[]}});
            this.setState({selectedTopic:{title:"",widgets:[]}});
        }

    }

    addModule = (module) => {
        let course = this.state.course;
        course.modules.push(module);
        this.setState({course:course});
    }

    addLesson = (module,lesson) => {
        let course = this.state.course;
        let modules = course.modules;
        modules = modules.map((m) => {
            if (m === module) {
                m.lessons.push(lesson);
                return m;
            }
            else {
                return m;
            }
        });
        course.modules = modules;
        this.setState({course:course});
    }

    addTopic = (module, lesson, topic) => {
        let course = this.state.course;
        let modules = course.modules;
        let lessons = this.state.selectedModule.lessons;

        lessons = lessons.map((l) => {
           if (l === lesson) {
               l.topics.push(topic);
               return l;
           }
           else {
               return l;
           }
        });

        modules = modules.map((m) => {
            if (m === module) {
                m.lessons = lessons;
                return m;
            }
            else {
                return m;
            }
        });
        course.modules = modules;
        this.setState({course:course});

    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/courses/courseTable">
                        <button className="btn btn_transparent"><i className="fa fa-times"></i></button>
                    </Link>
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
                            deleteModule={this.deleteModule}
                            addModule={this.addModule}
                        />
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            addLesson={this.addLesson}
                            lessons={this.state.selectedModule.lessons}
                            module={this.state.selectedModule}/>
                        <TopicPills
                            selectTopic={this.selectTopic}
                            selectedTopic={this.state.selectedTopic}
                            addTopic={this.addTopic}
                            topics={this.state.selectedLesson.topics}
                            module={this.state.selectedModule}
                            lesson={this.state.selectedLesson}/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        );
    }
}