import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    offer: "",
    quantity: "",
    request: "",
    requestquantity: ""


  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;


    // Set the state for the appropriate input field

    this.setState({
      [name]: value
    });
  };


  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Offer: ${this.state.offer}\nQuantity: ${this.state.quantity}\nRequest: ${this.state.request}\nRequestQuantity: ${this.state.request}`);
    this.setState({ offer: "", quantity: "", request: "", requestquantity: "" });
    fetch("/api/addnewoffer",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          UserName: "Alex",
          offering: this.state.offer,
          OfferAmount: this.state.quantity,
          asking: this.state.request,
          RequestAmount:this.state.requestquantity

        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(function(res){ console.log(res) })
  };

  render() {
    return (

      <div className="table table-striped table-bordered text-center" style={{
        borderRadius: '10px',
        border: '1px solid black',
        width: '70%',
        height: '50%',
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#AA8CBB',
        marginLeft: '15%',
        

      }}>

        <form className="makeofferform" style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          // position: "absolute",
          flex: 1,
          right: 0,
          left: 0,
        }}>
          <label>Offer:</label>
          <input
            type="text"
            placeholder="Your Offer"
            name="offer"
            value={this.state.offer}
            onChange={this.handleInputChange}
          />
          <label>Quantity:</label>
          <input
            type="text"
            placeholder="Your Quantity"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleInputChange}
          />

          <Dropdown as={ButtonGroup}>
            <Button variant="success">Units</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">lbs</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Oz</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Dozen</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <br></br>
          <br></br>
          <p>AND</p>
          <br></br>

          <label>Requesting:</label>
          <input
            type="text"
            placeholder="Your Request"
            name="request"
            value={this.state.request}
            onChange={this.handleInputChange}
          />

          <label>Request Quantity:</label>
          <input
            type="text"
            placeholder="Your Request Amount"
            name="requestquantity"
            value={this.state.requestquantity}
            onChange={this.handleInputChange}
          />

<Dropdown as={ButtonGroup}>
            <Button variant="success">Units</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">lbs</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Oz</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Dozen</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br></br>
          <br></br>



          <button onClick={this.handleFormSubmit}>Submit Offer!</button>
        </form>
        <br></br>
        <br></br>
      </div>
      


    );
  }
}
export default Form;


// This file exports the Input, TextArea, and FormBtn components

// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }
