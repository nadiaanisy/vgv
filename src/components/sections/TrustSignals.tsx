import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { CheckCircle, Award, Calendar } from 'lucide-react'

export function TrustSignals() {
  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-foreground mb-4">Trusted by the Best</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* University Partnership */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1706016899218-ebe36844f70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU3NDQwNzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="University Logo"
                className="w-12 h-12 object-cover rounded"
              />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Research Partnership</h3>
              <p className="text-sm text-muted-foreground">MIT Marine Technology Lab</p>
            </div>
          </div>

          {/* Sales Period */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Pre-Order Period</h3>
              <p className="text-sm text-muted-foreground">Available March 2025</p>
              <Badge variant="secondary" className="mt-2">Early Bird Pricing</Badge>
            </div>
          </div>

          {/* Satisfaction Guarantee */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Satisfaction Guarantee</h3>
              <p className="text-sm text-muted-foreground">30-day money back</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600">100% Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}