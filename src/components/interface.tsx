export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Product {
  id: string
  image: any
  name: string
  category: string
  description_long: string
  description_short: string
  priceRange: string
  originalPrice: string
  whyChosen: string
  targetMarket: any
  benefits: any
  hasOptions: boolean,
  options?: {
    name: string;
    originalPrice: string;
    salePrice: string;
    description: string;
    image: any
  }[];
}