import './assets/i18';
// import { toast } from 'sonner';
import { useEffect } from 'react';
import { Toaster } from './components/ui/sooner';
// import { CartItem } from './components/interface';
import { useCustomHook } from './components/misc';
import { Header } from './components/sections/Header';
import { HomePage } from './components/pages/HomePage';
import { AboutUsPage } from './components/pages/AboutUsPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ContactUsPage } from './components/pages/ContactUsPage';
// import { CheckoutForm } from './components/sections/CheckoutForm';
import { SplashScreen } from './components/sections/SplashScreen';
import { TestimonialPage } from './components/pages/TestimonialPage';
import { BackgroundMusic } from './components/sections/BackgroundMusic';

/* ADMIN COMPONENTS */
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';

export default function App() {
  const {
    // t,
    currentPage,
    handleNavigate,
    currentLanguage,
    handleLanguageChange,
    selectedProductId,
    showSplash,
    setShowSplash,
    splashCompleted,
    setSplashCompleted,
    isAdminRoute,
    setIsAdminRoute,
    isAdminAuthenticated,
    setIsAdminAuthenticated
  } = useCustomHook();

  // const [cartItems, setCartItems] = useState<CartItem[]>([])
  // const [showCheckout, setShowCheckout] = useState(false);

  // const addToCart = (item: Omit<CartItem, 'quantity'>) => {
  //   setCartItems(prevItems => {
  //     const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
  //     const [rawName, rawKey] = item.name.split(' - ');
  //     const translatedOption = t(rawKey);
  //     const displayName = `${rawName} - ${translatedOption}`;
  //     const toastId = `cart-update-${item.id}`;
  //     if (existingItem) {
  //       toast.success(t('CART.UPDATETITLE'), {
  //         id: toastId,
  //         description: t('CART.QUANTITYINCREASED', {
  //           itemName: displayName,
  //           quantity: existingItem.quantity + 1,
  //         }),
  //         duration: 3000,
  //       })
  //       return prevItems.map(cartItem =>
  //         cartItem.id === item.id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       )
  //     }
  //     toast.success(t('CART.ADDEDTITTLE'), {
  //       description: t('CART.ITEMADDED', {
  //         id: toastId,
  //         itemName: displayName
  //       }),
  //       duration: 3000,
  //     })
  //     return [...prevItems, { ...item, quantity: 1 }]
  //   })
  // }

  // const updateCartItem = (id: string, quantity: number) => {
  //   if (quantity <= 0) {
  //     setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  //   } else {
  //     setCartItems(prevItems =>
  //       prevItems.map(item =>
  //         item.id === id ? { ...item, quantity } : item
  //       )
  //     )
  //   }
  // }

  // const clearCart = () => {
  //   setCartItems([])
  // }

  // const handleProceedToCheckout = () => {
  //   setShowCheckout(true)
  // }

  // const handleCloseCheckout = () => {
  //   setShowCheckout(false)
  //   clearCart()
  // }

  // Check for admin route and authentication on mount
  useEffect(() => {
    const path = window.location.hash || window.location.pathname
    const isAdmin = path.includes('admin')
    setIsAdminRoute(isAdmin)
    
    if (isAdmin) {
      const token = localStorage.getItem('veyra_admin_token')
      setIsAdminAuthenticated(token === 'authenticated')
      setShowSplash(false)
    }
  }, [])

  // Listen for hash changes to handle admin navigation
  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash || window.location.pathname
      const isAdmin = path.includes('admin')
      setIsAdminRoute(isAdmin)
      
      if (isAdmin) {
        const token = localStorage.getItem('veyra_admin_token')
        setIsAdminAuthenticated(token === 'authenticated')
        setShowSplash(false)
      } else {
        setShowSplash(false)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Keyboard shortcut to access admin (Ctrl/Cmd + Shift + A)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault()
        window.location.hash = 'admin'
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    setSplashCompleted(true)
  }

  // const getTotalCartItems = () => {
  //   return cartItems.reduce((total, item) => total + item.quantity, 0)
  // }

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true)
  }

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false)
    window.location.hash = ''
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about-us':
        return <AboutUsPage onNavigate={handleNavigate} />
      case 'products':
        return <ProductsPage
          onNavigate={handleNavigate}
          // addToCart={addToCart}
          selectedProductId={selectedProductId} 
        />
      case 'testimonial':
        return <TestimonialPage onNavigate={handleNavigate} />
      case 'contact-us':
        return <ContactUsPage onNavigate={handleNavigate} />
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  // If admin route, show admin interface
  if (isAdminRoute) {
    return (
      <div className="size-full min-h-screen bg-background">
        {isAdminAuthenticated ? (
          <AdminDashboard
            onLogout={handleAdminLogout}
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        ) : (
          <AdminLogin
            onLogin={handleAdminLogin}
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        )}
        <Toaster position="top-right" richColors />
      </div>
    )
  }

  // Regular website
  return (
    <div className="size-full min-h-screen bg-background">
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* Main App Content */}
      {!showSplash && (
        <>
          <Header 
            currentPage={currentPage} 
            onNavigate={handleNavigate}
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
            // cartItems={cartItems}
            // totalCartItems={getTotalCartItems()}
            // updateCartItem={updateCartItem}
            // onProceedToCheckout={handleProceedToCheckout}
          />
          {renderPage()}
      
          {/* Checkout Dialog */}
          {/* <CheckoutForm 
            cartItems={cartItems}
            isOpen={showCheckout}
            onClose={handleCloseCheckout}
          /> */}

        <Toaster position="top-right" richColors />
      </>
      )}

      {/* Background Music - Always available after splash */}
      {splashCompleted && (
        <BackgroundMusic youtubeId="htk6MRjmcnQ" autoPlay={true} initialVolume={0.5} />
      )}
    </div>
  )
}