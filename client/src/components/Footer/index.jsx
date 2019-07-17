import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid ">
        <div className="row justify-content-around">
          <div className="col-6 col-md-2">
            <h5 className={styles.title}>VeggieSwapV2</h5>
            <p className={styles.description}>
              The app to a healthier, happier, veggie-loving you!
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
