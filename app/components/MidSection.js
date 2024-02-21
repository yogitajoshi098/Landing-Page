import React from 'react'
import styles from "../page.module.css";
import Image from "next/image";

export default function MidSection({title,topPara,bottomPara,buttonTitle,buttonImg,MobileImage}) {
  return (
    <>
    <div className={styles.left}>
            <h2 className={styles.title}>
              {title}
            </h2>
            <p className={styles.para}>
              {topPara}
              <br></br>
              <br></br>
              {bottomPara}
            </p>
           {buttonTitle === "Book a Call" ?  <button className={styles.btn}>
              <span className={styles.text}>
                <button className={styles.tele}>
                  <Image src={buttonImg} />
                </button>{" "}
              </span>
             {buttonTitle}
            </button> :  <button className={styles.btn}>
              <span className={styles.text}>
                <button className={styles.coin}>
                  <Image src={buttonImg} />
                </button>{" "}
              </span>
             {buttonTitle}
            </button>}
          </div>
          <div className={styles.right}>
            <Image src={MobileImage} className={styles.MobileImage} />
          </div>
         </>
  )
}
