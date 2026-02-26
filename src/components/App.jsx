import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { coins } from "./src/components/Coins.jsx";
import { FahrenheitToCelcius } from "./FahrenheitToCelcius.jsx";
import { CubeVolume } from "./CubeVolume.jsx";
import { GymMembership } from "./GymMembership.jsx";
import { Earthquake } from "./Earthquake.jsx";
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <Coins nickels={0} dimes={0} quarters={0} loonies={0} toonies={0} />
      <Coins nickels={1} dimes={1} quarters={1} loonies={1} toonies={1} />
      <Coins nickels={2} dimes={3} quarters={4} loonies={1} toonies={2} />
      <FahrenheitToCelcius f={32} />
      <FahrenheitToCelcius f={212} />
      <FahrenheitToCelcius f={70} />
      <CubeVolume height={3} />
      <CubeVolume height={2} />
      <CubeVolume height={5} />
      <GymMembership cost={100} friends={0} />
      <GymMembership cost={100} friends={1} />
      <GymMembership cost={100} friends={2} />
      <GymMembership cost={100} friends={3} />
      <GymMembership cost={100} friends={4} />  
      <Earthquake intensity={4.5} />
      <Earthquake intensity={5.2} />
      <Earthquake intensity={6} />
      <Earthquake intensity={7} />
      <Earthquake intensity={8} />
    </View>
  );
}

