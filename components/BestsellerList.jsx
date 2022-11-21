import React from 'react'
import styles from '../styles/BestsellerList.module.css'
import Link from 'next/link'
import Image from 'next/image'

// eslint-disable-next-line react/display-name
const ImageLink = React.forwardRef(({href, onClick, product}, ref) => { 
  return(
    <a href={href} onClick={onClick} ref={ref}>
      <Image src={product.img} alt='' width='250' height='250'/>
    </a>
   )});

const BestsellerList = ({productList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Bestsellers</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className={styles.wrapper}>
      {productList.map((product, index) => {
        if(index % 2 === 0) {
           return(
            <div className={styles.productBox} key={product._id}>
        <Link href={`/products/${product._id}`} passHref legacyBehavior>
          <ImageLink product={product} key={product._id}/>
        </Link>
          <h3 className={styles.productTitle}>{product.title}</h3>
          <span className={styles.productPrice}>{product.price}</span>
        </div>
          )
        }
      }
    )}
    </div>
    </div>
   )
}
export default BestsellerList
