import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../../client'

import {IBlog} from "@/global/interfaces/IBlog";

import {icons} from "../../../../public/assets/icons/icons";

import styles from './BlogItem.module.scss'

function urlFor (source: any) {
  return imageUrlBuilder(client).image(source)
}

interface BlogItemProps {
  blog: IBlog,
}

const BlogItem = ({blog}: BlogItemProps) => {
  return (
    <div className={styles.blogItem}>
      <div className={styles.blogItemImage}>
        <img src={urlFor(blog.image).url()} alt={blog.title}/>
      </div>
      <h3 className={styles.blogItemTitle}>{blog.title}</h3>
      <div className={styles.blogItemText}>
        <p>{blog.text.slice(0, 150)}...</p>
      </div>
      <div className={styles.blogItemFooter}>
        <div className={styles.blogItemFooterDate}>
          <Image src={icons.calendar} alt='Calendar'/>
          <span>{blog.created}</span>
        </div>
        <Link href={`/blogs/${blog.id}`} className={styles.blogItemFooterLink}>
          <span>Read More</span>
          <Image src={icons.arrow_right} alt='Arrow right'/>
        </Link>
      </div>
    </div>
  )
}

export default BlogItem;