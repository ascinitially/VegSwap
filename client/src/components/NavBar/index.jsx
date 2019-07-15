import React from "react";
import { Link } from "react-router-dom";
import "../../components/style/css.css";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
export default function NavBar() {
  return (
    
      <div class="w3-top">
        <div class="w3-row w3-large w3-black" style = {styles.navBar}>

            <div class="w3-col s3">
                <Link to ="/" class="w3-button w3-block" style = {styles.linkStyles}>Home</Link>
            </div>
            <div class="w3-col s3">
                <a href="Offers" class="w3-button w3-block" style = {styles.linkStyles}>Current Offers</a>
            </div>
            <div class="w3-col s3">
                <a href="Makeoffer" class="w3-button w3-block" style = {styles.linkStyles}>Make an Offer</a>
            </div>
            <div class="w3-col s3">
                <a href="Login" class="w3-button w3-git block" style = {styles.linkStyles}>Log In or Register</a>
            </div>
        </div>
    </div>
    
  );
}

var styles = {
  linkStyles: {
    color: "#fff",
    fontFamily: '"Lato", sans-serif',

  },

  navBar: {
    backgroundColor: "black",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
}


}