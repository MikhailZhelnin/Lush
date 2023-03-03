import Image from "next/image";
import Link from "next/link";

import {icons} from "../../../../public/assets/icons/icons";
import {IBlog} from "../../../../models";

import styles from './BlogItem.module.scss'

interface BlogItemProps {
  blog: IBlog,
}

const BlogItem = ({blog}: BlogItemProps) => {
  return (
    <div className={styles.blogItem}>
      <div className={styles.blogItemImage}>
        <Image src={blog.image} alt={blog.title}/>
      </div>
      <h3 className={styles.blogItemTitle}>{blog.title}</h3>
      <div className={styles.blogItemText}>
        <p>{blog.text}</p>
      </div>
      <div className={styles.blogItemFooter}>
        <div className={styles.blogItemFooterDate}>
          <Image src={icons.calendar} alt='Calendar'/>
          <span>{blog.created}</span>
        </div>
        <Link href='/' className={styles.blogItemFooterLink}>
          <span>Read More</span>
          <Image src={icons.arrow_right} alt='Arrow right'/>
        </Link>
      </div>
    </div>
  )
}

export default BlogItem;