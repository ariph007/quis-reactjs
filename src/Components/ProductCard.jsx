import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

const ProductCard = (props) => {
  return (
    
    <div className={styles.cardWrapper}>
        <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <img className={styles.imageContent} src={props.urlImg} alt="ProductPicture"/>
        </div>
        <div className={styles.desc}>
            <p className={styles.productName}>{props.prodName.length > 40 ? props.prodName.substring(0, 40) + " ..." : props.prodName}</p>
            <p className={styles.price}>Rp {props.prodPrice}</p>
            <div className={styles.footerProduct}>
                <p className={styles.rating}> ⭐{props.prodRating}</p>
                <p className={styles.sold}>Sold : {props.prodSold}</p>
            </div>  
        </div>
    </div>
    </div>
    
  )
}

export default ProductCard