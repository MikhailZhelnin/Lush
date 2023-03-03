import Image from "next/image";

import {ITestimonials} from "../../../models";

import styles from './Testimonials.module.scss'

interface TestimonialsProps {
    testimonialsData: ITestimonials[],
}

const Testimonials = ({testimonialsData}: TestimonialsProps) => {
    return (
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2 className={styles.contentTitle}>What Do They Say About Us</h2>
              <div className={styles.contentList}>
                {testimonialsData.map(testimonial => (
                  <div key={testimonial.id} className={styles.contentListItem}>
                    <div className={styles.contentListItemInfo}>
                      <div className={styles.contentListItemInfoImage}>
                        <Image src={testimonial.icon} alt={testimonial.name}/>
                      </div>
                      <span className={styles.contentListItemInfoName}>{testimonial.name}</span>
                    </div>
                    <div className={styles.contentListItemText}>"{testimonial.text}"</div>
                    <div className={styles.contentListItemBackground}>
                      <Image src={testimonial.background} alt={testimonial.name}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    )
}

export default Testimonials;