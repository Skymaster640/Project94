import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import HomeAlphabet from './screens/HomeScreenAlphabetfilter'
import WalkthroughSearch from './screens/WalkthroughSearch'
import WalkthroughAlphabet from './screens/WalkthroughSearchAlphabetFilter'
import Updates from './screens/UpdateScreen'
import SuperMarioOdyssey from './screens/SuperMarioOdyssey'
import Undertale from './screens/Undertale'
import Minecraft from './screens/Minecraft'
import SkySpyroAdventure from './screens/SkySpyroAdventure'
import SmashBrosUltimate from './screens/SmashBrosUltimate'
import SMOWalkthrough from './screens/SMOWalkthrough'
import SMOWalkthrough1 from './walkthrough/SMOWalkthrough-1'
import SMOWalkthrough2 from './walkthrough/SMOWalkthrough-2'
import SMOWalkthrough3 from './walkthrough/SMOWalkthrough-3'
import SMOWalkthrough4 from './walkthrough/SMOWalkthrough-4'
import SMOWalkthrough5 from './walkthrough/SMOWalkthrough-5'
import SMOWalkthrough6 from './walkthrough/SMOWalkthrough-6'
import SMOWalkthrough7 from './walkthrough/SMOWalkthrough-7'
import SMOWalkthrough8 from './walkthrough/SMOWalkthrough-8'



export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
<AppNavigator/>
    </View>
  );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Home: HomeScreen,
  AlphabetFilterH: HomeAlphabet,
  Walkthroughs: WalkthroughSearch,
  AlphabetFilterW: WalkthroughAlphabet,
  Update: Updates,
  SMO: SuperMarioOdyssey,
  MC: Minecraft,
  UT: Undertale,
  SSA: SkySpyroAdventure,
  SSBU: SmashBrosUltimate, 
  SMOWalkthrough: SMOWalkthrough,
  CapKingdomMoons:SMOWalkthrough1,
  CascadeKingdomMoons:SMOWalkthrough2,
  SandKingdomMoons:SMOWalkthrough3,
  LakeKingdomMoons:SMOWalkthrough4,
  WoodedKingdomMoons:SMOWalkthrough5,
  CloudKingdomMoons:SMOWalkthrough6,
  LostKingdomMoons:SMOWalkthrough7,
  MetroKingdomMoons:SMOWalkthrough8,
},{initialRouteName:"Update"})

const AppNavigator = createAppContainer(AppSwitchNavigator)


/*

const TabNavigator = createBottomTabNavigator({
  Home:{screen:HomeScreen},
  Walkthroughs:{screen:WalkthroughSearch},
  SMO: {screen:SuperMarioOdyssey},
  SMOWalkthrough: {screen:SMOWalkthrough},
  UT: {screen:Undertale},
  MC: {screen:Minecraft},
  SSA: {screen:SkySpyroAdventure},
  SSB: {screen:SmashBrosUltimate},

},{initialRouteName:"Home"})

const AppContainer = createAppContainer(TabNavigator)

*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});