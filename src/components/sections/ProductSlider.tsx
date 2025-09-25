import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { CartItem } from '../App'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

interface ProductSliderProps {
  onNavigate: (page: string, productId?: string) => void
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
}

const products: Product[] = [
  {
    id: 'wetty-pro-surfer',
    name: 'Wetty Pro Surfer',
    description: 'Advanced smart wetsuit with temperature adaptation for professional surfing',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1633297345330-261df10cf6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXRzdWl0JTIwc3VyZmluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3ODYwMjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Professional'
  },
  {
    id: 'wetty-dive-master',
    name: 'Wetty Dive Master',
    description: 'Smart diving wetsuit with depth monitoring and temperature control',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1644196851494-6df3ca098a10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdldHN1aXQlMjBkaXZpbmclMjBvY2VhbnxlbnwxfHx8fDE3NTc4NjAyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Professional'
  },
  {
    id: 'wetty-swim-sport',
    name: 'Wetty Swim Sport',
    description: 'Flexible smart wetsuit designed for competitive swimming and training',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1599769569317-a156d52fda22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXRzdWl0JTIwc3dpbW1pbmclMjB3YXRlciUyMHNwb3J0c3xlbnwxfHx8fDE3NTc4NjAyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sport'
  },
  {
    id: 'wetty-triathlon-elite',
    name: 'Wetty Triathlon Elite',
    description: 'High-performance smart wetsuit optimized for triathlon competitions',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1632512404263-7f22b6759908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXRzdWl0JTIwdHJpYXRobG9uJTIwYXRobGV0ZXxlbnwxfHx8fDE3NTc4NjAyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Competition'
  },
  {
    id: 'wetty-adventure-gear',
    name: 'Wetty Adventure Gear',
    description: 'All-purpose smart wetsuit for recreational water activities and adventures',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1598632598200-beb70561625f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcm9mZXNzaW9uYWwlMjB3ZXRzdWl0JTIwZ2VhcnxlbnwxfHx8fDE3NTc4NjAyNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Recreational'
  }
]

export function ProductSlider({ onNavigate, addToCart }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
  }

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [])

  const currentProduct = products[currentIndex]

  return (
    <div className="relative">
      {/* Main slider container */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="relative h-[500px]">
          {/* Background image */}
          <ImageWithFallback
            src={currentProduct.image}
            alt={currentProduct.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end p-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-md">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">
                  {currentProduct.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Featured Product
                </Badge>
              </div>
              
              <h3 className="text-xl font-medium text-foreground mb-2">
                {currentProduct.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {currentProduct.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-primary">
                  RM{currentProduct.price.toFixed(2)}
                </div>
                <Button 
                  size="sm" 
                  className="gap-2"
                  onClick={() => onNavigate('products', currentProduct.id)}
                >
                  <Plus className="w-4 h-4" />
                  View Product
                </Button>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex 
                ? 'bg-primary' 
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Product counter */}
      <div className="text-center mt-2">
        <p className="text-sm text-muted-foreground">
          {currentIndex + 1} of {products.length} - Wetty Product Range
        </p>
      </div>
    </div>
  )
}