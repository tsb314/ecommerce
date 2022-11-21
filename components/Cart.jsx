import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import axios from 'axios'
import { useRouter } from 'next/router'
import { reset } from '../redux/cartSlice'


const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const amount = cart.total;
    const currency = "USD";
    const style = {"layout":"vertical"};
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const router = useRouter();

    const createOrder = async (data) => {
        try{
            const res = await axios.post("https://shimmering-liger-884c4f.netlify.app/api/orders", data);
            if (res.status === 201) {
                dispatch(reset());
                router.push(`/order/${res.data._id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        //console.log(details);
                        const shipping = details.purchase_units[0].shipping;
                        const cartItems = cart.products;
                        createOrder({
                            customer: shipping.name.full_name,
                            address: shipping.address.address_line_1,
                            products:
                                cartItems.map(i => i)
                            ,
                            orderTotal: cart.total,
                            method: 0,
                        });
                    });
                }}
            />
        </>
    );
}
  return (
    <div className={styles.pageContainer}>
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
                {cart.products.map((product) => (
                <tbody key={product._id}>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src={product.img} alt='' layout='fill' objectFit='cover'/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                            <span className={styles.price}>${product.price}</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>{product.quantity}</span>
                        </td>
                        <td>
                            <span className={styles.total}>${product.price * product.quantity}</span>
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
                    <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>${cart.total}
                </div>
                {open ? (
            <div className={styles.buttons}>
                <PayPalScriptProvider
                options={{
                    "client-id": "AaT0Rg2YaU-PS9RKpX3F8LPiwCvVt7XCxY9V9-1FySRFC2FnPGxfyopTm2jDZhfAb5rfVMQJ0jRNnOJT",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "venmo,card,paylater"

                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
            </div>
                ) : (
                    <button onClick={()=>setOpen(true)} className={styles.button}>Checkout Now</button>

                )}
            </div>
        </div>
    </div>
  )
}

export default Cart