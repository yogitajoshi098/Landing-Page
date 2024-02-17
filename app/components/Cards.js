import { cardData } from "../Data";
import CardComponent from "./CardComponent";
import styles from './card.module.css'



export default function Cards() {
  return (
    <div className={styles.card_comp}>
      {cardData.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </div>
  );
}
