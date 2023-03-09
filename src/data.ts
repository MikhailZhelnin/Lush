import {IBenefits, ISiteMenu, ISocials, ITestimonials, IVarieties} from "@/global/interfaces/others";
import {icons} from "../public/assets/icons/icons";

export const varietiesData: IVarieties[] = [
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
export const benefitsData: IBenefits[] = [
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
export const testimonialsData: ITestimonials[] = [
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
export const socialsData: ISocials[] = [
  {
    id: 1,
    icon: icons.instagram,
    link: 'https://www.instagram.com',
  },
  {
    id: 2,
    icon: icons.facebook,
    link: 'https://www.facebook.com',
  },
  {
    id: 3,
    icon: icons.twitter,
    link: 'https://twitter.com',
  },
];
export const siteMenuData: ISiteMenu[] = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About Us',
    link: '/',
  },
  {
    id: 3,
    name: 'Plants',
    link: '/',
  },
  {
    id: 4,
    name: 'Delivery',
    link: '/',
  },
  {
    id: 5,
    name: 'Blog',
    link: '/',
  },
  {
    id: 6,
    name: 'Contact Us',
    link: '/',
  },
];