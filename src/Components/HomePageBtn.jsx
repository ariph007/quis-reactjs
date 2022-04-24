import React from 'react'
import styles from './HomePageBtn.module.css'
import { Link } from 'react-router-dom'

function HomePageBtn(props) {
  return (
    <Link to='/'><button className={styles.buttonHome}>{props.text}</button></Link>
  )
}

export default HomePageBtn