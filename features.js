import React, { Component } from 'react';
import axios from 'axios';
import Navbar from "./navbar";
import Button from "@material-ui/core/Button";
import "./style_components.css"

class Features extends React.Component {
    constructor() {
        // Checkbox Initial State
        super();
        this.state = {
            isF1: false,
            isF2: false,
            isF3: false,
            isF4: false,
            isF5: false,
            isF6: false,
            isF7: false,
            isF8: false,
            isF9: false,
            isF10: false,
            isF11: false,
            isF12: false,
            isP1: false,
            isP2: false,
            isP3: false,
            isP4: false,
            isP5: false,
            isP6: false,
            isP7: false,
            isP8: false,
            isP9: false,
            isP10: false,
            isP11: false,
            isP12: false,
            isE1: false,
            isE2: false,
            isE3: false,
            isE4: false,
            isE5: false,
            isE6: false,
            isE7: false,
            isE8: false,
            isE9: false,
            isE10: false,
            isE11: false,
            isE12: false,
            isI1: false,
            isI2: false,
            isI3: false,
            isI4: false,
            isI5: false,
            isI6: false,
            isI7: false,
            isI8: false,
            isI9: false,
            isI10: false,
            isI11: false,
            isI12: false,
            f1: " ",
            f2: " ",
            f3: " ",
            f4: " ",
            f5: " ",
            f6: " ",
            f7: " ",
            f8: " ",
            f9: " ",
            f10: " ",
            f11: " ",
            f12: " ",
            p1: " ",
            p2: " ",
            p3: " ",
            p4: " ",
            p5: " ",
            p6: " ",
            p7: " ",
            p8: " ",
            p9: " ",
            p10: " ",
            p11: " ",
            p12: " ",
            e1: " ",
            e2: " ",
            e3: " ",
            e4: " ",
            e5: " ",
            e6: " ",
            e7: " ",
            e8: " ",
            e9: " ",
            e10: " ",
            e11: " ",
            e12: " ",
            i1: " ",
            i2: " ",
            i3: " ",
            i4: " ",
            i5: " ",
            i6: " ",
            i7: " ",
            i8: " ",
            i9: " ",
            i10: " ",
            i11: " ",
            i12: " ",
        }
        this.onSubmit = this.onSubmit.bind(this);
}

check_errors = (callback) => {
        this.setState( {
            F1_error: this.state.f1 ===0 ? true : false,
        },
            () => {
            callback(this.state.F1_error === true)
            })
}
    // React Checkboxes onChange Methods
    onChangeF1 = () => {
        this.setState(initialState => ({
            isF1: !initialState.isF1,
        }));
    }
    onChangeF2 = () => {
        this.setState(initialState => ({
            isF2: !initialState.isF2,
        }));
    }

    onChangeF3 = () => {
        this.setState(initialState => ({
            isF3: !initialState.isF3,
        }));
    }

    onChangeF4 = () => {
        this.setState(initialState => ({
            isCherry: !initialState.isF4,
        }));
    }

