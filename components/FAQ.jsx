import React from 'react'
import styles from '../styles/FAQ.module.css'
import Image from 'next/image'

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <Image src='/imgs/curlyhair-models-standing.jpg' alt='Curly hair models' layout='fill' objectFit='cover' priority={true}/>
      </div>
      <div className={styles.articleContainer}>
      <h3>Do your products work on all curl textures?</h3>
      <p>Yes, our work for all curl textures from 3A to 4C.</p>
      <h3>How soon can I see results?</h3>
      <p>You will see results instantly when focusing on the feel and look of you hair. Our products make your hair more managable, defined, and soft.</p>
      <h3>Can your products be used on children?</h3>
      <p>Yes, our products can be used on children as there are no toxic ingredients in our products.</p>
      <h3>Are your products sold in stores?</h3>
      <p>No, Mockup Cosmetics is solely sold on our website at this time.</p>
      <h3>When will my order ship?</h3>
      <p>Orders take 1-3 business days to process. Once the order is processed, shipping will take up to 2-7 business days depending on the selected shipment method at checkout.</p>
      </div>
    </div>
  )
}

export default FAQ