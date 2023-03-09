import OfferItem from "@/components/Offer/OfferItem/OfferItem";

import {IProduct} from "@/global/interfaces/IProduct";

import styles from './Offer.module.scss'

interface OfferProps {
  products: IProduct[],
}

export const Offer = ({products}: OfferProps) => {
  return (
    <section className={styles.offer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.contentTitle}>What We Offer To You</h2>
          <div className={styles.contentList}>
            {products.map(product => (
              <OfferItem key={product.id} offerItem={product}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}