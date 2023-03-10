import {Main} from "../templates/Main";
import {Meta} from "@/layout/Meta";

import {useTypedSelector} from "@/hooks/useTypedSelector";

import OfferItem from "@/components/Offer/OfferItem/OfferItem";

import styles from '../styles/SavedItemsPage.module.scss'

export default function SavedItemsPage() {

  const {savedItems} = useTypedSelector(state => state)

  return (
    <Main headerMain={false} meta={<Meta title="Lush Saved Items" description="Lush saved items page"/>}>
      <section className={styles.savedItems}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>Your saved items</h2>
            {savedItems.length !== 0 ? (
              <div className={styles.contentList}>
                {savedItems.map(item => (
                  <OfferItem offerItem={item} key={item.id}/>
                ))}
              </div>
            ) : (
              <span>You don't have saved items...</span>
            )}
          </div>
        </div>
      </section>
    </Main>
  )
}
