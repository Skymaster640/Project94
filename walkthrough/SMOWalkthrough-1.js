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
import axios from 'axios';

export default class CapKingdomMoons extends React.Component {

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
            this.props.navigation.navigate('SMOWalkthrough')
          }}>
<Text>Return</Text>

</TouchableOpacity>
        </View>

        <View style = {styles.gameScreen}>

<Text style = {styles.gameTitleText}>Super Mario Odyssey</Text>

<Image
source = {require('../assets/SMOWalkthrough1.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Cap Kingdom is the first world you explore in Super Mario Odyssey. It is a land full of hat-themed buildings and a fog that flows at the bottom of the kingdom. On your first visit at the beginning of the game, all you have to do is follow the tutorial, defeat Topper at the top of Top-Hat Tower, then go to the Cascade Kingdom. This walkthrough will show you how to obtain every single Power Moon in the Cap Kingdom. </Text>

<Text style = {styles.topicTitleText}>Moon 1: "Frog-Jumping Above the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Near the beginning of the kingdom, you will find a few frogs. Capture one then jump across some hat-shaped platforms in the south. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "Frog-Jumping from the Top Deck"</Text>

<Text style = {styles.walkthroughInstruction}> Using the aforementioned frogs, head to the central plaza and jump from the hat-ship with two stories. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 4: "Good Evening, Captain Toad!"</Text>

<Text style = {styles.walkthroughInstruction}> Head back to where you fought Topper, and you will find Captain Toad in the middle of the arena. Talk to him and you get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 5: "Shopping in Bonneton"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the central plaza, and talk to the hat ghost wearing a bunch of yellow hats, they will sell the moon to you for 100 coins. </Text>

<Text style = {styles.topicTitleText}>Moon 6: "Skimming the Poison Tide"</Text>

<Text style = {styles.walkthroughInstruction}> Capture a Paragoomba at the base of Top-Hat Tower, then fly to the back of the tower, land on the platform and go through the door. This will lead to a bonus section filled with rising and sinking waves of poison, which instantly kills you if you touch it. You need to collect 5 Moon shards to get the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 7: "Slipping Through the Poison Tide"</Text>

<Text style = {styles.walkthroughInstruction}> In the area with the previous moon, head to the back of the area with a Paragoomba and slip through the iron fence, Scale the platforms to reach the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 8: "Push-Block Peril"</Text>

<Text style = {styles.walkthroughInstruction}> Near the top of Top-Hat Tower, there is a door leading to another bonus section. There are blocks that extend and retract from the wall, reach the end to find the moon. </Text>

<Text style = {styles.topicTitleText}>Moon 9: "Hidden Among the Push-Blocks"</Text>

<Text style = {styles.walkthroughInstruction}> In the Push Block section, look at the backs of the L-shaped blocks. In one of them is the moon hiding away. </Text>

<Text style = {styles.topicTitleText}>Moon 10: "Searching the Frog Pond"</Text>

<Text style = {styles.walkthroughInstruction}> At central plaza, go north and you will find a secret hideaway with a door. Go in the door and you will be in a room filled with water and frogs. Use the frogs to find the 5 Moon Shards. </Text>

<Text style = {styles.topicTitleText}>Moon 11: "Secrets of the Frog Pond"</Text>

<Text style = {styles.walkthroughInstruction}> In the previous room, head to the back wall with a frog and jump up to a ledge with the moon on it. </Text>

<Text style = {styles.topicTitleText}>NOTE: These Moons can only be obtained after beating Bowser in the Moon Kingdom.</Text>

<Text style = {styles.topicTitleText}>Moon 12: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 13: "Frog-Jumping Above the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Near the beginning of the kingdom, you will find a few frogs. Capture one then jump across some hat-shaped platforms in the south. </Text>

<Text style = {styles.topicTitleText}>Moon 14: "Frog-Jumping from the Top Deck"</Text>

<Text style = {styles.walkthroughInstruction}> Using the aforementioned frogs, head to the central plaza and jump from the hat-ship with two stories. </Text>

<Text style = {styles.topicTitleText}>Moon 15: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 16: "Frog-Jumping Above the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Near the beginning of the kingdom, you will find a few frogs. Capture one then jump across some hat-shaped platforms in the south. </Text>

<Text style = {styles.topicTitleText}>Moon 17: "Frog-Jumping from the Top Deck"</Text>

<Text style = {styles.walkthroughInstruction}> Using the aforementioned frogs, head to the central plaza and jump from the hat-ship with two stories. </Text>

<Text style = {styles.topicTitleText}>Moon 18: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 19: "Frog-Jumping Above the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Near the beginning of the kingdom, you will find a few frogs. Capture one then jump across some hat-shaped platforms in the south. </Text>

<Text style = {styles.topicTitleText}>Moon 20: "Frog-Jumping from the Top Deck"</Text>

<Text style = {styles.walkthroughInstruction}> Using the aforementioned frogs, head to the central plaza and jump from the hat-ship with two stories. </Text>

<Text style = {styles.topicTitleText}>Moon 21: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 22: "Frog-Jumping Above the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Near the beginning of the kingdom, you will find a few frogs. Capture one then jump across some hat-shaped platforms in the south. </Text>

<Text style = {styles.topicTitleText}>Moon 23: "Frog-Jumping from the Top Deck"</Text>

<Text style = {styles.walkthroughInstruction}> Using the aforementioned frogs, head to the central plaza and jump from the hat-ship with two stories. </Text>

<Text style = {styles.topicTitleText}>Moon 24: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 25: "Frog-Jumping Above the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Near the beginning of the kingdom, you will find a few frogs. Capture one then jump across some hat-shaped platforms in the south. </Text>

<Text style = {styles.topicTitleText}>Moon 26: "Frog-Jumping from the Top Deck"</Text>

<Text style = {styles.walkthroughInstruction}> Using the aforementioned frogs, head to the central plaza and jump from the hat-ship with two stories. </Text>

<Text style = {styles.topicTitleText}>Moon 27: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 28: "Frog-Jumping Above the Fog"</Text>

<Text style = {styles.walkthroughInstruction}> Near the beginning of the kingdom, you will find a few frogs. Capture one then jump across some hat-shaped platforms in the south. </Text>

<Text style = {styles.topicTitleText}>Moon 29: "Frog-Jumping from the Top Deck"</Text>

<Text style = {styles.walkthroughInstruction}> Using the aforementioned frogs, head to the central plaza and jump from the hat-ship with two stories. </Text>

<Text style = {styles.topicTitleText}>Moon 30: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

<Text style = {styles.topicTitleText}>Moon 31: "Cap Kingdom Timer Challenge 1"</Text>

<Text style = {styles.walkthroughInstruction}> Head to the base of Top-Hat Tower, then throw Cappy on a starecrow by the bridge. The moon will appear at the other end of the bridge, and you have to reach it in the time limit. </Text>

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
  topicTitleText:{
    color:'white',
    fontFamily:'bold',
    fontSize:20,
    marginTop:20
  },
  walkthroughInstruction:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
  },
});
