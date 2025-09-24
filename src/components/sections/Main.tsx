// import { HeroSection } from './HeroSection'
import { VisionMission } from './VisionMission'
// import { TeamSection } from './TeamSection'
// import { TrustSignals } from './TrustSignals'
// import { CartItem } from '../App'

interface HomePageProps {
  onNavigate: (page: string, productId?: string) => void
//   addToCart: (item: Omit<CartItem, 'quantity'>) => void
}

export function HomePage({ onNavigate, 
    //addToCart
 }: HomePageProps) {
  return (
    <main>
      {/* <HeroSection onNavigate={onNavigate} addToCart={addToCart} /> */}
      <VisionMission />
      {/* <TeamSection />
      <TrustSignals /> */}
    </main>
  )
}