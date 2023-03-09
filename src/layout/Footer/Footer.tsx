import Link from "next/link";
import Image from "next/image";

import {icons} from "../../../public/assets/icons/icons";

import {siteMenuData, socialsData} from "@/data";

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <h2 className={styles.footerTopTitle}>Feel free to contact us</h2>
        <div className={styles.footerTopSocialsList}>
          {socialsData.map(social => (
            <Link href={social.link} key={social.id} target='_blank' className={styles.footerTopSocialsListItem}>
              <Image src={social.icon} alt={social.link} className={styles.footerTopSocialsListItemImage}/>
            </Link>
          ))}
        </div>
        <div className={styles.footerTopSiteMenuList}>
          {siteMenuData.map(siteMenu => (
            <Link href={siteMenu.link} key={siteMenu.id}
                  className={styles.footerTopSiteMenuListItem}>{siteMenu.name}</Link>
          ))}
        </div>
        <Image src={icons.footer.bg_1} alt='Footer background 1' className={styles.footerTopBg1}/>
        <Image src={icons.footer.bg_2} alt='Footer background 2' className={styles.footerTopBg2}/>
      </div>
      <div className={styles.footerBottom}>
        <h3 className={styles.footerBottomText}>Copyright © 2023 Lush. All rights reserved.</h3>
      </div>
    </footer>
  )
}

export default Footer;