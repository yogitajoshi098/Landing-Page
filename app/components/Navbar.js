// Navbar.js
import styles from "./Navbar.module.css";
import Link from "next/link";
import Rectangle from "../../public/Rectangle.png";
import Image from "next/image";
import RectangleBg from '../../public/RectangleBg.png'

const Navbar = () => {
  return (
    <>
      <header>
        <div className={styles.outer}>
          <Image
            src={Rectangle}
            height={70}
            width={70}
            className={styles.rect}
          />
          <div className={styles.Navbar}>
            <ul className={styles.list}>
              
              <li>
                Home
               
                
              
              </li>
              <li>
                About Us
              </li>
              <li>
                Work
              </li>
              <li>
               Services
              </li>
              <li>
               Clients
              </li>
              <li>
               Team
              </li>
              <li>
               Contact Us
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
