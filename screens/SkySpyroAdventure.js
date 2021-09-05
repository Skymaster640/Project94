import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ReactPlayer from 'react-player'

export default class SkySpyroAdventure extends React.Component {
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

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Skylanders Spyro's Adventure</Text>

<Image
source = {require('../assets/Skylanders_SA_Art.png')}
style = {{width:250,height:150}}
/>

<Text style = {styles.gameText}>Consoles: Nintendo Wii, Xbox 360, Playstation 3, Nintendo 3DS</Text>
<Text style = {styles.gameText}>Date of Release: October 12, 2011</Text>
<Text style = {styles.gameDiscription}>Skylanders Spyro's Adventure is a game made by Activision and Toys for Bob in 2011 and is meant to be the second reboot of the Spyro the Dragon franchise. The game is the first in the "Skylanders" franchise and also the game to forge a new era of video games. The Skylanders series introduced "Toys to Life", where you take a plastic toy/figure, and you place it on a pedestal and it brings it into the game. The game also came out in a "starter pack" which contained 3 figures, the characters Spyro, Gill Grunt, and Trigger Happy, the game, a poster to keep track of all the figures you have collected, and the "Portal of Power" to put your characters in the game. And if you wished to get more characters to increase the amount of content in the game, you would go to your local store to buy more figures. The game is about the world known as Skylands, and it is being attacked by the dark Portal Master known as Kaos. He destroyed the machine called the Core of Light, the source of all the light in Skylands. And in the process, banishes the heroes of Skylands, the Skylanders to Earth. Where they shrank down into figures and were never seen again, until now. It is your job as the player or "Portal Master" to send the Skylanders back to Skylands and save it in the process. Now that is just the main version of the game. There is also a version exclusive to the Nintendo 3DS, which is a widely different experience. On the 3DS, you have the task of protecting the Radiant Isles from the evil force known as Hektore. And it is closer to a platformer than a dungeon crawler.  </Text>

<Text style = {styles.gameTrailer}>Watch the trailer here!: https://www.youtube.com/watch?v=KuRQMmjLc5A</Text>

</View>

</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#62B6E4',
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
