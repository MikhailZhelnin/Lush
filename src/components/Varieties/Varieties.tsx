import Image from "next/image";

import {IVarieties} from "../../global/interfaces/others";

import styles from './Varieties.module.scss'

interface VarietiesProps {
  varieties: IVarieties[],
}

export const Varieties = ({varieties}: VarietiesProps) => {
  return (
    <section className={styles.varieties}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.contentHeaderTitle}>
              <h2>We Help Choose The Most Suitable Plants For You</h2>
            </div>
            <div className={styles.contentHeaderText}>
              <p>
                Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a
                variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for
                any occasion, whether you're looking to brighten up your home or send a thoughtful gift.
              </p>
            </div>
          </div>
          <div className={styles.contentList}>
            {varieties.map(variety => (
              <div key={variety.id} className={styles.contentListItem}>
                <div className={styles.contentListItemImage}>
                  <Image src={variety.icon} alt={variety.title}/>
                </div>
                <h3 className={styles.contentListItemTitle}>{variety.title}</h3>
                <div className={styles.contentListItemText}>
                  <p>{variety.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}