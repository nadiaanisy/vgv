// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  BarChart3,
  DollarSign,
  Instagram,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Phone,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import {
  handleClicks,
  handleWhatsAppOrder
} from '../components/misc';
import { Product } from '../components/interface';

/* IMAGES */
import yatiAvatar from './images/teams/yati.jpg';
import isyqiAvatar from './images/teams/isyqi.jpg';
import amirahAvatar from './images/teams/amirah.jpg';
import kalimanAvatar from './images/teams/kaliman.jpg';
import etengahAvatar from './images/teams/etengah.jpg';
import christineAvatar from './images/teams/christine.jpg';
import miniWetWipesAll from './images/products/1.webp';
import option1MiniWipes from './images/products/1.1.webp';
import option2MiniWipes from './images/products/1.2.webp';
import option3MiniWipes from './images/products/1.3.webp';
import option4MiniWipes from './images/products/1.4.webp';
import wetWipesAll from './images/products/2.webp';
import option1Wipes from './images/products/2.1.webp';
import option2Wipes from './images/products/2.2.webp';
import option3Wipes from './images/products/2.3.webp';
import option4Wipes from './images/products/2.4.webp';
import option5Wipes from './images/products/2.5.webp';
import sportsWetWipes from './images/products/3.webp';
import shinyShowerGel from './images/products/4.webp';
import fabricAll from './images/products/5.webp';
import optionFabric1 from './images/products/5.1.png';
import optionFabric2 from './images/products/5.2.png';
import optionFabric3 from './images/products/5.3.png';
import antibactrialShowerCream from './images/products/6.webp';


export const email = "[your_company_help_email]";
export const whatsappNumber = "[your_whatsapp_number]";
export const instagramHandle = "[your_instagram_handle]";
export const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

export const languages = [
  { code: 'EN', name: 'English'},
  { code: 'BM', name: 'Bahasa Malaysia'}
];

export const navigationItems = [
  { key: 'home', label: 'MENU_LIST.HOME' },
  { key: 'about-us', label: 'MENU_LIST.ABOUT_US' },
  { key: 'products', label: 'MENU_LIST.PRODUCTS' },
  { key: 'testimonial', label: 'MENU_LIST.TESTIMONIAL' },
  { key: 'contact-us', label: 'MENU_LIST.CONTACT_US' }
];

export const businessHours = [
  { day: "MONDAY_FRIDAY", hours: "9-6" },
  { day: "SATURDAY", hours: "10-4" },
  { day: "SUNDAY", hours: "CLOSED" }
];

export const contactMethods = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    description: "QUICK_RESPONSE",
    contact: whatsappNumber,
    action: () => handleWhatsAppOrder('contactUs'),
    color: "text-green-600",
    bgColor: "bg-green-50",
    responseTime: "USUALLY_IN_AN_HOUR"
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: "Instagram DM",
    description: "CONNECT_WITH_US_ON_SM",
    contact: instagramHandle,
    action: () => handleClicks('instagram'),
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    responseTime: "USUALLY_IN_4_HOUR"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "EMAIL",
    description: "FOR_DETAILED_INQUIRIES",
    contact: email,
    action: () => handleClicks('email'),
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    responseTime: "USUALLY_IN_24_HOURS"
  }
];

