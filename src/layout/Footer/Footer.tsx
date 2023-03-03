import {icons} from "../../../public/assets/icons/icons";
import {ISiteMenu, ISocials} from "../../../models";

import styles from './Footer.module.scss'
import Link from "next/link";
import Image from "next/image";

const socialsData: ISocials[] = [
  {
    id: 1,
    icon: icons.instagram,
    link: 'https://www.instagram.com',
  },
  {
    id: 2,
    icon: icons.facebook,
    link: 'https://www.facebook.com',
  },
  {
    id: 3,
    icon: icons.twitter,
    link: 'https://twitter.com',
  },
];
const siteMenuData: ISiteMenu[] = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About Us',
    link: '/',
  },
  {
    id: 3,
    name: 'Plants',
    link: '/',
  },
  {
    id: 4,
    name: 'Delivery',
    link: '/',
  },
  {
    id: 5,
    name: 'Blog',
    link: '/',
  },
  {
    id: 6,
    name: 'Contact Us',
    link: '/',
  },
];

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