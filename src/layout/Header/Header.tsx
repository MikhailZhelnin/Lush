import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

import MobileMenu from "@/components/MobileMenu/MobileMenu";

import {icons} from "../../../public/assets/icons/icons";

import styles from './Header.module.scss'

interface HeaderProps {
  headerMain: boolean
}

const Header = ({headerMain}: HeaderProps) => {

  const [openedMobileMenu, setOpenedMobileMenu] = useState(false);

  useEffect(() => {
    if (openedMobileMenu) {
      if (typeof window !== 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openedMobileMenu])

  return (
    <>
      <header className={headerMain ? styles.header : `${styles.header} ${styles.headerColor}`}>
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
            <Link href='/saved-items' className={styles.contentSavedItems}>
              <Image
                src={icons.heart_outlined_white}
                alt='Saved items'
                width={35}
                height={35}
                className={styles.contentSavedItemsImage}
              />
            </Link>
            <button className={styles.contentButton}>Call Us</button>
            <button className={styles.contentBurgerMenu} onClick={() => setOpenedMobileMenu(true)}>
              <Image src={icons.burger_menu} alt='Burger menu'/>
            </button>
          </div>
        </div>
      </header>
      {openedMobileMenu &&
          <MobileMenu
              closeMobileMenu={() => setOpenedMobileMenu(false)}
          />}
    </>
  )
}

export default Header;