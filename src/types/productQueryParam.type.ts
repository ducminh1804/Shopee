
export type productParam = {
  limit?: number,
  order?: 'desc' | 'asc',
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price',
  category?: number,
  exclude?: number,
  rating_filter?: number,
  price_min?: number,
  price_max?: number,
  name?: string,
  page?:number
}

export type sortOption = {
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price',
}
export type orderOption = {
  order?: 'desc' | 'asc',

}