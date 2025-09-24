import {
  useCustomHook,
  handleWhatsAppOrder
} from '../misc';
import {
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
  MessageCircle
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { CartItem } from '../interface';
import { Separator } from '../ui/separator';

interface CartProps {
  cartItems: CartItem[]
  updateCartItem: (id: string, quantity: number) => void
}
export function Cart({ cartItems, updateCartItem }: CartProps) {
  const { t } = useCustomHook();
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleOnClickWhatsAppOrder = () => {
    if (cartItems.length === 0) return

    let message = "";
    if (localStorage.getItem('i18nextLng') === 'BM') {
      message += "Hai! Saya ingin memesan produk berikut:\n\n";
    } else {
      message += "Hi! I'd like to order the following products:\n\n";
    }
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Quantity: ${item.quantity} - RM${item.price * item.quantity}\n`;
    })
    
    if (localStorage.getItem('i18nextLng') === 'BM') {
      message += `\nJumlah: RM${getTotalPrice().toFixed(2)}\n\n`;
      message += "Sila beritahu saya langkah seterusnya untuk membuat pesanan. Terima kasih!";
    } else {
      message += `\nTotal: RM${getTotalPrice().toFixed(2)}\n\n`;
      message += "Please let me know the next steps for ordering. Thank you!";
    }

    handleWhatsAppOrder('cart', message);
  }

  if (cartItems.length === 0) {
    return (
      <div className="w-80 p-6">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCart className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-medium text-foreground">{t('YOUR_TROLLEY')}</h3>
        </div>
        <div className="text-center py-8">
          <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">
            {t('CART_EMPTY_MESSAGE')}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-80 p-6">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart className="w-5 h-5 text-primary" />
        <h3 className="font-medium text-foreground">{t('YOUR_TROLLEY')}</h3>
        <Badge variant="secondary" className="ml-auto">
          {cartItems.reduce((total, item) => total + item.quantity, 0)} {t('ITEMS')}
        </Badge>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover rounded-md"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm text-foreground truncate">
                {item.name}
              </h4>
              <p className="text-sm text-primary font-medium">
                RM{item.price.toFixed(2)}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-7 h-7 p-0"
                  onClick={() => updateCartItem(item.id, item.quantity - 1)}
                >
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="text-sm font-medium w-8 text-center">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-7 h-7 p-0"
                  onClick={() => updateCartItem(item.id, item.quantity + 1)}
                >
                  <Plus className="w-3 h-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-7 h-7 p-0 ml-auto"
                  onClick={() => updateCartItem(item.id, 0)}
                >
                  <Trash2 className="w-3 h-3 text-destructive" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-medium text-foreground">Total:</span>
          <span className="font-medium text-lg text-primary">
            RM{getTotalPrice().toFixed(2)}
          </span>
        </div>

        <Button 
          className="w-full gap-2" 
          onClick={handleOnClickWhatsAppOrder}
        >
          <MessageCircle className="w-4 h-4" />
          {t('BUTTONS.ORDER_VIA_WHATSAPP')}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          {t('CART_WHATSAPP_PREFFERED_MESSAGE')}
        </p>
      </div>
    </div>
  )


}