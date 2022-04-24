import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AddTtoCart.module.css'

function AddToCart(props) {
  return (
    <Link to='/'><button className={styles.fill}>{props.text}</button></Link>
  )
}

export default AddToCart