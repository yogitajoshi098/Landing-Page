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
               
                <Link href="/">Home</Link>
              
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Work</Link>
              </li>
              <li>
                <Link href="/contact">Services</Link>
              </li>
              <li>
                <Link href="/contact">Clients</Link>
              </li>
              <li>
                <Link href="/contact">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
