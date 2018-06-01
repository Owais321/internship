import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {StackNavigator} from 'react-navigation';
export default class Splash extends React.Component{
      render(){
        const {navigate}=this.props.navigation
        return(
        <View style={styles.container}>
        <TouchableOpacity style={{backgroundColor:'blue', height:40,width:100,marginTop:80}} onPress={()=>navigate('Loginscreen')}><Text>Enter Text</Text></TouchableOpacity>
        </View>
      );
      }
    }
    const styles=StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#5DBCD2',
            alignItems:'center',
    //        justifyContent:'center'
    justifyContent:'center'
        }});