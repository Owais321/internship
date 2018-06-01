import React from 'react';
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
export default class Signup extends React.Component{
   constructor(){
       super();
   } 
  render(){
      return(
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.logocontainer}>
          <Image style={styles.logo} source={require('../../img/logo1.jpg')}/>
          <Text style={styles.title}>We will change the world</Text>  
          </View>          
          <View style={styles.formcontainer}>
          <TextInput placeholder='Username'
          placeholderColor='white'
          style={styles.input}
          underlineColorAndroid='white'
          returnKeyLabel='Next'
          />
          <TextInput placeholder='Email'
          placeholderColor='white'
          style={styles.input}
          underlineColorAndroid='white'
          returnKeyLabel='Next'
          keyboardType='email-address'
        />
          <TextInput placeholder='Number'
          placeholderColor='white'
          style={styles.input}
          underlineColorAndroid='white'
          returnKeyLabel='Next'
          keyboardType='numeric'
          />
          <TextInput placeholder='Password'
          placeholderColor='white'
          style={styles.input}
          underlineColorAndroid='white'
          returnKeyLabel='Next'
          secureTextEntry
          />
          <TextInput placeholder='Confirm Password'
          placeholderColor='white'
          style={styles.input}
          underlineColorAndroid='white'
          returnKeyLabel='Next'
          secureTextEntry
          />
          <TouchableOpacity style={styles.button}><Text style={styles.btntxt}>Sign Up</Text></TouchableOpacity>
          </View>
          </KeyboardAvoidingView>

        );
    }
    
    }
    const styles=StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'rgb(255,87,51)',
            padding:10
        },
        logocontainer:{
            marginTop:40,
            alignItems:'center',
            flexGrow:1,

        },
        title:{
            fontSize:36,
            fontWeight:'bold',
            color:'white'
        },
        logo:{
            height:150,
            width:150
        }
        ,
        formcontainer:{
            marginBottom:40
        },
        input:{
             marginBottom:30,
             height:40,
             color:'black',
             fontSize:22,
             paddingLeft:10
         },
         button:{
            backgroundColor:'rgba(255,255,255,0.8)',
            margin:10,
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            height:60,
            borderRadius:40,
        },
        btntxt:{
            textAlign:'center',
            fontSize:26,
            fontWeight:'bold',
            padding:10
        }
    }
        );