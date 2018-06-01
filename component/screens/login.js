import React from 'react';
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
export default class Login extends React.Component{
   constructor(){
       super();
   } 
  render(){
      return(
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <View style={styles.logogcontainer}>
            <Image source={require('../../img/logo1.jpg')} style={{width:150,height:150}}/>
            <Text style={styles.title} >We will Change the world</Text>
            
          </View>
          <View style={styles.formcontainer}>
          <TextInput placeholder='username or email' 
          placeholderColor='rgba(255,255,255,1)'
          returnKeyLabel='Next'
          keyboardType='email-address'
          style={styles.input}/>
          <TextInput placeholder='Password' 
           placeholderColor='rgba(255,255,255,1)'
           secureTextEntry
           returnKeyLabel='Go'
           style={styles.input}/>
           <TouchableOpacity style={styles.button}><Text style={styles.btntxt}>Login</Text></TouchableOpacity>
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
    logogcontainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'center'
    },
    logo:{
        fontSize:36,
        fontWeight:'700',
        color:'white',
        
    },
    title:{
        fontSize:36,
        fontWeight:'bold',
        color:'white'
    },
    input:{
       //backgroundColor:'rgba(255,255,255,0.8)',
        marginBottom:20,
        height:50,
        color:'black',
        fontSize:22,
        paddingLeft:10
    },
    formcontainer:{
       // flex:1,
        //flexDirection:'column',
        marginBottom:40
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