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

export default class SmashBrosUltimate extends React.Component {
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

<Text style = {styles.gameTitleText}>Super Smash Bros. Ultimate</Text>

<Image
source = {require('../assets/SmashBrosUltimate.jpg')}
style = {{width:250,height:150}}
/>

<Text style = {styles.gameText}>Consoles: Nintendo Switch</Text>
<Text style = {styles.gameText}>Date of Release: December 7, 2018</Text>
<Text style = {styles.gameDiscription}>Super Smash Bros. Ultimate is the most recent addition to the Super Smash Bros. series. It is widely seen as a thank you to the fans of the series, as it brings back every single character that has ever been in the series to battle it out. Like the games before it, Super Smash Bros. Ultimate is a fighting game that brings characters from many different video game franchises to fight and see who is the strongest. Also bringing different stages and items from those franchises, every battle will not be the same. There are also a variety of different game modes to choose from. If you want a marathon of different battles you will choose the Classic Mode, if you want to battle special opponents with widely different rules, you will go with the Spirit Mode. You can even battle a number of opponents online. Super Smash Bros. Ultimate also introduces a brand new story mode, similar to The Subspace Emissary from Super Smash Bros. Brawl. World of Light brings you to a land of nonstop battles, rescuing all the captured characters from the game to stop the evil force of Light, Galeem. There are also constant updates and DLC that can come out, adding brand new characters and modes.  </Text>

<Text style = {styles.gameTrailer}>Watch the trailer here!: https://www.youtube.com/watch?v=uHRwMmwbFnA</Text>

</View>

</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#113C67',
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
