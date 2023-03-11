import styles from './MobileMenu.module.scss'
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";

interface MobileMenuProps {
  closeMobileMenu(): void
}

const MobileMenu = ({closeMobileMenu}: MobileMenuProps) => {

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easyInOut',
        duration: 0.3,
        delay: 1.2
      }
    }
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          className={styles.mobileMenu}
          variants={item}
          initial={{height: 0, opacity: 0}}
          animate={{height: '100vh', opacity: 1}}
          transition={{duration: .5}}
          exit={item.exit}
          key='menu'
        >
          <ul className={styles.mobileMenuList}>
            <motion.li
              className={styles.mobileMenuListItem}
              initial={{y: 80, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 1}}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: 9
                }
              }}>
              <Link href='/' className={styles.mobileMenuListItemLink}>Home</Link>
            </motion.li>
            <motion.li
              className={styles.mobileMenuListItem}
              initial={{y: 80, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: .8}}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: .7
                }
              }}>
              <Link href='/' className={styles.mobileMenuListItemLink}>About Us</Link>
            </motion.li>
            <motion.li
              className={styles.mobileMenuListItem}
              initial={{y: 80, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: .6}}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: .5
                }
              }}>
              <Link href='/' className={styles.mobileMenuListItemLink}>Plants</Link>
            </motion.li>
            <motion.li
              className={styles.mobileMenuListItem}
              initial={{y: 80, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: .4}}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: .3
                }
              }}>
              <Link href='/' className={styles.mobileMenuListItemLink}>Contact</Link>
            </motion.li>
            <motion.li
              className={styles.mobileMenuListItem}
              initial={{y: 80, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: .2}}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: 'easeInOut',
                  delay: .1
                }
              }}>
              <Link href='/saved-items' className={styles.mobileMenuListItemLink}>Saved Items</Link>
            </motion.li>
          </ul>
          <button className={styles.mobileMenuCallusButton}>Call Us</button>

          <button className={styles.mobileMenuCLose} onClick={closeMobileMenu}>X</button>
        </motion.div>
      </AnimatePresence>
    </>

  )
}

export default MobileMenu;