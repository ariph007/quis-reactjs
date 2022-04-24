import React from 'react'
import Header from '../Components/Header'
import ProductCard from '../Components/ProductCard'
import styles from './Home.module.css'
import products from '../Constant/Products'

function createCard(product){
  return (
    <ProductCard 
    key = {product.id}
    urlImg = {product.image}
    prodName = {product.title}
    prodPrice = {(product.price * 10000).toLocaleString()}
    prodRating = {product.rating.rate}
    prodSold = {product.rating.count}
  />
  )
}

export const Home = () => {
  return (
     <div>
          <Header />
          <div className={styles.productCard}>
          {products.map(createCard)}
          </div>
     </div>
  )
}
