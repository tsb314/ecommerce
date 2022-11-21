import React from 'react'
import Head from 'next/head'
import Shipping from '../components/Shipping'

const shipping = () => {
  return (
    <div>
      <Head>
        <title>Shipping | Mockup Cosmetics</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Mockup Cosmetics. The one stop shop for your curly hair needs." />
        <meta name="keywords" content="NextJS, ReactJS, CSS, HTML, JavaScript, Ecommerce"/>
        <meta name="author" content="Tia Brimer"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Shipping />
    </div>
  )
}

export default shipping