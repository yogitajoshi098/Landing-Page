import * as React from "react";
import styles from "./card.module.css";
import Image from "next/image";



const CardComponent2 = ({ image, title, description }) => {
    return (
      <div className={styles.card_2}>
        
          <Image src={image} width={75} height={75} alt={title} />
          <h1>{title}</h1>
       
        <p>{description}</p>
       
       
      </div>
    );
  };

  
  export default CardComponent2;