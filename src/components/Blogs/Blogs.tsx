import {IBlog} from "../../../models";

import styles from './Blogs.module.scss'
import BlogItem from "./Blog/BlogItem";

interface BlogsProps {
  blogs: IBlog[],
}

const Blog = ({blogs}: BlogsProps) => {
  return (
    <section className={styles.blogs}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.contentTitle}>Interesting Blog To Read</h2>
          <div className={styles.contentList}>
            {blogs.map(blog => (
              <BlogItem blog={blog} key={blog.id}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog;