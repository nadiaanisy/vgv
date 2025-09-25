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
//   { key: 'products', label: 'MENU_LIST.PRODUCTS' },
//   { key: 'testimonial', label: 'MENU_LIST.TESTIMONIAL' },
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

export const products: Product[] = [
  {
    id: '0',
    image: miniWetWipesAll,
    name: 'Wetty Mini Wet Wipes (3 Pack x 8\'s)',
    category: 'Wetty Mini Wipes',
    description_short: 'PRODUCT_SECTION.PRODUCT_1.DESCRIPTION_SHORT',
    description_long: 'PRODUCT_SECTION.PRODUCT_1.DESCRIPTION_LONG',
    priceRange: "RM3.90 - RM4.90",
    originalPrice: "RM6.90",
    whyChosen: "PRODUCT_SECTION.PRODUCT_1.WHY_CHOSEN",
    targetMarket: "PRODUCT_SECTION.PRODUCT_1.TARGET_MARKET",
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

    ]
  },
  // {
  //   id: '1',
  //   name: 'Wetty Mini Wet Wipes',
  //   image: miniWetWipes,
  //   category: 'Wetty Wipes',
  // }
];