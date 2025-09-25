import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { CartItem } from '../App'
import { 
  ArrowLeft, 
  MessageCircle, 
  Check, 
  Zap, 
  Shield, 
  Thermometer,
  Users,
  TrendingUp,
  Star,
  Target,
  Instagram,
  Megaphone,
  ShoppingBag,
  TestTube,
  BarChart3,
  Calendar,
  ShoppingCart,
  Eye
} from 'lucide-react'

interface ProductsPageProps {
  onNavigate: (page: string) => void
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  selectedProductId?: string | null
}

export function ProductsPage({ onNavigate, addToCart, selectedProductId }: ProductsPageProps) {
  const [selectedOption, setSelectedOption] = useState<any>(null)
  const productRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Scroll to selected product when component mounts
  useEffect(() => {
    if (selectedProductId && productRefs.current[selectedProductId]) {
      const element = productRefs.current[selectedProductId]
      const yOffset = -100 // Offset for header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [selectedProductId])

  const products = [
    {
      id: "wetty-pro-1",
      name: "Wetty Pro Smart Wetsuit",
      price: "$1,299",
      priceValue: 1299,
      originalPrice: "$1,499",
      image: "https://images.unsplash.com/photo-1633297345330-261df10cf6a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXRzdWl0JTIwc3VyZmluZyUyMGdlYXJ8ZW58MXx8fHwxNzU3NjA3MDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "Real-time thermal regulation technology",
        "AI-powered temperature adaptation", 
        "40% longer comfort duration",
        "Professional-grade neoprene materials",
        "MIT-developed smart fabric technology"
      ],
      description: "Our flagship product targeting professional water sports athletes and serious enthusiasts who demand the ultimate in performance technology.",
      whyChosen: "Selected as our primary product because it addresses the #1 pain point identified in our market research: thermal discomfort limiting performance time in water. Our 6-month customer discovery with 200+ surfers and divers revealed that 85% would pay premium for reliable temperature regulation.",
      targetMarket: "Professional athletes, competitive swimmers, serious surfers"
    },
    {
      id: "wetty-dive-2",
      name: "Wetty Dive Essential",
      price: "$899",
      priceValue: 899,
      originalPrice: "$1,099",
      image: "https://images.unsplash.com/photo-1663969736515-6b7d9cce6e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXRzdWl0JTIwc3VyZmluZyUyMGdlYXJ8ZW58MXx8fHwxNzU3NjA3MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "Enhanced buoyancy control system",
        "Reinforced knee and elbow protection",
        "Quick-dry technology for rapid turnaround",
        "Extended depth rating (40m certified)",
        "Integrated weight pocket system"
      ],
      description: "Mid-tier option designed specifically for recreational divers and underwater enthusiasts seeking professional features at accessible pricing.",
      whyChosen: "Chosen to capture the large recreational diving market (60% of our target segment). Price point research showed optimal demand at $800-900 range for feature-rich diving gear. Fills gap between basic rental gear and premium professional equipment.",
      targetMarket: "Recreational divers, diving instructors, underwater photographers"
    },
    {
      id: "wetty-bundle-3",
      name: "Wetty Accessory Bundle",
      price: "$299",
      priceValue: 299,
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1646651105469-bf1bdd125bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHNwb3J0cyUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc1NzYwNzAzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "Smart gloves with grip enhancement",
        "Thermal-regulating hood with communication system",
        "Adaptive boots with superior traction",
        "Complete protection ecosystem",
        "Seamless integration with Wetty suits"
      ],
      description: "High-margin accessory bundle that complements main products while providing entry-level customers affordable access to Wetty technology.",
      whyChosen: "Strategic choice for revenue diversification and customer acquisition. Accessories have 60% gross margin vs 45% on suits. Creates pathway for customers to experience Wetty quality before investing in full wetsuit. Bundle pricing increases average order value by 35%.",
      targetMarket: "First-time buyers, gift purchasers, existing customers upgrading"
    },
    {
      id: "wetty-wipes-4",
      name: "Wetty Mini Wet Wipes",
      price: "RM3.90 - RM4.90",
      priceValue: 3.90,
      originalPrice: "RM6.90",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZXQlMjB3aXBlcyUyMGNsZWFuaW5nJTIwcHJvZHVjdHxlbnwxfHx8fDE3NTc4NjAzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      benefits: [
        "4 different fragrance options available",
        "Gentle on skin with premium materials",
        "Compact and portable for travel",
        "Special university pricing available",
        "Perfect for post-water sports cleanup"
      ],
      description: "Premium wet wipes designed for post-water sports cleaning and daily use. Available in multiple fragrances with special university project pricing.",
      whyChosen: "Entry-level product that introduces customers to Wetty brand quality at an accessible price point. High-margin consumable product that encourages repeat purchases and builds brand loyalty before investing in higher-ticket items.",
      targetMarket: "Budget-conscious customers, first-time buyers, students",
      hasOptions: true,
      options: [
        {
          name: "Fragrance Free",
          originalPrice: "RM6.90",
          salePrice: "RM3.90",
          description: "Original formula, gentle and unscented"
        },
        {
          name: "Fresh Apple Fragrance",
          originalPrice: "RM6.90", 
          salePrice: "RM3.90",
          description: "Fresh apple scent for a refreshing experience"
        },
        {
          name: "Rose Fragrance",
          originalPrice: "RM6.90",
          salePrice: "RM3.90", 
          description: "Elegant rose fragrance for a luxurious feel"
        },
        {
          name: "Antibacterial Fragrance Free",
          originalPrice: "RM6.90",
          salePrice: "RM4.20",
          description: "Enhanced antibacterial formula, fragrance-free"
        }
      ]
    }
  ]

  const experiments = [
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Social Media Campaign",
      period: "October - November 2024",
      description: "Instagram and TikTok content featuring local surfers testing our products",
      results: "15,000 views, 320 engagement interactions, 45 direct inquiries",
      learnings: "Video content performs 3x better than static images. Authentic user-generated content drives higher conversion than polished ads."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Campus Booth Sales",
      period: "University Sports Fair - November 2024",
      description: "Physical booth at university sports event with product demonstrations",
      results: "150 people approached, 12 units pre-ordered, 65 email signups",
      learnings: "Hands-on experience is crucial for high-ticket items. Price objections reduced by 40% after product demonstration."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Peer Selling Network",
      period: "Ongoing since October 2024",
      description: "Team members leveraging personal networks and friend referrals",
      results: "25 direct sales through team connections, $18,750 in revenue",
      learnings: "Personal recommendations are our highest-converting channel (35% conversion rate). Trust is the biggest factor in purchase decisions."
    }
  ]

  const whatsappNumber = "+1234567890" // Replace with actual WhatsApp number

  const handleWhatsAppOrder = (productName: string, price: string) => {
    const message = `Hi Wetty Ventures! I'm interested in ordering the ${productName} (${price}). 

I'd like to know:
- Current availability and delivery timeline
- Size options and fitting guidance  
- Payment methods accepted
- Any current promotions

Looking forward to hearing from you!`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="w-full py-12 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('home')}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Homepage
            </Button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <ShoppingBag className="w-6 h-6 text-primary" />
              <Badge variant="secondary" className="text-sm">Our Products</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Wetty Products We're Selling
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Carefully selected smart wetsuit products that address real market needs identified through 
              extensive customer research and validated through our university-based selling experiments.
            </p>
            
            {/* Strong Call-to-Action */}
            <div className="bg-white/80 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <Badge variant="secondary" className="bg-green-100 text-green-800">Limited Time Offer</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                University project pricing available until December 2024 - Save up to $200 on your order!
              </p>
              <Button 
                size="lg" 
                className="gap-2 bg-green-600 hover:bg-green-700"
                onClick={() => handleWhatsAppOrder("any Wetty product", "special university pricing")}
              >
                <MessageCircle className="w-5 h-5" />
                Order Now via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">Our Product Line</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three strategically chosen products that cover different customer segments and price points in the smart wetsuit market.
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                ref={(el) => productRefs.current[product.id] = el}
                className={`overflow-hidden hover:shadow-lg transition-shadow ${
                  selectedProductId === product.id ? 'ring-2 ring-primary' : ''
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-square lg:aspect-[4/3] relative overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-white rounded-lg p-2 shadow-lg">
                          <div className="text-lg font-medium text-foreground">{product.price}</div>
                          <div className="text-sm text-muted-foreground line-through">{product.originalPrice}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-medium text-foreground mb-2">{product.name}</h3>
                        <p className="text-muted-foreground">{product.description}</p>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Why We Chose This Product:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {product.whyChosen}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          Target: {product.targetMarket}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {product.hasOptions ? (
                        <div className="flex gap-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                className="flex-1 gap-2"
                                size="lg"
                              >
                                <Eye className="w-5 h-5" />
                                View Options
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle>{product.name} - Options</DialogTitle>
                                <DialogDescription>
                                  Choose from the available fragrance options for {product.name}. Each option includes special university pricing.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                {product.options?.map((option: any, idx: number) => (
                                  <Card key={idx} className="p-4">
                                    <div className="space-y-2">
                                      <h4 className="font-medium">{option.name}</h4>
                                      <p className="text-sm text-muted-foreground">{option.description}</p>
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <span className="text-sm text-muted-foreground line-through">{option.originalPrice}</span>
                                          <span className="ml-2 font-medium text-primary">{option.salePrice}</span>
                                        </div>
                                        <div className="flex gap-2">
                                          <Button 
                                            size="sm"
                                            onClick={() => addToCart({
                                              id: `${product.id}-${idx}`,
                                              name: `${product.name} - ${option.name}`,
                                              price: parseFloat(option.salePrice.replace('RM', '')),
                                              image: product.image
                                            })}
                                          >
                                            Add to Cart
                                          </Button>
                                          <Button 
                                            size="sm"
                                            variant="outline"
                                            onClick={() => handleWhatsAppOrder(`${product.name} - ${option.name}`, option.salePrice)}
                                          >
                                            Order
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </Card>
                                ))}
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button 
                            onClick={() => handleWhatsAppOrder(product.name, product.price)}
                            className="flex-1 gap-2 bg-green-600 hover:bg-green-700"
                            size="lg"
                          >
                            <MessageCircle className="w-5 h-5" />
                            Order via WhatsApp
                          </Button>
                        </div>
                      ) : (
                        <div className="flex gap-3">
                          <Button 
                            onClick={() => addToCart({
                              id: product.id,
                              name: product.name,
                              price: product.priceValue,
                              image: product.image
                            })}
                            className="flex-1 gap-2"
                            size="lg"
                          >
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                          </Button>
                          <Button 
                            onClick={() => handleWhatsAppOrder(product.name, product.price)}
                            className="flex-1 gap-2 bg-green-600 hover:bg-green-700"
                            size="lg"
                          >
                            <MessageCircle className="w-5 h-5" />
                            Order via WhatsApp
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing, Promotion & Distribution Strategy */}
      <section className="w-full py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-primary" />
              <Badge variant="secondary">Selling Strategy</Badge>
            </div>
            <h2 className="text-3xl font-medium text-foreground mb-4">Our Strategic Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive pricing, promotion, and distribution strategies developed through market research and testing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <span>Pricing Strategy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Premium positioning:</strong> Pricing 20-30% above standard wetsuits to reflect advanced technology value.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>University discount:</strong> 15% off retail prices during our project period to drive early adoption.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Bundle pricing:</strong> 25% savings when purchasing wetsuit + accessory bundle together.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-green-600" />
                  </div>
                  <span>Promotion Strategy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Social media campaigns:</strong> Instagram and TikTok featuring real user experiences and product demonstrations.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Referral program:</strong> 15% discount for referrers and referee to leverage word-of-mouth marketing.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Campus presence:</strong> University sports events and water sports club partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <span>Distribution Strategy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Direct sales:</strong> WhatsApp and Instagram DM orders to maintain customer relationships and higher margins.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Campus network:</strong> Team member personal networks and university connections for trusted recommendations.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Event presence:</strong> Water sports events and trade shows for product demonstrations and brand building.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketing Experiments */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <TestTube className="w-5 h-5 text-primary" />
              <Badge variant="secondary">Experiments & Testing</Badge>
            </div>
            <h2 className="text-3xl font-medium text-foreground mb-4">What We've Tried</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiments we conducted during our university project to test different marketing approaches and validate our business model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiments.map((experiment, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {experiment.icon}
                    </div>
                    <div>
                      <div className="text-lg">{experiment.title}</div>
                      <div className="text-sm text-muted-foreground font-normal">{experiment.period}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {experiment.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-2">Results:</h4>
                    <p className="text-sm text-muted-foreground">{experiment.results}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-2">Key Learnings:</h4>
                    <p className="text-sm text-muted-foreground">{experiment.learnings}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="w-full py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="p-8 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-0 space-y-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-primary" />
                <Badge variant="secondary">Limited Time</Badge>
              </div>
              
              <h3 className="text-2xl font-medium text-foreground">Ready to Experience Wetty Technology?</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Don't miss your chance to be among the first to experience revolutionary smart wetsuit technology. 
                Our university project pricing is only available until December 2024, and we're accepting pre-orders now 
                with delivery starting January 2025.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <Button 
                  size="lg" 
                  className="gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => handleWhatsAppOrder("any Wetty product", "university pricing")}
                >
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="gap-2"
                  onClick={() => window.open('https://instagram.com/wettyventures', '_blank')}
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </Button>
              </div>

              <div className="text-xs text-muted-foreground space-y-1">
                <p>✓ Free shipping on orders over $500</p>
                <p>✓ 60-day satisfaction guarantee</p>
                <p>✓ University project special pricing</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}