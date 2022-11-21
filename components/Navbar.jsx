import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { faBars, faBagShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const quantity = useSelector(state=>state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href='/' passHref>
          Mockup          
          </Link>
        </div>
        <div className={clicked ? styles.activeNavItems : styles.navitems}>
          <div className={styles.item} onClick={(e) => {e.preventDefault() 
            setClicked(false)}}>
            <Link href='/products/all' passHref>
              Products
            </Link>
          </div>
          <div className={styles.item} onClick={(e) => {e.preventDefault() 
            setClicked(false)}}>
            <Link href='/about' passHref>
              About Us
            </Link>
          </div>
          <div className={styles.item} onClick={(e) => {e.preventDefault() 
            setClicked(false)}}>
          <Link href='/cart' passHref>
            <div className={styles.cart}>
              <FontAwesomeIcon icon={faBagShopping}/>
              <div className={styles.counter}>{quantity}</div>
            </div>
          {/*</div>*/}
          </Link>
          </div>  
          </div>
          <div className={styles.menu} onClick={() => setClicked(!clicked)}>
              <FontAwesomeIcon icon={faBars}/>
          </div>
      </div>

    </div>
  )
}

export default Navbar
