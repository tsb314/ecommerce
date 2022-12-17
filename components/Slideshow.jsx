import React from 'react'
import Image from 'next/image'
import styles from '../styles/Slideshow.module.css'
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Slideshow = () => {

  const slides = [
    "/imgs/9.png",
    "/imgs/10.png",
    "/imgs/11.png"
  ];
  const delay = 3500;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
      if(timeoutRef.current){
        clearTimeout(timeoutRef.current);
      }
    }

    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
        setIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
        delay
      );

      return () => {
        resetTimeout();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    const handleArrow = (direction) =>{
        if(direction === "l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction === "r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left: 0}} onClick={()=>handleArrow("l")}>
        <FontAwesomeIcon icon={faChevronLeft} className={styles.iconLeft}/>
      </div>
        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                {slides.map((slide, index) => (
                <div className={styles.imgContainer} key={index}>
                    <Image src={slide} alt="" layout="fill" priority={true}/>
                </div>    
                ))}
        </div>
      <div className={styles.arrowContainer} style={{right: 0}} onClick={()=>handleArrow("r")}>
        <FontAwesomeIcon icon={faChevronRight} className={styles.iconRight}/>
      </div>
    </div>
  )
}

export default Slideshow