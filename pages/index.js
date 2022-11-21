import axios from 'axios'
import Head from 'next/head'
import Slideshow from '../components/Slideshow'
import BestsellerList from '../components/BestsellerList'
import Review from '../components/Review'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home({productList}) {
  // if(typeof window !== "undefined"){
  //   const product = localStorage.getItem('key')
  //   console.log("You are in the broswer")
  // } else {
  //   console.log("You are on the server")
  // }
  return (
    <div>
      <Head>
        <title>Mockup Cosmetics</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Mockup Cosmetics. The one stop shop for your curly hair needs." />
        <meta name="keywords" content="NextJS, ReactJS, CSS, HTML, JavaScript, Ecommerce"/>
        <meta name="author" content="Tia Brimer"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Slideshow/>
    <BestsellerList productList={productList}/>
    <Review/>
    </div>
  )
}

export const getServerSideProps = async () =>{
   const res = await axios.get('https://shimmering-liger-884c4f.netlify.app/api/products');
   return{
    props:{
      productList: res.data,
    },
   }; 
};
