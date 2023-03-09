import React, {useState} from "react";

import styles from './Email.module.scss'

export const Email = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setEmail('')
    }

    return (
        <div className={styles.email}>
            <div className={styles.content}>
                <div className={styles.contentTitle}>
                    <h2>
                        Enter Your Email Address For Our Mailing Promo Or Other Interesting Things
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className={styles.contentForm}>
                    <input
                      type='text'
                      placeholder='Enter your email'
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className={styles.contentFormInput}
                    />
                    <button type='submit' className={styles.contentFormBtn}>Submit</button>
                </form>
            </div>
        </div>
    )
}