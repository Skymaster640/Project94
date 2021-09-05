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

        <View style ={{alignSelf:'center'}}>
<Text>Sort By...</Text>
        </View>

        <View style = {{marginRight:200,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('AlphabetFilterH')
          }}>
<Text>Alphabetical</Text>

</TouchableOpacity>
        </View>

        <View style = {{marginLeft:200,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('Walkthroughs')
          }}>
<Text>Walkthroughs</Text>

</TouchableOpacity>
        </View>
        
        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('SMO')
          }}

          
          
          >
            <Image
              source={require('../assets/SMO.jpg')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Super Mario Odyssey</Text>
            <Text>Nintendo Switch</Text>
            <Text>Nintendo</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
           onPress={() =>
    this.props.navigation.navigate('UT')
  }>

          
         
          
            <Image
              source={require('../assets/Undertale.png')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Undertale</Text>
            <Text>Nintendo Switch, Xbox One, Playstation 4, PC</Text>
            <Text>Toby Fox</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('MC')
          }}

          
          
          >
            <Image
              source={require('../assets/Minecraft.png')}
              style={{ width: 100, height: 110 }}
            />

            <Text>Minecraft</Text>
            <Text>Nintendo Switch, Xbox One, Playstation 4, PC, Mobile</Text>
            <Text>Mojang</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('SSA')
          }}

          
          
          >
            <Image
              source={require('../assets/Skylanders_SA_Art.png')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Skylanders Spyro's Adventure</Text>
            <Text>Nintendo Wii, Playstation 3, Xbox 360, Nintendo 3DS</Text>
            <Text>Activision</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.gameList}>
          <TouchableOpacity style={styles.game}
          onPress={()=>{
            this.props.navigation.navigate('SSBU')
          }}

          
          
          >
            <Image
              source={require('../assets/SmashBrosUltimate.jpg')}
              style={{ width: 100, height: 100 }}
            />

            <Text>Super Smash Bros. Ultimate</Text>
            <Text>Nintendo Switch</Text>
            <Text>Nintendo</Text>
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
  gameList: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 80,
    marginRight: 80,
    borderWidth: 10,
    borderColor: 'black',
    width:200,

    alignSelf:'center'
  },
  game: {
    alignItems: 'center',
    marginTop:10
  },
});
