import React from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
    <div className={styles.bannerContainer}>
      <div className={styles.bannerText}>Contact Us</div>
    </div>
    <div className={styles.articleContainer}>
    <h1>Thank you for your interest in Mockup Cosmetics.</h1>
      <h3>General inquiries, damaged or missing products, or retail/wholesale questions?</h3>
        <p>Call us at (555)555-555 or email us at contact@mockupcosmetics.com</p>


         <h3>Available Hours: Mon–Fri | 9am–5pm CST</h3>
      <div>
        <p>Mockup Cosmetics<br/>
            1234 Main Street <br/>
            St. Louis, MO 63137</p>
      </div>

    </div>
  </div>
  )
}

export default Contact