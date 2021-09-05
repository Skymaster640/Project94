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

export default class Undertale extends React.Component {
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

<Text style = {styles.gameTitleText}>Undertale</Text>

<Image
source = {require('../assets/Undertale.png')}
style = {{width:250,height:150}}
/>

<Text style = {styles.gameText}>Consoles: Nintendo Switch, Xbox One, Playstation 4, PC</Text>
<Text style = {styles.gameText}>Date of Release: September 15, 2015</Text>
<Text style = {styles.gameDiscription}>Undertale is a RPG where the main focus of the game is where you can either befriend the game's enemies, or slay them. From it's release Undertale recieved a fairly large following, with people falling in love with the game's world, characters, and soundtrack. You play as a human child who has fallen into the Underground of Mt. Ebott, and your goal is to escape the underground by your own choices. As stated before, your choices effect how the game's story will go. There are 3 major endings in the game. The True Pacifist route, where you beat it without harming a single enemy. The NO MERCY route, where you literally go out of your way to kill monsters. And the neutral route, which has many different outcomes, just depends on which monsters you kill and don't kill. </Text>

<Text style = {styles.gameTrailer}>Watch the trailer here!: https://www.youtube.com/watch?v=1Hojv0m3TqA</Text>


</View>



</ScrollView>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',
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
