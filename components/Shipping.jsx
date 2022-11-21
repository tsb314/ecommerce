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
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.</p>
      <h3>Express Shipping</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.</p>
      </div>
    </div>
  )
}

export default Shipping