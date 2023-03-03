import {images} from "../../../public/assets/images/images";
import {IBlog} from "../../../models";

export const blogs: IBlog[] = [
  {
    id: 1,
    image: images.blog.one,
    title: 'More productive with an atmosphere of greenery',
    text: 'An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...',
    created: 'January 20, 2023'
  },
  {
    id: 2,
    image: images.blog.two,
    title: 'The benefits of plants in your room',
    text: 'Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....',
    created: 'January 20, 2023'
  },
  {
    id: 3,
    image: images.blog.three,
    title: 'Hobbyist plants in the house',
    text: 'Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....',
    created: 'January 20, 2023'
  },
]