import { Data1 } from "../Data1";

import CardComponent2 from "./CardComponent2";
import styles from "./card.module.css";

export default function Card2() {
  return (
    <div className={styles.card_comp}>
      {Data1.map((card, index) => (
        <CardComponent2 key={index} {...card} />
      ))}
    </div>
  );
}
