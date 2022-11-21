import React from 'react'
import styles from '../styles/Product.module.css'
import { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'

const ProductPage = ({product}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addProduct({...product, quantity}));
    };
 
  return (
    <div className={styles.container}>
        <div className={styles.top}>
        <div className={styles.left}>
            <div className={styles.productImg}>
                <Image src={product.img} layout="fill" alt="" priority={true}/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{product.title}</h1>
            <span className={styles.price}>${product.price}</span>
            <p className={styles.desc}>{product.desc}</p>
            <p><strong>How To Use: </strong>{product.howto}</p>
            <p><strong>Ingredients: </strong>{product.ingredients}</p>
            <div className={styles.addCart}>
                <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.number}/>
                <button className={styles.button} onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductPage