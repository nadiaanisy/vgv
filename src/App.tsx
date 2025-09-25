import './assets/i18';
import { useState } from 'react';
import { CartItem } from './components/interface';
import { useCustomHook } from './components/misc';
import { Header } from './components/sections/Header';
import { HomePage } from './components/pages/HomePage';
import { AboutUsPage } from './components/pages/AboutUsPage';

export default function App() {
  const {
    currentPage,
    setCurrentPage,
    handleNavigate,
    currentLanguage,
    handleLanguageChange
  } = useCustomHook();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const viewProductById = (page: string, productId?: string) => {
    setCurrentPage(page)
    if (productId) {
      setSelectedProductId(productId)
    }
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
      // case 'products':
      //   return <ProductsPage onNavigate={handleNavigate} addToCart={addToCart} selectedProductId={selectedProductId} />
      // case 'customer-feedback':
      //   return <CustomerFeedbackPage onNavigate={handleNavigate} />
      // case 'contact':
      //   return <ContactPage onNavigate={handleNavigate} />
      case 'home':
      default:
        return <HomePage onNavigate={viewProductById} />
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