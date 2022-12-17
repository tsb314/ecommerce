import React from 'react'
import styles from '../styles/Shipping.module.css'
import Image from 'next/image'

const Shipping = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <Image src='/imgs/curlyhair-models-standing.jpg' alt='Curly hair models' layout='fill' objectFit='cover' priority={true}/>
      </div>
      <div className={styles.articleContainer}>
      <h3>Ground Shipping</h3>
      <p>Ground shipping is a flat rate of $5 and takes 5-7 business days after your order have been processed.</p>
      <h3>Express Shipping</h3>
      <p>Express shipping is a flat rate of $12 and takes 1-2 business days after your order is processed. Orders with express shipping will be shipped out the same day if it is placed before 12:00 PM CST.</p>
      </div>
    </div>
  )
}

export default Shipping