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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                       ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default Review