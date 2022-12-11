import axios from 'axios'
import React from 'react'
import Head from 'next/head'
import ProductList from '../../components/ProductList';

const all = ({productList}) => { 
  
  return (
    <div>
      <Head>
        <title>Products | Mockup Cosmetics</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Mockup Cosmetics. The one stop shop for your curly hair needs." />
        <meta name="keywords" content="NextJS, ReactJS, CSS, HTML, JavaScript, Ecommerce"/>
        <meta name="author" content="Tia Brimer"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <ProductList productList={productList}/>
    </div>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get('https://mockup-cosmetics.netlify.app/api/products');
  return{
   props:{
     productList: res.data,
   },
  }; 
};

export default all