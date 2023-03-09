import Image from "next/image";

import {images} from "../../../public/assets/images/images";

import {IBenefits} from "../../global/interfaces/others";

import styles from './Benefits.module.scss'

interface IBenefitsProps {
  benefitsData: IBenefits[]
}

export const Benefits = ({benefitsData}: IBenefitsProps) => {
  return (
    <div className={styles.benefits}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <Image src={images.benefits} alt='Benefits main' className={styles.contentLeftImg}/>
        </div>
        <div className={styles.contentRight}>
          {benefitsData.map(benefit => (
            <div className={styles.contentRightItem} key={benefit.id}>
              <div className={styles.contentRightItemIcon}>
                <Image src={benefit.icon} alt={benefit.title}/>
              </div>
              <h3 className={styles.contentRightItemTitle}>{benefit.title}</h3>
              <div className={styles.contentRightItemText}>
                <p>{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}