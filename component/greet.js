
import React from 'react';
import {View,Text,Image} from 'react-native';
export default class Greet extends React.Component{

  render(){
    
    return(
    <View style={{flex:1,flexDirection:'row'}}>
    <Text>{name}</Text>
    <Text>{message}</Text>}
    </View>
  );
  }
}