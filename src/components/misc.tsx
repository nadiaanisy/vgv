import {
  clsx,
  type ClassValue
} from 'clsx';
import {
  email,
  languages,
  ERROR_IMG_SRC,
  whatsappNumber,
  instagramHandle
} from '../assets/data';
import i18n from 'i18next';
import { useState } from 'react';
import { twMerge } from "tailwind-merge";
import { useTranslation } from 'react-i18next';

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  }

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading"
          {...rest}
          data-original-url={src}
        />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleClicks(type: string) {
  if(type === 'instagram') {
    window.open(`https://instagram.com/${instagramHandle.replace('@', '')}`, '_blank');
  } else {
    window.open(`mailto:${email}`, '_blank');
  }
}

export function handleWhatsAppOrder(
  from: string,
  message?: string,
  productName?: string,
  price?: string
) {
  let msg = '';
  if(from === 'cart') {
    msg = message ?? "";
  } else if(from === 'home') {
    if (localStorage.getItem('i18nextLng') === 'BM') {
      msg = "Hai! Saya berminat untuk menempah produk anda. Bolehkah anda membantu saya?";
    } else {
      msg = "Hi! I'm interested in ordering your products. Can you help me?";
    }
  } else if(from === 'products') {
    if (localStorage.getItem('i18nextLng') === 'BM') {
      msg = `Hai! Saya berminat untuk memesan ${productName} (${price})

            Saya ingin tahu:
            - Ketersediaan semasa dan garis masa penghantaran
            - Pilihan saiz dan panduan pemasangan
            - Kaedah pembayaran diterima
            - Sebarang promosi semasa

            Tidak sabar-sabar untuk mendengar daripada anda!`;
    } else {
      msg = `Hi! I'm interested in ordering the ${productName} (${price})

            I'd like to know:
            - Current availability and delivery timeline
            - Size options and fitting guidance  
            - Payment methods accepted
            - Any current promotions

            Looking forward to hearing from you!`;
    }
  } else {
    if (localStorage.getItem('i18nextLng') === 'BM') {
      msg = "Hai! Saya berminat untuk mengetahui lebih lanjut tentang produk anda.";
    } else {
      msg = "Hi! I'm interested in learning more about your products.";
    }
  }
  const encodedMessage = encodeURIComponent(msg);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

export const useCustomHook = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLanguage, setCurrentLanguage] = useState(() => i18n.language.toLowerCase());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  /*Handle pages navigation*/
  const handleNavigate = (page: string, productId?: string) => {
    setCurrentPage(page)
    if (productId) {
      setSelectedProductId(productId)
    }
  }

  /*Handle Language Change and Translation*/
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language)
  };

  /*Get Current Language*/
  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === localStorage.getItem('i18nextLng')) || languages[0];
  }

  return {
    t,
    currentPage,
    setCurrentPage,
    currentLanguage,
    setCurrentLanguage,
    mobileMenuOpen,
    setMobileMenuOpen,

    selectedProductId,
    setSelectedProductId,
    
    handleNavigate,
    handleLanguageChange,
    getCurrentLanguage,
    isSubmitting,
    setIsSubmitting
  };
}