import React from 'react';
import {Link} from 'react-router-dom';
import ModuleList from '../components/ModuleList';
import LessonTabs from '../components/LessonTabs';
import TopicPills from '../components/TopicPills';
import WidgetReducer from '../reducers/WidgetReducer';
import WidgetListContainer from '../containers/WidgetListContainer';
import CourseServiceSingleton from "../services/CourseServiceSingleton";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(WidgetReducer);

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
        this.setState({selectedModule:module});
        if (module.lessons.length !== 0) {
            this.setState({selectedLesson:module.lessons[0]});
            if (module.lessons[0].topics.length !== 0) {
                this.setState({selectedTopic:module.lessons[0].topics[0]})
            }
            else {
                this.setState({selectedTopics:{title:"",widgets:[]}});
            }
        }
        else {
            this.setState({selectedLesson:{title:"",topics:[]}, selectedTopic:{title:"",widgets:[]}});
        }
    };

    selectLesson = (lesson) => {
        this.setState({selectedLesson:lesson});
        lesson.topics.length !==0 ? this.setState({selectedTopic:lesson.topics[0]})
                                    :this.setState({selectedTopic:{title:"",widgets:[]}});
    };

    selectTopic = (topic) => {
        this.setState({selectedTopic:topic});
    };

    deleteModule = (module) => {
        let modules = this.state.course.modules.filter((m) => module !== m );
        let course = this.state.course;
        course.modules = modules;
        this.setState({course:course});
        if (this.state.course.modules.length !== 0) {
            this.selectModule(this.state.course.modules[this.state.course.modules.length-1]);
        }
        else {
            this.setState({selectedModule:{title:"",lessons:[]}})
            this.setState({selectedLesson:{title:"",topics:[]}});
            this.setState({selectedTopic:{title:"",widgets:[]}});
        }
    };

    deleteLesson = (module, lesson) => {
        let course = this.state.course;
        let sModule = course.modules.find((m) => m===module);
        sModule.lessons = sModule.lessons.filter((l) => lesson !== l);
        this.setState({course:course});
        if (module.lessons.length !== 0) {
            this.selectLesson(module.lessons[module.lessons.length-1]);
        }
        else {
            this.setState({selectedLesson:{title:"",topics:[]}});
            this.setState({selectedTopic:{title:"",widgets:[]}});
        }
    };

    deleteTopic = (module, lesson, topic) => {
        let course = this.state.course;
        let selectModule = course.modules.find((m) => m===module);
        let selectLesson = selectModule.lessons.find((l) => l===lesson);
        selectLesson.topics = selectLesson.topics.filter((t) => topic !== t);
        this.setState({course:course});
        if (lesson.topics.length !== 0) {
            this.selectTopic(lesson.topics[lesson.topics.length-1]);
        }
        else {
            this.setState({selectedTopic:{title:"",widgets:[]}});
        }
    };

    addModule = (module) => {
        let course = this.state.course;
        course.modules.push(module);
        this.setState({course:course});
        this.selectModule(module);
    };

    addLesson = (module,lesson) => {
        let course = this.state.course;
        let modules = course.modules;
        let chooseModule = modules.find((m) => {return m===module});
        chooseModule.lessons.push(lesson);
        this.setState({course:course});
        this.selectLesson(lesson);
    };

    addTopic = (module, lesson, topic) => {
        let course = this.state.course;
        let modules = course.modules;
        let lessons = this.state.selectedModule.lessons;

        let chooseLesson = lessons.find((l) => {return l===lesson});
        chooseLesson.topics.push(topic);

        let chooseModule = modules.find((m) => {return m===module});
        chooseModule.lessons = lessons;

        this.setState({course:course});
        this.selectTopic(topic);
    };

    changeModuleTitle = (module, newTitle) => {
        let course = this.state.course;
        let modules = course.modules;
        let editModule = modules.find((m) => {return m === module});
        editModule.title = newTitle;
        this.setState({course:course});
    };

    changeLessonTitle = (module, lesson, newTitle) => {
        let course = this.state.course;
        let editModule = course.modules.find((m) => {return m === module});
        let editLesson = editModule.lessons.find((l) => {return l === lesson});
        editLesson.title = newTitle;
        this.setState({course:course});
    };

    changeTopicTitle = (module, lesson, topic, newTitle) => {
        let course = this.state.course;
        let editModule = course.modules.find((m) => {return m === module});
        let editLesson = editModule.lessons.find((l) => {return l === lesson});
        let editTopic = editLesson.topics.find((t) => {return t === topic});
        editTopic.title = newTitle;
        this.setState({course:course});
    };



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="w-100 navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                        <Link to="/courses/courseTable">
                            <button className="btn btn_transparent"><i className="fa fa-times"></i></button>
                        </Link>
                        <p className="navbar-brand">{this.state.course.title} Course Editor</p>
                        <button className="navbar-toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-4 bg-dark">
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            modules={this.state.course.modules}
                            deleteModule={this.deleteModule}
                            addModule={this.addModule}
                            changeModuleTitle={this.changeModuleTitle}
                        />
                    </div>
                    <div className="col-8">
                        {this.state.course.modules.length !== 0 &&
                         <LessonTabs
                             selectLesson={this.selectLesson}
                             selectedLesson={this.state.selectedLesson}
                             addLesson={this.addLesson}
                             changeLessonTitle={this.changeLessonTitle}
                             deleteLesson={this.deleteLesson}
                             lessons={this.state.selectedModule.lessons}
                             module={this.state.selectedModule}/>
                        }
                        {this.state.selectedModule.lessons.length !== 0 &&
                         <TopicPills
                             selectTopic={this.selectTopic}
                             selectedTopic={this.state.selectedTopic}
                             addTopic={this.addTopic}
                             changeTopicTitle={this.changeTopicTitle}
                             deleteTopic={this.deleteTopic}
                             topics={this.state.selectedLesson.topics}
                             module={this.state.selectedModule}
                             lesson={this.state.selectedLesson}/>
                        }
                        {this.state.selectedLesson.topics.length !== 0 &&
                            <Provider store={store}>
                            <WidgetListContainer
                            initWidgets={this.state.selectedTopic.widgets}
                            topic={this.state.selectedTopic}/>
                            </Provider>
                        }
                    </div>
                </div>
            </div>
        );
    }
}