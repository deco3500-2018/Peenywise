/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  constructor(){
    super()
    this.state = {username:"User ID or Email",
                  password:"Your password"}
    }

    handleUsernameChanges(newText){
      console.log(`Username is ${newText}`);
    }

    handlePasswordChanges(newText){
      console.log(`Password is ${newText}`);
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput

          onChangeText={this.handleUsernameChanges}/>
        <Text>Password</Text>
          <TextInput

            onChangeText={this.handlePasswordChanges}/>


        <View style= {styles.half}>
          <Text style={styles.title}>PennyWise</Text>
        </View>
        <View style= {styles.half2}>
          <View style={[styles.half21, styles.half2x]}>
          </View>
          <View style={[styles.half22, styles.half2x]}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  half: {
    flex:1,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center'
  },
  half2: {
    flex:1,
    flexDirection:'row',
    backgroundColor: 'blue'
  },
  half2x:{flex:1},
  half21:{
    backgroundColor:'#34495e',
  },
  half22:{
    backgroundColor:'#ecf0f1'
  },
  title:{
    color:'white',
    fontSize: 12,
  }


});
