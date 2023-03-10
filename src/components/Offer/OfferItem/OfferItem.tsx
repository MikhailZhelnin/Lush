import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'

import client from '../../../../client'

import {IProduct} from "@/global/interfaces/IProduct";

import {icons} from "../../../../public/assets/icons/icons";

import {useActions} from "@/hooks/useActions";
import {useTypedSelector} from "@/hooks/useTypedSelector";

import styles from './OfferItem.module.scss'

function urlFor (source: any) {
  return imageUrlBuilder(client).image(source)
}

interface OfferItemProps {
  offerItem: IProduct
}

const OfferItem = ({offerItem}: OfferItemProps) => {

  const {addProduct, removeProduct} = useActions();
  const {savedItems} = useTypedSelector(state => state)

  const isExistingInSavedItems = savedItems.some(m => m.id === offerItem.id)

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
      {!isExistingInSavedItems ? (
        <button
          className={styles.offerItemFavourite}
          onClick={() => addProduct(offerItem)}
        >
          <Image
            src={icons.heart_outlined}
            alt="Add to favourite"
            className={styles.offerItemFavouriteIcon}
          />
        </button>
      ) : (
        <button
          className={styles.offerItemFavourite}
          onClick={() => removeProduct(offerItem)}
        >
          <Image
            src={icons.heart_filled}
            alt="Add to favourite"
            className={styles.offerItemFavouriteIcon}
          />
        </button>
      )}
    </div>
  )
}

export default OfferItem;