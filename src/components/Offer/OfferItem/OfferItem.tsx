import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'

import client from '../../../../client'

import {IProduct} from "@/global/interfaces/IProduct";

import {icons} from "../../../../public/assets/icons/icons";

import styles from './OfferItem.module.scss'

function urlFor (source: any) {
  return imageUrlBuilder(client).image(source)
}

interface OfferItemProps {
  offerItem: IProduct
}

const OfferItem = ({offerItem}: OfferItemProps) => {
  return (
    <div key={offerItem.id} className={styles.offerItem}>
      <div className={styles.offerItemImage}>
        <img src={urlFor(offerItem.image).url()} alt={offerItem.title}/>
      </div>
      <div className={styles.offerItemInfo}>
        <div className={styles.offerItemInfoLeft}>
          <h3 className={styles.offerItemInfoLeftName}>{offerItem.title}</h3>
          <span className={styles.offerItemInfoLeftPrice}>${offerItem.price}</span>
        </div>
        <div className={styles.offerItemInfoRight}>
          <button className={styles.offerItemInfoRightBtn}>Buy Now</button>
        </div>
      </div>
      <button className={styles.offerItemFavourite}>
        <Image
          src={icons.heart_outlined}
          alt="Add to favourite"
          className={styles.offerItemFavouriteIcon}
        />
      </button>
    </div>
  )
}

export default OfferItem;