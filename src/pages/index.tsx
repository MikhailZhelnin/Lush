import {GetStaticProps} from "next";

import client from '../../client'

import {IProduct} from "@/global/interfaces/IProduct";
import {IBlog} from "@/global/interfaces/IBlog";

import {Main} from "../templates/Main";
import {Meta} from "@/layout/Meta";

import {Banner, Varieties, Offer, Benefits, Testimonials, Email, Blogs} from '../components/index'

import {benefitsData, testimonialsData, varietiesData} from "@/data";

interface HomeProps {
  products: IProduct[],
  blogs: IBlog[]
}

export default function Home(props: HomeProps) {

  const {products, blogs} = props;

  return (
    <Main meta={<Meta title="Lush Home" description="Lush home page"/>}>
      <Banner/>
      <Varieties varieties={varietiesData}/>
      <Offer products={products}/>
      <Benefits benefitsData={benefitsData}/>
      <Testimonials testimonialsData={testimonialsData}/>
      <Email/>
      <Blogs blogs={blogs}/>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await client.fetch(`
    *[_type == "products"] {
      id,
      title,
      price,
      image
    }
  `)
  const blogs = await client.fetch(`
    *[_type == "blogs"] {
      id,
      title,
      text,
      image,
      created
    }
  `)

  return {
    props: {
      products: products,
      blogs: blogs
    }
  }
}