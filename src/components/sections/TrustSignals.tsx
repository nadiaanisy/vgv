import {
  useCustomHook,
  ImageWithFallback
} from '../misc';
import {
  CheckCircle,
  Award,
  Calendar
} from 'lucide-react';
import { Badge } from '../ui/badge';
import MUSTLogo from '../../assets/images/others/mustlogo.png';

export function TrustSignals() {
  const { t } = useCustomHook();

  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-foreground mb-4">{t('TRUST_SIGNALS.TITLE')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* University Partnership */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <ImageWithFallback
                src={MUSTLogo}
                alt="MUST Logo"
                className="w-12 h-12 object-cover rounded"
              />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{t('TRUST_SIGNALS.UNI_PARTNERSHIP.TITLE')}</h3>
              <p className="text-sm text-muted-foreground">{t('TRUST_SIGNALS.UNI_PARTNERSHIP.UNI_NAME')}</p>
            </div>
          </div>

          {/* Sales Period */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">(NEED UPDATE)Pre-Order Period</h3>
              <p className="text-sm text-muted-foreground">(NEED UPDATE)Available March 2025</p>
              <Badge variant="secondary" className="mt-2">(NEED UPDATE) Early Bird Pricing</Badge>
            </div>
          </div>

          {/* Satisfaction Guarantee */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{t('TRUST_SIGNALS.SATISFACTION_GUARANTEED.TITLE')}</h3>
              <p className="text-sm text-muted-foreground">{t('TRUST_SIGNALS.SATISFACTION_GUARANTEED.DESCRIPTION')}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600">{t('TRUST_SIGNALS.SATISFACTION_GUARANTEED.SUB_DESCRIPTION')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}