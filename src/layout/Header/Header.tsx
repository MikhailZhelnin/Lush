import Image from "next/image";
import Link from "next/link";

import styles from './Header.module.scss'

import {icons} from "../../../public/assets/icons/icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentImage}>
            <Image src={icons.logo} alt="Logo" className={styles.contentImageImg}/>
          </div>
          <nav className={styles.contentNav}>
            <ul className={styles.contentNavList}>
              <li className={styles.contentNavListItem}>
                <Link href='/' className={styles.contentNavListItemLink}>Home</Link>
              </li>
              <li className={styles.contentNavListItem}>
                <Link href='/' className={styles.contentNavListItemLink}>About Us</Link>
              </li>
              <li className={styles.contentNavListItem}>
                <Link href='/' className={styles.contentNavListItemLink}>Plants</Link>
              </li>
              <li className={styles.contentNavListItem}>
                <Link href='/' className={styles.contentNavListItemLink}>Contact</Link>
              </li>
            </ul>
          </nav>
          <button className={styles.contentButton}>Call Us</button>
          <button className={styles.contentBurgerMenu}>
            <Image src={icons.burger_menu} alt='Burger menu'/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;