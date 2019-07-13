import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHolding } from '@fortawesome/free-solid-svg-icons';
import style from "./grid.module.css";




export default class GridComponent extends React.Component {
  state = {
    offers: [],
    openModal: false,
    selectedOffer: {},
    isOfferReady: false

  }
  componentDidMount() {
    // go to database to get offer, asking, username
    const dummyOffers = [
      {
        id: 1,
        userName: "Alex",
        location: {
          latitude: 150,
          longitude: 200,
        },
        offering: "Asparagus",
        asking: "Tomatoes",
        detail: "13lbs",
        contact: "alex@gmail.com"
      },
      {
        id: 2,
        userName: "Brady",
        location: {
          latitude: 150,
          longitude: 200,
        },
        offering: "Carrots",
        asking: "Tomatoes",
        detail: "25lbs",
        contact: "brady@gmail.com"
      },
      {
        id: 3,
        userName: "Tom",
        location: {
          latitude: 150,
          longitude: 200,
        },
        offering: "Kale",
        asking: "Celery",
        detail: "15lbs",
        contact: "tom@gmail.com"
      },
    ];
    if (dummyOffers.length > 0) {
      this.setState({
        offers: dummyOffers
      })
    }

  }
  showOfferDetails = offer => {
    console.log(offer);
    this.setState({
      selectedOffer: offer,
      isOfferReady: true
    },
   () => {
     this.setState({openModal: true})
   }
   )
  }
  render() {
    const { header, description } = this.props;
    return (

      <div style={{
        // backgroundColor: "red",
        padding: 10,
        // border: "10px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexWrap: "wrap"

      }}>
        {
          this.state.offers.map((e, i) =>
            <div style={{
              margin: 10,
              padding: 20,
              backgroundColor: "rgba(25,77,51,.7)",
              width: "20vw",
              textAlign: "center"
            }}>
              <p style={{
                fontSize: 18,
                fontWeight: 900
              }}>{e.userName}</p>

              <p style={{
                fontSize: 15,
                fontWeight: 900
              }}>Offering: {e.offering}</p>

              <p style={{
                fontSize: 15,
                fontWeight: 900
              }}>Asking: {e.asking}</p>

              <div 
                  title="ACCEPT OFFER"
                  onClick={()=> this.showOfferDetails(e)} 
                >
                <FontAwesomeIcon className={style.hand} icon={faHandHolding} size="4x" />
                <i className={'fa fa-hand-holding'}></i>
              </div>

            </div>
          )
        }
      {
        // if the state of the open modal is true or button is clicked then open modal
        (this.state.openModal && this.state.isOfferReady) &&
          <div style={inlineStyles.modalContainer}>
          <div style={inlineStyles.modalinnerContainer}>
            {/* <p>Location: {this.state.offer.location} </p> */}
            <p> Details: {this.state.selectedOffer.detail}</p>
            <p>Contact: {this.state.selectedOffer.contact}</p>
            <button onClick={()=> this.setState({openModal: false, isOfferReady: false})} 
            style={inlineStyles.dismissButton}>X</button>
          </div>
        </div>
      }
        

      </div>


    );
  }
}

const inlineStyles = {
  modalContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.7)",
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
  },

  modalinnerContainer: {
    backgroundColor: "white",
    minWidth: "40%",
    minHeight: "20%",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative"

  },

  dismissButton: {
    position: "absolute",
    right: 20,
    top: 20,
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 25,
    border: 0,

  }

}