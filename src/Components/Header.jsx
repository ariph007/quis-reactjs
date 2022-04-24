import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./Header.module.css"
import logo from "../Images/logo.png"

export const Header = () => {
  return (
    <div>
    <nav className={styles.header}>
    <Link to='/'><img className={styles.logo} src={logo} alt='logo'></img></Link>
        <div className={styles.menuWrapper}>
        <ul className = {styles.menu}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            </ul>
            <Link to='/contact'><button className={styles.buttonContact}><a href="#contact">Contact</a></button></Link>
        </div>
        
    </nav>
    </div>
  )
}

export default Header;