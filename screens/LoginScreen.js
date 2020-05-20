import React from 'react';
import {View , Text , StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

export default class LoginScreen extends React.Component{

state  = {
   name : ''
 };

  continue = () => {
    this.props.navigation.navigate("Chat",{name: this.state.name});
  }

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.circle}>
              <View style={{marginTop:64}}>
                 <Image
                    source = {require('../assets/chat.png')}
                    style = {{width:100,height:100,alignSelf:'center'}}
                 />
              </View>
              <View style={{marginHorizontal:140}}>
                  <Text style={styles.header}>User Name</Text>
                  <TextInput
                    style = {styles.TextInput}
                    placeholder = "Trojan"
                    value ={this.state.name}
                    onChangeText = {
                      name => {
                        this.setState({name});
                      }
                    }
                  />
              </View>
              <View style={{alignItems:'center',marginTop:64}}>
                <TouchableOpacity style={styles.continue} onPress={this.continue}>
                  <Text style={styles.go}>Go</Text>
                </TouchableOpacity>
              </View>
          </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  circle:{
    width:500,
    height:450,
    borderRadius: 500/ 2,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: -120,
    top: -20
  },
  header:{
    fontWeight: "800",
    fontSize: 30,
    color: '#514E5A',
    marginTop: 32
  },
  TextInput:{
    marginTop:32,
    width:300,
    height:50,
    borderWidth:StyleSheet.hairlineWidth,
    borderColor: '#BAB7C3',
    borderRadius:30,
    paddingHorizontal: 16,
    color:'#514E5A',
    fontWeight: '600'
  },
  continue:{
    width:90,
    height:70,
    borderRadius: 70/2,
    backgroundColor: '#9875E3',
    marginLeft:250,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  go:{
    marginRight:30,
    fontSize:30,
    marginBottom:10,
    color:'#fff'
  }
});
