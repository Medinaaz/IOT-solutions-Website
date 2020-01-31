import React from "react";
import {withRouter} from "react-router";
import Logo1 from  "./adam1.png"
import User from "./user.png"
import Button from "@material-ui/core/Button";
import { SocialIcon } from 'react-social-icons';

class Navbar extends React.Component {
    signout = () => {
        localStorage.clear();
        this.props.history.push("/");
    };

    go = (link) => {
        const fn = () =>{
            this.props.history.push(link);
        };
        return fn.bind(this);
    };

    render(){
        return(
            <div style={{backgroundColor: "white"}}>

                <div style = {{
                    paddingRight:"0%",
                    paddingTop:"0.5%",
                    paddingLeft:"0",
                    width:"100%",
                    height:40,
                    backgroundColor:'#6996AD'
                }}>
                    <h8 style={{
                        color: "white",
                        justifyContent: "center",
                        fontSize: "12px"
                    }}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 📱  +90 50 59 768593</h8>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;;&emsp;&emsp;&emsp;
                <SocialIcon url="http://twitter.com" network="twitter" bgColor="transparent" fgColor="white" style={{ height: 25, width: 25 }} />
                <SocialIcon url="http://whatsapp.com" bgColor="transparent" fgColor="white" style={{ height: 25, width: 25 }} />
                <SocialIcon url="http://youtube.com" bgColor="transparent" fgColor="white" style={{ height: 25, width: 25 }} />
                <SocialIcon url="http://facebook.com" bgColor="transparent" fgColor="white" style={{ height: 25, width: 25 }} />
                <SocialIcon url="http://instagram.com" bgColor="transparent" fgColor="white" style={{ height: 25, width: 25 }} />
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <button href="" onClick={this.go("/create-game")} className="btn btn-link navbar-brand mr-1"><h1 style = {{
                        color: "white",
                        justifyContent: "right",
                        fontSize : "12px"
                    }}>TRY</h1></button>
                    <button href="" onClick={this.go("/create-game")} className="btn btn-link navbar-brand mr-1"><h1 style = {{
                    color: "white",
                    justifyContent: "right",
                    fontSize : "12px"
                }}>English</h1></button>

                </div>

                < style dangerouslySetInnerHTML={{__html: "\np.dotted {border-style: dotted;border-color:salmon;}\n" }} />
                <header className="navbar hide-md">

                    <section className="navbar-section">
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <img src={Logo1}/>
                        <h1 style = {{
                            color: "black",
                            justifyContent: "center",
                            fontSize : "18px"
                        }}> &nbsp; ADAM</h1><br/>
                        <h2 style = {{
                            color: "black",
                            justifyContent: "center",
                            fontSize : "12px"
                        }}> &nbsp;IOT SOLUTIONS</h2>
                    </section>
                    <section className="navbar-center">
                        <button href="" onClick={this.go("/X")} className="btn btn-link navbar-brand mr-1"><h1 style = {{
                            color: "black",
                            justifyContent: "center",
                            fontSize : "12px"
                        }}>Home</h1></button>
                        <button href="" onClick={this.go("/X")} className="btn btn-link navbar-brand mr-1"><h1 style = {{
                            color: "black",
                            justifyContent: "center",
                            fontSize : "12px"
                        }}>Properties</h1></button>
                        <button href="" onClick={this.go("/X")} className="btn btn-link navbar-brand mr-1"><h1 style = {{
                            color: "black",
                            justifyContent: "center",
                            fontSize : "12px"
                        }}>News</h1></button>
                        <button href="" onClick={this.go("/X")} className="btn btn-link navbar-brand mr-1"><h1 style = {{
                            color: "black",
                            justifyContent: "center",
                            fontSize : "12px"
                        }}>Contact</h1></button>
                        <button href="" onClick={this.go("/X")} className="btn btn-link navbar-brand mr-1"><h1 style = {{
                            color: "black",
                            justifyContent: "center",
                            fontSize : "12px"
                        }}>About</h1></button>
                    </section>
                    <section className="navbar-section">
                        <img src={User} height="20"/>
                            <Button variant="success"><h1 style = {{
                                color: "black",
                                fontSize : "12px"
                            }}>Login</h1></Button>
                    </section>

                </header>
                <div className="dropdown show-md">
                    <ul className="tab tab-block">

                    </ul>
                </div>
            </div>
        )
    }
}


export default withRouter(Navbar)
