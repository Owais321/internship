import React from 'react';
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
export default class Login extends React.Component{
   constructor(){
       super();
   } 
  render(){
   
    return(
        <KeyboardAvoidingView behavior='padding' style={{
            flex:1,
            backgroundColor:'powderblue'}}>
        <View style={{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
}}>
        <Image style={{
width:100
}} source={require('../img/Octocat.png')}/> 
        <Text>This is Login App for gitub</Text>
        </View>
        <View style={{padding:20}}>
        <TextInput placeholder='Username or  email'
        placeholderTextColor='rgba(255,255,205,0.9)' 
        style={{backgroundColor:'rgba(255,255,255,0.7)',height:40,marginBottom:20,color:'black'}}
        returnKeyLabel='Next'
        keyboardType='email-address'
        />
        <TextInput placeholder='Password'
        placeholderTextColor='rgba(255,25,205,0.9)'  
        style={{backgroundColor:'rgba(255,255,255,0.7)',height:40,marginBottom:20,color:'black'}}
        secureTextEntry
        returnKeyLabel='Go'
        />
        <TouchableOpacity style={{backgroundColor:'blue',paddingVertical:10}}><Text style={{color:'white',textAlign:'center',fontWeight:'bold' ,fontSize:28}}>Login</Text></TouchableOpacity>
        
        </View>
        
        </KeyboardAvoidingView>
    );
  }
}
