import React from "react"
import Button from "@material-ui/core/Button";
import {ApiAiClient} from "api-ai-javascript";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import "../home.style.client.css";


export default class ChatBot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textList:[],sendMsg:"",emptyInput:false};
        this.client = new ApiAiClient({accessToken:"0420609d4a744dc190408e6b6e35cea0"})
    }


    getResponse = (send) => {
        this.client.textRequest(send).then(response=> {
            let r = this.state.textList;
            r.push({"who":"bot","text":response.result.fulfillment.speech});
            this.setState(r)
        })
    };

    renderResponse = () => {
        return this.state.textList.map((line,key) => <div className="mt-2">
            {line.who === "bot" &&  <div className="d-flex flex-row justify-content-start">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6otvEkGLOAqWORBtQVPih0k2fAmZvs4WYkAzBqvmf7Ncb2t-VQ"/>
                <span className="bot ml-2 p-2 border text-center">{line.text}</span>
            </div>}
            {line.who === "user" && <span className="user p-2 border text-center text-white float-right">{line.text}</span>}
            </div>);
    };

    saveUserInput = (send) => {
        let text = this.state.textList;
        text.push({"who":"user","text":send});
        this.setState({textList:text});
        document.getElementById("msg").value="";
    };

    sendMsgByKey = (event) => {
        if (event.keyCode === 13) {
            this.sendMsg();
        }
    };

    sendMsgByButton = () => {
        this.sendMsg();
    };

    sendMsg = () => {
        let send = document.getElementById("msg").value.trim();
        if (send !== "") {
            this.closeAlert();
            this.saveUserInput(send);
            this.getResponse(send);
        }
        else {
            this.openAlert();
        }
    };

    openAlert = () => {
        this.setState({emptyInput:true});
    }

    closeAlert = () => {
        this.setState(({emptyInput:false}));
    }


    render () {
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <Paper elevation="20" className="mt-5 p-5 w-50 text-center">
                        <Typography variant="h5">Welcome To ChatBot!</Typography>
                    </Paper>
                </div>
                <div className="d-flex flex-column justify-content-start mt-5">
                    {this.renderResponse()}
                </div>
                <div className="d-flex justify-content-center mt-5 mb-3">
                    <div className="row w-100 ml-5">
                        <div className="col-10" onKeyDown={this.sendMsgByKey}>
                            <Tooltip title="Please say something, Dear!"
                                     disableHoverListener
                                     disableTouchListener
                                     disableFocusListener
                                     open={this.state.emptyInput}
                                     onClose={this.closeAlert}>
                                <TextField type="text" id="msg" label="Text" variant="filled" className="w-100"/>
                            </Tooltip>
                        </div>
                        <div className="col-2">
                            <Button onClick={this.sendMsgByButton} className="h-100" variant="contained">Send</Button>
                        </div>
                    </div>
                </div>
            </div>
               )
    }
}