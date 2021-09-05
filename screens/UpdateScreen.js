import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SearchBar} from 'react-native-elements'
import SuperMarioOdyssey from './SuperMarioOdyssey'
import Undertale from './Undertale'
import Minecraft from './Minecraft'
import SkySpyroAdventure from './SkySpyroAdventure'
import SmashBrosUltimate from './SmashBrosUltimate'

export default class HomeScreen extends React.Component {
constructor(){
    super();
    this.state ={
      allStories:[],
      dataSource:[],
      search : ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Skymaster's Gamepedia</Text>
        </View>

        <ScrollView>


        <Text style ={{alignSelf:'center'}}>This is the update screen! Every month I will release a new version of the Gamepedia with brand new features. And so whenever you enter the app you will see this screen. They will be in a list format like so.</Text>

        <Text style ={{alignSelf:'center',marginTop:20}}>~ Added Super Mario Odyssey walkthroughs</Text>

        <TouchableOpacity style = {{marginLeft:50,}}
          onPress={()=>{
            this.props.navigation.navigate('SMOWalkthrough')
          }}

          
          
          >

            <Text style ={{color:'red'}}>Click here to check it out!</Text>

          </TouchableOpacity>

        <Text style = {{alignSelf:'center',marginTop:20}}>~ Added search filters to Home and Walkthrough Screen.</Text>

        <Text style = {{alignSelf:'center',marginTop:20}}>~ Added Navigation between a game page and it's corresponding walkthrough page and vice-versa.</Text>

        <View style = {{alignSelf: 'center',borderRadius:9,borderColor:'black',backgroundColor:'white',marginTop:40}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('Home')
          }}>
<Text>Continue</Text>

</TouchableOpacity>
        </View>
        
        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'cyan',
  },
  titleContainer: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: 40,
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'bold',
  },

});
