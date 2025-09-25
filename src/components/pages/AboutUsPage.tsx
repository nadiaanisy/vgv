import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Target, 
  Users, 
  Globe, 
  Heart, 
  DollarSign, 
  Cog, 
  TrendingDown,
  Lightbulb,
  Handshake,
  ArrowLeft,
  Building2
} from 'lucide-react'

interface BusinessModelPageProps {
  onNavigate: (page: string) => void
}

export function BusinessModelPage({ onNavigate }: BusinessModelPageProps) {
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
              <Building2 className="w-6 h-6 text-primary" />
              <Badge variant="secondary" className="text-sm">About Us</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Our Business Model
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Understanding how Wetty Ventures creates, delivers, and captures value in the smart wetsuit market. 
              Here's our comprehensive business model that drives our entrepreneurial success.
            </p>
          </div>
        </div>
      </section>

      {/* Business Model Canvas - 9 Blocks */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            
            {/* Value Proposition */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <span>Value Proposition</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our Wetty product offering provides exceptional value through revolutionary smart wetsuit technology that adapts to your water environment. 
                  What makes us valuable is our unique combination of real-time temperature regulation, performance monitoring, and comfort optimization. 
                  Unlike traditional wetsuits that offer static protection, our smart wetsuits actively respond to changing water conditions, extending your 
                  activity time by up to 40% while maintaining optimal comfort. We solve the problem of temperature discomfort and performance limitations 
                  that water sports enthusiasts face, giving them the confidence to push their boundaries in any aquatic environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Temperature Adaptation</Badge>
                  <Badge variant="outline">Performance Monitoring</Badge>
                  <Badge variant="outline">Extended Activity Time</Badge>
                  <Badge variant="outline">Comfort Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Customer Segments */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <span>Customer Segments</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our target customers are passionate water sports enthusiasts who prioritize performance and comfort. Our primary segment includes 
                  recreational surfers, divers, and swimmers (60% of our market) who engage in water activities regularly and are willing to invest 
                  in premium gear for better experiences. Our secondary segment comprises professional athletes and competitive water sports participants 
                  (15%) who need cutting-edge technology for competitive advantage. We also serve marine researchers and professionals (10%) who require 
                  reliable thermal protection for extended water exposure, and water safety professionals including coast guard and rescue teams (15%) 
                  who need dependable gear for critical operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Recreational Enthusiasts (60%)</Badge>
                  <Badge variant="outline">Professional Athletes (15%)</Badge>
                  <Badge variant="outline">Marine Researchers (10%)</Badge>
                  <Badge variant="outline">Safety Professionals (15%)</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Channels */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span>Channels</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reach our customers through multiple strategic channels to maximize market penetration. Our primary channel is direct-to-consumer 
                  online sales through our website, which allows us to maintain higher margins and direct customer relationships. We partner with premium 
                  surf shops and dive centers (50+ locations) to provide hands-on product experience and serve customers who prefer in-person shopping. 
                  We participate in major trade shows like DEMA, Surf Expo, and Outdoor Retailer to build brand awareness and establish industry connections. 
                  Additionally, we collaborate with marine training academies and certification centers to introduce our products to new water sports participants 
                  and professionals who need reliable gear for their training and work.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Direct Online Sales</Badge>
                  <Badge variant="outline">Retail Partnerships</Badge>
                  <Badge variant="outline">Trade Shows</Badge>
                  <Badge variant="outline">Training Centers</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Customer Relationships */}
            <Card className="border-l-4 border-l-pink-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span>Customer Relationships</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We build strong customer relationships through trust, transparency, and exceptional service. Our approach focuses on creating long-term 
                  loyalty rather than one-time transactions. We maintain transparency by providing monthly development newsletters with behind-the-scenes 
                  content about our innovation process. We offer a 60-day satisfaction guarantee to build confidence in our products and demonstrate our 
                  commitment to customer satisfaction. Our responsive customer support team provides 24/7 assistance with an average 4-hour response time. 
                  We also run an exclusive beta tester community where early adopters get access to new features and provide valuable feedback that shapes 
                  our product development, making them feel like valued partners in our innovation journey.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">60-Day Guarantee</Badge>
                  <Badge variant="outline">24/7 Support</Badge>
                  <Badge variant="outline">Beta Community</Badge>
                  <Badge variant="outline">Monthly Updates</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Streams */}
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <span>Revenue Streams</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our revenue model combines multiple streams to ensure sustainable growth and profitability. Primary revenue comes from direct wetsuit 
                  sales at $1,299 MSRP with a 45% gross margin, targeting to sell 1,500 units in Year 1. We offer premium accessory bundles including 
                  smart gloves, boots, and hoods for $299 with a 60% margin, as these complement our main product and enhance the user experience. 
                  Annual software subscriptions at $49/year provide recurring revenue for advanced analytics and performance tracking features. 
                  Looking ahead, we plan to generate significant revenue through technology licensing to major sportswear brands, projecting $2M+ 
                  annually as our smart fabric technology proves successful in the market.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Wetsuit Sales ($1,299)</Badge>
                  <Badge variant="outline">Accessory Bundles ($299)</Badge>
                  <Badge variant="outline">Software Subscriptions ($49/year)</Badge>
                  <Badge variant="outline">Technology Licensing</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Resources */}
            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                    <Cog className="w-6 h-6" />
                  </div>
                  <span>Key Resources</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our key resources are the essential assets that enable our business operations and competitive advantage. Our most valuable resource 
                  is our exclusive 3-year partnership with MIT Materials Lab, giving us access to cutting-edge research and development capabilities. 
                  We have established relationships with Tier-1 manufacturing partners in Taiwan who hold ISO certifications and can scale production 
                  as we grow. Our intellectual property portfolio includes 12 pending patents on thermal regulation technology, which creates barriers 
                  to competition. Our experienced team of 15 professionals brings combined 80+ years of expertise in wearable technology, materials 
                  science, and water sports, along with our proprietary AI algorithms that power the smart adaptation features of our wetsuits.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MIT Partnership</Badge>
                  <Badge variant="outline">Manufacturing Partners</Badge>
                  <Badge variant="outline">Patent Portfolio</Badge>
                  <Badge variant="outline">Expert Team</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Activities */}
            <Card className="border-l-4 border-l-indigo-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <span>Key Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our key activities focus on continuous innovation, quality manufacturing, and effective marketing to build our brand and reach customers. 
                  Research and development is our primary activity, consuming 25% of our revenue as we continuously improve our smart fabric technology 
                  and develop new features. We actively manage our manufacturing relationships to ensure quality control and efficient production scaling. 
                  Digital marketing campaigns including social media, influencer partnerships, and targeted advertising help us reach our specific customer 
                  segments. We participate in major trade shows and water sports events to build brand awareness and establish industry relationships. 
                  Software development is ongoing to enhance our mobile app and smart features, while customer support activities ensure satisfaction 
                  and loyalty among our user base.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">R&D Innovation</Badge>
                  <Badge variant="outline">Manufacturing Management</Badge>
                  <Badge variant="outline">Digital Marketing</Badge>
                  <Badge variant="outline">Software Development</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Partnerships */}
            <Card className="border-l-4 border-l-teal-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <span>Key Partnerships</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Strategic partnerships are crucial for our success, providing access to expertise, resources, and markets that we couldn't develop 
                  independently. Our partnership with MIT Materials Lab gives us access to world-class research facilities and expertise in advanced 
                  materials science. Manufacturing partnerships with certified facilities in Taiwan ensure reliable, high-quality production at scale. 
                  We partner with premium surf shops and dive centers for retail distribution, leveraging their existing customer relationships and 
                  local market knowledge. Influencer partnerships with professional water sports athletes help build credibility and reach our target 
                  audience authentically. We also collaborate with marine training centers and certification programs to introduce our products to 
                  new water sports participants and establish our brand as the professional choice for serious water enthusiasts.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MIT Materials Lab</Badge>
                  <Badge variant="outline">Manufacturing Partners</Badge>
                  <Badge variant="outline">Retail Network</Badge>
                  <Badge variant="outline">Professional Athletes</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Cost Structure */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <span>Cost Structure</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our cost structure reflects our commitment to innovation and quality while maintaining sustainable profitability. Research and development 
                  represents our largest investment at 25% of revenue, funding our MIT partnership, materials testing, and continuous product improvement. 
                  Manufacturing costs account for 35% of revenue due to premium materials and smart components required for our advanced wetsuit technology. 
                  Marketing expenses consume 20% of revenue, covering digital advertising campaigns, influencer partnerships, trade show participation, 
                  and content creation to build brand awareness in competitive markets. Operations costs represent 15% of revenue, covering our team 
                  salaries, office facilities, software development tools, and ongoing technology infrastructure needed to support our smart features 
                  and customer support services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">R&D (25%)</Badge>
                  <Badge variant="outline">Manufacturing (35%)</Badge>
                  <Badge variant="outline">Marketing (20%)</Badge>
                  <Badge variant="outline">Operations (15%)</Badge>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="w-full py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="p-8">
            <CardContent className="p-0 space-y-4">
              <div className="inline-flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <Badge variant="secondary">Business Model Summary</Badge>
              </div>
              
              <h3 className="text-xl font-medium text-foreground">Our Integrated Business Approach</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Wetty Ventures operates on a comprehensive business model that combines innovative product development, 
                strategic partnerships, and customer-focused service delivery. By investing heavily in R&D while maintaining 
                strong manufacturing and marketing capabilities, we're positioned to capture significant value in the growing 
                smart wearables market while delivering exceptional value to water sports enthusiasts worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}