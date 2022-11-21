import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.footerBox}>
      <div className={styles.boxes}>
          <h3 className={styles.logo}>Mockup</h3>
          <p><span>Headquarters:</span> MOCKUP COSMETICS<br/>1234 Main Street<br/>St. Louis, MO 63137</p>
          <p><span>Email:</span> contact@mockupcosmetics.com</p>
      </div>
      <div className={styles.boxes}>
          <h3>Quick Links</h3>
          <Link href='/faq' passHref>FAQS</Link>
          <Link href='/refund' passHref>Refund Policy</Link>
          <Link href='/shipping' passHref>Shipping Policy</Link>
          <Link href='/contact' passHref>Contact Us</Link>
      </div>
      <div className={styles.boxes}>
          <h3>Live Customer Service</h3>
          <p><span>Monday-Friday:</span> 8:00 AM - 5:00 PM CST<br/><span>Saturday-Sunday:</span> 12:00 PM - 5:00 PM CST</p>
      </div>
      </div>
      <div className={styles.footer}>Copyright 2022 By Tia Brimer</div>
    </div>
  )
}

export default Footer

