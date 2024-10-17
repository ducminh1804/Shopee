export type Product = {
  _id: string,
  images: string[],
  price: number,
  rating: number,
  price_before_discount: number,
  quantity: number,
  sold: number,
  view: number,
  name: string,
  description: string,
  category: {
    _id: string,
    name: string,
    __v: number
  },
  image: string,
  createAt: string,
  updateAt: string
}

export interface Products {
  products: Product[],
  pagination: {
    page: number,
    limit: number,
    page_size: number
  }

}


