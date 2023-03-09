interface Asset {
  _ref: string;
  _type: string;
}

interface Image {
  _type: string;
  asset: Asset;
}

export interface IBlog {
  created: string;
  id: string;
  image: Image;
  text: string;
  title: string;
}