export const metrics = [
  {
    icon: <Users className="w-6 h-6" />,
    label: "UNITS_SOLD",
    value: "247",
    subtext: "ACROSS_ALL_PRODUCT_LINES",
    color: "text-blue-600"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    label: "REVENUE",
    value: "$284,500",
    subtext: "TOTAL_SALES_TO_DATE",
    color: "text-green-600"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "CUSTOMERS_APPROACHED",
    value: "1,247",
    subtext: "DIRECT_OUTREACH_CONTACTS",
    color: "text-purple-600"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    label: "CONVERSION_RATE",
    value: "19.8%",
    subtext: "ABOVE_INDUSTRY_AVERAGE",
    color: "text-orange-600"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Professional Surfer",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1612014207252-f7f2dcd00d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3NTc3NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The Wetty Pro completely changed my surfing experience. I can stay out 3x longer in cold water - it's like having a personal climate control system!",
    rating: 5,
    product: "Wetty Pro Smart Wetsuit"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    role: "Marine Biologist",
    location: "Monterey Bay, CA",
    image: "https://images.unsplash.com/photo-1595667351874-158d2860465c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdXJmZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc2MDcwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "For deep-sea research, the Wetty Dive Essential is unmatched. The thermal regulation lets me focus on my work instead of fighting the cold.",
    rating: 5,
    product: "Wetty Dive Essential"
  },
  {
    id: 3,
    name: "Jake Thompson",
    role: "Recreational Diver",
    location: "Key Largo, FL",
    image: "https://images.unsplash.com/photo-1595956936239-4cad0fa009e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXQlMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3NTc2MDcwODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "I was skeptical about the price, but after 6 months of use, it's worth every penny. The comfort difference is night and day!",
    rating: 5,
    product: "Wetty Accessory Bundle"
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Competitive Swimmer",
    location: "San Diego, CA",
    image: "https://images.unsplash.com/photo-1594736797933-d0ca22213f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBhdGhsZXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3NjA3MTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Training in open water has never been more comfortable. The smart temperature control adapts perfectly to changing conditions during long sessions.",
    rating: 5,
    product: "Wetty Pro Smart Wetsuit"
  },
  {
    id: 5,
    name: "David Kim",
    role: "Scuba Instructor",
    location: "Honolulu, HI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzYwNzEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "My students notice the difference immediately. I can focus on teaching instead of managing cold discomfort. Game-changer for instructors!",
    rating: 5,
    product: "Wetty Dive Essential"
  },
  {
    id: 6,
    name: "Alex Johnson",
    role: "Free Diver",
    location: "Big Sur, CA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzYwNzEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The thermal efficiency is incredible. I can dive deeper and longer without the usual cold-induced fatigue. Revolutionary technology!",
    rating: 5,
    product: "Wetty Pro Smart Wetsuit"
  },
  {
    id: 7,
    name: "Lisa Chen",
    role: "Triathlete",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGF0aGxldGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc2MDcxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Perfect for cold water swims during triathlon training. The accessories bundle gives me complete protection and confidence in any conditions.",
    rating: 4,
    product: "Wetty Accessory Bundle"
  },
  {
    id: 8,
    name: "Ryan Martinez",
    role: "Underwater Photographer",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXRpbm8lMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc2MDcxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Extended underwater shoots are now possible. The consistent warmth lets me concentrate on capturing the perfect shot without rushing due to cold.",
    rating: 5,
    product: "Wetty Dive Essential"
  },
  {
    id: 9,
    name: "Michelle Torres",
    role: "Surf Coach",
    location: "Santa Cruz, CA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN1cmZlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzYwNzE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Teaching in cold Northern California waters is finally comfortable. My students see the difference in my energy and focus during lessons.",
    rating: 5,
    product: "Wetty Pro Smart Wetsuit"
  },
  {
    id: 10,
    name: "Tom Anderson",
    role: "Weekend Warrior",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzYwNzE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "As someone who only gets out on weekends, every session counts. The accessory bundle makes those precious hours in the water so much better.",
    rating: 4,
    product: "Wetty Accessory Bundle"
  }
];

export const whatWorked = [
  {
    icon: <Instagram className="w-5 h-5" />,
    title: "Instagram Marketing",
    description: "Social media campaigns generated 60% of our leads",
    metrics: "847 leads, $170K revenue attributed"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Referral Program", 
    description: "Word-of-mouth from satisfied customers drove strong growth",
    metrics: "35% of sales from referrals"
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Product Demonstrations",
    description: "Live demos at surf shops converted 45% of viewers",
    metrics: "12 events, 156 conversions"
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp Ordering",
    description: "Direct messaging made purchasing frictionless",
    metrics: "78% order completion rate"
  }
];

