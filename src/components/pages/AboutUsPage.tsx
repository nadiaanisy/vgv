import {
  useCustomHook
} from '../misc';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../ui/card';
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
  Star,
  Package,
  ArrowLeft,
  Building2
} from 'lucide-react'
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface AboutUsPageProps {
  onNavigate: (page: string) => void
}
export function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  const { t } = useCustomHook();

  const businessSections = [
    {
      border: "border-l-4 border-l-primary",
      title: "BUSINESS_MODEL_SECTION.VALUE_PROPOSITION",
      icon: <Lightbulb className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.VALUE_PROPOSITION_DESCRIPTION",
      highlights: [
        <Badge variant="outline">(NEED UPDATE) Temperature Adaptation</Badge>,
        <Badge variant="outline">(NEED UPDATE) Performance Monitoring</Badge>,
        <Badge variant="outline">(NEED UPDATE) Extended Activity Time</Badge>,
        <Badge variant="outline">(NEED UPDATE) Comfort Optimization</Badge>
      ],
    },
    {
      border: "border-l-4 border-l-blue-500",
      title: "BUSINESS_MODEL_SECTION.CUSTOMER_SEGMENTS", 
      icon: <Users className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.CUSTOMER_SEGMENTS_DECSRIPTION",
      highlights: [
        <Badge variant="outline">(NEED UPDATE) Recreational Enthusiasts (60%)</Badge>,
        <Badge variant="outline">(NEED UPDATE) Professional Athletes (15%)</Badge>,
        <Badge variant="outline">(NEED UPDATE) Marine Researchers (10%)</Badge>,
        <Badge variant="outline">(NEED UPDATE) Safety Professionals (15%)</Badge>
      ],
    },
    {
      border: "border-l-4 border-l-green-500",
      title: "BUSINESS_MODEL_SECTION.CHANNELS",
      icon: <Globe className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.CHANNELS_DESCRIPTION",
      highlights: [
        <Badge variant="outline">(NEED UPDATE) Direct Online Sales</Badge>,
        <Badge variant="outline">(NEED UPDATE) Retail Partnerships</Badge>,
        <Badge variant="outline">(NEED UPDATE) Trade Shows</Badge>,
        <Badge variant="outline">(NEED UPDATE) Training Centers</Badge>
      ],
    },
    {
      border: "border-l-4 border-l-pink-500",
      title: "BUSINESS_MODEL_SECTION.CUSTOMER_RELATIONSHIPS",
      icon: <Heart className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.CUSTOMER_RELATIONSHIPS_DESCRIPTION",
      highlights: [
        <Badge variant="outline">(NEED UPDATE) 60-Day Guarantee</Badge>,
        <Badge variant="outline">(NEED UPDATE) 24/7 Support</Badge>,
        <Badge variant="outline">(NEED UPDATE) Beta Community</Badge>,
        <Badge variant="outline">(NEED UPDATE) Monthly Updates</Badge>
      ],
    },
    {
      border: "border-l-4 border-l-yellow-500",
      title: "BUSINESS_MODEL_SECTION.REVENUE_STREAMS",
      icon: <DollarSign className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.REVENUE_STREAMS_DESCRIPTION",
      highlights: [
        <Badge variant="outline">(NEED UPDATE) Wetsuit Sales ($1,299)</Badge>,
        <Badge variant="outline">(NEED UPDATE) Accessory Bundles ($299)</Badge>,
        <Badge variant="outline">(NEED UPDATE) Software Subscriptions ($49/year)</Badge>,
        <Badge variant="outline">(NEED UPDATE) Technology Licensing</Badge>
      ],
    },
    {
      border: "border-l-4 border-l-purple-500",
      title: "BUSINESS_MODEL_SECTION.KEY_RESOURCES",
      icon: <Cog className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.KEY_RESOURCES_DESCRIPTION",
      highlights: [
        <Badge variant="outline">(NEED UPDATE) MUST Partnership</Badge>,
        <Badge variant="outline">(NEED UPDATE) Manufacturing Partners</Badge>,
        <Badge variant="outline">(NEED UPDATE) Patent Portfolio</Badge>,
        <Badge variant="outline">(NEED UPDATE) Expert Team</Badge>
      ],
    },
    {
      border: "border-l-4 border-l-indigo-500",
      title: "BUSINESS_MODEL_SECTION.KEY_ACTIVITIES",
      icon: <Cog className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.KEY_ACTIVITIES_DESCRIPTION",
      highlights: [
        <Badge variant="outline">(NEED UPDATE) R&D Innovation</Badge>,
        <Badge variant="outline">(NEED UPDATE) Manufacturing Management</Badge>,
        <Badge variant="outline">(NEED UPDATE) Digital Marketing</Badge>,
        <Badge variant="outline">(NEED UPDATE) Software Development</Badge>
      ],
    },
    {
      border: "border-l-4 border-l-tael-500",
      title: "BUSINESS_MODEL_SECTION.KEY_PARTNERSHIPS",
      icon: <Handshake className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.KEY_PARTNERSHIPS_DESCRIPTION",
      highlights: [
        <Badge variant="outline">(NEED UPDATE) MIT Materials Lab</Badge>,
        <Badge variant="outline">(NEED UPDATE) Manufacturing Partners</Badge>,
        <Badge variant="outline">(NEED UPDATE) Retail Network</Badge>,
        <Badge variant="outline">(NEED UPDATE) Professional Athletes</Badge>
      ],
    },
    {
      border: "border-l-4 border-l-red-500",
      title: "BUSINESS_MODEL_SECTION.COST_STRUCTURE",
      icon: <TrendingDown className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.COST_STRUCTURE_DESCRIPTION",
      highlights: [
        <Badge variant="outline">(NEED UPDATE) R&D (25%)</Badge>,
        <Badge variant="outline">(NEED UPDATE) Manufacturing (35%)</Badge>,
        <Badge variant="outline">(NEED UPDATE) Marketing (20%)</Badge>,
        <Badge variant="outline">(NEED UPDATE) Operations (15%)</Badge>
      ],
    },
  ]

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
              {t('BUTTONS.BACK_TO_HOME')}
            </Button>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <Building2 className="w-6 h-6 text-primary" />
              <Badge variant="secondary" className="text-sm">{t('BUSINESS_STRATEGY')}</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-6">
              {t('OUR_BUSINESS_MODEL_TITLE')}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              (NEED UPDATE) {t('OUR_BUSINESS_MODEL_SUBTITLE')}
            </p>
          </div>
        </div>
      </section>

      {/* Business Model Canvas - 9 Blocks */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {businessSections.map((section, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${section.border}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {section.icon}
                    </div>
                    <span>{t(section.title)}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{t(section.content)}</p>
                  <div className="flex flex-wrap gap-2">
                    {section.highlights}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="w-full py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">{t('FINANCIAL_PROJECTION')}</h2>
            <p className="text-muted-foreground">(NEED UPDATE) 3-year revenue and growth outlook</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-medium text-primary mb-2">(NEED UPDATE) Year 1</div>
                <div className="text-2xl font-medium mb-4">(NEED UPDATE) $2.5M</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>(NEED UPDATE) 1,500 units sold</div>
                  <div>(NEED UPDATE) Initial market entry</div>
                  <div>(NEED UPDATE) Beta customer feedback</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-primary/50">
              <CardContent className="p-0">
                <div className="text-3xl font-medium text-primary mb-2">(NEED UPDATE) Year 2</div>
                <div className="text-2xl font-medium mb-4">(NEED UPDATE) $8.5M</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>(NEED UPDATE) 5,000 units sold</div>
                  <div>(NEED UPDATE) Retail partnerships</div>
                  <div>(NEED UPDATE) Product improvements</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-medium text-primary mb-2">(NEED UPDATE) Year 3</div>
                <div className="text-2xl font-medium mb-4">(NEED UPDATE) $25M</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>(NEED UPDATE) 15,000 units sold</div>
                  <div>(NEED UPDATE) International expansion</div>
                  <div>(NEED UPDATE) Technology licensing</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Package className="w-5 h-5 text-primary" />
                <span className="text-2xl font-medium">(NEED UPDATE) $1,299</span>
              </div>
              <p className="text-sm text-muted-foreground">(NEED UPDATE) Launch price</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-2xl font-medium">(NEED UPDATE) 50M</span>
              </div>
              <p className="text-sm text-muted-foreground">(NEED UPDATE) Target market size</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Handshake className="w-5 h-5 text-primary" />
                <span className="text-2xl font-medium">(NEED UPDATE) 15+</span>
              </div>
              <p className="text-sm text-muted-foreground">(NEED UPDATE) Retail partners</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-2xl font-medium">(NEED UPDATE) Q2 2025</span>
              </div>
              <p className="text-sm text-muted-foreground">(NEED UPDATE) Launch timeline</p>
            </div>
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
                <Badge variant="secondary">{t('BUSINESS_MODEL_SUMMARY')}</Badge>
              </div>
              
              <h3 className="text-xl font-medium text-foreground">{t('BUSINESS_MODEL_SUMMARY_TITLE')}</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                (NEED UPDATE) {t('BUSINESS_MODEL_SUMMARY_DESCRIPTION')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}