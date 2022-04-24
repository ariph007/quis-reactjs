import React from "react";
import styles from './notFound.module.css'
import HomePageBtn from "../Components/HomePageBtn";

class NotFound extends React.Component {
    render() {
      return <div className={styles.site}>
      <div className={styles.sketch}>
          <div className={`${styles.beesketch} ${styles.red}`}></div>
          <div className={`${styles.beesketch} ${styles.blue}`}></div>
      </div>
  
  <h1>404:
      <small>UH OH! You're lost.</small>
      <p>The page you are looking for does not exist. How you get here is a
mystery. But you can click the button below to go back to the
homepage.</p>
        <div className={styles.buttonBack}>
        <HomePageBtn text= 'Back to Home Page'/>
        </div>

      </h1>
  </div>
    }
  }

export default NotFound;