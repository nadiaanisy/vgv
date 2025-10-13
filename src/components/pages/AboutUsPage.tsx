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
        "(NEED UPDATE) Temperature Adaptation",
        "(NEED UPDATE) Performance Monitoring",
        "(NEED UPDATE) Extended Activity Time",
        "(NEED UPDATE) Comfort Optimization"
      ],
    },
    {
      border: "border-l-4 border-l-blue-500",
      title: "BUSINESS_MODEL_SECTION.CUSTOMER_SEGMENTS", 
      icon: <Users className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.CUSTOMER_SEGMENTS_DECSRIPTION",
      highlights: [
        "NEED UPDATE) Recreational Enthusiasts (60%)",
        "NEED UPDATE) Professional Athletes (15%)",
        "NEED UPDATE) Marine Researchers (10%)",
        "NEED UPDATE) Safety Professionals (15%)"
      ],
    },
    {
      border: "border-l-4 border-l-green-500",
      title: "BUSINESS_MODEL_SECTION.CHANNELS",
      icon: <Globe className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.CHANNELS_DESCRIPTION",
      highlights: [
        "NEED UPDATE) Direct Online Sales",
        "NEED UPDATE) Retail Partnerships",
        "NEED UPDATE) Trade Shows",
        "NEED UPDATE) Training Centers"
      ],
    },
    {
      border: "border-l-4 border-l-pink-500",
      title: "BUSINESS_MODEL_SECTION.CUSTOMER_RELATIONSHIPS",
      icon: <Heart className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.CUSTOMER_RELATIONSHIPS_DESCRIPTION",
      highlights: [
        "NEED UPDATE) 60-Day Guarantee",
        "NEED UPDATE) 24/7 Support",
        "NEED UPDATE) Beta Community",
        "NEED UPDATE) Monthly Updates"
      ],
    },
    {
      border: "border-l-4 border-l-yellow-500",
      title: "BUSINESS_MODEL_SECTION.REVENUE_STREAMS",
      icon: <DollarSign className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.REVENUE_STREAMS_DESCRIPTION",
      highlights: [
        "NEED UPDATE) Wetsuit Sales ($1,299)",
        "NEED UPDATE) Accessory Bundles ($299)",
        "NEED UPDATE) Software Subscriptions ($49/year)",
        "NEED UPDATE) Technology Licensing"
      ],
    },
    {
      border: "border-l-4 border-l-purple-500",
      title: "BUSINESS_MODEL_SECTION.KEY_RESOURCES",
      icon: <Cog className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.KEY_RESOURCES_DESCRIPTION",
      highlights: [
        "NEED UPDATE) MUST Partnership",
        "NEED UPDATE) Manufacturing Partners",
        "NEED UPDATE) Patent Portfolio",
        "NEED UPDATE) Expert Team"
      ],
    },
    {
      border: "border-l-4 border-l-indigo-500",
      title: "BUSINESS_MODEL_SECTION.KEY_ACTIVITIES",
      icon: <Cog className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.KEY_ACTIVITIES_DESCRIPTION",
      highlights: [
        "NEED UPDATE) R&D Innovation",
        "NEED UPDATE) Manufacturing Management",
        "NEED UPDATE) Digital Marketing",
        "NEED UPDATE) Software Development"
      ],
    },
    {
      border: "border-l-4 border-l-tael-500",
      title: "BUSINESS_MODEL_SECTION.KEY_PARTNERSHIPS",
      icon: <Handshake className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.KEY_PARTNERSHIPS_DESCRIPTION",
      highlights: [
        "NEED UPDATE) MIT Materials Lab",
        "NEED UPDATE) Manufacturing Partners",
        "NEED UPDATE) Retail Network",
        "NEED UPDATE) Professional Athletes"
      ],
    },
    {
      border: "border-l-4 border-l-red-500",
      title: "BUSINESS_MODEL_SECTION.COST_STRUCTURE",
      icon: <TrendingDown className="w-6 h-6" />,
      content: "BUSINESS_MODEL_SECTION.COST_STRUCTURE_DESCRIPTION",
      highlights: [
        "NEED UPDATE) R&D (25%)",
        "NEED UPDATE) Manufacturing (35%)",
        "NEED UPDATE) Marketing (20%)",
        "NEED UPDATE) Operations (15%)"
      ],
    },
  ];

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
              {t('OUR_BUSINESS_MODEL_SUBTITLE')}
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
                    {section.highlights.map((text) => (
                      <Badge key={text} variant="outline">{text}</Badge>
                    ))}
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
            <p className="text-muted-foreground">{t('FINANCIAL_PROJECTION_DESCRIPTION_1')}</p>
            <p className="text-muted-foreground">{t('FINANCIAL_PROJECTION_DESCRIPTION_2')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-medium text-primary mb-2">{t('YEAR_1')}</div>
                <div className="text-2xl font-medium mb-4">{t('YEAR_1_TITLE')}</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>{t('YEAR_1_DESCRIPTION_1')}</div>
                  <div>{t('YEAR_1_DESCRIPTION_2')}</div>
                  <div>{t('YEAR_1_DESCRIPTION_3')}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-primary/50">
              <CardContent className="p-0">
                <div className="text-3xl font-medium text-primary mb-2">{t('YEAR_2')}</div>
                <div className="text-2xl font-medium mb-4">{t('YEAR_2_TITLE')}</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>{t('YEAR_2_DESCRIPTION_1')}</div>
                  <div>{t('YEAR_2_DESCRIPTION_2')}</div>
                  <div>{t('YEAR_2_DESCRIPTION_3')}</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <div className="text-3xl font-medium text-primary mb-2">{t('YEAR_3')}</div>
                <div className="text-2xl font-medium mb-4">{t('YEAR_3_TITLE')}</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>{t('YEAR_3_DESCRIPTION_1')}</div>
                  <div>{t('YEAR_3_DESCRIPTION_2')}</div>
                  <div>{t('YEAR_3_DESCRIPTION_3')}</div>
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
                {t('BUSINESS_MODEL_SUMMARY_DESCRIPTION')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}