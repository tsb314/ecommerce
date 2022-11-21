import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <Image src='/imgs/curlyhair-models-standing.jpg' alt='Curly hair models' layout='fill' objectFit='cover'/>
        {/* <div className={styles.bannerText}>About Us</div> */}
      </div>
      <div className={styles.articleContainer}>
         <div className={styles.sectionContainer}>
            <div className={styles.imgContainer}>
                <Image src='/imgs/black-family.jpg' alt='CEO and her family' width='500' height='500'/>
            </div>
            <div className={styles.textContainer}>
            <h1>Meet the CEO</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
        anim id est laborum.</p>
        </div>
        </div> 
        <div className={styles.sectionContainer}>
          <div className={styles.textContainer}>
              <h1>Our Products</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
              anim id est laborum.</p>
            </div>
            <div className={styles.imgContainer}>
                <Image src='/imgs/shampoo-conditioner.jpg' alt='Shampoo and Conditioner' width='500' height='500'/>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default About