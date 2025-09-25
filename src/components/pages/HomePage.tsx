import { Main } from '../sections/Main';
import { Teams } from '../sections/Teams';
import { TrustSignals } from "../sections/TrustSignals";
import { VisionMission } from '../sections/VisionMission';

type HomePageProps = {
  onNavigate: (page: string) => void;
};
export function HomePage({
  onNavigate,
}: HomePageProps) {
  return (
    <main>
      <Main onNavigate={onNavigate} />
      <VisionMission />
      <Teams />
      <TrustSignals />
    </main>
  )
}