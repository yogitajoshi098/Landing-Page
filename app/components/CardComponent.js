import * as React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Arrow from '../../public/arrowButton.png';


const CardComponent = ({ image, title, description }) => {
    return (
      <div className={styles.card}>
        <div className={styles.card_div}>
          <Image src={image} width={75} height={75} alt={title} />
          <h1>{title}</h1>
        </div>
        <p>{description}</p>
        <div className={styles.arrow}>
        <Image src={Arrow}  />
        </div>
       
      </div>
    );
  };

  
  export default CardComponent;