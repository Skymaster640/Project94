import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import ReactPlayer from 'react-player'
import { WebView } from 'react-native-webview';


export default class SuperMarioOdyssey extends React.Component {

    constructor() {
    super();
    this.state = {
      apod: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Skymaster's Gamepedia</Text>
        </View>


        
        <ScrollView>

        <View style = {{marginRight:252,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('Home')
          }}>
<Text>Return</Text>

</TouchableOpacity>

        </View>

        <View style = {{marginLeft:200,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>
<TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('SMOWalkthrough')
          }}>
<Text>Walkthrough</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Super Mario Odyssey</Text>

<Image
source = {require('../assets/SMO.jpg')}
style = {{width:250,height:150}}
/>

<Text style = {styles.gameText}>Consoles: Nintendo Switch</Text>
<Text style = {styles.gameText}>Date of Release: October 17, 2017</Text>
<Text style = {styles.gameDiscription}>Super Mario Odyssey is a 3D platformer game on the Nintendo Switch that continues the Super Mario franchise in new ways. Based off the old 3D platformers of old such as Super Mario 64 and Super Mario Sunshine, Odyssey brings Mario all around the world to save Princess Peach from the evil Bowser. Mario will accomplish this with his new companion Cappy, a living top hat ghost that gives Mario the ability to "capture" enemies. Taking control of them while allowing him to use their abilities to collect Power Moons. These Power Moons will help power Mario's ship, the Odyssey to travel around the world. </Text>


<Text style = {styles.gameTrailer}>Watch the trailer here!</Text>

<TouchableOpacity

onPress={()=>{

}}
>

<Text style = {{color:'lightblue'}}>https://www.youtube.com/watch?v=wGQHQc_3ycE</Text>

</TouchableOpacity>
<WebView allowsFullscreenVideo allowsInlineMediaPlayback mediaPlaybackRequiresUserAction source={{ uri: 'https://www.youtube.com/watch?v=wGQHQc_3ycE' }} />


</View>

</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#E11200',
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
  gameScreen: {
    alignItems: 'center',
  },
  gameTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20
  },
  gameText:{
    color:'white',
  },
  gameDiscription:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
  gameTrailer:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
  trailer:{
    padding:10,
    
    backgroundColor:'white'
  }
});
