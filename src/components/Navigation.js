import React from 'react';
import history from "./history";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People'
import ExitIcon from '@material-ui/icons/ExitToApp';
import Hidden from "@material-ui/core/Hidden";
export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
        this.state = {title: "",anchorEl: null,left:false};

    }
    inputChanged(event) {
        this.setState({title:event.target.value});
    }

    createNewCourse() {
         let newCourse = {
             "created":new Date(Date.now()),
             "title":this.state.title,
             "modules":[]
        };
        this.props.createCourse(newCourse);
    }



    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                            <div className="row" id="nav_panel_upper">
                                <div className="col-sm-1 col-12  home_center">
                                    <Button onClick={()=>this.setState({left:true})}>
                                        <span className="navbar-toggler-icon text-white"></span>
                                    </Button>
                                    <Drawer open={this.state.left} onClose={()=>this.setState({left:false})}>
                                        <div tabIndex={0} role="button">
                                            <List>
                                                <ListItem button onClick={()=>history.push("/profile")}>
                                                    <ListItemIcon><PeopleIcon/></ListItemIcon>
                                                    <ListItemText >Profile</ListItemText>
                                                </ListItem>
                                                <Divider/>
                                                <ListItem button onClick={()=>{this.props.logoutUser();history.push("/");}}>
                                                    <ListItemIcon><ExitIcon/></ListItemIcon>
                                                    <ListItemText >Logout</ListItemText>
                                                </ListItem>
                                            </List>
                                        </div>
                                    </Drawer>
                                </div>
                                <Hidden xsDown>
                                    <div className="col-sm-2 home_center" id="title">
                                        <Typography variant="h6" color="inherit">Course Manager</Typography>
                                    </div>
                                </Hidden>
                                <div className="col-sm-7 col-8  home_center">
                                    <TextField margin="normal" variant="outlined" label="New Course" onChange={this.inputChanged} className="w-100"/>
                                </div>
                                <div className="col-sm-2 col-4  home_center">
                                    <Button variant="fab" mini color="secondary" onClick={() => this.createNewCourse()}>
                                        <AddIcon/>
                                    </Button>
                                </div>
                            </div>
               </nav>
        );
    }
}