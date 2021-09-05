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
import ReactPlayer from 'react-player';
import axios from 'axios';


export default class SMOWalkthrough extends React.Component {
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
            this.props.navigation.navigate('Walkthroughs')
          }}>
<Text>Return</Text>

</TouchableOpacity>



        </View>

        <View style = {{marginLeft:252,borderRadius:9,borderColor:'black',backgroundColor:'white'}}>

        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('SMO')
          }}>
<Text>Game Page</Text>

</TouchableOpacity>
        </View>
        
          <View style={styles.gameScreen}>
            <Text style={styles.gameTitleText}>Super Mario Odyssey</Text>

            <Image
              source={require('../assets/SMO.jpg')}
              style={{ width: 250, height: 150 }}
            />

            <View style = {styles.gameList}>

            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CapKingdomMoons');
              }}>
              <Image
                source={require('../assets/SMOWalkthrough1.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Cap Kingdom</Text>
              <Text>All Power Moons</Text>
              
            </TouchableOpacity>

            </View>


            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CascadeKingdomMoons');
              }}>
              <Image
                source={require('../assets/SMOWalkthrough2.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Cascade Kingdom</Text>
              <Text>All Power Moons</Text>
            </TouchableOpacity>

            </View>


            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('SandKingdomMoons');
              }}>
              <Image
                source={require('../assets/SMOWalkthrough3.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Sand Kingdom</Text>
              <Text>All Power Moons</Text>
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('LakeKingdomMoons');
              }}>
              <Image
                source={require('../assets/SMOWalkthrough4.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Lake Kingdom</Text>
              <Text>All Power Moons</Text>
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('WoodedKingdomMoons');
              }}>
              <Image
                source={require('../assets/SMOWalkthrough5.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Wooded Kingdom</Text>
              <Text>All Power Moons</Text>
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('CloudKingdomMoons');
              }}>
              <Image
                source={require('../assets/SMOWalkthrough6.png')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Cloud Kingdom</Text>
              <Text>All Power Moons</Text>
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('LostKingdomMoons');
              }}>
              <Image
                source={require('../assets/SMOWalkthrough7.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Lost Kingdom</Text>
              <Text>All Power Moons</Text>
            </TouchableOpacity>

            </View>

            <View style = {styles.gameList}>
            <TouchableOpacity
              style={styles.game}
              onPress={() => {
                this.props.navigation.navigate('MetroKingdomMoons');
              }}>
              <Image
                source={require('../assets/SMOWalkthrough8.jpg')}
                style={{ width: 100, height: 100 }}
              />

              <Text>Metro Kingdom</Text>
              <Text>All Power Moons</Text>
            </TouchableOpacity>

            </View>

           
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
  gameList: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 80,
    marginRight: 80,
    borderWidth: 10,
    borderColor: 'black',
  },
  gameScreen: {
    alignItems: 'center',
  },
  gameTitleText: {
    color: 'white',
    fontFamily: 'bold',
    fontSize: 20,
  },
  game: {
    alignItems: 'center',
    marginTop: 10,
  },
});
