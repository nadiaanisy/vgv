export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface CheckoutFormData {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  postalCode: string
  notes?: string
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
  hasOptions: boolean
  salePrice?: number
  shopeeLink?: string
  options?: {
    name?: string;
    originalPrice?: string;
    salePrice?: string;
    description?: string;
    image?: any,
    shopeeLink?: string
  }[];
}