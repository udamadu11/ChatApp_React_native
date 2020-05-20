import React from 'react';
import {View , Text , StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

export default class LoginScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Chat Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  }
});
