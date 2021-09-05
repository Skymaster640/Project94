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

export default class Minecraft extends React.Component {
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

<Text style = {styles.gameTitleText}>Minecraft</Text>

<Image
source = {require('../assets/Minecraft.png')}
style = {{width:250,height:150}}
/>

<Text style = {styles.gameText}>Consoles: Nintendo Switch, Xbox One, Playstation 4, PC, Mobile</Text>
<Text style = {styles.gameText}>Date of Release: November 18, 2011</Text>
<Text style = {styles.gameDiscription}>Minecraft is the most best selling game of all time, and that is heavily contributed not only because it is on nearly every console available, but it also keeps going. About every single year, Minecraft continues to get more and more updates to increase the amount of content and fun! At the making of this article, Minecraft has just released it's version 1.17 release. Also known as the Caves and Cliffs update part 1. It also get's continuously played due to how easy it is to mod the game to add even more content. The game doesn't have a specific goal, you spawn in a unknown world filled with blocks, and it is your job to survive the horrible nights and to gether resources to make living easier. Eventually you will want to reach the final destination, The End to defeat the Ender Dragon. Or if you so choose, you can enter Creative Mode and just build the worlds of your dreams! There are also dedicated servers where you can play online minigames with other players! </Text>

<Text style = {styles.gameTrailer}>Watch the trailer here!: https://www.youtube.com/watch?v=MmB9b5njVbA</Text>

</View>

</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#A7D540',
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
