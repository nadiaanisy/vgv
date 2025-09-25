import { 
  useEffect,
  useState
} from 'react';
import {
    useCustomHook,
    ImageWithFallback
} from '../misc';
import { 
  Product,
  CartItem
} from '../interface';
import {
    Plus,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { products } from '../../assets/data';

interface ProductSliderProps {
  onNavigate: (page: string, productId?: string) => void
}
export function ProductSlider({ onNavigate }: ProductSliderProps) {
  const { t } = useCustomHook();
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
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
                  {(t('FEATURED_PRODUCT'))}
                </Badge>
              </div>
              
              <h3 className="text-xl font-medium text-foreground mb-2">
                {currentProduct.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {t(currentProduct.description_short)}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium text-primary">
                  {currentProduct.priceRange}
                </div>
                <Button 
                  size="sm" 
                  className="gap-2"
                  onClick={() => onNavigate('products', currentProduct.id)}
                >
                  <Plus className="w-4 h-4" />
                  {t('BUTTONS.VIEW_PRODUCTS')}
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
          {currentIndex + 1} {t('OF')} {products.length}
        </p>
      </div>
    </div>
  )
}