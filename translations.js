import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "./navbar";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import Container from "react-bootstrap/Container";

function submitButtonStyle(_this) {
    _this.style.backgroundColor = "red";
}
class Translations extends React.Component {
    constructor(){
        super()
        this.state = {
            user_id: "",
            user_token: "",
            name:" ",
            description:" ",
            name_error: false,
            description_error: false
        }
        this.submit_data = this.submit_data.bind(this);
    }
    componentDidMount(){
        let userId = localStorage.getItem("userId")
        let userToken = localStorage.getItem("token")
        if ((userId === null) || (userToken === null)) {
            this.props.history.push("/login")
        }

        this.setState({
            user_id: userId,
            user_token: userToken
            //roomInfos: return an array that will show room informations
        })
    }

    check_errors = (callback) => {
        this.setState({
            description_err: this.state.description === 0 ? true : false,
            name_err: this.state.name === "" ? true : false,
        },() => {
            callback(this.state.name_error === true || this.state.description_error  === true )
        });
    }

    submit_data(e)
    {
        e.preventDefault()
        console.log(this.state)
        this.check_errors((err) => {
            if (!err) {
                axios({
                    method: 'post',
                    headers: {'Content-Type': 'application/json',
                        'Authorization': this.state.user_token},
                    data: {
                        "name": this.state.name,
                        "description":this.state.description,
                    }
                }).then( (res) => {
                    if (res.data.success) {
                        alert("Information sent successfully")
                        this.setState({
                            share_code: res.data.data.shareCode,
                        })
                    }}).catch( (err) => {
                    console.log("err", err);
                })
            }
        })
    }

    handleChange = (e) => {
        if (e.target.name === "game_location"){
            this.setState({
                game_location: e.target.value,
            })
        } else if (e.target.name === "area_size") {
            this.setState({
                area_size: e.target.value,
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }
    redirectToPage1 = (e) => {
        const {history} = this.props;
        if(history) history.push('/create-game');
    }
    redirectToPage2 = (e) => {
        const {history} = this.props;
        if(history) history.push('/profile');
    }
    redirectToPage3 = (e) => {
        const {history} = this.props;
        if(history) history.push('/create-game');
    }
    // Submit
    onSubmit = (e) => {
        e.preventDefault();
        let checkArray = [];
        for (var key in this.state) {
            if (this.state[key] === true) {
                checkArray.push(key);
            }
        }

        let checkData = {
            checkbox: checkArray.toString()
        };

        axios.post('http://localhost:4000/api/checkbox-save', checkData)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <div style={{color: "grey", backgroundColor: "whitesmoke" }} className="container">
                <Navbar/>
                <div className="columns">
                    <div style = {{paddingTop: "5%",paddingLeft:"16.5%",}}>
                        <Button variant="contained" onClick={this.redirectToPage1} color="default" style={{fontSize:16, marginLeft : "auto", marginRight: 100, marginBottom:70}}>
                            1
                        </Button></div>
                    <div style = {{paddingTop: "5%",paddingLeft:"18.5%"}}>
                        <Button variant="contained" onClick={this.redirectToPage2} color="default" style={{fontSize:16, marginLeft : "auto", marginRight: 100, marginBottom:70}}>
                            2
                        </Button></div>
                    <div style = {{paddingTop: "5%",paddingRight:"5%",paddingLeft:"16.5%"}}>
                        <Button variant="contained" onClick={this.redirectToPage3} color="default" style={{fontSize:16, marginLeft : "auto", marginRight: 100, marginBottom:70}}>
                            3
                        </Button></div>
                </div>
                <div className="columns">
                    <div style = {{paddingLeft:"16%",}}>
                        <h7>property&nbsp;----------------------------------------------------------------</h7></div>
                    <div style = {{paddingLeft:"3%"}}>
                        <h7>Characteristics&nbsp;----------------------------------------------------</h7></div>
                    <div style = {{paddingRight:"5%",paddingLeft:"3%"}}>
                        <h7>Translations</h7></div>
                </div>

                <div className="columns">
                    <div style = {{paddingTop: "4%",paddingLeft:"20%",}}>
                        <div className= "column grid-lg">
                        <Button
                            variant="contained"
                            color="secondary"
                        >English
                        </Button>
                        </div>
                    </div>
                    <div style = {{paddingTop: "4%",paddingLeft:"20%",}}>
                        <div className= "column grid-lg">
                        </div>
                    </div>
                    <div style = {{paddingTop: "4%",paddingLeft:"20%",}}>
                        <div className= "column grid-lg">
                            <Button
                                variant="contained"
                                color="secondary"
                            >French
                            </Button>
                        </div>
                    </div>
                </div>
                    <div style = {{paddingTop: "0%",paddingLeft:"8.5%",paddingRight:"5%"}}>
                    <div style={{paddingTop: "1%", paddingRight: "1%", paddingLeft: "8%",width:"86.5%"}}>
                            <div className="column grid-lg">
                                <div style={{paddingTop: "1%"}}>
                                    <label className="form-label"><h1 style = {{
                                        color: "smoke",
                                        justifyContent: "center",
                                        fontSize : "16px"
                                    }}>Name </h1></label>
                                    <input className="form-input input-lg"
                                           placeholder="Name"
                                           name="name"
                                           type="text"
                                           onChange={this.handleChange}
                                           value={this.state.name_property}/>
                                    {this.state.name_error ? <p className="text-error">!</p>: ""}
                                </div>
                                <div style={{paddingTop: "2%",paddingBottom:"6%"}}>
                                    <label className="form-label"><h1 style = {{
                                        color: "smoke",
                                        justifyContent: "center",
                                        fontSize : "16px"
                                    }}>Description </h1></label>
                                    <input className="form-input input-lg"
                                           placeholder="Name"
                                           name="description"
                                           type="text"
                                           onChange={this.handleChange}
                                           value={this.state.name_property}/>
                                    {this.state.description_error ? <p className="text-error">!</p>: ""}
                                </div>
                    </div>
                        </div>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button className="btn btn-primary btn-sm" onClick={this.redirectToPage2}><i className="icon icon-back"></i>
                        &emsp;Back
                    </button>
                    &emsp;&emsp;
                    <button className="btn btn-primary btn-sm" onClick={this.submit_data}><i className="icon icon-save"></i>
                        Save 💾
                    </button>
                </div>
            </div>
        );
    }
}
export default Translations;
