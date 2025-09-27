import {
  Card,
  CardContent,
  // CardHeader,
  // CardTitle
} from '../ui/card';
import {
  MessageCircle,
  // ArrowLeft,
  CheckCircle
} from 'lucide-react';
import {
  CartItem,
  CheckoutFormData
} from '../interface';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '../ui/alert-dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useCustomHook } from '../misc';
import { useForm } from 'react-hook-form';
import { Textarea } from '../ui/textarea';
import { malaysianStates } from '../../assets/data';


// import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

interface CheckoutFormProps {
  cartItems: CartItem[]
  isOpen: boolean
  onClose: () => void
}
export function CheckoutForm({ cartItems, isOpen, onClose }: CheckoutFormProps) {
  const {
    t,
    isSubmitting,
    setIsSubmitting,
    showSuccessDialog,
    setShowSuccessDialog
  } = useCustomHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    // watch
  } = useForm<CheckoutFormData>()

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleOrderSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true)
    
    try {
      // Prepare WhatsApp message
      let message = "🛒 *NEW ORDER FROM VEYRA GLOBAL VENTURES*\\n\\n"
      message += "📋 *Order Details:*\\n"
      
      cartItems.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\\n`
        message += `   • Quantity: ${item.quantity}\\n`
        message += `   • Price: RM${item.price.toFixed(2)} each\\n`
        message += `   • Subtotal: RM${(item.price * item.quantity).toFixed(2)}\\n\\n`
      })
      
      message += `💰 *Total Amount: RM${getTotalPrice().toFixed(2)}*\\n\\n`
      
      message += "👤 *Customer Information:*\\n"
      message += `• Name: ${data.fullName}\\n`
      message += `• Email: ${data.email}\\n`
      message += `• Phone: ${data.phone}\\n\\n`
      
      message += "📍 *Delivery Address:*\\n"
      message += `${data.address}\\n`
      message += `${data.city}, ${data.state}\\n`
      message += `${data.postalCode}\\n\\n`
      
      if (data.notes) {
        message += "📝 *Additional Notes:*\\n"
        message += `${data.notes}\\n\\n`
      }
      
      message += "✅ Please confirm this order and provide payment instructions. Thank you!"
      
      const encodedMessage = encodeURIComponent(message)
      const whatsappNumber = "+60123456789" // Replace with actual Malaysian number
      
      // Open WhatsApp
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
      
      // Show success dialog after a brief delay
      setTimeout(() => {
        setIsSubmitting(false)
        setShowSuccessDialog(true)
      }, 1000)
      
    } catch (error) {
      console.error('Error sending order:', error);
      setIsSubmitting(false);
    }
  }

  const handleSuccessClose = () => {
    setShowSuccessDialog(false)
    onClose() // This will close the checkout dialog and clear the cart
  }

  const handleDialogClose = () => {
    if (!isSubmitting) {
      onClose()
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">Checkout Details</DialogTitle>
          </DialogHeader>
          
          <Card className="border-0 shadow-none">
            <CardContent className="p-0 space-y-4">
              <form onSubmit={handleSubmit(handleOrderSubmit)} className="space-y-4">
              {/* Personal Information */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm text-muted-foreground">Personal Information</h3>
                
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    {...register('fullName', { required: 'Full name is required' })}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-destructive mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    placeholder="your.email@example.com"
                    className="mt-1"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    {...register('phone', { 
                      required: 'Phone number is required',
                      pattern: {
                        value: /^(\+?6?01)[02-46-9]-*[0-9]{7,8}$/,
                        message: 'Please enter a valid Malaysian phone number'
                      }
                    })}
                    placeholder="+60123456789"
                    className="mt-1"
                  />
                  {errors.phone && (
                    <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm text-muted-foreground">Delivery Address</h3>
                
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Textarea
                    id="address"
                    {...register('address', { required: 'Address is required' })}
                    placeholder="Enter your full address"
                    className="mt-1 min-h-[60px]"
                  />
                  {errors.address && (
                    <p className="text-xs text-destructive mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      {...register('city', { required: 'City is required' })}
                      placeholder="City"
                      className="mt-1"
                    />
                    {errors.city && (
                      <p className="text-xs text-destructive mt-1">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="postalCode">Postal Code *</Label>
                    <Input
                      id="postalCode"
                      {...register('postalCode', { 
                        required: 'Postal code is required',
                        pattern: {
                          value: /^\d{5}$/,
                          message: 'Enter 5-digit postal code'
                        }
                      })}
                      placeholder="12345"
                      className="mt-1"
                    />
                    {errors.postalCode && (
                      <p className="text-xs text-destructive mt-1">{errors.postalCode.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="state">State *</Label>
                  <Select onValueChange={(value) => setValue('state', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {malaysianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && (
                    <p className="text-xs text-destructive mt-1">State is required</p>
                  )}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  {...register('notes')}
                  placeholder="Special instructions, preferred delivery time, etc."
                  className="mt-1 min-h-[60px]"
                />
              </div>

              {/* Order Summary */}
              <div className="border-t pt-4 mt-4">
                <h3 className="font-medium text-sm text-muted-foreground mb-2">Order Summary</h3>
                <div className="space-y-1 text-sm">
                  {cartItems.map((item) => {
                    // Split the item name by '-' to separate the base name and the translation key
                    const [baseName, optionKey] = item.name.split(' - ');
              
                    return (
                      <div key={item.id} className="flex justify-between">
                        <span>
                          {baseName}
                          {optionKey ? ` - ${t(optionKey.trim())}` : ''} x{item.quantity}
                        </span>
                        <span>RM{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    );
                  })}
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Total:</span>
                    <span className="text-primary">RM{getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                disabled={isSubmitting}
              >
                <MessageCircle className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Submit Order via WhatsApp'}
              </Button>
              </form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <AlertDialogTitle>Order Sent Successfully!</AlertDialogTitle>
              </div>
            </div>
            <AlertDialogDescription className="text-base">
              Your order has been successfully sent to our WhatsApp. Our team will contact you shortly to confirm your order and provide payment instructions.
              <br /><br />
              <strong>What's next?</strong>
              <br />
              • We'll review your order within 2-4 hours
              <br />
              • You'll receive payment instructions via WhatsApp
              <br />
              • Your order will be processed after payment confirmation
              <br /><br />
              Thank you for choosing Veyra Global Ventures!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleSuccessClose}>
              Continue Shopping
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}