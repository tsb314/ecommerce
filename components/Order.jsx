import React from 'react'
import styles from '../styles/Order.module.css'
import Image from 'next/image'

const Order = ({order}) => {

  return (
    <div className={styles.pageContainer}>
        <div className={styles.confirmation}>
            <h1>Thanks for shopping with us!!!</h1>
            <strong>Order ID:<span> {order._id}</span></strong>
            <strong>Customer:<span> {order.customer}</span></strong>
            <strong>Shipping Address:<span> {order.address}</span></strong>
        </div>
        <div className={styles.summary}>ORDER SUMMARY</div>
        <div className={styles.orderContainer}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tbody>
                <tr className={styles.trTitle}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </tbody>
             {order.products.map(order => (
                <tbody key={order._id}>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src={order.img} alt='' layout='fill' objectFit='cover'/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>{order.title}</span>
                        </td>
                        <td>
                            <span className={styles.price}>${order.price}</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>{order.quantity}</span>
                        </td>
                        <td>
                            <span className={styles.total}>${order.price * order.quantity}</span>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Cart Total</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>${order.orderTotal}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>${order.orderTotal}
                </div>
                <button className={styles.button}>PAID</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Order