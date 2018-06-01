import React from 'react';
import {StyleSheet,View,Text,Image,TextInput,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
export default class Loginscreen extends React.Component{
   constructor(){
       super();
   } 
  render(){
   
    return(
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
    <View style={styles.header}>
    <Image style={styles.image}
    
  source={ require('../../img/logo2.png')}/> 
  
    <Text style={styles.heading}>Conexicon</Text>
    </View>
    <TextInput placeholder='Email' 
          placeholderTextColor='rgba(255,255,255,1)'
          returnKeyLabel='Next'
          keyboardType='email-address'
          underlineColorAndroid='white'
          style={styles.input}/>
          <TextInput placeholder='Mot de passe' 
           placeholderTextColor='white'
           secureTextEntry
           returnKeyLabel='Go'
           underlineColorAndroid='white'
           style={styles.input}/>
             <TouchableOpacity style={styles.button}><Text style={styles.btntxt}
             >ME CONNECTER</Text></TouchableOpacity>
            <View style={{alignItems:'center'}}><Text style={{color:'white', marginTop:30}} >Mot de passe oublie?</Text></View>
            <Text style={{marginTop:'7%', textAlign:'center' ,color:'white' , fontSize:18}}> ──────────────  oz  ──────────────</Text>
            <TouchableOpacity style={{
             marginTop:30,   
             paddingTop:10,
            backgroundColor:'#3b5998',
            margin:10,  
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            justifyContent:'center',
            alignItems:'center',
            justifyContent:'center',
            height:60,
            borderRadius:40,
            
         }}>
         
         <View style={{flex: 1, flexDirection: 'row',alignContent:'center',justifyContent:'center',margin:10,
         alignItems:'center',
         justifyContent:'center',
         height:40,
         marginBottom:20
         }}>
          <Image source={require('../../img/facebooklogo.png')} style={{width: 30, height: 30,padding:10 }}/>
          <Text style={{ height: 30, fontSize:18,padding:5,marginLeft:'3%',color:'white'}}>FACEBOOK</Text>
      </View></TouchableOpacity>
    <View style={{marginBottom:40}}><Text>Retour</Text></View>
    </KeyboardAvoidingView>
    )
}
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#5DBCD2',
        //alignItems:'center',
//        justifyContent:'center'
justifyContent:'center'
},
    image:{
        marginTop:'20%',
        height:100,
        width:100
    },
    heading:{
        fontSize:18,
        color:'white'   
    },
    input:{
         marginBottom:10,
         height:50,
         color:'white',
         fontSize:14,
         paddingLeft:10
     },
     header:{
         alignItems:'center'
     },
     button:{
        marginTop:'4%',
        backgroundColor:'rgba(255,255,255,0.5)',
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
        fontSize:16,
        fontWeight:'bold',
        padding:10,
        color:'white'
    }
});