export const whatDidntWork = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Beach Booth Sales",
    description: "Physical booths had low foot traffic and high setup costs",
    impact: "Only 23 sales from 8 events",
    lesson: "Focus on digital channels instead"
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Generic Advertising",
    description: "Broad Facebook ads didn't resonate with target audience",
    impact: "High spend, low conversion (3.2%)",
    lesson: "Need highly targeted, niche marketing"
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Discount Promotions",
    description: "Price cuts attracted bargain hunters, not loyal customers",
    impact: "Lower margins, higher return rates",
    lesson: "Maintain premium positioning"
  }
];

export const teamMembers = [
  {
    name: "Noor Zawatil Isyqi Binti Saiful Bahri",
    role: "TEAM.CEO",
    avatar: isyqiAvatar,
    initials: "IS",
    assignmentInsight: "TEAM.CEO_INSIGHT",
    keyStrengths: ["STRATEGIC_VISION", "TEAM_LEADERSHIP", "BUSINESS_DEVELOPMENT"]
  },
  {
    name: "Norhayati Binti Yahya",
    role: "TEAM.COO",
    avatar: yatiAvatar,
    initials: "YY",
    assignmentInsight: "TEAM.COO_INSIGHT",
    keyStrengths: ["STRATEGIC_PLANNING", "OPERATIONAL_EFFICIENCY", "CREATIVE_CRITICAL_THINKING"]
  },
  {
    name: "Etengah Bin Ebung",
    role: "TEAM.MARKETING_BRANDING_MANAGER",
    avatar: etengahAvatar,
    initials: "EE",
    assignmentInsight: "TEAM.MARKETING_BRANDING_MANAGER_INSIGHT",
    keyStrengths: ["SOCIAL_MEDIA_STRATEGY", "BRAND_COMMUNICATIONS", "CUSTOMER_ENGAGEMENT"]
  },
  {
    name: "Christine Bernadette A/P Francis",
    role: "TEAM.SALES_MANAGER", 
    avatar: christineAvatar,
    initials: "CB",
    assignmentInsight: "TEAM.SALES_MANAGER_INSIGHT",
    keyStrengths: ["CUSTOMER_RELATIONS", "SALES_STRATEGY", "MARKET_ANALYSIS"]
  },
  {
    name: "Nurkaliman Bin Mohamed Hamden",
    role: "TEAM.FINANCE_DATA_ANALYST", 
    avatar: kalimanAvatar,
    initials: "NM",
    assignmentInsight: "TEAM.FINANCE_DATA_ANALYST_INSIGHT",
    keyStrengths: ["FINANCIAL_PLANNING", "DATA_ANALYSIS", "PERFORMANCE_TRACKING"]
  },
  {
    name: "Amirah Farah Diyana Binti Mohd Razali",
    role: "TEAM.TECH_WEBSITE_DEVELOPER", 
    avatar: amirahAvatar,
    initials: "AF",
    assignmentInsight: "TEAM.TECH_WEBSITE_DEVELOPER_INSIGHT",
    keyStrengths: ["TECHNICAL_PROFICIENCY", "PROBLEM_SOLVING", "DETAIL_ORIENTED"]
  }
];

export const experiments = [
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
];

