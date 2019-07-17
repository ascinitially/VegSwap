import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    offer: "",
    quantity: "",
    // request: "",
    // requestquantity:


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
    alert(`Offer: ${this.state.offer}\nQuantity: ${this.state.quantity}`);
    this.setState({ offer: "", quantity: "" });
  };

  render() {
    return (
      <form>
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
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
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
