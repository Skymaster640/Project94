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

export default class CloudKingdomMoons extends React.Component {

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
source = {require('../assets/SMOWalkthrough2.jpg')}
style = {{width:250,height:150}}
/>


<Text style = {styles.gameDiscription}>The Cascade Kingdom is the second kingdom visited in Super Mario Odyssey. After leaving the Cap Kingdom, you are brought here to Fossil Falls. The land of forgotten stone structures and dinosaur skeletons. You and Cappy's job is to find some Power Moons to repair the abandoned ship, the Odyssey. You will climb the mountain and face off against Madam Broode, and soon begin your journey to save Princess Peach! </Text>

<Text style = {styles.topicTitleText}>Moon 1: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 2: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

<Text style = {styles.topicTitleText}>Moon 3: "insert moon name here."</Text>

<Text style = {styles.walkthroughInstruction}>Until I actually look up what the moon is and how to get it, this boring description is all you are getting. </Text>

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
  gameDiscription:{
    color:'white',
    marginTop:10,
    alignSelf:'center'
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
