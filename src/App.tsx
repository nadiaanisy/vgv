import './assets/i18';
import { useState } from 'react';
import { CartItem } from './components/interface';
import { useCustomHook } from './components/misc';
import { Header } from './components/sections/Header';
import { HomePage } from './components/pages/HomePage';
import { AboutUsPage } from './components/pages/AboutUsPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ContactUsPage } from './components/pages/ContactUsPage';
import { TestimonialPage } from './components/pages/TestimonialPage';

export default function App() {
  const {
    currentPage,
    handleNavigate,
    currentLanguage,
    handleLanguageChange,
    selectedProductId
  } = useCustomHook();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const updateCartItem = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      )
    }
  }

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about-us':
        return <AboutUsPage onNavigate={handleNavigate} />
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} addToCart={addToCart} selectedProductId={selectedProductId} />
      case 'testimonial':
        return <TestimonialPage onNavigate={handleNavigate} />
      case 'contact-us':
        return <ContactUsPage onNavigate={handleNavigate} />
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="size-full min-h-screen bg-background">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        cartItems={cartItems}
        totalCartItems={getTotalCartItems()}
        updateCartItem={updateCartItem}
      />
      {renderPage()}
    </div>
  )

}