import {GetStaticPaths, GetStaticProps} from "next";
import imageUrlBuilder from "@sanity/image-url";

import client from "../../../client";

import {Main} from "../../templates/Main";
import {Meta} from "@/layout/Meta";

import {IBlog} from "@/global/interfaces/IBlog";

import styles from '../../styles/BlogPage.module.scss'

function urlFor (source: any) {
  return imageUrlBuilder(client).image(source)
}

interface BlogPageProps {
  blog: IBlog
}

export default function BlogPage({blog}: BlogPageProps) {
  return (
    <Main headerMain={false} meta={<Meta title="Lush Blog Page" description="Lush blog page"/>}>
      <section className={styles.blog}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.contentImage}>
              <img src={urlFor(blog.image).url()} alt={blog.title}/>
            </div>
            <h2 className={styles.contentTitle}>{blog.title}</h2>
            <div className={styles.contentText}>
              <p>{blog.text}</p>
            </div>
            <span className={styles.contentCreated}>Created: <i>{blog.created}</i></span>
          </div>
        </div>
      </section>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const blog = await client.fetch(`
    *[_type == "blogs" && id == '${params?.blogSlug}'] {
      id,
      title,
      text,
      image,
      created
    }
  `)

  return {
    props: {
      blog: blog[0]
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const blogs = await client.fetch(`
    *[_type == "blogs"] {
      id,
      title,
      text,
      image,
      created
    }
  `)
  const paths = blogs.map((blog: IBlog) => {
    return {
      params: {
        blogSlug: blog.id
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}