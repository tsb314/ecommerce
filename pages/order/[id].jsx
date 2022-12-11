import React from 'react'
import Head from 'next/head'
import Order from '../../components/Order'
import axios from 'axios'

const order = ({order}) => {
  return (
    <div>
      <Head>
        <title>Order Confirmation | Mockup Cosmetics</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Mockup Cosmetics. The one stop shop for your curly hair needs." />
        <meta name="keywords" content="NextJS, ReactJS, CSS, HTML, JavaScript, Ecommerce"/>
        <meta name="author" content="Tia Brimer"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Order order={order}/>
    </div>
  )
}

export const getServerSideProps = async ({params}) => {
  const res = await axios.get(`https://mockup-cosmetics.netlify.app/api/orders/${params.id}`);
  return{
   props:{
     order: res.data,
   },
  }; 
};

export default order