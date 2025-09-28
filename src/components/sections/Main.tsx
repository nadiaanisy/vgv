import {
  useCustomHook,
  handleWhatsAppOrder
} from '../misc';
import {
  Star,
  ShoppingBag,
  MessageCircle,
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ProductSlider } from './ProductSlider';

interface MainProps {
  onNavigate: (page: string, productId?: string) => void
}
export function Main({ onNavigate }: MainProps) {
  const { t } = useCustomHook();

  return (
    <section className="w-full bg-gradient-to-br from-primary/5 to-primary/10 py-[220px] md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* One-sentence Value Proposition */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-primary" />
                <Badge variant="secondary">(NEED UPDATE) Smart Wetsuit Technology</Badge>
              </div>
              <h2 className="text-4xl lg:text-5xl font-medium text-foreground leading-tight">
                (NEED UPDATE) Smart wetsuits that adapt to your water adventures for optimal comfort and performance
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                (NEED UPDATE) We sell innovative Wetty smart wetsuits that automatically adjust to water temperature and conditions, 
                giving water sports enthusiasts the ultimate experience in comfort, safety, and performance.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="bg-white/80 rounded-lg p-6 space-y-4">
              <h3 className="font-medium text-foreground">{t('HERO.WHY_TITLE')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-medium text-primary">(NEED UPDATE) University Partnership</div>
                  <div className="text-muted-foreground">(NEED UPDATE) BBA1094 Enterprise</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-primary">(NEED UPDATE) Sales Period</div>
                  <div className="text-muted-foreground">(NEED UPDATE) Nov - Dec 2024</div>
                </div>
                <div className="text-center">
                  <div className="font-medium text-primary">(NEED UPDATE) Satisfaction Guarantee</div>
                  <div className="text-muted-foreground">(NEED UPDATE) 100% Quality Assured</div>
                </div>
              </div>
            </div>

            {/* Strong Call-to-Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-3 gap-2 bg-green-600 hover:bg-green-700" onClick={() => handleWhatsAppOrder('home')}>
                <MessageCircle className="w-5 h-5" />
                {t('BUTTONS.ORDER_VIA_WHATSAPP')}
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 gap-2" onClick={() => onNavigate('products')}>
                <ShoppingBag className="w-5 h-5" />
                {t('BUTTONS.VIEW_PRODUCTS')}
              </Button>
            </div>
          </div>

          {/* Hero Product Slider showing Wetty product range */}
          <div className="relative">
            <ProductSlider onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </section>
  )
}