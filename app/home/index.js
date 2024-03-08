import { defaultScreens } from '../data/screens';
import { ScreenRenderer } from '../render/screen';

export default function Home() {
  return <ScreenRenderer screen={defaultScreens} />;
}