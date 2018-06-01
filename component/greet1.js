import React from 'react';
import {StyleSheet,Text, View ,Button,TouchableOpacity} from 'react-native';
export default class Greet1 extends React.Component {
    
    render() {
        function test(){
                alert('Button pressed');
        }
        function test1(){
            alert('Button pressed');
    }
        return (
            <View style={mystyles.container}>
                <TouchableOpacity onPress={test}><Text style={mystyles.txt}>This is new file</Text></TouchableOpacity>
                <Button onPress={test1} title='Button'/>
                
            </View>
        );
    }
}
const mystyles=StyleSheet.create({
    container:{
        backgroundColor:'#efefef',
    },
    txt:{
        fontSize:22,
        color:'powderblue',
        fontWeight:'bold'  
    }
});