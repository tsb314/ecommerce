import React from 'react'
import styles from '../styles/ProductList.module.css'
import Image from 'next/image'
import Link from 'next/link'

// eslint-disable-next-line react/display-name
const ImageLink = React.forwardRef(({href, onClick, product}, ref) => { 
  return(
    <a href={href} onClick={onClick} ref={ref}>
      <Image src={product.img} alt='' width='250' height='250'/>
    </a>
   )});

const ProductList = ({productList}) => {

  return (
    <div className={styles.pageContainer}>
      <div className={styles.bannerContainer}>
        <Image src='/imgs/curlyhair-models-standing.jpg' alt='Curly hair models' layout='fill' objectFit='cover' priority={true}/>
      </div>
      <div className={styles.productList}>
        {productList.map((product) => {
            return(
                <div className={styles.productBox} key={product._id}>
                  <Link href={`/products/${product._id}`} passHref legacyBehavior>
                  <ImageLink product={product}/>
                  </Link>
                <h3>{product.title}</h3>
                <span>{product.price}</span>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default ProductList