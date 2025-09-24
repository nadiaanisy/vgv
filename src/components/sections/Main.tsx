import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ProductSlider } from './ProductSlider'
import { MessageCircle, ShoppingBag, Star } from 'lucide-react'
import { CartItem } from '../App'

interface HeroSectionProps {
  onNavigate: (page: string, productId?: string) => void
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
}

export function HeroSection({ onNavigate, addToCart }: HeroSectionProps) {
  const handleWhatsAppOrder = () => {
    const message = "Hi! I'm interested in ordering Wetty products. Can you help me?"
    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = "+1234567890" // Replace with actual number
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <section className="w-full py-16 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Venture Identity Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-2xl">V</span>
            </div>
            <div>
              <h1 className="text-3xl font-medium text-foreground">Veyra Global Ventures</h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="text-sm">University Enterprise Project</Badge>
                <Badge variant="outline" className="text-sm">Nov 2024 - Dec 2024</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* One-sentence Value Proposition */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary" />
                <Badge variant="secondary">Smart Wetsuit Technology</Badge>
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium text-foreground leading-tight">
                Smart wetsuits that adapt to your water adventures for optimal comfort and performance
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                We sell innovative Wetty smart wetsuits that automatically adjust to water temperature and conditions, 
                giving water sports enthusiasts the ultimate experience in comfort, safety, and performance.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="bg-white/80 rounded-lg p-6 space-y-4">
              <h3 className="font-medium text-foreground">Why Choose Veyra Global Ventures?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-medium text-primary">University Partnership</div>
                  <div className="text-muted-foreground">BBA1094 Enterprise</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-primary">Sales Period</div>
                  <div className="text-muted-foreground">Nov - Dec 2024</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-primary">Satisfaction Guarantee</div>
                  <div className="text-muted-foreground">100% Quality Assured</div>
                </div>
              </div>
            </div>

            {/* Strong Call-to-Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-3 gap-2" onClick={handleWhatsAppOrder}>
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 gap-2" onClick={() => onNavigate('products')}>
                <ShoppingBag className="w-5 h-5" />
                View Products
              </Button>
            </div>
          </div>
          
          {/* Hero Product Slider showing Wetty product range */}
          <div className="relative">
            <ProductSlider onNavigate={onNavigate} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </section>
  )
}