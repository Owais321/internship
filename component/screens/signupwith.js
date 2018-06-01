import React from 'react';
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
export default class Signupwith extends React.Component{
   constructor(){
       super();
   } 
  render(){
      return(
    //       <View behavior='padding' style={styles.container}>
    //       <View style={styles.logocontainer}>
    //       <Image style={styles.logo} source={require('../../img/logo1.jpg')}/>
    //       <Text style={styles.title}>We will change the world</Text>  
                     
 
    //       </View>
    //       <View style={styles.formcontainer}>
    //       <Text style={styles.signupwith}>Signup With</Text>
    //       <TouchableOpacity style={{
    //          paddingTop:10,
    //          height:70,
    //        backgroundColor:'#3b5998',
    //         margin:10,  
    //         borderWidth:1,
    //         borderColor:'rgba(0,0,0,0.2)',
    //         justifyContent:'center',
    //         borderRadius:40,
          
    //      }}><View style={{flex: 1, flexDirection: 'row',alignContent:'center',justifyContent:'center'}}>
    //       <Image source={require('../../img/facebooklogo.png')} style={{width: 40, height: 40,padding:10}}/>
    //       <Text style={{ height: 50, fontSize:28,padding:5}}>Sign Up With Facebook</Text>
    //   </View></TouchableOpacity>
    //   <TouchableOpacity style={{
    //          paddingTop:10,
    //          height:70,
    //        backgroundColor:'#00aced',
    //         margin:10,  
    //         borderWidth:1,
    //         borderColor:'rgba(0,0,0,0.2)',
    //         justifyContent:'center',
    //         borderRadius:40,
          
    //      }}><View style={{flex: 1, flexDirection: 'row',alignContent:'center',justifyContent:'center'}}>
    //       <Image source={require('../../img/twitterlogo.png')} style={{width: 40, height: 40,}}/>
    //       <Text style={{ height: 50, fontSize:28,padding:5}}>Sign Up With Twitter</Text>
    //   </View></TouchableOpacity>
    //   <TouchableOpacity style={{
    //          paddingTop:10,
    //          height:70,
    //        backgroundColor:'rgb(47,251,251)',
    //         margin:10,  
    //         borderWidth:1,
    //         borderColor:'rgba(0,0,0,0.2)',
    //         justifyContent:'center',
    //         borderRadius:40,
          
    //      }}><View style={{flex: 1, flexDirection: 'row',alignContent:'center',justifyContent:'center',}}>
    //       <Image source={require('../../img/maillogo.png')} style={{width: 40, height: 40,marginTop:4}}/>
    //       <Text style={{height: 50, fontSize:28,padding:5}}>Sign Up Your E-Mail</Text>
    //   </View></TouchableOpacity>
    //       </View>
    //       </View>
        <View></View>
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
            alignItems:'center',
            flexGrow:1,
            justifyContent:'center'
        },
        logo:{
            height:150,
            width:150
        },
        title:{
            fontSize:36,
            fontWeight:'bold',
            color:'white',
            textAlign:'center'
        },
        formcontainer:{
            marginBottom:60
        
        },
        signupwith:{
            textAlign:'center',
            fontSize:34,
            fontWeight:'bold',
            color:'white'
        },
        btncontainer:{
            flex:1,
            flexDirection:'row',
    
        }
    }
        );
        