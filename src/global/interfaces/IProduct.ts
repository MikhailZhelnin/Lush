interface Asset {
  _ref: string;
  _type: string;
}

interface Image {
  _type: string;
  asset: Asset;
}

export interface IProduct {
  id: string
  image: Image;
  price: string;
  title: string;
}

