import React from 'react'
import Head from 'next/head'
import FAQ from '/components/FAQ'

const faq = () => {
  return (
    <div>
      <Head>
        <title>FAQ | Mockup Cosmetics</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Mockup Cosmetics. The one stop shop for your curly hair needs." />
        <meta name="keywords" content="NextJS, ReactJS, CSS, HTML, JavaScript, Ecommerce"/>
        <meta name="author" content="Tia Brimer"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <FAQ />
    </div>
  )
}

export default faq