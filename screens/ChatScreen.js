import React from 'react';
import {Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import Firebase from '../Firebase';

export default class LoginScreen extends React.Component{

state = {
  message: []
}
  get user(){
    return{
      _id: Firebase.uid,
      name: this.props.navigation.state.params.name
    };
  }

  componentDidMount(){
      Firebase.get(message =>
          this.setState(previous => ({
            message: GiftedChat.append(previous.message, message)
      }))
    );
  }

componentWillUnMount(){
  Firebase.off();
}

  render(){
    const chat = <GiftedChat messages={this.state.messages} onSend={Firebase.send} user={this.user} />;

    if(Platform.os === "android"){
      return (
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" KeyboardVerticalOffset={30} enabled>
          {chat}
        </KeyboardAvoidingView>
      );
    }
    return <SafeAreaView style={{flex:1}}>{chat}</SafeAreaView>
  }
}
