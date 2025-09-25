import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { 
  ArrowLeft, 
  MessageCircle, 
  Instagram, 
  Mail,
  Send,
  Clock,
  Timer,
  Phone,
  ExternalLink,
  CheckCircle,
  MapPin,
  Calendar
} from 'lucide-react'
import { toast } from 'sonner@2.0.3'

interface ContactPageProps {
  onNavigate: (page: string) => void
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  const whatsappNumber = "+1234567890" // Replace with actual WhatsApp number
  const instagramHandle = "@wettyventures"
  const email = "hello@wettyventures.com"

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in learning more about Wetty products."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramHandle.replace('@', '')}`, '_blank')
  }

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, '_blank')
  }

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick responses for urgent inquiries",
      contact: whatsappNumber,
      action: handleWhatsAppClick,
      color: "text-green-600",
      bgColor: "bg-green-50",
      responseTime: "Usually within 1 hour"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram DM",
      description: "Connect with us on social media",
      contact: instagramHandle,
      action: handleInstagramClick,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      responseTime: "Usually within 4 hours"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "For detailed inquiries and support",
      contact: email,
      action: handleEmailClick,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      responseTime: "Usually within 24 hours"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed" }
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
              Back to Home
            </Button>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <Phone className="w-6 h-6 text-primary" />
              <Badge variant="secondary" className="text-sm">Get in Touch</Badge>
            </div>
            <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our products or need support? We're here to help! 
              Choose your preferred way to reach out and we'll get back to you quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">Choose Your Preferred Contact Method</h2>
            <p className="text-muted-foreground">We're available across multiple channels to assist you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow cursor-pointer" onClick={method.action}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${method.bgColor} ${method.color}`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <div className="font-medium text-foreground">
                    {method.contact}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {method.responseTime}
                  </div>
                  
                  <Button className="w-full gap-2" onClick={method.action}>
                    <ExternalLink className="w-4 h-4" />
                    Contact via {method.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Send className="w-5 h-5 text-primary" />
              <Badge variant="secondary">Contact Form</Badge>
            </div>
            <h2 className="text-3xl font-medium text-foreground mb-4">Send Us a Message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your inquiry, questions about products, or how we can help you..."
                    required
                    className="w-full min-h-32 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gap-2" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Hours & Response Times */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm mb-6">
                  Our team is available during these hours for live support and immediate responses.
                </p>
                
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Time Zone</span>
                  </div>
                  <p className="text-sm text-blue-700">
                    Pacific Standard Time (PST) / Pacific Daylight Time (PDT)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    <Timer className="w-5 h-5" />
                  </div>
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm mb-6">
                  Here's what you can expect when you reach out to us through different channels.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">WhatsApp Messages</div>
                      <div className="text-sm text-muted-foreground">Usually within 1 hour during business hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Instagram DMs</div>
                      <div className="text-sm text-muted-foreground">Usually within 4 hours during business hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Email & Contact Form</div>
                      <div className="text-sm text-muted-foreground">Usually within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Urgent Support Issues</div>
                      <div className="text-sm text-muted-foreground">Priority response within 2 hours</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Weekend Support</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Limited support available on weekends. Urgent issues will be addressed within 4 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="w-full py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="p-8">
            <CardContent className="p-0 space-y-4">
              <div className="inline-flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-primary" />
                <Badge variant="secondary">Quick Tip</Badge>
              </div>
              
              <h3 className="text-xl font-medium text-foreground">Need Immediate Help?</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                For the fastest response, especially for product questions or order inquiries, 
                we recommend using WhatsApp. Our team monitors WhatsApp throughout business hours 
                and can provide real-time assistance with your Wetty products.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button onClick={handleWhatsAppClick} className="gap-2 bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us Now
                </Button>
                <Button variant="outline" onClick={handleEmailClick} className="gap-2">
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}