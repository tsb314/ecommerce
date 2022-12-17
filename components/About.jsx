import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
      <Image src='/imgs/curlyhair-models-standing.jpg' alt='Curly hair models' layout='fill' objectFit='cover' priority={true}/>
      </div>
      <div className={styles.articleContainer}>
         <div className={styles.sectionContainer}>
            <div className={styles.imgContainer}>
                <Image src='/imgs/black-family.jpg' alt='CEO and her family' width='500' height='500'/>
            </div>
            <div className={styles.textContainer}>
            <h1>Meet the Founder & CEO, Brittany Jones</h1>
            <p>Mockup Comestics was created by Brittany Jones, a licensed cosmetologist, wife, and mother of two firls, who desired to share all of her wisdom and knowledge about ingredients for healthy hair. After years of helping hundreds of women grow their hair she felt it was time to help others around the world. The result is a brand that delivers products that contain natural ingredients and are effetive for not only longer hair but healthier hair.</p>
        </div>
        </div> 
        <div className={styles.sectionContainer}>
          <div className={styles.textContainer}>
              <h1>Our Products</h1>
              <p>We believe healthy ingredients allow you to experience healthy hair. That is why we created natural hair products inclusive of all curly hair textures. From shampoo to styling products, we have you covered!</p>
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