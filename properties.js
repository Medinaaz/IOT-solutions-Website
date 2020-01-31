import React, {useState} from 'react';
import Navbar from "./navbar"
import config from "../config";
import axios from "axios";
import { GoogleMap, Marker, InfoWindow, Circle } from "react-google-maps"
import {withGoogleMap, withScriptjs} from "react-google-maps";
import {useDropzone} from "react-dropzone";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

function FixedContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
        </React.Fragment>
    );
}
const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isDragActive) {
        return '#2196f3';
    }
    return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  height: 100%;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

function StyledDropzoneImage(props) {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({accept: 'image/*'});
    return (
        <div className="container">
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some image files here, or click to select files </p>
                <h1 style = {{
                    color: "smoke",
                    justifyContent: "center",
                    fontSize : "50px"
                }}>🖼</h1>
            </Container>
        </div>
    );
}

function StyledDropzonePdf(props) {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({accept: 'pdf/*'});

    return (
        <div className="container">
            <Container {...getRootProps({isDragActive, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some pdf files here, or click to select files </p>
                <h1 style = {{
                    color: "smoke",
                    justifyContent: "center",
                    fontSize : "50px"
                }}>🖻</h1>
            </Container>
        </div>
    );
}
//map function
const WrappedMap = withScriptjs(withGoogleMap(Map))

const Word2Radius = {
    "Pick Size": 0,
    "Tiny": 40,
    "Small": 80,
    "Medium": 200,
    "Large": 500,
    "Extreme": 1000,
};

const currencies = {
  "TRY": {
    id: "TRY"
  },
  "$": {
    id: "$"
  },
  "EUR": {
    id: "EUR"
  },
};

const countries = {
  "Country":{
    id:" "
  },
  "Country 1": {
    id: "Country 1"
  },
  "Country 2": {
    id: "Country 2"
  },
  "Country 3": {
    id: "Country 3"
  },
  "Country 4": {
    id: "Country 4"
  }
}

const property_name = {
  "Property type 1":{
    id:" "
  },
  "Property type 2": {
    id: "Property type 2"
  },
  "Property type 3": {
    id: "Property type 3"
  },
  "Property type 4": {
    id: "Property type 4"
  },
  "Property type 5": {
    id: "Property type 5"
  }
};

const cities = {
  "City":{
    id: " "
  },
  "City 1": {
    id: "City 1"
  },
  "City 2": {
    id: "City 2"
  },
  "City 3": {
    id: "City 3"
  },
  "City 4": {
    id: "City 4"
  }
};
const regions = {
    "Region":{
        id: " "
    },
    "Region 1": {
        id: "Region 1"
    },
    "Region 2": {
        id: "Region 2"
    },
    "Region 3": {
        id: "Region 3"
    },
    "Region 4": {
        id: "Region 4"
    }
};

//payment options
const options = [
    { label: 'Cash ', value: 1},
    { label: 'Premium', value: 2},
];

const room_options = [
    {label:'Room 1', value:1},
    {label:'Room 2', value:2},
    {label:'Room 3', value:3},
    {label:'Room 4', value:4},
    {label:'Room 5',value:5},
];
const bathroom_options = [
    {label:'Bathroom 1', value:1},
    {label:'Bathroom 2', value:2},
    {label:'Bathroom 3', value:3},
    {label:'Bathroom 4', value:4},
    {label:'Bathroom 5',value:5},
]

const categories = {
    "Category":{
        id: " "
    },
    "Category 1": {
        id: "Category 1"
    },
    "Category 2": {
        id: "Category 2"
    },
    "Category 3": {
        id: "Category 3"
    },
    "Category 4": {
        id: "Category 4"
    }
};

const Location2Geo = {
    "Pick Location": {
      latitude: "",
      longitude: ""
    },
    "MED" : {
      latitude: "41.105399",
      longitude: "29.023522"
    },

    "Kadıköy Bull" : {
      latitude: "40.990437",
      longitude: "29.029146"
    },

    "Taksim Square" : {
      latitude: "41.036899",
      longitude: "28.985056"
    },

    "Galata Bridge" : {
      latitude: "41.020069",
      longitude: "28.973243"
    },

    "Üsküdar Fountain of Ahmed III" : {
      latitude: "41.026785",
      longitude: "29.015357"
    },

    "Maçka Park" : {
      latitude:   "41.042234",
      longitude:  "28.994765"
    }

};


function Map(props){
    //lat lg state
    // const google=window.google;
    const [number, desc] = useState(null);
    return(
        <GoogleMap defaultZoom={15}
                   defaultCenter={{lat: parseFloat(props.lat), lng: parseFloat(props.lng)}}
                   center={{
                       lat: parseFloat(props.lat),
                       lng: parseFloat(props.lng)
                   }}
        >
            <Marker key="1" position={{lat: parseFloat(props.lat), lng: parseFloat(props.lng)}}
                    onClick={()=> {
                        // desc(this);
                    }}
            />
            <Circle
                center={{
                    lat: parseFloat(props.lat),
                    lng: parseFloat(props.lng)
                }}
                radius={props.radius}
                options={{strokeColor: "red"}}
            />

            {number && (
                <InfoWindow position={{
                    lat:number.lat , lng: number.lng
                }}
                            onCloseClick={() => {
                                desc(null);
                            }}
                >
                    <div style={{fontWeight:"bold"}}>
                        <figure className="avatar">
                            <img src={number.avatar} alt="Avatar">

                            </img>
                            {number.owner?<img src="./star.png" className="avatar-icon" alt="Star"/>:null}
                        </figure>
                        {number.username}
                    </div></InfoWindow>
            )}

        </GoogleMap>
    );
}

class Adam extends React.Component {
  constructor()
  {
    super()
    this.state = {
      //auth
      user_id: "",
      user_token: "",
      //data for backend
      property_type: " ",
      //category: " ",
      selectedFiles:null,
      name_property: " ",
      //room: " ",
      //date:" ",
      //bathroom: " ",
      map: " ",
      notes:" ",
      //region:" ",
      to: 0,
      currency:" ",
      country: " ",
      address: " ",
      number:0,
      delivery_date: " ",
      year:" ",
      city: " ",
      //type_property: " ",
      //payment:0,
      price_from: 0,
      area_of: 0,
        //check beach information
      distance_beach: 0,
      distance_center: 0,
      distance_airport: 0,
      //area_to:0,
      center_lat: 0,

      center_radius: 0,
      center_lng: 0,
      category_type: " ",
      category_region: " ",
      latitude: "",
      longitude: "",
      radius: "",
      roomInfos: [],
      //For Error handling
      id_room_err:false,
      lowest_price_er:false,
      highest_price_er:false,
      lowest_area_er: false,
      highest_area_er: false,
      notes_room_er: false,
      title_err: false,
      geolocation_err: false,
      name_property_err: false,
      category_err:false,
      payment_err:false,
      price_from_err: false,
      area_of_err: false,
      type_property_err: false,
      city_err: false,
      delivery_date_err: false,
      map_err: false,
      address_err: false,
      year_err:false,
      room_err: false,
      area_to_err:false,
      notes_err:false,
      bathroom_err: false,
      number_err: false,
      to_err: false,
      country_err:false,
      currency_err:false,
      distance_center_err: false,
      distance_beach_err:false,
      distance_airport_err:false,
      category_region_err:false,
      category_type_err:false,
      region_err:false,
      //is custom location clicked
      deleteOperation: false,
      //page transition
      viewPage1: false,
      viewPage2: false,
      viewPage3: false,
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
  toggle_custom_location = () => {
    this.setState({
      custom_location: !this.state.custom_location
    })
  }

  check_errors = (callback) => {
    this.setState({
      number_err: this.state.number === 0 ? true : false,
      area_to_err: this.state.area_to === "" ? true : false,
      notes_err: this.state.notes === "" ? true : false,
      desc_err: this.state.game_desc === "" ? true : false,
      name_property_err: this.state.name_property === "" ? true : false,
      category_type_err: this.state.category_type === "" ? true : false,
      category_err: this.state.category === "" ? true : false,
      category_region_err: this.state.category_region === "" ? true : false,
      payment_err: this.state.payment === "" ? true : false,
      type_property_err: this.state.property_type === "" ? true : false,
      delivery_date_err: this.state.delivery_date === "" ? true : false,
      city_err: this.state.city === "" ? true : false,
      country_err: this.state.country === "" ? true : false,
      distance_beach_err:this.state.distance_beach === "" ? true : false,
      distance_center_err:this.state.distance_center === "" ? true : false,
      distance_airport_err: this.state.distance_airport === "" ? true : false,
      currency_err: this.state.currency === "" ? true : false,
      price_from_err: this.state.price_from === "" ? true : false,
      to_err:this.state.to === "" ? true : false,
      area_of_err: this.state.area_of === "" ? true : false,
      map_err: this.state.map === "" ? true : false,
      region_err: this.state.region === "" ? true : false,
      bathroom_err: this.state.bathroom === "" ? true : false,
      room_err: this.state.room === "" ? true : false,

      id_room_err: this.state.id_room === "" ? true : false,
      lowest_price_err : this.state.lowest_price  === "" ? true : false,
      highest_price_err: this.state.lowest_price  === "" ? true : false,
      lowest_area_err :  this.state.lowest_area  === "" ? true : false,
      highest_area_err: this.state.highest_area  === "" ? true : false,
      total_bathrooms_err : this.state.total_bathrooms  === "" ? true : false,
      notes_room_err : this.state.notes_room  === "" ? true : false,

      //center_lat: data.location.latitude,
     // center_lng: data.location.longitude,
      geolocation_err: (this.state.radius === 0 || this.state.longitude === "" || this.state.latitude === "") ? true : false,
    },() => {
      callback(this.state.title_err === true || this.state.desc_err  === true || this.state.geolocation_err === true ||this.state.category_err === true
          ||this.state.region_err === true ||this.state.payment_err === true ||this.state.name_property_err === true ||this.state.country_err === true ||this.state.currency_err === true
          ||this.state.type_property_err === true ||this.state.city_err === true ||this.state.delivery_date_err === true ||this.state.address_err === true ||this.state.number_err === true
          ||this.state.map_err === true ||this.state.distance_beach_err === true ||this.state.distance_center_err === true ||this.state.room_err === true ||this.state.bathroom_err === true
          ||this.state.area_of_err === true ||this.state.price_from_err === true ||this.state.to_err === true ||this.state.area_to_err === true ||this.state.notes_err === true
          ||this.state.year_err === true||this.state.distance_airport_err === true ||this.state.category_region_err === true||this.state.category_type_err === true
          ||this.state.total_bathrooms_err === true  ||this.state.id_room_err === true ||this.state.lowest_price_err === true
          ||this.state.highest_price_err === true ||this.state.lowest_area_err === true ||this.state.highest_area_err === true
          ||this.state.notes_room_err === true )
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
              "category_type": this.state.category_type,
              "region_type":this.state.region_type,
              "to":this.state.to,
              "name_property": this.state.name_property,
              "category": this.state.category,
              "region":this.state.region,
              "area_to":this.state.area_to,
              "area_of":this.state.area_of,
              "number":this.state.number,
              "notes":this.state.notes_err,
              "currency": this.state.currency,
              "property_type": this.state.property_type,
              "city": this.state.city,
              "year": this.state.year,
              "room": this.state.room,
              "address": this.state.address,
              "map": this.state.map,
              "country":this.state.country,
              "payment":this.state.payment,
              "delivery_date":this.state.delivery_date,
              "distance_airport":this.state.distance_airport,
              "status": "created",
              "location": {
                "latitude": this.state.latitude,
                "longitude": this.state.longitude,
                "radius": this.state.radius
              },
              "room_information":{
                  "id_room":this.state.id_room,
                  "lowest_price":this.state.lowest_price,
                  "highest_price":this.state.highest_price,
                  "lowest_area":this.state.lowest_area,
                  "highest_area":this.state.highest_area,
                  "total_bathrooms":this.state.total_bathrooms,
                  "notes_room":this.state.notes_room,
              },
            }
        }).then( (res) => {
          if (res.data.success) {
            //localStorage.setItem("game_id", res.data.data._id)
            //localStorage.setItem("game_title", this.state.game_title)
              alert("Information sent successfully")
            this.setState({
              share_code: res.data.data.shareCode,
              show_share_code: true
            })
        }}).catch( (err) => {
          console.log("err", err);
        })
      }
    })
}

  download_all = (e) => {
    e.preventDefault()
  }

  go = (link) => {
    const fn = () =>{
        this.props.history.push(link);
    }
    return fn.bind(this);
}


handlePage1Click = (e) => {
      e.preventDefault()
    this.setState( {
        viewPage1:true,
        viewPage2:false,
        viewPage3:false,
        bgColor:"red"
    })
}

handlePage2Click = (e) => {
      e.preventDefault()
      this.setState( {
        viewPage1: false,
        viewPage2: true,
        viewPage3: false
      })
}

handlePage3Click = (e) => {
      e.preventDefault()
      this.setState( {
       viewPage1: false,
       viewPage2: false,
       viewPage3: true
        })
    }
onChangeHandler=event=>{
    this.setState({
    selectedFile: event.target.files[0],
        loaded: 0,
    })}

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

    handleChange = (e) => {
    if (e.target.name === "game_location"){
      this.setState({
        game_location: e.target.value,
        latitude: Location2Geo[e.target.value].latitude,
        longitude: Location2Geo[e.target.value].longitude
      })
    } else if (e.target.name === "area_size") {
      this.setState({
        area_size: e.target.value,
        radius: Word2Radius[e.target.value]
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
    });
    }
  }
  render(){
    return(
      <div style={{color: "grey", backgroundColor: "whitesmoke" }} className="container">
            <Navbar />
          {!this.state.viewPage2 && !this.state.viewPage3}
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
              <div style = {{paddingTop: "5%",paddingLeft:"8.5%",paddingRight:"5%"}}>
            <div className="column grid-lg">
              <div style={{paddingTop: "2%"}}>
                <label className="form-label"><h1 style = {{
                    color: "smoke",
                    justifyContent: "center",
                    fontSize : "16px"
                }}>Property Number</h1></label>
                <input className="form-input input-lg"
                       placeholder="number"
                       variant="filled"
                       name="number"
                       type="number"
                       onChange={this.handleChange}
                       value={this.state.number}/>
                {this.state.number_err ? <p className="number-error">You must enter your property number!</p>: ""}
              </div>
                <div className = "form-group">
                    <label className="form-label"><h1 style = {{
                        color: "smoke",
                        justifyContent: "center",
                        fontSize : "16px"
                    }}>Category</h1></label>
                    <select onChange={this.handleChange} name="category_type" value={this.state.category_type} className="form-select select-lg">
                        {Object.keys(categories).map(((opt,key)=> <option key = {key}>{opt}</option>))}
                    </select>
                </div>
                <div className = "form-group">
                    <label className="form-label"><h1 style = {{
                        color: "smoke",
                        justifyContent: "center",
                        fontSize : "16px"
                    }}>Regions</h1></label>
                    <select onChange={this.handleChange} name="category_region" value={this.state.category_region} className="form-select select-lg">
                        {Object.keys(regions).map(((opt,key)=> <option key = {key}>{opt}</option>))}
                    </select>
                </div>

              <div style={{paddingTop: "2%",width:"90%"}}>
                  <h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Payment Type</h1>
                  <ReactMultiSelectCheckboxes
                      options={options}
                  />
              </div>
            </div>
            </div>
              <div style = {{paddingTop: "5%",paddingLeft:"5%",paddingRight:"5%"}}>
              <div className="column grid-lg">
                <div style={{paddingTop: "2%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Name Property</h1></label>
                  <input className="form-input input-lg"
                         placeholder="Name Property"
                         name="name_property"
                         type="text"
                         onChange={this.handleChange}
                         value={this.state.name_property}/>
                  {this.state.name_property_err ? <p className="text-error">!</p>: ""}
                </div>
                <div className = "form-group">
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>City</h1></label>
                  <select onChange={this.handleChange} name="city" value={this.state.city} className="form-select select-lg">
                    {Object.keys(cities).map(((opt,key)=> <option key = {key}>{opt}</option>))}
                  </select>
                </div>
                <div style={{paddingTop: "2%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Year of construction</h1></label>
                  <input className="form-input input-lg"
                         placeholder="Year of construction"
                         name="year"
                         type="date"
                         onChange={this.handleChange}
                         value={this.state.year}
                         InputLabelProps={{
                             shrink: true,
                         }}/>
                  {this.state.year_err ? <p className="date-error">You must enter a year</p>: ""}
                </div>
                <div className = "form-group">
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Currency</h1></label>
                  <select onChange={this.handleChange} name="currency" value={this.state.currency} className="form-select select-lg">
                    {Object.keys(currencies).map(((opt,key)=> <option key = {key}>{opt}</option>))}
                  </select>
                </div>
              </div>
              </div>
              <div style = {{paddingTop: "5%",paddingLeft:"5%",paddingRight:"1%"}}>
              <div className="column grid-lg">
                <div className = "form-group">
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Property Type</h1></label>
                  <select onChange={this.handleChange} name="property_type" value={this.state.property_type} className="form-select select-lg">
                    {Object.keys(property_name).map(((opt,key)=> <option key = {key}>{opt}</option>))}
                  </select>
                </div>
              <div className = "form-group">
                <label className="form-label"><h1 style = {{
                    color: "smoke",
                    justifyContent: "center",
                    fontSize : "16px"
                }}>Country</h1></label>
                <select onChange={this.handleChange} name="country" value={this.state.country} className="form-select select-lg">
                  {Object.keys(countries).map(((opt,key)=> <option key = {key}>{opt}</option>))}
                </select>
              </div>
                <div style={{paddingTop: "2%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Delivery Date</h1></label>
                  <input className="form-input input-lg"
                         placeholder="Delivery Date"
                         name="delivery_date"
                         type="date"
                         onChange={this.handleChange}
                         value={this.state.delivery_date}
                         InputLabelProps={{
                             shrink: true,
                         }}/>
                  {this.state.delivery_date_err ? <p className="date-error">You must select a date</p>: ""}
                </div>
                <div style={{paddingTop: "2%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Address</h1></label>
                  <input className="form-input input-lg"
                         placeholder="Address"
                         name="address"
                         type="text"
                         onChange={this.handleChange}
                         value={this.state.address}/>
                  {this.state.address_err ? <p className="text-error">You must enter your property address</p>: ""}
                </div>
              </div>
                  <div className="input-with-icon-adornment"/>
            </div>
            </div>
              <div className="row grid-lg">
                <div style={{paddingTop: "2%",paddingLeft:"8%",paddingRight:"8%",width:"98.5%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Map</h1></label>
                  <input className="form-input input-lg"
                         placeholder="Map Title"
                         name="map"
                         type="text"
                         onChange={this.handleChange}
                         value={this.state.map}/>
                  {this.state.map_err ? <p className="text-error">!You must give a title to your map</p>: ""}
                </div>
              </div>
          <div style = {{width:'96vw',height: '40vh',paddingLeft:"8%",paddingRight:"8%",paddingTop:"2%"}}>
          <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
              &key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`}
              loadingElement = {<div style={{height:"100%"}} />}
              containerElement = {<div style={{height:"100%"}} />}
              //lat={}
              //should be added based on the city choosen
              lat = '41.105399'
              lng = '29.023522'
              radius = {this.state.center_radius}
              mapElement = {<div style={{height:"100%"}} />}
          />
        </div>
          <div className="columns">
          <div style={{paddingTop: "2%",paddingLeft:"8.5%"}}>
              <label className="form-label"><h1 style = {{
                  color: "smoke",
                  justifyContent: "center",
                  fontSize : "16px"
              }}>The distance to the beach</h1></label>
              <input className="form-input input-lg"
                     placeholder="XX km"
                     name="distance_beach"
                     type="number"
                     onChange={this.handleChange}
                     value={this.state.distance_beach}/>
              {this.state.distance_beach_err ? <p className="number-error">You must enter a distance beach!</p>: ""}
          </div>
              <div style={{paddingTop: "2%",paddingLeft:"10.5%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>The distance to the center</h1></label>
                  <input className="form-input input-lg"
                         placeholder="XX km"
                         name="distance_center"
                         type="number"
                         onChange={this.handleChange}
                         value={this.state.distance_center}/>
                  {this.state.distance_center_err ? <p className="text-error">You must enter a distance center</p>: ""}
              </div>
              <div style={{paddingTop: "2%",paddingLeft:"12.5%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Distance to the airport</h1></label>
                  <input className="form-input input-lg"
                         placeholder="XX km"
                         name="distance_airport"
                         type="number"
                         onChange={this.handleChange}
                         value={this.state.distance_airport}/>
                  {this.state.distance_airport_err ? <p className="number-error">You must enter a distance to airport</p>: ""}
              </div>
          </div>
          <div style={{paddingTop: "3%", paddingRight: "1%", paddingLeft: "8.5%",width:"91.5%"}}>
              < style dangerouslySetInnerHTML={{__html: "\np.dotted {border-style: dotted;border-color:salmon;}\n" }} />
              <p className="dotted"><Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
              >+ Add Room
              </Button></p>
          </div>
          <div className="columns">
              <div style = {{paddingTop: "2%",paddingLeft:"8.5%",paddingRight:"5%"}}>
              <div style={{paddingTop: "2%"}}>
                  <h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Rooms</h1>
                  <ReactMultiSelectCheckboxes
                      options={room_options}
                      value={this.state.id_room}/>
                  {this.state.id_room_err ? <p className="text-error">You must select at least one room</p>: ""}
              </div>
              </div>
              <div style={{paddingTop: "2%",paddingLeft:"17.5%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>The price from</h1></label>
                  <input className="form-input input-lg"
                         placeholder="XXX"
                         name="price_from"
                         type="number"
                         onChange={this.handleChange}
                         value={this.state.price_from}/>
                  {this.state.price_from_err ? <p className="text-error">You must an initial price</p>: ""}
              </div>
              <div style={{paddingTop: "2%",paddingLeft:"12.5%",paddingRight:"5%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>to</h1></label>
                  <input className="form-input input-lg"
                         placeholder="XXX"
                         name="to"
                         type="number"
                         onChange={this.handleChange}
                         value={this.state.to}/>
                  {this.state.to_err ? <p className="number-error">You must enter the last price</p>: ""}
              </div>
          </div>
          <div className="columns">
              <div style = {{paddingTop: "2%",paddingLeft:"8.5%",paddingRight:"5%"}}>
                  <div style={{paddingTop: "2%"}}>
                      <h1 style = {{
                          color: "smoke",
                          justifyContent: "center",
                          fontSize : "16px"
                      }}>Bathrooms</h1>
                      <ReactMultiSelectCheckboxes
                          options={bathroom_options}
                          value={this.state.total_bathrooms}/>
                      {this.state.total_bathrooms_err ? <p className="text-error">You must select at least one </p>: ""}
                  </div>
              </div>
              <div style={{paddingTop: "2%",paddingLeft:"17.5%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>Area from</h1></label>
                  <input className="form-input input-lg"
                         placeholder="XXX"
                         name="area_of"
                         type="number"
                         onChange={this.handleChange}
                         value={this.state.area_of}/>
                  {this.state.area_of_err ? <p className="text-error">You must an initial price</p>: ""}
              </div>
              <div style={{paddingTop: "2%",paddingLeft:"12.5%",paddingRight:"5%"}}>
                  <label className="form-label"><h1 style = {{
                      color: "smoke",
                      justifyContent: "center",
                      fontSize : "16px"
                  }}>to</h1></label>
                  <input className="form-input input-lg"
                         placeholder="XXX"
                         name="area_to"
                         type="number"
                         onChange={this.handleChange}
                         value={this.state.area_to}/>
                  {this.state.area_to_err ? <p className="number-error">You must enter the last price</p>: ""}
              </div>
          </div>
        <div className="row grid-lg">
          <div style={{paddingTop: "2%",paddingLeft:"8%",paddingRight:"8%",width:"98%"}}>
            <label className="form-label"><h1 style = {{
                color: "smoke",
                justifyContent: "center",
                fontSize : "16px"
            }}>Notes</h1></label>
            <input className="form-input input-lg"
                   placeholder="Notes"
                   name="notes"
                   type="text"
                   onChange={this.handleChange}
                   value={this.state.notes}/>
            {this.state.notes_err ? <p className="text-error">You shall enter your note</p>: ""}
          </div>
        </div>
          <div style={{paddingTop: "2%",paddingLeft:"8%"}}>
              <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
              >
                  &nbsp;&nbsp; Delete ⌦ &nbsp;&nbsp;
              </Button>
          </div>
        <div style={{paddingTop: "3%", paddingRight: "1%", paddingLeft: "8%",width:"86.5%"}}>
            < style dangerouslySetInnerHTML={{__html: "\np.dotted {border-style: dotted;}\n" }} />
          <p className="dotted"><h1 style = {{
              color: "salmon",
              justifyContent: "center",
              fontSize : "16px"
          }}> &nbsp;&nbsp; pdf files</h1></p>
            <StyledDropzonePdf />
          </div>
          <div style={{paddingTop: "3%", paddingRight: "1%", paddingLeft: "8%",width:"93.5%"}}>
          </div>
          <div style={{paddingTop: "2%", paddingRight: "1%", paddingLeft: "8%",width:"86.5%"}}>
          < style dangerouslySetInnerHTML={{__html: "\np.dotted {border-style: dotted;border-padding: 12;border-width: 1}\n" }} />
          <p className="dotted"><h1 style = {{
              color: "salmon",
              justifyContent: "center",
              fontSize : "16px"
          }}> &nbsp;&nbsp; Floor Plans</h1></p>
            <StyledDropzoneImage/>
        </div>
          <div style={{paddingTop: "1%", paddingRight: "1%", paddingLeft: "8%",width:"86.5%"}}>
              <style dangerouslySetInerHTML={{__html: "\np.dotted {border-style: dotted;}\n" }} />
              <p className="dotted"><h1 style = {{
                  color: "salmon",
                  justifyContent: "center",
                  fontSize : "16px"
              }}> &nbsp;&nbsp; Add Photos</h1></p>
              <StyledDropzoneImage/>
          </div>
          <div style = {{paddingTop: '3%',paddingRight:"1%",paddingLeft:"80%"}}>
          <Button variant="contained" onClick={this.submit_data && this.redirectToPage2} color="primary" style={{fontSize:16, marginLeft : "auto", marginRight: 100, marginBottom:70}}>
              Next ➞
          </Button>
          </div>
          <div style = {{
              paddingRight:"0%",
              paddingTop:"0.5%",
              paddingLeft:"0",
              width:"100%",
              height:200,
              backgroundColor:"gray"
          }}
          >
          </div>
            </div>
    )
  }
}
export default Adam;


