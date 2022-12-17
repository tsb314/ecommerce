import React from 'react'
import Image from 'next/image'
import styles from '../styles/Review.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.heading}>Reviews</h1>
        <div className={styles.reviewBoxContainer}>
        <div className={styles.reviewBox}>
            <div className={styles.reviewTop}>
            <div className={styles.profile}>
                <div className={styles.profileImg}>
                    <Image src="/imgs/black-woman-green-sweater.jpg" alt='' width="50" height="50"/>
                </div>
                <div className={styles.userName}>
                    <strong>Jane Doe</strong>
                    <span>@janedoe</span>
                </div>
            </div>
            <div className={styles.starReviews}>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            </div>
            </div>
            <div className={styles.reviewComment}>
                <p>I love these products. They keep my curls defined without weighing down my hair and smells great too.</p>
            </div>
        </div> 

        <div className={styles.reviewBox}>
            <div className={styles.reviewTop}>
            <div className={styles.profile}>
                <div className={styles.profileImg}>
                    <Image src="/imgs/black-women-in-red.jpg" alt='' width="50" height="50"/>
                </div>
                <div className={styles.userName}>
                    <strong>Jane Doe</strong>
                    <span>@janedoe</span>
                </div>
            </div>
            <div className={styles.starReviews}>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            </div>
            </div>
            <div className={styles.reviewComment}>
                <p>Makes my hair so soft.  I have been struggling to find products that work for my hair, and I am so glad I found these products. My curls are defined and soft.</p>
            </div>
        </div>

        <div className={styles.reviewBox}>
            <div className={styles.reviewTop}>
            <div className={styles.profile}>
                <div className={styles.profileImg}>
                    <Image src="/imgs/black-women-with-red-lipstick.jpg" alt='' width="50" height="50"/>
                </div>
                <div className={styles.userName}>
                    <strong>Jane Doe</strong>
                    <span>@janedoe</span>
                </div>
            </div>
            <div className={styles.starReviews}>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            </div>
            </div>
            <div className={styles.reviewComment}>
                <p>I love Mockup Cosmetics products. I use it on my hair and my daughters hair. We receive a lot of compliments on our hair.</p>
            </div>
        </div> 

        <div className={styles.reviewBox}>
            <div className={styles.reviewTop}>
            <div className={styles.profile}>
                <div className={styles.profileImg}>
                    <Image src="/imgs/black-girl-with-hoop-earrings.jpg" alt='' width="50" height="50"/>
                </div>
                <div className={styles.userName}>
                    <strong>Jane Doe</strong>
                    <span>@janedoe</span>
                </div>
            </div>
            <div className={styles.starReviews}>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            <FontAwesomeIcon icon={faStar} className={styles.icons}/>
            </div>
            </div>
            <div className={styles.reviewComment}>
                <p>From the shampoo and conditioner to the the styling products. My hair absolutely loves these products. These products keep my hair manageable and soft for days.</p>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Review