    onChangeF5 = () => {
        this.setState(initialState => ({
            isF5: !initialState.isF5,
        }));
    }
    //general function for change
    onChangeF6 = () => {
        this.setState(initialState => ({
            isF6: !initialState.isF6,
        }));
    }
    onChange7 = () => {
        this.setState(initialState => ({
            isF7: !initialState.isF7,
        }));
    }
    onChangeF8 = () => {
        this.setState(initialState => ({
            isF8: !initialState.isF8,
        }));
    }
    onChangeF9 = () => {
        this.setState(initialState => ({
            isF9: !initialState.isF9,
        }));
    }
    onChangeF10 = () => {
        this.setState(initialState => ({
            isF10: !initialState.isF10,
        }));
    }
    onChangeF11 = () => {
        this.setState(initialState => ({
            isF11: !initialState.isF11,
        }));
    }
    onChangeF12 = () => {
        this.setState(initialState => ({
            isF12: !initialState.isF12,
        }));
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
        if(history) history.push('/manage-game');
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

            <div style = {{paddingTop: "2%",paddingLeft:"8.5%",paddingRight:"5%"}}>
                <div style={{paddingTop: "3%", paddingRight: "1%", paddingLeft: "8%",width:"86.5%"}}>
                    < style dangerouslySetInnerHTML={{__html: "\np.dotted {border-style: dotted;}\n" }} />
                    <p className="dotted"><h1 style = {{
                        color: "salmon",
                        justifyContent: "center",
                        fontSize : "16px"
                    }}> &nbsp;&nbsp; Building Features</h1></p>
                </div>

                <div className="columns">
                    <div style = {{paddingTop: "1%",paddingLeft:"11%",paddingRight:"5%"}}>
                    <div className="column grid-lg">
                <form onSubmit={this.onSubmit}>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox"
                                   checked={this.state.isF1}
                                   onChange={this.onChangeF1}
                                   className="form-check-input"
                                   value={this.state.f1}
                            />
                            {this.state.F1_error ? <p className="checkbox-error">!</p>: "" }
                            Feature1
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox"
                                   checked={this.state.isF2}
                                   onChange={this.onChangeF2}
                                   className="form-check-input"
                            />
                            Feature2
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox"
                                   checked={this.state.isF3}
                                   onChange={this.onChangeF3}
                                   className="form-check-input"
                            />
                            Feature3
                        </label>
                    </div>
                </form>
                    </div>
                    </div>

                    <div style = {{paddingTop: "1%",paddingLeft:"6%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isF4}
                                               onChange={this.onChangeF4}
                                               className="form-check-input"
                                        />
                                        Feature4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isF5}
                                               onChange={this.onChangeF5}
                                               className="form-check-input"
                                        />
                                        Feature5
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isF6}
                                               onChange={this.onChangeF6}
                                               className="form-check-input"
                                        />
                                        Feature6
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"11%",paddingRight:"4%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isF7}
                                               onChange={this.onChange7}
                                               className="form-check-input"
                                        />
                                        Feature7
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isF8}
                                               onChange={this.onChangeF8}
                                               className="form-check-input"
                                        />
                                        Feature8
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isF9}
                                               onChange={this.onChangeF9}
                                               className="form-check-input"
                                        />
                                        Feature9
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"7%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isF10}
                                               onChange={this.onChangeF10}
                                               className="form-check-input"
                                        />
                                        Feature10
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isF11}
                                               onChange={this.onChangeF11}
                                               className="form-check-input"
                                        />
                                        Feature11
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isF12}
                                               onChange={this.onChangeF12}
                                               className="form-check-input"
                                        />
                                        Feature12
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: "3%", paddingRight: "1%", paddingLeft: "8%",width:"86.5%"}}>
                    < style dangerouslySetInnerHTML={{__html: "\np.dotted {border-style: dotted;}\n" }} />
                    <p className="dotted"><h1 style = {{
                        color: "salmon",
                        justifyContent: "center",
                        fontSize : "16px"
                    }}> &nbsp;&nbsp; Place Features</h1></p>
                </div>
                <div className="columns">
                    <div style = {{paddingTop: "1%",paddingLeft:"11%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE1}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE2}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE3}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature3
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div style = {{paddingTop: "1%",paddingLeft:"6%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE4}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE5}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature5
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE6}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature6
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"11%",paddingRight:"4%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE7}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature7
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE8}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature8
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE9}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature9
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"7%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE10}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature10
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE11}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature11
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE12}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature12
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div style={{paddingTop: "3%", paddingRight: "1%", paddingLeft: "8%",width:"86.5%"}}>
                    < style dangerouslySetInnerHTML={{__html: "\np.dotted {border-style: dotted;}\n" }} />
                    <p className="dotted"><h1 style = {{
                        color: "salmon",
                        justifyContent: "center",
                        fontSize : "16px"
                    }}> &nbsp;&nbsp; External Features</h1></p>
                </div>

                <div className="columns">
                    <div style = {{paddingTop: "1%",paddingLeft:"11%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE1}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE2}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE3}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature3
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"6%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE4}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE5}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature5
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE6}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature6
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"11%",paddingRight:"4%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE7}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature7
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE8}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature8
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE9}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature9
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"7%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE10}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature10
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE11}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature11
                                    </label>
                                </div>

                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isE12}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature12
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div style={{paddingTop: "3%", paddingRight: "1%", paddingLeft: "8%",width:"86.5%"}}>
                    < style dangerouslySetInnerHTML={{__html: "\np.dotted {border-style: dotted;}\n" }} />
                    <p className="dotted"><h1 style = {{
                        color: "salmon",
                        justifyContent: "center",
                        fontSize : "16px"
                    }}> &nbsp;&nbsp; Internal Features</h1></p>
                </div>
                <div className="columns">
                    <div style = {{paddingTop: "1%",paddingLeft:"11%",paddingRight:"5%",paddingBottom:"3%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI1}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI2}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI3}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature3
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"6%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI4}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature4
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI5}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature5
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI6}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature6
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"11%",paddingRight:"4%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI7}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature7
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI8}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature8
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI9}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature9
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div style = {{paddingTop: "1%",paddingLeft:"7%",paddingRight:"5%"}}>
                        <div className="column grid-lg">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI10}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature10
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI11}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature11
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox"
                                               checked={this.state.isI12}
                                               onChange={this.handleChange}
                                               className="form-check-input"
                                        />
                                        Feature12
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <button className="btn btn-primary btn-sm" onClick={this.redirectToPage1}><i className="icon icon"></i>
                    &emsp;Back
                </button>
                &emsp;&emsp;&emsp;&emsp;
                <button className="btn btn-primary btn-sm" onClick={this.redirectToPage3}><i className="icon icon"></i>
                    &emsp;Next
                </button>
            </div>
                </div>
        );
    }
}
export default Features;
