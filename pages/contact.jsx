import React from 'react'
import Head from 'next/head'
import Contact from '../components/Contact'

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us | Mockup Cosmetics</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Mockup Cosmetics. The one stop shop for your curly hair needs." />
        <meta name="keywords" content="NextJS, ReactJS, CSS, HTML, JavaScript, Ecommerce"/>
        <meta name="author" content="Tia Brimer"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Contact />
    </div>
  )
}

export default contact