import React from 'react'
import Header from '../Components/Header'
import styles from './DetailProduct.module.css'

const DetailProduct = () => {
  return (
    <div>
        <Header />
        <div className={styles.container}>
            <div className='left'>
                <img className={styles.imgProduct} src='https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg' alt="Product" />
            </div>
            <div className='right'>
            <p className={styles.title}>MBJ Women's Solid Short Sleeve Boat Neck V</p>
            <p className={styles.rate}>⭐ 3.4</p>
            <p className={styles.count}> Sold : 126</p>
            <p className={styles.price}>Rp 215,000</p>
            <p className={styles.category}>Women Clothing</p>
            <p className={styles.description}>95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem</p>

            </div>
        </div>
    </div>
  )
}

export default DetailProduct