import React from 'react'
import Header from '../Components/Header'
import styles from './About.module.css'
import HomePageBtn from '../Components/HomePageBtn.jsx'

const About = () => {
  return(
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}>
        <p className={styles.title}>We are #1 Online Shopping in Wakanda Country</p>
        <p className={styles.subtitle}>We help people +62 to find the right one. We always improve customer loyalty with beatifully products</p>
        <HomePageBtn text = 'Get Started' />
        </div>
        <div className={styles.right}>
          <img className={styles.imgRight} src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt='Meeting' />
        </div>
      </div>
    </div>
  )
}

export default About