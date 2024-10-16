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



// {
//   "message": "",
//   "data": {
//     "_id": "",
//     "images": [],
//     "price": 3190000,
//     "rating": 4.6,
//     "price_before_discount": 3990000,
//     "quantity": 138,
//     "sold": 1200,
//     "view": 125877,
//     "name": "",
//     "description": "",
//     "category": {
//       "_id": "",
//       "name": "",
//       "__v": 0
//     },
//     "image": "",
//     "createdAt": "2021-05-27T14:55:03.113Z",
//     "updatedAt": "2024-10-16T04:30:07.286Z"
//   }
// }