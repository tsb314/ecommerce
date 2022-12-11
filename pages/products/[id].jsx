import React from 'react'
import Head from 'next/head'
import ProductPage from '../../components/ProductPage'
import axios from 'axios'

const Product = ({product}) => {
  
    return (
      <div>
        <Head>
        <title>Product Info | Mockup Cosmetics</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Mockup Cosmetics. The one stop shop for your curly hair needs." />
        <meta name="keywords" content="NextJS, ReactJS, CSS, HTML, JavaScript, Ecommerce"/>
        <meta name="author" content="Tia Brimer"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <ProductPage product={product} key={product._id}/>
      </div>
  )
}

export const getServerSideProps = async ({params}) =>{
  const res = await axios.get(`https://mockup-cosmetics.netlify.app/api/products/${params.id}`);
  return{
   props:{
     product: res.data,
   },
  }; 
};

export default Product

