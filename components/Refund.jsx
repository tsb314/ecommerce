import React from 'react'
import styles from '../styles/Refund.module.css'
import Image from 'next/image'

const Refund = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
      <Image src='/imgs/curlyhair-models-standing.jpg' alt='Curly hair models' layout='fill' objectFit='cover' priority={true}/>
      </div>
      <div className={styles.articleContainer}>
      <h3>Refunds and Returns</h3>
      <p>Refunds are rewarded in the incident that our company failed to send your order or your order is received damaged.</p>
      <p>Returns are not welcomed due to the nature of the product. We do not want any of our customer receiving used products.</p>
      </div>
    </div>
  )
}

export default Refund