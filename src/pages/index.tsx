import {GetStaticProps} from "next";

import {icons} from "../../public/assets/icons/icons";

import {IBenefits, IBlog, IProduct, ITestimonials, IVarieties} from "../../models";

import {Main} from "../templates/Main";
import {Meta} from "@/layout/Meta";
import Banner from "@/components/Banner/Banner";
import Varieties from "@/components/Varieties/Varieties";
import Offer from "@/components/Offer/Offer";
import Benefits from "@/components/Benefits/Benefits";
import Testimonials from "@/components/Testimonials/Testimonials";
import Email from "@/components/Email/Email";
import Blogs from "@/components/Blogs/Blogs";

const varietiesData: IVarieties[] = [
  {
    id: 1,
    icon: icons.variety.indoor,
    title: 'Indoor Plants',
    text: 'Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants',
  },
  {
    id: 2,
    icon: icons.variety.outdoor,
    title: 'Outdoor Plants',
    text: 'Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.',
  },
  {
    id: 3,
    icon: icons.variety.pots,
    title: 'Plants Pots',
    text: 'Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor',
  },
]
const benefitsData: IBenefits[] = [
  {
    id: 1,
    icon: icons.benefits.quality,
    title: 'Quality Product',
    text: 'Our flowers are of the highest quality, carefully selected and sourced from reputable',
  },
  {
    id: 2,
    icon: icons.benefits.fresh,
    title: 'Always Fresh',
    text: 'Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.',
  },
  {
    id: 3,
    icon: icons.benefits.smart,
    title: 'Work Smart',
    text: 'We work smart, using innovative techniques and technology to streamline our processes',
  },
  {
    id: 4,
    icon: icons.benefits.service,
    title: 'Excellent Service',
    text: 'We pride ourselves on providing excellent service, going above and beyond to meet our customers\' needs',
  },
]
const testimonialsData: ITestimonials[] = [
  {
    id: 1,
    icon: icons.testimonials.one,
    background: icons.testimonials.one_bg,
    name: 'Jessica Watson',
    text: 'Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.',
  },
  {
    id: 2,
    icon: icons.testimonials.two,
    background: icons.testimonials.two_bg,
    name: 'Kate Szu',
    text: 'Great service, beautiful flowers, timely delivery. Highly recommend',
  },
  {
    id: 3,
    icon: icons.testimonials.three,
    background: icons.testimonials.three_bg,
    name: 'Grace',
    text: '"I am very happy with my purchase from this website, the plants were healthy and arrived on time.”',
  },
]

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

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch('http://localhost:3000/api/products');
  const data = await response.json();

  const [products, blogs] = await Promise.all(
    [fetch('http://localhost:3000/api/products').then(res => res.json()),
            fetch('http://localhost:3000/api/blogs').then(res => res.json())
    ])

  return {
    props: {
      products: products,
      blogs: blogs
    }
  }
}