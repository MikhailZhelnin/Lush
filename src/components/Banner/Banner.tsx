import styles from './Banner.module.scss'
import Image from "next/image";
import {icons} from "../../../public/assets/icons/icons";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Nature's Beauty Delivered to You</h1>
          <div className={styles.contentText}>
            <p>Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of
              flowers that will bring a touch of nature to your home!</p>
          </div>
          <div className={styles.contentButtons}>
            <button className={styles.contentButtonsBtn}>Book Now</button>
            <button className={styles.contentButtonsBtn}>
              <Image src={icons.play} alt='Watch video' className={styles.contentButtonsBtnIcon}/>
              <span>Watch video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;