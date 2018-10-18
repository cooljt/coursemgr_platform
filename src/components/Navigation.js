import React from 'react';
import {Collapse} from "react-collapse";
import history from "./history";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
        this.state = {title: "",anchorEl: null}

    }
    inputChanged(event) {
        this.setState({title:event.target.value});
    }

    createNewCourse() {
         let newCourse = {
            "id":(new Date()).getTime(),
             "author":this.props.user.username,
            "title":this.state.title,
            "modules":[]
        };
        this.props.createCourse(newCourse);
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                    <div className="row" id="nav_panel_upper">
                        <div className="col-sm-1 home_center">
                            <Button aria-owns={this.state.anchorEl ? 'simple-menu' : null}
                                    aria-haspopup="true" onClick={(event)=>{
                                this.setState({ anchorEl: event.currentTarget });
                            }}>
                                <span className="navbar-toggler-icon"></span>
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={this.state.anchorEl}
                                open={Boolean(this.state.anchorEl)}
                                onClose={()=>this.setState({anchorEl:null})}>
                                <MenuItem onClick={()=>history.push("/profile")}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={()=>{this.props.logoutUser();history.push("/");}}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                        <div className="col-sm-2 home_center" id="title">
                            <Typography variant="h6" color="inherit">Course Manager</Typography>
                        </div>
                        <div className="col-sm-8 home_center">
                            <TextField margin="normal" variant="outlined" label="New Course" onChange={this.inputChanged} className="w-100"/>
                        </div>
                        <div className="col-sm-1 home_center">
                            <Button variant="fab" mini color="secondary" onClick={() => this.createNewCourse()}>
                                <AddIcon/>
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}