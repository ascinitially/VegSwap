import React, { Component } from "react";
import FormComponent from "../Form/FormComponent";
// import classnames from "classnames";
import GridComponent from "./GridComponent";
import WarningMessage from "../WarningMessage";
// import GreyBox from "../../images/GreyBox.svg";
// import styles from "./grid.module.css";
import CONSTANTS from "./../constants";
import backgrdimg from "./backgrd.jpg";
import logo from "./veggieswap.png";
import veggiemain from "./veggiemain.jpg";
import veggiehand from "./handwithveggies.jpg";
import carrotswoman from "./womanwithcarrots.jpg";
import { Slide } from 'react-slideshow-image';
// import handwithsmallplant from "./handwithsmallplant.jpg";




// slideshow properties
const slideImages = [
  veggiemain,
  veggiehand,
  carrotswoman
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
 
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }

}

const slideStyle = {
  height:200
}
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
        
          <div style={{'backgroundImage': `url(${slideImages[0]})`,
                        'height': 500,
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat',
                      
        }}>
              <span class="title">TRADE VEGGIES</span>
          </div>
        </div>
        <div className="each-slide" style={slideStyle}>
          <div style={{'backgroundImage': `url(${slideImages[1]})`,
                      'height':500,
                      'background-repeat': 'no-repeat',
                     
                      'background-size': 'cover',
                      
        }}>
            <span class="title">GROW A COMMUNITY</span>
          </div>
        </div>
        <div className="each-slide" style={slideStyle}>
          <div style={{'backgroundImage': `url(${slideImages[2]})`,
                      'height':500,
                      'background-size': 'cover',
                      'background-repeat': 'no-repeat',
                      'object-fit': 'fill',
        }}>
            <span class="title">MEET YOUR NEIGHBORS</span>
          </div>
        </div>
      </Slide>
    )
}

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridTextAssets: [{ description: "", header: "", id: 0 }],
      WarningMessageOpen: false,
      WarningMessageText: ""
    };

    this.handleWarningClose = this.handleWarningClose.bind(this);
  }


  // Get the text sample data from the back end
  componentDidMount() {
    fetch(CONSTANTS.ENDPOINT.GRID)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(result => this.setState({ gridTextAssets: result }))
      .catch(error =>
        this.setState({
          WarningMessageOpen: true,
          // WarningMessageText: `Request to get grid text failed: ${error}`
        })
      );
  }

  handleWarningClose() {
    this.setState({
      WarningMessageOpen: false,
      WarningMessageText: ""
    });
  }

  render() {
    const {
      gridTextAssets,
      WarningMessageOpen,
      WarningMessageText
    } = this.state;
    return (
      <main id="mainContent" style = {{
        position: "relative",
      }}>
        <div className= "text-center" style = {{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            padding: 50,
            margin: 20,
            
          }}>

        </div>
            <Slideshow>

            </Slideshow>
        <div className="container" style= {{
          backgroundImage: `url(${backgrdimg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
          <div className="row justify-content-center py-5">
            <h1>Current Offers</h1>
          </div>

          <div className="row pb-5 justify-content-center">
            {gridTextAssets.map(textAssets => (
              <GridComponent
                key={textAssets.id}
                header={textAssets.title}
                description={textAssets.shortDescription}
                
              />
            ))}
          </div>
        </div>
        <WarningMessage
          open={WarningMessageOpen}
          text={WarningMessageText}
          onWarningClose={this.handleWarningClose}
        />
         {/* <div style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          zIndex: 1000,
        }}>
          Modal Data
        </div> */}


        <div className="container" style= {{
          // backgroundImage: `url(${handwithsmallplant})`,
          // backgroundPosition: "center",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat"
        }}>
          <div className="makeoffertitle" style = {{
            textAlign: "center",
            backgroundImage: `url(${backgrdimg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}>
            <h1>Make an Offer!</h1>
            <br></br>
            <br></br>

            <div className="justify-content-center">
            {gridTextAssets.map(textAssets => (
              <FormComponent
                key={textAssets.id}
                header={textAssets.title}
                description={textAssets.shortDescription}
                
              />
            ))}
          </div>
            
          </div>
          </div>
        

      </main>

    );
  }
}