export const products: Product[] = [
  {
    id: '0',
    image: miniWetWipesAll,
    name: 'Wetty Mini Wet Wipes (3x8\'s)',
    category: 'Wetty Mini Wipes',
    description_short: 'PRODUCT_SECTION.PRODUCT_1.DESCRIPTION_SHORT',
    description_long: 'PRODUCT_SECTION.PRODUCT_1.DESCRIPTION_LONG',
    priceRange: "RM3.90 - RM4.90",
    originalPrice: "RM6.90",
    whyChosen: "PRODUCT_SECTION.PRODUCT_1.WHY_CHOSEN",
    targetMarket: [
      "PRODUCT_SECTION.PRODUCT_1.TARGET_MARKET.1",
      "PRODUCT_SECTION.PRODUCT_1.TARGET_MARKET.2",
      "PRODUCT_SECTION.PRODUCT_1.TARGET_MARKET.3"
    ],
    benefits: [
      "PRODUCT_SECTION.PRODUCT_1.BENEFITS.1",
      "PRODUCT_SECTION.PRODUCT_1.BENEFITS.2",
      "PRODUCT_SECTION.PRODUCT_1.BENEFITS.3",
      "PRODUCT_SECTION.PRODUCT_1.BENEFITS.4",
      "PRODUCT_SECTION.PRODUCT_1.BENEFITS.5"
    ],
    hasOptions: true,
    options: [
      {
        name: "PRODUCT_SECTION.PRODUCT_1.OPTIONS.FRAGRANCE_FREE",
        originalPrice: "RM6.90",
        salePrice: "RM3.90",
        description: "PRODUCT_SECTION.PRODUCT_1.OPTIONS_DETAILS.FRAGRANCE_FREE_DESC",
        image: option1MiniWipes
      },
      {
        name: "PRODUCT_SECTION.PRODUCT_1.OPTIONS.FRAGRANCE_FRESH_APPLE",
        originalPrice: "RM6.90", 
        salePrice: "RM3.90",
        description: "PRODUCT_SECTION.PRODUCT_1.OPTIONS_DETAILS.FRAGRANCE_FRESH_APPLE_DESC",
        image: option2MiniWipes
      },
      {
        name: "PRODUCT_SECTION.PRODUCT_1.OPTIONS.FRAGRANCE_ROSE",
        originalPrice: "RM6.90",
        salePrice: "RM3.90", 
        description: "PRODUCT_SECTION.PRODUCT_1.OPTIONS_DETAILS.FRAGRANCE_ROSE_DESC",
        image: option3MiniWipes
      },
      {
        name: "PRODUCT_SECTION.PRODUCT_1.OPTIONS.FRAGRANCE_ANTIBACTERIAL",
        originalPrice: "RM6.90",
        salePrice: "RM4.20",
        description: "PRODUCT_SECTION.PRODUCT_1.OPTIONS_DETAILS.FRAGRANCE_ANTIBACTERIAL_DESC",
        image: option4MiniWipes
      }
    ],
    salePrice: 0.00
  },
  {
    id: '1',
    image: wetWipesAll,
    name: 'Wetty Wet Tissue (5x30\'s)',
    category: 'Wetty Wipes',
    description_short: 'PRODUCT_SECTION.PRODUCT_2.DESCRIPTION_SHORT',
    description_long: 'PRODUCT_SECTION.PRODUCT_2.DESCRIPTION_LONG',
    priceRange: "RM11.65 - RM13.89",
    originalPrice: "RM18.50",
    whyChosen: "PRODUCT_SECTION.PRODUCT_2.WHY_CHOSEN",
    targetMarket: [
      "PRODUCT_SECTION.PRODUCT_2.TARGET_MARKET.1",
      "PRODUCT_SECTION.PRODUCT_2.TARGET_MARKET.2",
      "PRODUCT_SECTION.PRODUCT_2.TARGET_MARKET.3"
    ],
    benefits: [
      "PRODUCT_SECTION.PRODUCT_2.BENEFITS.1",
      "PRODUCT_SECTION.PRODUCT_2.BENEFITS.2",
      "PRODUCT_SECTION.PRODUCT_2.BENEFITS.3",
      "PRODUCT_SECTION.PRODUCT_2.BENEFITS.4",
      "PRODUCT_SECTION.PRODUCT_2.BENEFITS.5"
    ],
    hasOptions: true,
    options: [
      {
        name: "PRODUCT_SECTION.PRODUCT_2.OPTIONS.FRAGRANCE_FREE",
        originalPrice: "RM18.50",
        salePrice: "RM11.65",
        description: "PRODUCT_SECTION.PRODUCT_2.OPTIONS_DETAILS.FRAGRANCE_FREE_DESC",
        image: option1Wipes
      },
      {
        name: "PRODUCT_SECTION.PRODUCT_2.OPTIONS.FRAGRANCE_LAVENDER",
        originalPrice: "RM18.50",
        salePrice: "RM13.89",
        description: "PRODUCT_SECTION.PRODUCT_2.OPTIONS_DETAILS.FRAGRANCE_LAVENDER_DESC",
        image: option2Wipes
      },
      {
        name: "PRODUCT_SECTION.PRODUCT_2.OPTIONS.FRAGRANCE_ROSE",
        originalPrice: "RM18.50",
        salePrice: "RM13.89",
        description: "PRODUCT_SECTION.PRODUCT_2.OPTIONS_DETAILS.FRAGRANCE_ROSE_DESC",
        image: option3Wipes
      },
      {
        name: "PRODUCT_SECTION.PRODUCT_2.OPTIONS.FRAGRANCE_ANTIBACTERIAL",
        originalPrice: "RM18.50",
        salePrice: "RM13.89",
        description: "PRODUCT_SECTION.PRODUCT_2.OPTIONS_DETAILS.FRAGRANCE_ANTIBACTERIAL_DESC",
        image: option4Wipes
      },
      {
        name: "PRODUCT_SECTION.PRODUCT_2.OPTIONS.FRAGRANCE_ANTIBACTERIAL_FREE",
        originalPrice: "RM18.50",
        salePrice: "RM13.89",
        description: "PRODUCT_SECTION.PRODUCT_2.OPTIONS_DETAILS.FRAGRANCE_ANTIBACTERIAL_FREE_DESC",
        image: option5Wipes
      },
    ],
    salePrice: 0.00
  },
  {
    id: '2',
    image: sportsWetWipes,
    name: 'Wetty Sports Wipes',
    category: 'Wetty Sport Wipes',
    description_short: 'PRODUCT_SECTION.PRODUCT_3.DESCRIPTION_SHORT',
    description_long: 'PRODUCT_SECTION.PRODUCT_3.DESCRIPTION_LONG',
    priceRange: "RM6.00",
    originalPrice: "RM16.65",
    whyChosen: "PRODUCT_SECTION.PRODUCT_3.WHY_CHOSEN",
    targetMarket: [
      "PRODUCT_SECTION.PRODUCT_3.TARGET_MARKET.1",
      "PRODUCT_SECTION.PRODUCT_3.TARGET_MARKET.2",
      "PRODUCT_SECTION.PRODUCT_3.TARGET_MARKET.3"
    ],
    benefits: [
      "PRODUCT_SECTION.PRODUCT_3.BENEFITS.1",
      "PRODUCT_SECTION.PRODUCT_3.BENEFITS.2",
      "PRODUCT_SECTION.PRODUCT_3.BENEFITS.3",
      "PRODUCT_SECTION.PRODUCT_3.BENEFITS.4",
      "PRODUCT_SECTION.PRODUCT_3.BENEFITS.5"
    ],
    hasOptions: false,
    salePrice: 6.00
  },
  {
    id: '3',
    image: shinyShowerGel,
    name: 'Shinny Shower Gell',
    category: 'Shower',
    description_short: 'PRODUCT_SECTION.PRODUCT_4.DESCRIPTION_SHORT',
    description_long: 'PRODUCT_SECTION.PRODUCT_4.DESCRIPTION_LONG',
    priceRange: "RM6.00",
    originalPrice: "RM18.90",
    whyChosen: "PRODUCT_SECTION.PRODUCT_4.WHY_CHOSEN",
    targetMarket: [
      "PRODUCT_SECTION.PRODUCT_4.TARGET_MARKET.1",
      "PRODUCT_SECTION.PRODUCT_4.TARGET_MARKET.2",
      "PRODUCT_SECTION.PRODUCT_4.TARGET_MARKET.3"
    ],
    benefits: [
      "PRODUCT_SECTION.PRODUCT_4.BENEFITS.1",
      "PRODUCT_SECTION.PRODUCT_4.BENEFITS.2",
      "PRODUCT_SECTION.PRODUCT_4.BENEFITS.3",
      "PRODUCT_SECTION.PRODUCT_4.BENEFITS.4",
      "PRODUCT_SECTION.PRODUCT_4.BENEFITS.5"
    ],
    hasOptions: false,
    salePrice: 6.00
  },
  {
    id: '4',
    image: fabricAll,
    name: 'Wetty Fabric Freshener (400ml)',
    category: 'Wetty abric Freshener',
    description_short: 'PRODUCT_SECTION.PRODUCT_5.DESCRIPTION_SHORT',
    description_long: 'PRODUCT_SECTION.PRODUCT_5.DESCRIPTION_LONG',
    priceRange: "RM8.00",
    originalPrice: "RM12.90",
    whyChosen: "PRODUCT_SECTION.PRODUCT_5.WHY_CHOSEN",
    targetMarket: [
      "PRODUCT_SECTION.PRODUCT_5.TARGET_MARKET.1",
      "PRODUCT_SECTION.PRODUCT_5.TARGET_MARKET.2",
      "PRODUCT_SECTION.PRODUCT_5.TARGET_MARKET.3"
    ],
    benefits: [
      "PRODUCT_SECTION.PRODUCT_5.BENEFITS.1",
      "PRODUCT_SECTION.PRODUCT_5.BENEFITS.2",
      "PRODUCT_SECTION.PRODUCT_5.BENEFITS.3",
      "PRODUCT_SECTION.PRODUCT_5.BENEFITS.4",
      "PRODUCT_SECTION.PRODUCT_5.BENEFITS.5"
    ],
    hasOptions: true,
    salePrice: 0.00,
    options: [
      {
        name: "PRODUCT_SECTION.PRODUCT_5.OPTIONS.TWILIGHT",
        originalPrice: "RM12.90",
        salePrice: "RM8.00",
        description: "PRODUCT_SECTION.PRODUCT_5.OPTIONS_DETAILS.TWILIGHT_DESC",
        image: optionFabric1
      },
      {
        name: "PRODUCT_SECTION.PRODUCT_5.OPTIONS.SUNSET",
        originalPrice: "RM12.90",
        salePrice: "RM8.00",
        description: "PRODUCT_SECTION.PRODUCT_5.OPTIONS_DETAILS.SUNSET_DESC",
        image: optionFabric2
      },
      {
        name: "PRODUCT_SECTION.PRODUCT_5.OPTIONS.MORNING_DEW",
        originalPrice: "RM12.90",
        salePrice: "RM8.00",
        description: "PRODUCT_SECTION.PRODUCT_5.OPTIONS_DETAILS.MORNING_DEW_DESC",
        image: optionFabric3
      }
    ]
  },
  {
    id: '5',
    image: antibactrialShowerCream,
    name: 'Wetty Antibacterial Shower Cream',
    category: 'Shower',
    description_short: 'PRODUCT_SECTION.PRODUCT_6.DESCRIPTION_SHORT',
    description_long: 'PRODUCT_SECTION.PRODUCT_6.DESCRIPTION_LONG',
    priceRange: "RM9.65",
    originalPrice: "RM20.00",
    whyChosen: "PRODUCT_SECTION.PRODUCT_6.WHY_CHOSEN",
    targetMarket: [
      "PRODUCT_SECTION.PRODUCT_6.TARGET_MARKET.1",
      "PRODUCT_SECTION.PRODUCT_6.TARGET_MARKET.2",
      "PRODUCT_SECTION.PRODUCT_6.TARGET_MARKET.3"
    ],
    benefits: [
      "PRODUCT_SECTION.PRODUCT_6.BENEFITS.1",
      "PRODUCT_SECTION.PRODUCT_6.BENEFITS.2",
      "PRODUCT_SECTION.PRODUCT_6.BENEFITS.3",
      "PRODUCT_SECTION.PRODUCT_6.BENEFITS.4",
      "PRODUCT_SECTION.PRODUCT_6.BENEFITS.5"
    ],
    hasOptions: false,
    salePrice: 9.65
  },
];