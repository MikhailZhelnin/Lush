import type { ReactNode } from 'react'
import {Lato} from "@next/font/google";

import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";

import styles from './Main.module.scss'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
  headerMain: boolean
}

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
})

const Main = ({meta, children, headerMain}: IMainProps) => {
  return (
    <div className={`${styles.main} ${lato.className}`}>
      {meta}

      <Header headerMain={headerMain}/>

      <main className={styles.mainContent}>{children}</main>

      <Footer/>

    </div>
  )
}

export { Main }